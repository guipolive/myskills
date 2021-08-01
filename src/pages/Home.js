import React from 'react';
import { View, 
    Text, 
    StyleSheet, 
    TextInput,
    TouchableOpacity
} from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>welcome, guipo</Text>

            <TextInput 
                style={styles.input}
                placeholder="Enter your new skill"
                placeholderTextColor="#555"
            />

            <TouchableOpacity 
                style={styles.addButton}
                activeOpacity={.85}
            >
                <Text style={styles.addButton__text}>Add</Text>
            </TouchableOpacity>

            <View>
                <Text style={[styles.title, styles.skills__title]}>
                    my skills
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 30,
    },

    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },

    input: {
        backgroundColor: '#1F1E25',
        color: '#fff',
        fontSize: 18,
        padding: 15,
        marginTop: 30,
        borderRadius: 7
    },

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

    skills__title: {
        marginTop: 50
    }
})
