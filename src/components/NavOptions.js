import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import tw from "tailwind-react-native-classnames";
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
// import { TouchableOpacity } from 'react-native-web';
// import {  } from 'react-native-web';


const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatScreen",
    }
]
const NavOptions = () => {
    const navigation = useNavigation()
    const origin = useSelector(selectOrigin)
    return (
        <View>
            <FlatList
                data={data}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate(item.screen)}
                        style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                        disabled={!origin}
                    // style={styles.touchable}
                    >
                        <View style={tw`${!origin && "opacity-20"}`}>
                            <Image
                                style={{ width: 120, height: 120, resizeMode: 'contain' }}
                                source={{ uri: item.image }}
                            />
                            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>

                            <Icon
                                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                                name="arrowright"
                                color="white"
                                type="antdesign"
                            />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default NavOptions;

const styles = StyleSheet.create({
    touchable: {
        padding: 2,
        paddingLeft: 6,
        paddingTop: 4,
        paddingBottom: 8,
        backgroundColor: '#ccc',
        margin: 20,
        width: 40
    },

})