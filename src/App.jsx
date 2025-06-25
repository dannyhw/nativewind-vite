import { View } from "react-native";

function App() {
  return (
    <View style={{ flex: 1, flexDirection: "row", gap: 4 }}>
      {/* This is a control, to verify styles in general are working (this works) */}
      <View style={{ width: 40, height: 40, backgroundColor: "green" }} />
      {/* This is a debug syntax from nativewind (this works) */}
      <View style={{ $$css: true, test: "w-10 h-10 bg-blue-500" }} />
      {/* This is what we need to make sure works (this DOESNT work) */}
      <View className={"w-10 h-10 bg-red-500"} />
    </View>
  );
}

export default App;
