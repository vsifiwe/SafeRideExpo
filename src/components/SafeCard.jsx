import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { Button, Card, Layout, Text } from '@ui-kitten/components';

const Footer = ({data, action}) => (
  <View style={[styles.footerContainer]}>
    {/* <Button
      style={styles.footerControl}
      size='small'
      status='basic'>
      CANCEL
    </Button> */}
    <Button
      style={styles.footerControl}
      size='small' onPress={action}>
      Book Now
    </Button>
  </View>
);

const SafeCard = ({data, action}) => {
  return (
    <>
      <Card style={styles.card} footer={(props) => <Footer {...props} data={data} action={action} />}>
        <View style={styles.headerContainer}>
          <Image
            style={styles.image}
            source={{
              uri: data.image,
            }}
          />
          <View>
            <Text>Name:    <Text style={styles.text}>{data.name}</Text></Text>
            <Text>Quality:  <Text style={styles.text}>{data.quality}</Text></Text>
            <Text>Status:   <Text status='success'>Available!</Text></Text>
          </View>
        </View>
      </Card>
    </>
  )
}

export default SafeCard

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    margin: 2,
    height: 175,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 16 
  },
  footerControl: {
    marginHorizontal: 2,
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 15
  },
  headerContainer: {
    flexDirection: 'row'
  }, 
  text:{
    fontWeight: 'bold'
  }
})