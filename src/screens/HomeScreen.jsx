import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeCard } from '../components'


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
const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            {
                data.map((d, i) => {
                    return (
                        <SafeCard data={d} action={() => navigation.navigate("Booking", {'details': d})}/>
                    )
                })
            }
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 30
    }
})