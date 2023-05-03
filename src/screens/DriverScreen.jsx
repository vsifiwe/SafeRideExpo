import { StyleSheet, Text, View } from 'react-native'
import { SafeCard } from '../components'
import React from 'react'

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

const DriverScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            {
                data.map((d, i) => {
                    return (
                        <SafeCard key={i} data={d} action={() => navigation.navigate("Booking", { 'details': d, 'destination': route.params.destination, 'location': route.params.location })} />
                    )
                })
            }
        </View>
    )
}

export default DriverScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
        marginTop: 30
    },
})