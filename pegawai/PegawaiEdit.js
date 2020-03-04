import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput, Alert, Platform, TouchableOpacity, ActivityIndicator, 
} from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import ListView from 'deprecated-react-native-listview';

export default class PegawaiEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput_ID: '', 
            textInput_Nama: '', 
            textInput_Gaji: '', 
        }; 
    }

    static navigationOptions = {
        title: 'Edit Pegawai PT. ABC', 
    }; 

    componentDidMount() {
        // membaca data dari pegawai read 
        this.setState({
            textInput_ID: this.props.navigation.state.params.ID, 
            textInput_Nama: this.props.navigation.state.params.NAMA, 
            textInput_Gaji: this.props.navigation.state.params.GAJI, 
        })
    }

    // memuat function untuk proses mengubah data pegawai 
    updateDataPegawai = () => {
        fetch('http://172.16.4.51/my-react-crud/UpdateDataPegawai.php', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json', 
            }, 
            body: JSON.stringify({
                pegawai_id: this.state.textInput_ID, 
                pegawai_nama: this.state.textInput_Nama, 
                pegawai_gaji: this.state.textInput_Gaji, 
            }), 
        })
            .then(response => response.json()) 
            .then(responseJson => {
                Alert.alert(responseJson); 
            })
            .catch(error => {
                console.error(error);
            }); 
            // redirect kembali ke pegawai main  
            this.props.navigation.navigate('PegawaiMain'); 
    };

    // memuat function untuk proses menghapus data pegawai 
    deleteDataPegawai = () => {
        fetch('http://172.16.4.51/my-react-crud/HapusDataPegawai.php', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json', 
            }, 
            body: JSON.stringify({
                pegawai_id: this.state.textInput_ID,  
            }), 
        })
            .then(response => response.json()) 
            .then(responseJson => {
                Alert.alert(responseJson); 
            })
            .catch(error => {
                console.error(error);
            }); 
            // redirect kembali ke pegawai main  
            this.props.navigation.navigate('PegawaiMain');
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 18, textAlign: 'center', margin: 16}}>
                    {' '} Mengubah Data Pegawai {' '} 
                </Text>
                
                <Input placeholder="Nama Pegawai" 
                    leftIcon={{ type: 'font-awesome', name: 'chevron-right' }} 
                    value={this.state.textInput_Nama} 
                    onChangeText={TextInputValue => 
                        this.setState({textInput_Nama: TextInputValue})} />

                <Input placeholder="Gaji Pegawai" 
                    leftIcon={{ type: 'font-awesome', name: 'chevron-right' }} 
                    value={this.state.textInput_Gaji} 
                    onChangeText={TextInputValue => 
                        this.setState({textInput_Gaji: TextInputValue})} />

                <Button onPress={this.updateDataPegawai} 
                    icon={
                        <Icon
                            name='angle-double-right'
                            size={15}
                            color="red"
                        />
                    }
                    title="  Ubah Data Pegawai"
                    type="outline"
                /> 

                <Button onPress={this.deleteDataPegawai} 
                    icon={
                        <Icon
                            name='angle-double-right'
                            size={15}
                            color="red"
                        />
                    }
                    title="  Hapus Data Pegawai"
                    type="outline"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column', 
        margin: 12,
        padding: 6, 
    }, 
    buttons: {
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: 6, 
    }, 
    teks: {
        color: 'blue', 
        fontSize: 16, 
    }
});