import React from 'react';
import {
    Text, 
    StyleSheet, 
    TouchableOpacity
} from 'react-native';

export function SkillCard({ skill }) {
	return(
		<TouchableOpacity style={styles.skill}>
			<Text style={styles.skill__text}>
				{skill}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
    skill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        marginBottom: 20
    },

    skill__text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})