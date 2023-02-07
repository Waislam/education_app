import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//component imported below
import Homepage from './src/screens/Home';
import AboutPage from './src/screens/About';
import ContactPage from './src/screens/Contact';
import MenuPage from './src/components/Menu';

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    {/* home Screen */}
                    <Stack.Screen name='Home' component={Homepage}
                        options={{
                            headerShown: false,
                            headerTitleAlign: "center"
                        }}
                    />

                    {/* about screen */}
                    <Stack.Screen name='About' component={AboutPage}
                        options={{
                            headerTitleAlign: "center"
                        }}
                    />

                    {/* consta screenpage */}
                    <Stack.Screen name='Contact' component={ContactPage}
                        options={{
                            headerTitleAlign: "center"
                        }}
                    />
                </Stack.Navigator>
                {/* <View>
                    <View style={styles.lineStyle}></View>
                    <MenuPage style={styles.singleMenu} />
                    <View style={[styles.lineStyle, { marginVertical: 10 }]}></View>
                </View> */}

            </NavigationContainer>

        </>
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

const styles = StyleSheet.create({
    menuContainer: {

    },
    lineStyle: {
        borderWidth: 0.3,
        borderColor: 'grey'
    },
})
