import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#041e33',
    borderWidth: 0.1,
    borderColor: '#fff',
    flexDirection: 'row',
  },
  box: {
    paddingHorizontal: 12,
    paddingVertical: 18,
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 13,
  },
});

export default style;
