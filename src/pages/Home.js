import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    TouchableOpacity
} from 'react-native';

/* Components */
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export default function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    function handleAddNewSkill() {
        if (newSkill == '') // shouldn't happen when newSkill is empty
            return

        setMySkills(oldState => [...oldState, newSkill]); // Same as setMySkills([...mySkills, newSkill]);
        setNewSkill('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>welcome, guipo</Text>

            <TextInput 
                style={styles.input}
                placeholder="Enter your new skill"
                placeholderTextColor="#555"
                onChangeText={(e) => setNewSkill(e)}
                value={newSkill}
            />

            <Button 
                onPress={handleAddNewSkill}
            />

            <View>
                <Text style={[styles.title, styles.skills__title]}>
                    my skills
                </Text>

                {
                    mySkills.map(skill => (
                        <SkillCard key={skill} skill={skill} />
                    ))
                }
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

    skills__title: {
        marginTop: 50,
        marginBottom: 20
    },
})
