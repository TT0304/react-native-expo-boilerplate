/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-04-08 20:51:38
*------------------------------------------------------- */

import React from 'react';
import { MaterialIcons, Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Pressable } from 'react-native';

import { useTheme } from '@zellosoft/antd-react-native/lib/style';

import HomeScreen from 'src/screens/HomeScreen';
import LinksScreen from 'src/screens/LinksScreen';
import SettingsScreen from 'src/screens/SettingsScreen';

import screenOptionsDefault from './configs';

const BottomTab = createBottomTabNavigator();

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createNativeStackNavigator();

function HomeNavigator() {
	const theme = useTheme();
	const configsDefault = screenOptionsDefault(theme);

	return (
		<HomeStack.Navigator
			screenOptions={{
				...configsDefault,
			}}
		>
			<HomeStack.Screen
				name="Home"
				component={HomeScreen}
				options={({ navigation }) => {
					return {
						headerTitle: 'Home',
						headerRight: () => (
							<Pressable
								onPress={() => navigation.navigate('Modal')}
								style={({ pressed }) => ({
									opacity: pressed ? 0.5 : 1,
								})}
							>
								<FontAwesome
									name="info-circle"
									size={25}
									style={{ marginRight: 15 }}
								/>
							</Pressable>
						),
					};
				}}
			/>
		</HomeStack.Navigator>
	);
}

const LinksStack = createNativeStackNavigator();

function LinksNavigator() {
	const theme = useTheme();
	const configsDefault = screenOptionsDefault(theme);

	return (
		<LinksStack.Navigator
			screenOptions={{
				...configsDefault,
			}}
		>
			<LinksStack.Screen
				name="Link"
				component={LinksScreen}
			/>
		</LinksStack.Navigator>
	);
}

const SettingsStack = createNativeStackNavigator();

function SettingsNavigator() {
	const theme = useTheme();
	const configsDefault = screenOptionsDefault(theme);

	return (
		<SettingsStack.Navigator
			screenOptions={{
				...configsDefault,
			}}
		>
			<SettingsStack.Screen
				name="Settings"
				component={SettingsScreen}
				options={{ headerTitle: 'Settings' }}
			/>
		</SettingsStack.Navigator>
	);
}

export default function BottomTabNavigator() {
	const theme = useTheme();
	const configsDefault = screenOptionsDefault(theme);

	return (
		<BottomTab.Navigator
			initialRouteName="Home"
			screenOptions={{
				...configsDefault,
				lazy: true,
			}}
		>
			<BottomTab.Screen
				name="HomeRoot"
				component={HomeNavigator}
				options={({ navigation }) => ({
					headerShown: false,
					tabBarIcon: ({ color }) => <AntDesign name="home" size={26} style={{ marginBottom: -3, marginTop: 0 }} color={color} />,
				})}
			/>
			<BottomTab.Screen
				name="LinksRoot"
				component={LinksNavigator}
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => <MaterialIcons name="link" size={28} style={{ marginBottom: -3, marginTop: 0 }} color={color} />,
				}}
			/>
			<BottomTab.Screen
				name="SettingsRoot"
				component={SettingsNavigator}
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => <Feather name="user" size={26} style={{ marginBottom: -3, marginTop: 0 }} color={color} />,
				}}
			/>
		</BottomTab.Navigator>
	);
}
