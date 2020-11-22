import React from 'react'
import { StyleSheet, View } from 'react-native'

function RectangleIndicator() {
    return (
        <View style={styles.recInd}></View>
    )
}

const styles = StyleSheet.create({
    recInd:{
        backgroundColor:"blue",
        height:10,
        width:30,
        borderRadius:5,
        marginRight:2
      },
})

export default RectangleIndicator