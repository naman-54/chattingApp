import React from 'react';
import Home from '../views/screens/home/Home';
import View, {Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ScreenNames from '../constants/Screens';

// import DrawerItem from '../views/component/drawerItem'
const Drawer = createDrawerNavigator();
const DrawerContent = props => {
  return (
    <View {...props}>
      <Text>Hi</Text>
    </View>
  );
};
const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName={ScreenNames.homeScreen}
      drawerContent={props => DrawerContent(props)}>
      <Drawer.Screen name={ScreenNames.homeScreen} component={Home} />
      {/* <Drawer.Screen name="Notifications" component={ScreenNames.homeScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerStack;
