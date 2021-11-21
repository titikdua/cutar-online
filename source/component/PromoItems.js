import React, {Component} from 'react'
import {View, Text, StyleSheet,Image } from 'react-native'
import PromoItemsSub from './PromoItemsSub'



const PromoItems = () => {
    return(
            <View style={{marginHorizotal:18, width:'100%', flexWrap:'wrap', flexDirection:'row'}}>
                <PromoItemsSub                 
                        image={{uri:"https://solusiprinting.com/wp-content/uploads/2019/10/Desain-Brosur-Dengan-Warna-Biru-1280px-x-720px-1024x576.jpg"}}
                        text="Promo Minggu Ini"        
                />
            </View>

    )
}

export default PromoItems