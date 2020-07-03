import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth27821Navigator from '../features/EmailAuth27821/navigator';
import Messaging37820Navigator from '../features/Messaging37820/navigator';
import BlankScreen17812Navigator from '../features/BlankScreen17812/navigator';
import BlankScreen27811Navigator from '../features/BlankScreen27811/navigator';
import BlankScreen37810Navigator from '../features/BlankScreen37810/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
EmailAuth27821: { screen: EmailAuth27821Navigator },
Messaging37820: { screen: Messaging37820Navigator },
BlankScreen17812: { screen: BlankScreen17812Navigator },
BlankScreen27811: { screen: BlankScreen27811Navigator },
BlankScreen37810: { screen: BlankScreen37810Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
