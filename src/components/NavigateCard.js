import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { Icon, withTheme } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    return (

        <SafeAreaView style={styles.container}>
            <View>

                <Text style={{
                    textAlign: 'center',
                    paddingTop: 5,
                    paddingBottom: 5,
                    fontWeight: 'bold'

                }}> Good morning, ***change this to logged in user😉</Text>
                <View style={tw`border-t border-gray-200 flex-shrink`}>

                    <GooglePlacesAutocomplete
                        fetchDetails={true}
                        returnKeyType={"search"}
                        placeholder='Where To?'
                        debounce={400}
                        minLength={2}
                        styles={toInputBoxStyles}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en'
                        }}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }))
                            // console.log(details);

                            navigation.navigate('RideOptionCard')
                        }}

                    />
                </View>
                <NavFavourites />
                <View style={tw`flex-row bg-white justify-evenly mt-auto py-2 border-t border-gray-200`}>
                    <TouchableOpacity style={tw`flex justify-between flex-row bg-black w-24 px-4 py-3 rounded-full`}
                        onPress={() => navigation.navigate('RideOptionCard')}
                    >
                        <Icon
                            name="car"
                            type="font-awesome"
                            color="white"
                            size={16}
                        />
                        <Text style={tw`text-white text-center`}>Rides</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex flex-row w-24 px-4 py-3 justify-between rounded-full`}>
                        <Icon
                            name="car"
                            type="font-awesome"
                            color="black"
                            size={16}
                        />
                        <Text style={tw`text-center text-black`}>Eats</Text>
                    </TouchableOpacity>


                </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    }
})

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})
export default NavigateCard;
