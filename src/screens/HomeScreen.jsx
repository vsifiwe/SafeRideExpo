import { StyleSheet, Text, View, Dimensions, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeCard } from '../components'
import MapView from 'react-native-maps';
import { Button } from '@ui-kitten/components';

var device_width = Dimensions.get('window').width - 40;

const data = [{
    "name": "Mungwarakarama Seleman",
    "image": "https://res.cloudinary.com/dqezkzxkq/image/upload/v1680961218/1_juglpa.png",
    "quality": "Punctual, courteous"
},
{
    "name": "Elvis Niyonkuru",
    "image": "https://res.cloudinary.com/dqezkzxkq/image/upload/v1680961218/Elvis_gqndyo.png",
    "quality": "Experienced driver (many driving categories)"
},
{
    "name": "Rwabilinda Dylan",
    "image": "https://res.cloudinary.com/dqezkzxkq/image/upload/v1680961218/Dylan_trxtdv.png",
    "quality": "Polyglot (French, English, Swahili, Kinyarwanda)"
}]
const HomeScreen = ({ navigation }) => {

    const [location, setLocation] = useState({
        latitude: -1.970579,
        longitude: 30.104429,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    const [text, onChangeText] = useState('');
    return (
        <View style={styles.container}>
            {/* {
                data.map((d, i) => {
                    return (
                        <SafeCard data={d} action={() => navigation.navigate("Booking", { 'details': d })} />
                    )
                })
            } */}
            <MapView style={styles.map} region={location} />
            <KeyboardAvoidingView style={styles.textBox} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TextInput
                    onChangeText={onChangeText}
                    value={text}
                    style={styles.textInput}
                    placeholder='Where are you going?'
                />
                {/* <Text>Hello, World!</Text> */}
                <Button style={styles.button} onPress={() => navigation.navigate("Booking", { 'destination': text })}>Done</Button>
            </KeyboardAvoidingView>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
        // marginHorizontal: 15,
        // marginTop: 30
    },
    map: {
        width: '100%',
        height: '100%',
    },
    textBox: {
        height: 150,
        width: device_width,
        position: 'absolute',
        bottom: 10,
        backgroundColor: "#ffffff",
        marginLeft: 20,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#a8a8a8"
    },
    textInput: {
        borderWidth: 1,
        height: 40,
        margin: 18,
        padding: 10,
        borderRadius: 7
    }, 
    button: {
        marginHorizontal: 36,
        borderRadius: 7
    }
})