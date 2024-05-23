import { useEffect } from "react";
import { Text, View } from "react-native";

export default function FirsPage() {
  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}
