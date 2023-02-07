import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import IMgContainerForHomeReuse from "./homeImg";

const MenuPage = () => {

    const navigation = useNavigation();

    return (
        <>
            <SafeAreaView>
                <View style={styles.menuContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Image style={styles.iconStyle} source={require('../../assets/menu/home.png')} />

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('About')}
                    >
                        <Image style={styles.iconStyle} source={require('../../assets/menu/about.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Contact')}
                    >
                        <Image style={styles.iconStyle} source={require('../../assets/menu/contact.png')} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        // flex:3,
    },
    iconStyle: {
        height: 40,
        width: 40,
        marginTop:5
    },
})

export default MenuPage;