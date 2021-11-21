import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import FiturUtamaSub from './FiturUtamaSub';

const styles = StyleSheet.create({
  wrapperFiturUtama: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    flexWrap: 'wrap',
    width: '100%',
  },
});
const FiturUtama = () => {
  return (
    <View style={styles.wrapperFiturUtama}>
      <FiturUtamaSub
        image={require('../icon/cuci_laundry.png')}
        title="C-Laundry"
      />
      <FiturUtamaSub
        image={require('../icon/cuci_kendaraan.png')}
        title="C-Motor"
      />
      <FiturUtamaSub image={require('../icon/cuci_ac.png')} title="C-AC" />
      <FiturUtamaSub
        image={require('../icon/cuci_gudang.png')}
        title="C-Gudang"
      />
      <FiturUtamaSub image={require('../icon/pulsa.jpg')} title="C-Pulsa" />
      <FiturUtamaSub image={require('../icon/doctor.jpg')} title="C-Doctor" />
      <FiturUtamaSub
        image={require('../icon/subscribe.jpg')}
        title="C-Subscribe"
      />
      <FiturUtamaSub image={require('../icon/more.jpg')} title="More" />
    </View>
  );
};

export default FiturUtama;
