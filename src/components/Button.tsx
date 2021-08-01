import React from 'react';
import {
    Text, 
    StyleSheet, 
    TouchableOpacity, TouchableOpacityProps,
} from 'react-native';

interface IButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest } : IButtonProps) {
	return(
		<TouchableOpacity 
			style={styles.addButton}
			activeOpacity={.85}
            {...rest}
		>
			<Text style={styles.addButton__text}>{title}</Text>
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