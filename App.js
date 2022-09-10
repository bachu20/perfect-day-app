import { StyleSheet } from "react-native";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import * as eva from "@eva-design/eva";

import { colors, spacing } from "./src/utils/styles";
import MOODS_CONFIG from "./src/utils/moods";

import { store } from "./src/store";
import { Provider } from "react-redux";

import { useGetUserQuery } from "./src/services/api";

import Login from "./src/screens/Login";
import Profile from "./src/screens/Profile";
import Photos from "./src/screens/Photos";
import Mood from "./src/screens/Mood";
import Quotes from "./src/screens/Quotes";

const styles = StyleSheet.create({
  headerRightIcon: { color: colors.white, marginRight: spacing.get(6) },
  headerLeftIcon: { color: colors.white, marginLeft: spacing.get(6) },
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

const getScreenOptions = ({ props: { route }, mood }) => {
  const { stackIcon, options = {} } = SCREEN_CONFIGURATIONS[route.name] ?? {};

  const headerIconColor =
    route.name === "Profile" ? colors.white : colors.black;

  const moodIcon = MOODS_CONFIG[mood]?.icon;

  const out = {
    ...options,
    headerStyle: { shadowOpacity: 0, ...options.headerStyle },
    tabBarStyle: styles.tabBar,
    tabBarLabelStyle: styles.tabBarLabel,
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
          name={(moodIcon || "ios-happy") + "-outline"}
          size={24}
        />
      );
    },
  };

  if (stackIcon) {
    out.tabBarIcon = ({ focused, size }) => {
      return (
        <Ionicons
          name={focused ? stackIcon : stackIcon + "-outline"}
          size={size}
          color={colors.white}
        />
      );
    };
  }

  return out;
};

// const SCREEN_MAPPING = { Profile, Mood, Photos, Quotes };
const SCREEN_MAPPING = { Photos, Profile, Mood, Quotes };

const App = () => {
  const { data, isLoading } = useGetUserQuery();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={(props) => getScreenOptions({ props, mood: data?.mood })}
      >
        {isLoading ? (
          <Tab.Screen
            key="Login"
            name="Login"
            component={wrapComponent(Login)}
          />
        ) : (
          Object.keys(SCREEN_MAPPING).map((name) => (
            <Tab.Screen
              key={name}
              name={name}
              component={wrapComponent(SCREEN_MAPPING[name])}
            />
          ))
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApplicationProvider>
);
