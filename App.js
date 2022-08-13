import { StyleSheet } from "react-native";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import * as eva from "@eva-design/eva";
import colors from "./src/utils/colors";

import Profile from "./src/screens/Profile";
import Photos from "./src/screens/Photos";
import Mood from "./src/screens/Mood";
import Quotes from "./src/screens/Quotes";

const styles = StyleSheet.create({
  headerRightIcon: { color: colors.white, marginRight: 30 },
  headerLeftIcon: { color: colors.white, marginLeft: 30 },
  profileHeader: { backgroundColor: colors.black },
  profileHeaderTitle: { color: colors.white },
  tabBar: { backgroundColor: colors.black, shadowOpacity: 0 },
  tabBarLabel: { color: colors.white },
});

const SCREEN_CONFIGURATIONS = {
  Profile: {
    stackIcon: "ios-person",
    options: {
      headerStyle: styles.profileHeader,
      headerTitleStyle: styles.profileHeaderTitle,
    },
  },
  Mood: { stackIcon: "ios-happy" },
  Photos: { stackIcon: "ios-camera" },
  Quotes: { stackIcon: "ios-book" },
};

const Tab = createBottomTabNavigator();

const wrapComponent = (Component) => {
  return (props) => (
    <Layout style={{ flex: 1 }}>
      <Component {...props} />
    </Layout>
  );
};

const getScreenOptions = ({ route }) => {
  const { stackIcon, options = {} } = SCREEN_CONFIGURATIONS[route.name];
  const headerIconColor =
    route.name === "Profile" ? colors.white : colors.black;

  return {
    ...options,
    headerStyle: { shadowOpacity: 0, ...options.headerStyle },
    tabBarStyle: styles.tabBar,
    tabBarLabelStyle: styles.tabBarLabel,
    tabBarIcon: ({ focused, size }) => {
      return (
        <Ionicons
          name={focused ? stackIcon : stackIcon + "-outline"}
          size={size}
          color={colors.white}
        />
      );
    },
    headerLeft: (props) => {
      return (
        <Ionicons
          {...props}
          style={{ color: headerIconColor, marginHorizontal: 25 }}
          name="ios-chevron-back-outline"
          size={24}
        />
      );
    },
    headerRight: (props) => {
      return (
        <Ionicons
          {...props}
          style={{ color: headerIconColor, marginHorizontal: 25 }}
          name="ios-happy-outline"
          size={24}
        />
      );
    },
  };
};

// const SCREEN_MAPPING = { Profile, Mood, Photos, Quotes };
const SCREEN_MAPPING = { Quotes, Profile, Mood, Photos };

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
