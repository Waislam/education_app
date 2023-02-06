import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import IMgContainerForHomeReuse from '../components/homeImg'
import MenuPage from "../components/Menu";

const Homepage = () => {
    const descriptionText =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
        "when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

    return (
        <>
            <SafeAreaView>
                <View style={styles.contianer}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <IMgContainerForHomeReuse
                            imgagesource={require('../../assets/home/home.jpeg')}
                            residemodeprops="contain"
                        />
                    </View>
                    <Text style={{alignSelf:'center'}}>Welcome To our Educational App</Text>
                    <View style={styles.descriptionBody}>
                        <Text style={styles.descriptionText}>{descriptionText}</Text>
                    </View>
                    <View>
                        <View style={styles.lineStyle}></View>
                        <MenuPage style={styles.singleMenu}/>
                        <View style={[styles.lineStyle, {marginVertical:10}]}></View>
                    </View>
                </View>

            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    contianer: {
        display:'flex',
        justifyContent: 'space-between',
        height:"100%"
    },
    text_deco: {
        color: 'green',
    },

    // imgBody: {
    //     // flex:3,
    //     height: undef,
    //     width: 180
    // },
    imgContainer: {
        // flex:5,
    },
    descriptionBody: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    descriptionText: {
        textAlign: "justify",
        // alignSelf: 'center'
    },
    menuContainer:{
        
    },
    lineStyle:{
        borderWidth:0.3,
        borderColor:'grey'
    },

})

export default Homepage;