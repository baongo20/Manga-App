import { StyleSheet, View, Text, FlatList, Dimensions, SafeAreaView } from "react-native";
import { MangaItem } from "./MangaItem";
import { UseGetAllRankManga } from "../hooks/getRankManga";

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
    }
});

export const MangaRankList = () => {
    const { data, isLoading } = UseGetAllRankManga();
    const renderItem = ({ item }) => <MangaItem mangaObj={item}/>

    return (
        <SafeAreaView>
            {isLoading ? (
                <Text>Loading...</Text>
            ) : data ? (
                <FlatList
                    data={data.data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.mal_id + ""}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapperStyle}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContent}
                    style={styles.flatList}
                />
            ) : (
                <Text>No data available</Text>
            )}
        </SafeAreaView>
    );
};