import React from 'react';
import {
    Text, 
    StyleSheet, 
    TouchableOpacity, TouchableOpacityProps
} from 'react-native';

interface ISkillCardProps extends TouchableOpacityProps {
    skillName: string;
}

export function SkillCard({ skillName, ...rest }: ISkillCardProps) {
	return(
		<TouchableOpacity style={styles.skill} {...rest}>
			<Text style={styles.skill__text}>
				{skillName}
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