import { View, Text, Pressable } from 'react-native';
import style from './HeaderStyle';
import Icons from '../../ui/Icons';

const HomeHeader = () => {
  return (
    <View style={style.container}>
      <View style={style.box}>
        <View style={style.left}>
          <View style={style.logo}>
            <Text>LOGO</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>
              Smile Hair Clinic
            </Text>
          </View>
        </View>
        <View>
          <Pressable>
            <Icons name="file-text" type="feather" size={30} color="#fff" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
