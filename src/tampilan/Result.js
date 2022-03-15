import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

var lokasiKeberangkatans = ['Lampung', 'Lampung', 'Lampung', 'Lampung'];
var lokasiTujuans = ['Kalimantan', 'Medan', 'Jakarta', 'Yogyakarta'];
var waktus = ['15 Maret 2022', '23 Maret 2022', '11 April 2022', '11 Desember 2022'];
var maskapai = ['Batik Air', 'Garuda', 'Emirates Air', 'Japan Air'];

export default function Cari() {
    const route = useRoute();

    if ((route.params.berangkat == lokasiKeberangkatans[0]) && (route.params.tujuan == lokasiTujuans[0]) && (route.params.tanggal == waktus[0])) {
        return (
            <View style={Style.box}>
                <Text>Maskapai  :
                    <Text style={Style.maskapai}>  {maskapai[0]}</Text>
                </Text>
                <Text>Jadwal      :
                    <Text style={Style.tanggal}>  {waktus[0]}</Text>
                </Text>
                <Text style={Style.lokasi}>{route.params.berangkat}     --->     {lokasiTujuans[0]}</Text>
            </View>
        )
    }

    else if ((route.params.berangkat == lokasiKeberangkatans[1]) && (route.params.tujuan == lokasiTujuans[1]) && (route.params.tanggal == waktus[1])) {
        return (
            <View style={Style.box}>
                <Text>Maskapai  :
                    <Text style={Style.maskapai}>  {maskapai[1]}</Text>
                </Text>
                <Text>Jadwal      :
                    <Text style={Style.tanggal}>  {waktus[1]}</Text>
                </Text>
                <Text style={Style.lokasi}>{route.params.berangkat}                --->             {lokasiTujuans[1]}</Text>

            </View>
        )
    }

    else if ((route.params.berangkat == lokasiKeberangkatans[2]) && (route.params.tujuan == lokasiTujuans[2]) && (route.params.tanggal == waktus[2])) {
        return (
            <View style={Style.box}>
                <Text>Maskapai  :
                    <Text style={Style.maskapai}>  {maskapai[2]}</Text>
                </Text>
                <Text>Jadwal      :
                    <Text style={Style.tanggal}>  {waktus[2]}</Text>
                </Text>
                <Text style={Style.lokasi}>{route.params.berangkat}                --->             {lokasiTujuans[2]}</Text>
            </View>
        )
    }

    else if ((route.params.berangkat == lokasiKeberangkatans[3]) && (route.params.tujuan == lokasiTujuans[3]) && (route.params.tanggal == waktus[3])) {
        return (
            <View style={Style.box}>
                <Text>Maskapai  :
                    <Text style={Style.maskapai}>  {maskapai[3]}</Text>
                </Text>
                <Text>Jadwal      :
                    <Text style={Style.tanggal}>  {waktus[3]}</Text>
                </Text>
                <Text style={Style.lokasi}>{route.params.berangkat}                --->             {lokasiTujuans[3]}</Text>
            </View>
        )
    }

    else {
        return (
            <View style={Style.noOption}>
                <View style={Style.box}>
                    <Text style={Style.info}>Berikut penerbangan yang tersedia</Text>
                </View>
                <View style={Style.box}>
                    <Text>Maskapai  :
                        <Text style={Style.maskapai}>  {maskapai[0]} </Text>
                    </Text>
                    <Text>Jadwal      :
                        <Text style={Style.tanggal}>  {waktus[0]}</Text>
                    </Text>
                    <Text style={Style.lokasi}>{lokasiKeberangkatans[0]}                --->             {lokasiTujuans[0]}</Text>
                </View>
                <View style={Style.box}>
                    <Text>Maskapai  :
                        <Text style={Style.maskapai}>  {maskapai[1]}</Text>
                    </Text>
                    <Text>Jadwal      :
                        <Text style={Style.tanggal}>  {waktus[1]}</Text>
                    </Text>
                    <Text style={Style.lokasi}>{lokasiKeberangkatans[1]}                --->             {lokasiTujuans[1]}</Text>
                </View>
                <View style={Style.box}>
                    <Text>Maskapai  :
                        <Text style={Style.maskapai}>  {maskapai[2]}</Text>
                    </Text>
                    <Text>Jadwal      :
                        <Text style={Style.tanggal}>  {waktus[2]}</Text>
                    </Text>
                    <Text style={Style.lokasi}>{lokasiKeberangkatans[2]}                --->             {lokasiTujuans[2]}</Text>
                </View>
                <View style={Style.box}>
                    <Text>Maskapai  :
                        <Text style={Style.maskapai}>  {maskapai[3]}</Text>
                    </Text>
                    <Text>Jadwal      :
                        <Text style={Style.tanggal}>  {waktus[3]}</Text>
                    </Text>
                    <Text style={Style.lokasi}>{lokasiKeberangkatans[3]}                --->             {lokasiTujuans[3]}</Text>

                </View>
            </View>
        )
    }
}

const Style = StyleSheet.create({
    box: {
        backgroundColor: 'lightgreen',
        padding: 15,
        width: '90%',
        borderRadius: 9,
        elevation: 100,
        position: 'relative',
        textAlign: 'center',
        margin: 10,
        justifyContent: 'center',
        left: 7,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },

    lokasi: {
        fontWeight: 'bold',
        fontSize: 16,
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        
    },

    tanggal: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },

    maskapai: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },

    additional: {
        paddingTop: 10,
        textAlign: 'center',
    },

    pembatas: {
        textAlign: 'center',
    },
    info:{
        textAlign: 'center',
        fontSize: 20,
    }
})