import React from 'react';
import {View, StyleSheet} from 'react-native'

const RoundIndicator = () => {
    return (
        <View style={styles.rndInd}></View>
    );
}

const styles = StyleSheet.create({
    rndInd:{
        backgroundColor:"#4287f5",
        marginRight: 2,
        height:10,
        width:10,
        borderRadius:5
      },
})
export default RoundIndicator;