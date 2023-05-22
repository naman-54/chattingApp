import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import DrawerStack from './DrawerStack';
import ScreenNames from '../constants/Screens';
import Chat from '../views/screens/chat';

const MainStack = createStackNavigator();

class MainStackNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainStack.Navigator
        initialRouteName={ScreenNames.drawer}
        screenOptions={{headerShown: false}}>
        {/* <MainStack.Screen name={ScreenNames.drawer} component={DrawerStack} /> */}
        <MainStack.Screen name={ScreenNames.chatUi} component={Chat} />
      </MainStack.Navigator>
    );
  }
}

export default MainStackNavigator;
