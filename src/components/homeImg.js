import { SafeAreaView, StyleSheet, View, Image } from "react-native";

const IMgContainerForHomeReuse=({imgagesource, residemodeprops})=>{
    return(
        <>
        <SafeAreaView>
            <View style={styles.imgContainer}>
                <Image style={styles.imgBody} source={imgagesource} resizeMode={residemodeprops}/>
            </View>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    contianer: {
        // flex:2,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    text_deco: {
        color: 'green',
    },

    imgBody: {
        // flex:3,
        height: 200,
        width: "100%",
        aspectRatio:1,
        borderRadius:10,
    },
    imgContainer:{
        // flex:5,
        padding:5
    },

})

export default IMgContainerForHomeReuse;