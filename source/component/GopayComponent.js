import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  wrapperPay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gopayFeatureImage: {
    height: 45,
    width: 45,
    marginTop: 17,
    marginHorizotal: 40,
  },
});
const GopayComponent = () => {
  return (
    <View style={styles.wrapperPay}>
      <View>
        <Image
          style={styles.gopayFeatureImage}
          source={require('../icon/pay.jpg')}
        />
        <Text style={{alignSelf: 'center', marginTop: 5}}>Gopay</Text>
      </View>
      <View>
        <Image
          style={styles.gopayFeatureImage}
          source={require('../icon/topup.jpg')}
        />
        <Text style={{alignSelf: 'center', marginTop: 5}}>Topup</Text>
      </View>
      <View>
        <Image
          style={styles.gopayFeatureImage}
          source={require('../icon/reward.jpg')}
        />
        <Text style={{alignSelf: 'center', marginTop: 5}}>Rewards</Text>
      </View>
    </View>
  );
};

export default GopayComponent
