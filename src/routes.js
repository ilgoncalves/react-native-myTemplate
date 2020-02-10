import {
  Home
} from './components/pages';

import { createStackNavigator } from 'react-navigation-stack';

const Routes = createStackNavigator({
  Home
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
    swipeEnabled: false
  },
});

export default Routes;
