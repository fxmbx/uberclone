import { View, Text, SafeAreaView, Image } from 'react-native';
import React, { useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTime } from '../slices/navSlice'


const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn"
    },
    {
        id: "Uber-X-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8"
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7PF"
    },

]
const SURGE_CHARGE_RATE = 1.5;
const RideOptionCard = () => {
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTime)
    return (
        <SafeAreaView style={tw` bg-white flex-grow`}>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("NavigateCard")}
                    style={tw`absolute bg-gray-100 top-3 left-5 p-3 z-50 rounded-full`}
                >
                    <Icon
                        name="chevron-left"
                        type='fontawesome'
                    />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a ride- {travelTimeInformation?.distance?.text}</Text>

            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, title, multiplier, image }, item }) => {
                    <TouchableOpacity
                        onPress={() => setSelected(item)}
                        style={tw`flex-row items-center justify-between px-10 ${id === selected?.id && "bg-gray-200"}`}>
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: 'contain',
                            }}
                            source={{
                                url: image
                            }}
                        // onPress={() => setSelected(item)}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>{travelTimeInformation?.duration?.text} Travel Time </Text>
                        </View>
                        <Text style={tw`text-xl`}>
                            {new Intl.NumberFormat('en-ng', {
                                style: 'currency',
                                currency: "NGN"
                            }).format
                                (travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier) / 100
                            }
                        </Text>
                    </TouchableOpacity>

                }}
            />
            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-200"}`} disabled={!selected}>
                    <Text style={tw`text-center text-white text-xl`}>
                        Choose {selected?.title}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
};

export default RideOptionCard;
