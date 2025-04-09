import React, { useState } from "react";
import { StyleSheet, View, Text, ImageBackground, Dimensions, Pressable, SafeAreaView } from "react-native";
import { MangaLatestList } from "../../components/MangaLatestList";
import { MangaPopularList } from "../../components/MangaPopularList";
import { MangaRankList } from "../../components/MangaRankList";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    background: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
        width: width,
        height: height,
    },
    overlay: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 160,
        flex: 1,
    },
    textNav: {
        fontSize: 18,
        fontWeight: '500'
    },
});

export const HomeScreen = () => {
    const [pressed, setPressed] = useState(1);

    const handlePress = (id) => {
        setPressed(id); // Update the state with the id of the pressed text
    };

    return (
        <ImageBackground
            source={{ uri: 'https://w.wallhaven.cc/full/d6/wallhaven-d69eom.jpg' }}
            style={styles.background}
            resizeMode="cover">
            <View style={styles.overlay}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: 20 }}>
                    <Pressable onPress={() => handlePress(1)}>
                        <Text style={[styles.textNav, { color: pressed === 1 ? 'red' : 'grey' }, { fontWeight: pressed === 1 ? 'bold' : '500' }]}>Latest Updates</Text>
                    </Pressable>
                    <Pressable onPress={() => handlePress(2)}>
                        <Text style={[styles.textNav, { color: pressed === 2 ? 'red' : 'grey' }, { fontWeight: pressed === 2 ? 'bold' : '500' }]}>Popular</Text>
                    </Pressable>
                    <Pressable onPress={() => handlePress(3)}>
                        <Text style={[styles.textNav, { color: pressed === 3 ? 'red' : 'grey' }, { fontWeight: pressed === 3 ? 'bold' : '500' }]}>Ranking</Text>
                    </Pressable>
                </View>
                {
                    pressed === 1 ? (<MangaLatestList />) : pressed === 2 ? (<MangaPopularList />) :
                        (<MangaRankList />)
                }
            </View>
        </ImageBackground>
    );
};