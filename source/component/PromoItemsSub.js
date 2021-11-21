import React, {Component} from 'react'
import {View, Text, StyleSheet,Dimensions,Image, } from 'react-native'

const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
    wrapper:{
          backgroundColor: 'white',
                elevation: 4,
                borderRadius: 8,
                width: width /2 -27,
                marginRight: 18,
                marginLeft: 10,
                marginBottom: 18
    },
    promoImage:{
        height: width/2-27,
        width:width/2-27,
        borderTopLeft: 10,
        borderTopRightRadius:10
    },
    textPromo:{
        marginLeft: 10,
        marginVertical: 10

    }
})
const PromoItemsSub = (props) => {
    return(
            <View style={styles.wrapper}>
               <Image source={props.image} style={styles.promoImage} />
               <View style={styles.textPromo}>
                    <Text>{props.text}</Text>
               </View>
            </View>
    )
}

export default PromoItemsSub