import React from 'react';
import { View, Text, Pressable } from 'react-native';

import style from './WelcomeStyle';
import Icons from '../../ui/Icons';

interface Props {
  name: string;
}
const Welcome: React.FC<Props> = ({ name }) => {
  return (
    <View style={style.container}>
      <View style={style.welcome}>
        <View style={{ marginBottom: 4 }}>
          <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>
            Merhaba, {name}
          </Text>
        </View>
        <Text style={{ color: '#fff', fontSize: 17 }}>
          Saç analiziniz için fotoğraflarınızı yükleyin
        </Text>
      </View>
      <View style={style.search}>
        <View style={style.searchBox}>
          <View
            style={{
              flexDirection: 'row',
              gap: 6,
              alignItems: 'center',
            }}
          >
            <View style={style.searchIcon}>
              <Icons name="search" type="feather" size={25} color="#ccc" />
            </View>
            <View>
              <Text style={{ color: '#fff', opacity: 0.6 }}>
                Ara / QR Kod Tara
              </Text>
            </View>
          </View>
          <View>
            <Pressable>
              <Icons
                name="qr-code-outline"
                type="ionicon"
                size={25}
                color="#fff"
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
