import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

const MenuPage = () => {

    const navigation = useNavigation();

    return (
        <>
            <SafeAreaView>
                <View style={styles.menuContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('About')}
                    >
                        <Text>About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Contact')}
                    >
                        <Text>Contact</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    menuContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        // flex:3,
    }
})

export default MenuPage;