import * as React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";

// screens
import Notifications from '../screens/Notifications';
import TabNavigation from './tabs.routes';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;