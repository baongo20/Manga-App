import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Pressable, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { FacebookIcon, GoogleIcon, TwitterIcon } from "../components/Icons";
import { useNavigation } from "@react-navigation/native";
import { theme } from "./tabs/theme";
import { enableScreens } from "react-native-screens";
import AsyncStorage from '@react-native-async-storage/async-storage';

enableScreens(false);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5E7E8',
    },
    textInput: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    button: {
        backgroundColor: '#000',
        width: 220,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
});

export const RegisterScreen = () => {
    const navigation = useNavigation();
    const [_email, setEmail] = useState('');
    const [_password, setPassword] = useState('');

    // const RegisterUser = async () => {
    //     const db = getDB();

    //     if (!email.trim() || !password.trim()) {
    //         Alert.alert("Please enter both email and password.");
    //         return;
    //     }
    //     db.transaction(tx => {
    //         tx.executeSql(
    //             "INSERT INTO Users (Email, Password) VALUES(?, ?)",
    //             [email, password],
    //             () => {
    //                 Alert.alert("Register Successful!");
    //             },
    //             (_, error) => {
    //                 Alert.alert('Register fail: ' + error);
    //             }
    //         )
    //     })
    // };

    const register = async () => {
        try {
            await AsyncStorage.setItem(_email, JSON.stringify({
                email: _email,
                password: _password
            }));
            Alert.alert('Register successful!');
            navigation.navigate('Login');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={{ color: 'red', fontSize: 35, fontFamily: theme.fontFamilyBold }}>Register</Text>
                <View style={{ marginTop: 20 }}>
                    <View>
                        <TextInput placeholder="Email Address" style={styles.textInput}
                            keyboardType="email-address" onChangeText={setEmail} value={_email} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput placeholder="Password" style={styles.textInput}
                            onChangeText={setPassword} value={_password} secureTextEntry={true} />
                    </View>
                </View>
                <Pressable style={styles.button} onPress={register}>
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 20 }}>Register</Text>
                </Pressable>
                <View>
                    <Text style={{ textAlign: 'center' }}>Or Register with</Text>
                    <View style={{ marginTop: 10, flexDirection: 'row' }}>
                        <View>
                            <TwitterIcon />
                        </View>
                        <View style={{ marginHorizontal: 30 }}>
                            <GoogleIcon />
                        </View>
                        <View>
                            <FacebookIcon />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};