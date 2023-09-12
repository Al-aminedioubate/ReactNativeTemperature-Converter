import { ImageBackground, Text, View } from "react-native";
import { s } from "./app.style";
import hotImage from "./assets/hot.png";
import { InputTemperature } from "./components/input/inputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/temperatureDisplay";
import { useState } from "react";
import { DEFAULT_TEMPERATURE, UNITS } from "./constante";

export default function App() {
  //liaison entre input et la valeur d'afficher
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(UNITS);

  console.log(inputValue);

  return (
    <ImageBackground source={hotImage} style={s.container}>
      <View style={s.workspace}>
        <TemperatureDisplay value={inputValue} unit={"°C"} />
        <View>
          <Text>Temperature</Text>
        </View>
        <InputTemperature
          onChangeText={setInputValue}
          defaultValue={DEFAULT_TEMPERATURE}
        />
        <View>
          <Text>Button</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
