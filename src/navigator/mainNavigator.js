import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView17827Navigator from '../features/CalendarView17827/navigator';
import BlankScreen17826Navigator from '../features/BlankScreen17826/navigator';
import BlankScreen27825Navigator from '../features/BlankScreen27825/navigator';
import BlankScreen27824Navigator from '../features/BlankScreen27824/navigator';
import BlankScreen17823Navigator from '../features/BlankScreen17823/navigator';
import CalendarView17822Navigator from '../features/CalendarView17822/navigator';
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
CalendarView17827: { screen: CalendarView17827Navigator },
BlankScreen17826: { screen: BlankScreen17826Navigator },
BlankScreen27825: { screen: BlankScreen27825Navigator },
BlankScreen27824: { screen: BlankScreen27824Navigator },
BlankScreen17823: { screen: BlankScreen17823Navigator },
CalendarView17822: { screen: CalendarView17822Navigator },
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
