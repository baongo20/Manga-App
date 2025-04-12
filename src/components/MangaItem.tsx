import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    tinyLogo: {
        height: 220,
        width: 150,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    textStyle: {
        textAlign: 'left',
        fontWeight: '500',
        fontSize: 16,
        fontStyle: 'normal'
    },
});

export const MangaItem = ({ mangaObj }) => {
    const navigation = useNavigation();

    return (
        <View>
            <Pressable onPress={() => navigation.navigate('Detail', {manga: mangaObj})}>
                <Image source={{ uri: mangaObj.images.jpg.image_url }} style={styles.tinyLogo}/>
            </Pressable>
            <View>
                <Text adjustsFontSizeToFit style={styles.textStyle} numberOfLines={1}>
                    {mangaObj.title.length > 18 ? `${mangaObj.title.substring(0, 15)}...` : mangaObj.title}
                </Text>
                <Text>
                    {mangaObj.chapters ? "Chapter: " + mangaObj.chapters : "Chapter:"}
                </Text>
            </View>
        </View>
    );
};