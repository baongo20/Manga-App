import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export const MainScreen = () => {
    return(
        <View style={styles.container}>
            <View>
                <Text>Manga</Text>
                <Pressable>
                    <Text>Login</Text>
                </Pressable>
                <Pressable>
                    <Text>Sign up</Text>
                </Pressable>
            </View>
        </View>
    );
};