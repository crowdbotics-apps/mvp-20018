import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings97104Navigator from '../features/Settings97104/navigator';
import NotificationList97103Navigator from '../features/NotificationList97103/navigator';
import Maps97102Navigator from '../features/Maps97102/navigator';
import BlankScreen097101Navigator from '../features/BlankScreen097101/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings97104: { screen: Settings97104Navigator },
NotificationList97103: { screen: NotificationList97103Navigator },
Maps97102: { screen: Maps97102Navigator },
BlankScreen097101: { screen: BlankScreen097101Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
