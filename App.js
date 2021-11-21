import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  StatusBar, ScrollView
} from 'react-native';
import imgBanner from './source/images/logo_cuci.png';
import GopayComponent from './source/component/GopayComponent';
import FiturUtama from './source/component/FiturUtama';
import PromoItems from './source/component/PromoItems'


const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  imageBanner: {
    height: 135,
    width: width,
  },
  greetingText: {
    fontSize: 17,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    top: 7,
    color: '#383838',
  },
  wrapperGopay: {
    marginHorizotal: 18,
    height: 140,
    marginTop: -60,
    width: width - 20,
    marginLeft: 10,
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 10,
  },
  textGopay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizotal: 12,
    marginTop: 10,
  },
  garisDiGopay: {
    height: 0.8,
    backgroundColor: '#adadad',
    marginTop: 10,
  },
  devider:{
    width : width,
    height : 15,
    backgroundColor : '#ededed',
    marginVertical:15
  }
});
class Home extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="rgba(0,0,0,0)"
        />
        <Image style={styles.imageBanner} source={imgBanner} />
        <Text style={styles.greetingText}>Selamat Siang</Text>
        <View style={styles.wrapperGopay}>
          <View style={styles.textGopay}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#383838',
                marginLeft: 10,
              }}>
              Saldo Gopay
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#383838',
                marginRight: 10,
              }}>
              Rp. 1.000.000
            </Text>
          </View>
          <View style={styles.garisDiGopay}></View>
          <GopayComponent />
        </View>
        <View style={{marginHorizotal: 18}}>
          <FiturUtama />
        </View>
     <View style={styles.devider}></View>
        <PromoItems />
        
      </ScrollView>
    );
  }
}
export default Home;
