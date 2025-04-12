import React from "react";
import { StyleSheet, View, Text, TextInput, Pressable, FlatList } from "react-native";
import { UseGetAllGenre } from "../../hooks/getAllGenre";
import { MangaGenreItem } from "../../components/MangaGenreItem";
import LottieView from "lottie-react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BDE0F0',
        padding: 20,
    },
    columnWrapperStyle: {
        justifyContent: 'space-around',
        padding: 15,
    },
    flatList: {
        flexGrow: 1,
    },
    flatListContent: {
        paddingBottom: 100,  // Add padding to the content container for last item visibility
    },
});

export const SearchScreen = () => {
    const { data, isLoading } = UseGetAllGenre();
    const renderItem = ({ item }) => <MangaGenreItem genreObj={item} />

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <TextInput placeholder="Search..." style={{
                    borderWidth: 1, borderColor: 'red', flex: 2,
                    justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10,
                    borderTopLeftRadius: 10, borderBottomLeftRadius: 10
                }} />
                <Pressable style={{
                    flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center',
                    borderTopRightRadius: 10, borderBottomRightRadius: 10,
                }}>
                    <Text style={{ color: 'white' }}>Search</Text>
                </Pressable>
            </View>
            <View>
                {isLoading ? (
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <LottieView
                            source={require('../../../assets/animations/Animation - 1744274769357.json')}
                            autoPlay
                            loop
                            style={{ width: 200, height: 200 }}
                        />
                    </View>
                ) : data ? (
                    <FlatList
                        data={data.data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.mal_id + ""}
                        columnWrapperStyle={styles.columnWrapperStyle}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.flatListContent}
                        style={styles.flatList}
                        numColumns={2}
                    />
                ) : (
                    <Text>No data available</Text>
                )}
            </View>
        </View>
    );
};