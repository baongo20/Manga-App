import { useState } from "react";
import { Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SaveIcon, StarIcon } from "./Icons";
import { useNavigation } from "@react-navigation/native";
import { useSavedManga } from "./SavedMangaContext";

const styles = StyleSheet.create({
    tinyLogo: {
        width: 150,
        height: 220,
        borderRadius: 20,
    },
    container: {
        flexDirection: "row",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        flex: 1
    },
    textNav: {
        color: 'grey',
        fontSize: 18
    },
});

export const MangaTabWrapper = ({ manga }) => {
    const [pressed, setPressed] = useState(null);
    const navigation = useNavigation(); // Get the navigation object

    const handlePress = (id) => setPressed(id);

    const { addManga } = useSavedManga();

    const handleSave = () => {
        addManga({
            id: manga.mal_id,
            title: manga.title,
            image: manga.images.jpg.image_url,
            chapter: manga.chapters,
        });
    };

    return (
        <ImageBackground style={{ flex: 1, backgroundColor: '#000' }}
            source={{ uri: manga.images.jpg.image_url }}
            resizeMode="cover">
            <View style={styles.container}>
                <View style={{ flexDirection: 'column', flex: 1, paddingTop: 15, paddingLeft: 20, paddingRight: 5 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, marginBottom: 5 }}
                        numberOfLines={2}>
                        {manga.title}
                    </Text>
                    <Text style={{ color: 'white', fontSize: 14 }} numberOfLines={3}>
                        {manga.synopsis ? manga.synopsis : "Nothing..."}
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                        <StarIcon />
                        <Text style={{ color: 'white', fontSize: 14, marginLeft: 6, marginRight: 10 }}>
                            {manga.score ? manga.score : 'Not yet scored'}
                        </Text>
                        <TouchableOpacity onPress={() => {
                                // Navigate to the SaveScreen and pass the manga object as a parameter
                                // navigation.navigate('Save', { 
                                //     id: manga.mal_id, 
                                //     title: manga.title, 
                                //     image: manga.images.jpg.image_url,
                                //     chapters: manga.chapters
                                // })
                                handleSave()
                            }}>
                            <SaveIcon size={20}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Image source={{ uri: manga.images.jpg.image_url }} style={styles.tinyLogo} />
                </View>
            </View>

            <View style={{ backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, flex: 2 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 25 }}>
                    <Pressable onPress={() => handlePress(1)}>
                        <Text style={[styles.textNav, { color: pressed === 1 ? 'red' : 'grey' }, { fontWeight: pressed === 1 ? 'bold' : '500' }]}>Chapters</Text>
                    </Pressable>
                    <Pressable onPress={() => handlePress(2)}>
                        <Text style={[styles.textNav, { color: pressed === 2 ? 'red' : 'grey' }, { fontWeight: pressed === 2 ? 'bold' : '500' }]}>Comments</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
};  