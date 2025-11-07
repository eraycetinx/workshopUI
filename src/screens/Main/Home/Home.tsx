import { View, Text, Pressable } from 'react-native';
import style from './HomeStyle';
import HomeHeader from '../../../components/home/header/Header';
import Welcome from '../../../components/home/welcome/Welcome';

// TODO contentler screen mi olacak yoksa state mi ona göre focus yap
// TODO isimler focus'a göre beyaz bold olacak
// TODO focus'a göre altta beyaz çizgi olacak
// TODO Font eklenmeli

const Home = () => {
  return (
    <View style={style.container}>
      <HomeHeader />
      <Welcome name="Eray" />
      <View style={style.content}>
        <Pressable style={style.button}>
          <Text style={style.text}>Anasayfa</Text>
        </Pressable>
        <Pressable style={style.button}>
          <Text style={style.text}>Analizler</Text>
        </Pressable>

        <Pressable style={style.button}>
          <Text style={style.text}>Geçmiş</Text>
        </Pressable>

        <Pressable style={style.button}>
          <Text style={style.text}>Profil</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
