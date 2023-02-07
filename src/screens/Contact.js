import { SafeAreaView, View, Text, StyleSheet } from "react-native"
import MenuPage from "../components/Menu";


const ContactPage=()=>{
    return(
        <>
        <SafeAreaView>
            <View>
                <Text>
                    This is Contact page
                </Text>
            </View>
        </SafeAreaView>
        </>
    )
}

const styles= StyleSheet.create({
    menuContainer:{
        
    },
    lineStyle:{
        borderWidth:0.3,
        borderColor:'grey'
    },

})

export default ContactPage;