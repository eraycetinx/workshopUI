import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 16,
    marginBottom: 16,
  },
  welcome: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  search: {
    marginTop: 16,
    marginBottom: 8,
    flexDirection: 'row',
  },
  searchBox: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff1a',
    flex: 1,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default style;
