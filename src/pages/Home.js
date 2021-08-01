import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    FlatList,
} from 'react-native';

/* Components */
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export default function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const [greeting, setGreeting] = useState('');

    function handleAddNewSkill() {
        if (newSkill == '') // shouldn't happen when newSkill is empty
            return

        setMySkills(oldState => [...oldState, newSkill]); // Same as setMySkills([...mySkills, newSkill]);
        setNewSkill('');
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if(currentHour < 12)
            setGreeting('good morning')
        else if(currentHour >= 12 && currentHour < 18)
            setGreeting('good afternoon')
        else
            setGreeting('good night')
    }, [])

    useEffect(() => {}, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>welcome, guipo</Text>
            <Text style={styles.greetings}>{greeting}</Text>

            <TextInput 
                style={styles.input}
                placeholder="Enter your new skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
                value={newSkill}
            />

            <Button 
                onPress={handleAddNewSkill}
            />

            <Text style={[styles.title, styles.skills__title]}>
                my skills
            </Text>

            <FlatList 
                data={mySkills}
                keyExtractor={item => item}
                renderItem={ ({ item }) => (
                    <SkillCard skill={item} />
                )}
                showsVerticalScrollIndicator={false}
            />

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

    greetings: {
        color: '#999',
        marginTop: 10
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
