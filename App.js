import React from "react";
import { View, StyleSheet } from "react-native";
import CurrentWeather from "./src/components/currentWeather";
import UpcomingWeather from "./src/components/upcomingWeather";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <CurrentWeather /> */}
      <UpcomingWeather />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
