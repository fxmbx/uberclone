import { View, Text } from 'react-native';
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';

const NavFavourites = () => {
    const dispatch = useDispatch()
    const data = [
        {
            id: "123",
            icon: 'home',
            location: "Home",
            destination: "Code Street, London UK"
        },
        {
            id: "456",
            icon: 'briefcase',
            location: "Work",
            destination: "London Eye, London UK"
        },

    ]
    return (
        <FlatList
            data={data}
            keyExtractor={(x) => x.id}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-400`, { height: .5 }]} />
            )}
            renderItem={({ item: { location, destination, icon } }) => (
                <TouchableOpacity

                    // onPress={(data, details = null) => {
                    //     dispatch(setDestination({
                    //         location: details.geometry.location,
                    //         description: data.description
                    //     }))
                    //     dispatch(setDestination(null))
                    // }}
                    style={tw`flex-row items-center p-5`}
                // style={{ flex: 'row', alignItems: 'center', padding: 0 }}
                >
                    <Icon
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-500`}>{destination}</Text>
                    </View>

                </TouchableOpacity >
            )}
        />
    );
};

export default NavFavourites;
