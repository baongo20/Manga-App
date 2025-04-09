import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1D8E82',
        padding: 10,
        borderRadius: 10
    }
});

export const MangaGenreItem = ({ genreObj }) => {

    return (
        <Pressable style={styles.container}>
            <Text style={{color: 'white', fontWeight: '600'}}>{`${genreObj.name} (${genreObj.count})`}</Text>
        </Pressable>
    );
};