import { SafeAreaView, View, Text, StyleSheet } from "react-native"
import MenuPage from "../components/Menu";


const AboutPage=()=>{
    return(
        <>
        <SafeAreaView>
            <View>
                <Text>This is about page</Text>
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
    singleMenu:{

        
    },
    
})

export default AboutPage;