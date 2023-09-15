import { ImageBackground, Text, View } from "react-native";
import { s } from "./app.style";
import hotImage from "./assets/hot.png";
import coldImage from "./assets/cold.png";
import { InputTemperature } from "./components/input/inputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/temperatureDisplay";
import { useEffect, useState } from "react";
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT } from "./constante";

import {
  getOpossiteUnit,
  convertTemperatureTo,
  isIceTemperature,
} from "./services/temperature-services";
import { ButtonConvert } from "./components/ButtonConvert/buttonConvert";

export default function App() {
  //liaison entre input et la valeur d'afficher apres le calcul
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const oppositeUnit = getOpossiteUnit(currentUnit);

  //changement de background en fonction de la temperature.
  const [currentBackground, setCurrentBackground] = useState();
  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(temperatureAsFloat)) {
      const isColdBackground = isIceTemperature(inputValue, currentUnit);
      setCurrentBackground(isColdBackground ? coldImage : hotImage);
    }
  }, [inputValue, currentUnit]);

  function getConvertedTemperature() {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat)
      ? " "
      : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(2);
  }

  return (
    <ImageBackground source={currentBackground} style={s.container}>
      <View style={s.workspace}>
        <TemperatureDisplay
          value={getConvertedTemperature()}
          unit={oppositeUnit}
        />
        <InputTemperature
          onChangeText={setInputValue}
          defaultValue={DEFAULT_TEMPERATURE}
          unit={currentUnit}
        />
        <View>
          <ButtonConvert
            onPress={() => {
              setCurrentUnit(oppositeUnit);
            }}
            unit={currentUnit}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
