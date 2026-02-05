import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, FONTFAMILY, FONTSIZE} from '../theme/theme';
import {BlurView} from 'expo-blur';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CartScreen from '../screens/CartScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import CustomIcon from '../components/CustomIcon';

const Tab = createBottomTabNavigator();
const {width} = Dimensions.get('window');

interface TabIconProps {
    focused: boolean;
    iconName: string;
    label: string;
}

const TabIcon = ({focused, iconName, label}: TabIconProps) => {
    return (
        <View style={styles.tabIconWrapper}>
            <View style={[
                styles.iconContainer,
                focused && styles.iconContainerActive
            ]}>
                <CustomIcon
                    name={iconName}
                    size={22}
                    color={focused ? '#FFFFFF' : COLORS.primaryLightGreyHex}
                />
            </View>
            <Text style={[
                styles.tabLabel,
                focused && styles.tabLabelActive
            ]}>
                {label}
            </Text>
        </View>
    );
};

const TabNavigator = () => {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: [
                    styles.tabBarStyle,
                    {
                        height: 75 + insets.bottom,
                        paddingBottom: insets.bottom,
                    }
                ],
                tabBarBackground: () => (
                    <BlurView
                        intensity={90}
                        tint="dark"
                        style={styles.blurView}
                    />
                ),
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabIcon focused={focused} iconName="home" label="Home" />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabIcon focused={focused} iconName="cart" label="Cart" />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={FavoritesScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabIcon focused={focused} iconName="like" label="Favorites" />
                    ),
                }}
            />
            <Tab.Screen
                name="History"
                component={OrderHistoryScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabIcon focused={focused} iconName="bell" label="Orders" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        backgroundColor: 'rgba(15, 17, 20, 0.95)',
        borderTopWidth: 0,
        elevation: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 10,
    },
    blurView: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
    },
    tabIconWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width / 4 - 10,
    },
    iconContainer: {
        width: 44,
        height: 44,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    iconContainerActive: {
        backgroundColor: COLORS.primaryOrangeHex,
        shadowColor: COLORS.primaryOrangeHex,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 8,
    },
    tabLabel: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_10,
        color: COLORS.primaryLightGreyHex,
        marginTop: 4,
    },
    tabLabelActive: {
        color: COLORS.primaryOrangeHex,
        fontFamily: FONTFAMILY.poppins_semibold,
    },
});

export default TabNavigator;
