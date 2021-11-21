import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  wrapperFiturUtama: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  imageFiturUtama: {
    height: 50,
    width: 50,
    marginTop: 10,
  },
  textFeaturUtama: {
    textAlign: 'center',
    marginTop: 4,
  },
});

const FiturUtamaSub = props => {
  return (
    <View style={{width: '25%', alignItems: 'center'}}>
      <Image style={styles.imageFiturUtama} source={props.image} />
      <Text style={styles.textFeaturUtama}>{props.title}</Text>
    </View>
  );
};

export default FiturUtamaSub;
