import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionCard from '../components/RideOptionCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const MapScreen = () => {
    const stack = createStackNavigator()
    const navigation = useNavigation()
    return (
        <View>
            <TouchableOpacity style={tw`absolute top-16 left-8 bg-gray-100 left-8 z-50 p-3 rounded-full shadow-lg`}
                onPress={() => navigation.navigate('HomeScreen')}
            >

                <Icon name="menu"
                />
            </TouchableOpacity>
            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}>
                <stack.Navigator>
                    <stack.Screen
                        name="NavigateCard"
                        component={NavigateCard}
                        options={{ headerShown: false }} />
                    <stack.Screen
                        name="RideOptionCard"
                        component={RideOptionCard}
                        options={{ headerShown: false }}
                    />
                </stack.Navigator>
            </View>
        </View >
    );
};

export default MapScreen;
