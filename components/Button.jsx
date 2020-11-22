import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


function Button ({text, textStyle, buttonStyle}) {
    const { btn, txt } = styles
	return (
		<TouchableOpacity style={[btn, buttonStyle]}>
			<Text style={[txt, textStyle]}>{text}</Text>
		</TouchableOpacity>
	)
};

const styles = StyleSheet.create({

	btn: {
		paddingVertical: 10,
		paddingHorizontal: 25,
		alignItems: 'center',
	},

	txt: {
		fontWeight: 'bold',
		textAlign: 'center',
	}
})

export default Button