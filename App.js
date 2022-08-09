import { StyleSheet } from "react-native";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import * as eva from "@eva-design/eva";
import colors from "./src/utils/colors";

import Profile from "./src/screens/Profile";
import Photos from "./src/screens/Photos";
import Music from "./src/screens/Music";
import Settings from "./src/screens/Settings";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRightIcon: {
    color: colors.white,
    marginRight: 30,
  },
  headerLeftIcon: {
    color: colors.white,
    marginLeft: 30,
  },
  profileHeader: {
    backgroundColor: colors.black1,
    shadowOpacity: 0,
  },
  profileHeaderTitle: {
    color: colors.white,
  },
  tabBar: {
    backgroundColor: colors.black1,
  },
  tabBarLabel: {
    color: colors.white,
  },
});

const SCREEN_CONFIGURATIONS = {
  Profile: {
    stackIcon: "ios-person",
    options: {
      headerStyle: styles.profileHeader,
      headerTitleStyle: styles.profileHeaderTitle,
      headerLeft: (props) => {
        return (
          <Ionicons
            {...props}
            style={styles.headerLeftIcon}
            name="ios-refresh-outline"
            size={24}
          />
        );
      },
      headerRight: (props) => {
        return (
          <Ionicons
            {...props}
            style={styles.headerRightIcon}
            name="ios-heart-outline"
            size={24}
          />
        );
      },
    },
  },
  Music: {
    stackIcon: "ios-musical-notes",
  },
  Photos: {
    stackIcon: "ios-camera",
  },
  Settings: {
    stackIcon: "ios-settings",
  },
};

const Tab = createBottomTabNavigator();

const wrapComponent = (Component) => {
  return (props) => (
    <Layout style={styles.container}>
      <Component {...props} />
    </Layout>
  );
};

const getScreenOptions = ({ route }) => {
  const config = SCREEN_CONFIGURATIONS[route.name];

  return {
    ...config.options,
    tabBarStyle: styles.tabBar,
    tabBarLabelStyle: styles.tabBarLabel,
    tabBarIcon: ({ focused, color, size }) => {
      return (
        <Ionicons
          name={focused ? config.stackIcon : config.stackIcon + "-outline"}
          size={size}
          color={colors.white}
        />
      );
    },
  };
};

const SCREEN_MAPPING = { Profile, Photos, Music, Settings };

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={(props) => getScreenOptions(props)}>
        {Object.keys(SCREEN_MAPPING).map((name) => (
          <Tab.Screen
            key={name}
            name={name}
            component={wrapComponent(SCREEN_MAPPING[name])}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <App />
  </ApplicationProvider>
);
