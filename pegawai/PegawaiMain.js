import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput, Alert, Platform, TouchableOpacity, 
} from 'react-native';

import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PegawaiMain extends Component {
    static navigationOptions = {
        title: 'Data Pegawai PT. ABC', 
    };

    constructor(props) {
        super(props); 
        this.state = {
            textInput_Nama: '', 
            textInput_Gaji: '', 
        }; 
    } 

    // membuat function insert data 
    insertDataPegawai = () => {
        fetch('http://172.16.4.51/my-react-crud/InsertDataPegawai.php', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json', 
            }, 
            body: JSON.stringify({
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
    }; 

    // membuat function untuk membuka layout lihat data 
    lihatDataPegawai = () => {
        this.props.navigation.navigate('PegawaiRead'); 
    }; 

    render() {
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 18, textAlign: 'center', margin: 16}}>
                    {' '} Mengisi Data Pegawai {' '} 
                </Text>
                
                <Input placeholder="Nama Pegawai" 
                    leftIcon={{ type: 'font-awesome', name: 'chevron-right' }} 
                    onChangeText={TextInputValue => 
                        this.setState({textInput_Nama: TextInputValue})} />

                <Input placeholder="Gaji Pegawai" 
                    leftIcon={{ type: 'font-awesome', name: 'chevron-right' }} 
                    onChangeText={TextInputValue => 
                        this.setState({textInput_Gaji: TextInputValue})} />

                <Button onPress={this.insertDataPegawai} 
                    icon={
                        <Icon
                            name='angle-double-right'
                            size={15}
                            color="red"
                        />
                    }
                    title="  Simpan Data Pegawai"
                    type="outline"
                /> 

                <Button onPress={this.lihatDataPegawai} 
                    icon={
                        <Icon
                            name='angle-double-right'
                            size={15}
                            color="red"
                        />
                    }
                    title="  Lihat Data Pegawai"
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