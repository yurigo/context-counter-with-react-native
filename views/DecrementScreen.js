import CounterContext from "../context/CounterContext.js";
import { useContext } from "react";
import { View, Text, Button } from "react-native";

export default function DecrementScreen({ navigation }) {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Text>{counter}</Text>
      </View>
      <Button onPress={() => setCounter(counter - 1)} title="➖" />
    </View>
  );
}
