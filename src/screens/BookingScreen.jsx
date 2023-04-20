import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IndexPath, Layout, Select, SelectItem, Input, Button, Modal, Card  } from '@ui-kitten/components';

const useInputState = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

const BookingScreen = ({navigation,  route }) => {

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [visible, setVisible] = React.useState(false);
  const primaryInputState = useInputState();

  return (
    <View style={styles.container}>
      <Text>Driver's Name: <Text style={styles.bold}>{route.params.details.name}</Text></Text>
      <Text style={styles.text}>Choose preferred pickup time:</Text>
      <Select
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <SelectItem title='7 PM' />
        <SelectItem title='8 PM' />
        <SelectItem title='9 PM' />
        <SelectItem title='10 PM' />
        <SelectItem title='11 PM' />
        <SelectItem title='12 AM' />
        <SelectItem title='1 AM' />
      </Select>
      <Text style={styles.text}>Enter your phone number: </Text>
      <Input
        style={styles.input}
        status='primary'
        placeholder="0788 123 123"
        keyboardType="phone-pad"
        {...primaryInputState}
      />
      <Text style={styles.text}>Total amount: <Text style={styles.bold}>10,000 RWF</Text></Text>

      <Modal visible={visible}>
        <Card disabled={true}>
          <Text style={styles.text}>Thank you for booking a safe ride!</Text>
          <Text style={[styles.text, styles.bold]}>Our driver will contact you shortly</Text>
          <Button onPress={() => {setVisible(false); navigation.navigate('Home')}}>
            DISMISS
          </Button>
        </Card>
      </Modal>
      <Button onPress={() => setVisible(true)}>Confirm</Button>
    </View>
  )
}

export default BookingScreen

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 30,
    flex: 1
  },
  input: {
    margin: 2,
    marginBottom: 50
  },
  text: {
    marginVertical: 10
  },
  bold: {
    fontWeight: "800", 
    fontSize: 16
  }
})