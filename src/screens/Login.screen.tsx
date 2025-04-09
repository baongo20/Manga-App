import React from "react";
import { StyleSheet, View, Text, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from "react-native";
import { FacebookIcon, GoogleIcon, TwitterIcon } from "../components/Icons";
import { useNavigation } from "@react-navigation/native";
import { theme } from "./tabs/theme";

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

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={{ color: 'red', fontSize: 35, fontFamily: theme.fontFamilyBold }}>Login</Text>
                <View style={{ marginTop: 20 }}>
                    <View>
                        <TextInput placeholder="Email Address" style={styles.textInput} keyboardType="default"/>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput placeholder="Password" style={styles.textInput} keyboardType="default"/>
                        <Text style={{ paddingHorizontal: 20, fontSize: 12 }}>Forget Password?</Text>
                    </View>
                </View>
                <Pressable style={styles.button}
                    onPress={() => navigation.navigate('Home')}>
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