import { View, Text, StyleSheet, SafeAreaView, Image, Platform } from 'react-native';
import React, { useEffect } from 'react';
import tw from "tailwind-react-native-classnames";
import NavOptions from '../components/NavOptions';
// import {  } from 'react-native-web';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice'
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
    const dispatch = useDispatch();
    // const watchID
    // useEffect(() => {
    //     this.watchID = navigator.geolocation.watchPosition(pos => {
    //         const { coordinate, routeCoordinate, distanceTravelled } = this.state;
    //         const { latitude, longitude } = pos.coords;

    //         const newCoordinate = {
    //             latitude,
    //             longitude
    //         };
    //         if (Platform.OS === "android") {

    //         }
    //     })
    // })

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            {/* <Text style={[tw`text-red-500 p-10`, { color: 'purple' }]}>I am the Home Screen</Text> */}
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain',
                    }}
                    source={{
                        // uri: "https://links.papareact.com/gzs"
                        uri: "https://cdn.logo.com/hotlink-ok/logo-social.png"
                    }} />

                <GooglePlacesAutocomplete
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                    placeholder='Where From'
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18
                        }
                    }}
                    minLength={2}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en'
                    }}
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))
                        dispatch(setDestination(null))
                        // console.log('🥶', details)
                    }}
                />

                <NavOptions />
                <NavFavourites />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        color: 'blue',
    },
    container: {
        flex: 0,

    },
    textInput: {
        fontSize: 18,
    }
}) 