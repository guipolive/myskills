import React from 'react';
import {
    Text, 
    StyleSheet, 
    TouchableOpacity
} from 'react-native';

export function Button({ onPress }) {
	return(
		<TouchableOpacity 
			style={styles.addButton}
			activeOpacity={.85}
			onPress={onPress}
		>
			<Text style={styles.addButton__text}>Add</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 10
    },

    addButton__text: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
})