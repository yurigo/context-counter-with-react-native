import CounterContext from "../context/CounterContext.js";
import { useContext } from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

export default function HomeScreen({ navigation }) {
  const { counter } = useContext(CounterContext);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 16,
      }}
    >
      <View
        style={{
          flex: 1,
          gap: 10,
          marginTop: 16,
        }}
      >
        <Text>🏠</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          tempus quam id sem iaculis dignissim. Sed lobortis augue id tellus
          malesuada, ut fermentum purus consequat. Aliquam consequat ultricies
          tellus, et feugiat enim volutpat quis. Vestibulum dictum tellus vitae
          purus fringilla, a lobortis lorem facilisis. Morbi rhoncus nulla vel
          viverra dapibus. Phasellus id elit sed mi tincidunt sagittis ut nec
          orci. Nam eu tortor ex. Quisque et erat quam. Aenean rutrum maximus
          magna, at laoreet elit. Nullam commodo nibh sit amet augue ultrices
          posuere. Pellentesque at vehicula dui, ut fringilla nunc.
        </Text>
        <Text
          style={{
            fontSize: 96,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {counter}
        </Text>
        <View
          style={{
            display: "flex",
            alignItems: "stretch",
            alignContent: "stretch",
            flexDirection: "row",
            gap: 50,
          }}
        >
          <View
            style={{
              backgroundColor: "tomato",
              padding: 4,
              flex: 1,
            }}
          >
            <Button
              onPress={() => navigation.navigate("Decrement")}
              title=" go to ➖ "
            />
          </View>
          <View
            style={{
              backgroundColor: "yellowgreen",
              padding: 4,
              flex: 1,
            }}
          >
            <Button
              onPress={() => navigation.navigate("Increment")}
              title=" go to ➕ "
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
