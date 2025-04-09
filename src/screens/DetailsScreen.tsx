import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MangaTabWrapper } from "../components/MangaTabWrapper ";


const Tab = createBottomTabNavigator();



export const DetailsScreen = ({ route }) => {
    const { manga } = route.params;

    return (
        <MangaTabWrapper manga={manga}/>
        // <Tab.Navigator
        //     screenOptions={({ route }) => ({
        //         tabBarIcon: () => {
        //             if (route.name === 'Favorite') {
        //                 return <LoveIcon />
        //             } else if (route.name === 'Download') {
        //                 return <DonwloadIcon />
        //             }
        //             return null;
        //         },
        //         tabBarShowLabel: false,
        //         tabBarIconStyle: {
        //             flex: 1,
        //             justifyContent: 'center',
        //             alignItems: 'center',
        //         },
        //         tabBarStyle: {
        //             borderTopWidth: 1,
        //         },
        //     })}
        // >
        //     <Tab.Screen name="Favorite" options={{ headerShown: false }} >
        //         {() => <MangaTabWrapper manga={manga} ><FavoriteScreen manga={manga}/></MangaTabWrapper>}
        //     </Tab.Screen>
        //     <Tab.Screen name="Download" options={{ headerShown: false }}>
        //         {() => <MangaTabWrapper manga={manga} />}
        //     </Tab.Screen>
        // </Tab.Navigator>
    );
};