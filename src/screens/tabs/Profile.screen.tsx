import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, Image, Pressable, Dimensions, Alert } from "react-native";
import { UserContext } from "../../UserContext";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    userImage: {
        width: 80,
        height: 80,
    },
});

const width = Dimensions.get('window').width;

export const ProfileScreen = ({ email }) => {
    const { user } = useContext(UserContext);

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/imgs/profile_11121549.png')} style={styles.userImage} />
            <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 20 }}>Email: {user.email}</Text>
            <View style={{flexDirection: 'row', 
                width: width, justifyContent: 'space-evenly', marginTop: 10}}>
                <Pressable style={{
                    backgroundColor: 'blue', padding: 15,
                    alignItems: 'center', justifyContent: 'center', borderRadius: 10
                }} onPress={() => Alert.alert('Youre signing out!')}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>Logout</Text>
                </Pressable>
                <Pressable style={{
                    backgroundColor: 'red', padding: 15,
                    alignItems: 'center', justifyContent: 'center', borderRadius: 10
                }} onPress={() => Alert.alert('Account deleted!')}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>Delete Account</Text>
                </Pressable>
            </View>
        </View>
    );
};