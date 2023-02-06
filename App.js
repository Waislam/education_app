import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//component imported below
import Homepage from './src/screens/Home';
import AboutPage from './src/screens/About';
import ContactPage from './src/screens/Contact';

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        // <View style={styles.container}>
        //   <Text style={styles.textDeco}>This is an educational app</Text>
        //   <Homepage />
        //   {/* <StatusBar style="auto" /> */}
        // </View>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                {/* home Screen */}
                <Stack.Screen name='Home' component={Homepage}/>

                {/* about screen */}
                <Stack.Screen name='About' component={AboutPage} />

                {/* consta screenpage */}
                <Stack.Screen name='Contact' component={ContactPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         paddingTop: 20,
//         // flex: 3,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     textDeco: {
//         marginBottom: 10,
//         fontSize: 20,
//         fontWeight: "700"
//     },
// });
