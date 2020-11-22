import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { lorem } from '../utils';
import Button from '../components/Button';
import RectangleIndicator from '../components/recIndicator';
import RoundIndicator from '../components/rndIndicator';


export default function PaymentSuccessful() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>PAYMENT SUCCESSFUL</Text>

        <Text style={styles.details}> {lorem} </Text>
      </View>
      <Image source={require('../assets/purchase.png')} style={styles.image} />

      <Button
        text="Get Started"
        buttonStyle={styles.btn}
        textStyle={styles.btnText}
      />
      <View style={styles.footer}>
          <Text>Previous</Text>
        <View style={styles.indicators}>
          <RoundIndicator />
          <RoundIndicator />
          <RectangleIndicator />
        </View>
          <Text></Text>      
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 50,
    justifyContent: "space-around"

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  details: {
    marginTop: 20,
    color: "grey"
  },

  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  btn: {
    borderRadius: 50,
    backgroundColor: 'blue',
    height: 50,
    width: 200,
    alignSelf: "center",
    justifyContent: "center"
  },

  btnText: {
    color: "white",
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  footer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center"
  },
  indicators: {
    flexDirection: "row",
    alignItems: "center",
  },

});