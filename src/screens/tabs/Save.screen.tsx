import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useSavedManga } from "../../components/SavedMangaContext";
import { theme } from "./theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#f1f1f1',
        marginBottom: 10,
        borderRadius: 8,
        elevation: 3,
    },
    mangaImage: {
        width: 120,
        height: 160,
        borderRadius: 8,
    },
    mangaDetails: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1,
    },
    mangaTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    mangaChapters: {
        color: '#777',
        fontSize: 14,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    textError: {
        fontSize: 25,
        color: 'red',
        textAlign: 'center',
        fontFamily: theme.fontFamilyBold,

    },
});


export const SaveScreen = () => {
    const { savedManga } = useSavedManga();

    return (
        <View style={{ flex: 1, padding: 20 }}>
            {savedManga.length > 0 ? (
                <FlatList
                    data={savedManga}
                    renderItem={({ item }) => (
                        <View style={styles.container}>
                            <Image source={{ uri: item.image }} style={styles.mangaImage} />
                            <View style={styles.mangaDetails}>
                                <Text style={styles.mangaTitle}>{item.title}</Text>
                                <Text style={styles.mangaChapters}>Chapters: {item.chapter}</Text>
                                <Pressable style={styles.button}>
                                    <Text style={styles.buttonText}>Continue</Text>
                                </Pressable>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <Text style={styles.textError}>No manga available</Text>
            )}
        </View>
    );
};
