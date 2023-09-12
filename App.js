import { ImageBackground, Text, View } from "react-native";
import { s } from "./app.style";
import hotImage from "./assets/hot.png";
import { InputTemperature } from "./components/input/inputTemperature";

export default function App() {
  return (
    <ImageBackground source={hotImage} style={s.container}>
      <View style={s.workspace}>
        <View>
          <Text>Temperature</Text>
        </View>
        <InputTemperature defaultValue={"12"} />
        <View>
          <Text>Button</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
