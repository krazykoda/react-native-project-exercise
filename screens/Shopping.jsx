import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { lorem } from '../utils';
import Button from '../components/Button';
import RectangleIndicator from '../components/recIndicator';
import RoundIndicator from '../components/rndIndicator';


export default function OnlineShopping() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>ONLINE SHOPPING</Text>

        <Text style={styles.details}> { lorem } </Text>
      </View>
      <Image source={require('../assets/shopping.png')} style={styles.image} />

      <Button
        text="Next"
        buttonStyle={styles.btn}
        textStyle={styles.btnText}
      />
      <View style={styles.footer}>
          <Text></Text>
        <View style={styles.indicators}>
          <RectangleIndicator />
          <RoundIndicator />
          <RoundIndicator />
        </View>
          <Text>Skip</Text> 
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 50,
    justifyContent: "space-around",
    
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  details: {
    marginTop: 25,
    color: "grey",
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
//   firInd: {
//     backgroundColor: "blue",
//     height: 10,
//     width: 10,
//     borderRadius: 5
//   },
//   midInd: {
//     backgroundColor: "blue",
//     height: 10,
//     width: 30,
//     borderRadius: 5,
//     marginHorizontal: 2
//   },
//   lastInd: {
//     backgroundColor: "blue",
//     height: 10,
//     width: 10,
//     borderRadius: 5
//   },

});