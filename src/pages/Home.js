import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'


export function Home() {
    const [newSkill, setNewSkill] = useState()
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Welcome to my app
                </Text>
                <TextInput style={styles.input}
                    placeholder='New Skill'
                    placeholderTextColor='#555' />
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={.7}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
                <Text style={[styles.title, { marginTop: 50 }]}>My Skills</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: 15,
        marginTop: 30,
        borderRadius: 7
    },
    button: {
        backgroundColor: '#a370f7',
        padding: 20,
        borderRadius: 7,
        marginTop: 25,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 17,
        color: '#fff',
        fontWeight: 'bold'
    }

})