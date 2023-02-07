import { SafeAreaView, View, Text, StyleSheet } from "react-native"
import MenuPage from "../components/Menu";


const ContactPage = () => {
    return (
        <>
            <SafeAreaView>
                <View style={styles.contianer}>
                    <Text>
                        This is Contact page
                    </Text>
                    <View>
                        <View style={styles.lineStyle}></View>
                        <MenuPage style={styles.singleMenu} />
                        <View style={[styles.lineStyle, { marginVertical: 10 }]}></View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    contianer: {
        display: 'flex',
        justifyContent: 'space-between',
        height: "100%",
        paddingTop: 40
    },
    menuContainer: {

    },
    lineStyle: {
        borderWidth: 0.3,
        borderColor: 'grey'
    },

})

export default ContactPage;