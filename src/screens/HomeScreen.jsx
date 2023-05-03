import { StyleSheet, Text, View, Dimensions, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { Button } from '@ui-kitten/components';
import * as Location from 'expo-location';

var device_width = Dimensions.get('window').width - 40;

const HomeScreen = ({ navigation }) => {
    // "latitude": -1.9355926, "longitude": 30.1582863
    const [locations, setLocations] = useState([{
        latitude: -1.9355926,
        longitude: 30.1582863,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }])
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState({
        latitude: -1.970579,
        longitude: 30.104429,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let loc = await Location.getCurrentPositionAsync({});
            let allLocations = locations;
            let coords = loc.coords;
            coords.latitudeDelta = 0.0922;
            coords.longitudeDelta = 0.0421;
            setLocation(loc.coords)
            allLocations.push(loc.coords)
            setLocations(allLocations)
            setLoading(false);
        })();
    }, []);
    const [text, onChangeText] = useState('');
    return (
        <View style={styles.container}>
            {
                loading ?
                    <Text>Loading</Text> :
                    <>
                        <MapView style={styles.map} region={location}>
                            {
                                locations.map((lo, index) => (
                                    <Marker key={index} coordinate={{latitude: lo.latitude, longitude: lo.longitude}} title='Here'/>
                                ))
                            }
                        </MapView>


                        <KeyboardAvoidingView style={styles.textBox} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                            <TextInput
                                onChangeText={onChangeText}
                                value={text}
                                style={styles.textInput}
                                placeholder='Where are you going?'
                            />
                            {/* <Text>Hello, World!</Text> */}
                            <Button style={styles.button} onPress={() => navigation.navigate("Driver", { 'destination': text, 'location': location })}>Done</Button>
                        </KeyboardAvoidingView>
                    </>
            }


        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
        
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