import { View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useLinkBuilder } from '@react-navigation/native';

import style from './BottomBarStyle';
import { Text, PlatformPressable } from '@react-navigation/elements';
import Icons from '../../ui/Icons';

const BottomBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const { buildHref } = useLinkBuilder();

  return (
    <View style={style.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <View style={style.box} key={index}>
            <PlatformPressable
              href={buildHref(route.name, route.params)}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View>
                  {label === 'Anasayfa' ? (
                    <Icons
                      style={{ opacity: isFocused ? 1 : 0.55 }}
                      name="home"
                      type="feather"
                      size={24}
                      color="#fff"
                    />
                  ) : label === 'Randevu' ? (
                    <Icons
                      style={{ opacity: isFocused ? 1 : 0.55 }}
                      name="calendar"
                      type="feather"
                      size={24}
                      color="#fff"
                    />
                  ) : label === 'Raporlar' ? (
                    <Icons
                      style={{ opacity: isFocused ? 1 : 0.55 }}
                      name="file-text"
                      type="feather"
                      size={25}
                      color="#fff"
                    />
                  ) : label === 'Favoriler' ? (
                    <Icons
                      style={{ opacity: isFocused ? 1 : 0.55 }}
                      name="heart"
                      type="feather"
                      size={24}
                      color="#fff"
                    />
                  ) : label === 'Hesap' ? (
                    <Icons
                      style={{ opacity: isFocused ? 1 : 0.55 }}
                      name="user"
                      type="feather"
                      size={24}
                      color="#fff"
                    />
                  ) : null}
                </View>
                <Text
                  style={[
                    style.text,
                    { fontWeight: isFocused ? '700' : '400' },
                  ]}
                >
                  {label}
                </Text>
              </View>
            </PlatformPressable>
          </View>
        );
      })}
    </View>
  );
};

export default BottomBar;
