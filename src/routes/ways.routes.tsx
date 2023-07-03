import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import StackNavigation from './stack.routes';

const Ways = () => {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
};

export default Ways;