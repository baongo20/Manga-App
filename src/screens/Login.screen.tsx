import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from "react-native";
import { FacebookIcon, GoogleIcon, TwitterIcon } from "../components/Icons";
import { useNavigation } from "@react-navigation/native";
import { theme } from "./tabs/theme";
import { enableScreens } from "react-native-screens";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from "../UserContext";

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

export const LoginScreen = () => {
    const navigation = useNavigation();
    const [_email, setEmail] = useState('');
    const [_password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    // async function LoginUser() {
    //     const db = getDB();
    //     if(!email || !password){
    //         Alert.alert("Please enter both email and password.");
    //         return;
    //     }
    //     db.transaction(tx => {
    //         tx.executeSql(
    //             "SELECT * FROM Users WHERE Email = ? and Password = ?",
    //             [email, password],
    //             (_, { rows }) => {
    //                 if (rows.length > 0) {
    //                     Alert.alert("Login Successful!");
    //                     navigation.navigate('Home');
    //                 } else {
    //                     Alert.alert("Invalid username or password");
    //                 }
    //             },
    //             (_, error) => {
    //                 console.log('Login error:', error);
    //                 return;
    //             }
    //         )
    //     })
    // };

    const login = async () => {
        try {
            const savedUser = await AsyncStorage.getItem(_email);
            if(savedUser){
                const currentUser = JSON.parse(savedUser);
                setUser(currentUser);
                navigation.navigate('Home');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={{ color: 'red', fontSize: 35, fontFamily: theme.fontFamilyBold }}>Login</Text>
                <View style={{ marginTop: 20 }}>
                    <View>
                        <TextInput placeholder="Email Address" style={styles.textInput} 
                        keyboardType="email-address" onChangeText={setEmail} value={_email}/>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput placeholder="Password" style={styles.textInput}
                        onChangeText={setPassword} value={_password} secureTextEntry={true}/>
                        <Text style={{ paddingHorizontal: 20, fontSize: 12, marginTop: 5 }}>Forget Password?</Text>
                    </View>
                </View>
                <Pressable style={styles.button} onPress={login}>
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 20 }}>Login</Text>
                </Pressable>
                <View>
                    <Text style={{ textAlign: 'center' }}>Or Login with</Text>
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