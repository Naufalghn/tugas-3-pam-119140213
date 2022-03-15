import React from 'react';
import { View, TextInput, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native';
import {useState} from "react";

function HomeScreen({ navigation }) {
    const [berangkat,setBerangkat] = useState('');
    const [tujuan,setTujuan] = useState('');
    const [tanggal,setTanggal] = useState('');

    const register = () =>{
        navigation.navigate('Result',{
            berangkat: berangkat,
            tujuan: tujuan,
            tanggal, tanggal,
        })
    }

    return (


        <View style={Style.Overall}>
            <Text style={Style.Header}>NeroFlight.id</Text>
            <Text style={Style.Label}>Lokasi Keberangkatan</Text>
            <View style={Style.InputBox}>
                <TextInput style={Style.TextInput}
                    placeholder="Masukkan Lokasi Keberangkatan"
                    onChangeText={(text)=>setBerangkat(text)}
                />
            </View>

            <Text style={Style.Label}>Lokasi Tujuan</Text>
            <View style={Style.InputBox}>
                <TextInput style={Style.TextInput}
                    placeholder="Masukkan Lokasi Tujuan"
                    onChangeText={(text)=>setTujuan(text)}
                />
            </View>

            <Text style={Style.Label}>Tanggal Keberangakatan</Text>
            <View style={Style.InputBox}>
                <TextInput style={Style.TextInput}
                    placeholder="Masukkan Tanggal Keberangakatan"
                    onChangeText={(text)=>setTanggal(text)}
                />
            </View>
            
            <View style={Style.Container}>
                <TouchableOpacity style={Style.Button} onPress={register}>
                    <Text style={Style.ButtonText}>Cari</Text>
                </TouchableOpacity>
            </View>

            <View style={Style.Container}>
                <Text style={Style.copyRight}>Copyright by @Muhammad Naufal Ghani 119140213</Text>
            </View>
        </View>
    );
}

const Style = StyleSheet.create({
    Overall: {
        backgroundColor: 'lightgreen',
        borderRadius: 5,
        padding: 20,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        width: '95%',
        position: 'absolute',
    },

    Header:{
        fontSize: 36,
        color: '#000',
        fontWeight: '800',
        textAlign: 'center',
        paddingLeft: 10,
        paddingBottom : 20,
    },

    Label: {
        fontSize: 20,
        color: '#000',
        fontWeight: '700',
        textAlign: 'left',
        paddingLeft: 10,
    },

    InputBox: {   
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 60,
        borderRadius: 5,
        margin: 10,
    },

    TextInput: {
        flex: 1,
        paddingLeft: 5,
    },

    Input: {
        width: '90%',
        height: '5%',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        borderRadius: 9,
        marginBottom: 10,
        position: 'relative',
        fontSize: 12,
    },

    tujuan: {
        color: '#ffffff',
        fontSize: 20,
        paddingBottom: 12,
        paddingTop: 20,
    },

    tanggal: {
        color: '#ffffff',
        fontSize: 20,
        paddingBottom: 12,
        paddingTop: 20,
    },

    input: {
        width: '90%',
        height: '5%',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        borderRadius: 9,
        marginBottom: 10,
        position: 'relative',
        fontSize: 12,
    },

    Container: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    copyRight: {
		zIndex: 1,
		textAlign: 'center',
		color: '#000'
	},
    ButtonText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 20,
        fontWeight: '700',
    },
    Button: {
        backgroundColor: 'orange',
        borderRadius: 5,
        padding: 10,
        width: '70%',
    },
});

export default HomeScreen