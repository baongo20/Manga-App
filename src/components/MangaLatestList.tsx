import React from "react";
import { StyleSheet, Text, FlatList, Dimensions, View } from "react-native";
import { MangaItem } from "./MangaItem";
import { UseGetLatestManga } from "../hooks/getLatestManga";
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    columnWrapperStyle: {
        justifyContent: 'space-around',
        padding: 15,
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
        width: width,
        height: height,
    },
    textNav: {
        fontSize: 18,
        fontWeight: '500'
    },
    flatList: {
        flexGrow: 1,
    },
    flatListContent: {
        paddingBottom: 100,  // Add padding to the content container for last item visibility
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export const MangaLatestList = () => {
    const { data, isLoading } = UseGetLatestManga();
    const renderItem = ({ item }) => <MangaItem mangaObj={item} />

    return (
        <View>
            {isLoading ? (
                <View style={styles.container}>
                    <LottieView
                        source={require('../../assets/animations/Animation - 1744274769357.json')}
                        autoPlay
                        loop
                        style={{ width: 200, height: 200 }}
                    />
                </View>
            ) : data ? (
                <FlatList
                    data={data.data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.mal_id}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapperStyle}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContent}
                    style={styles.flatList}
                />
            ) : (
                <Text>No data available</Text>
            )}
        </View>
    );
};