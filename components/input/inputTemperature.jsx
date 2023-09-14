import { TextInput, Text, View } from "react-native";
import {s} from "./inputTemperature.style.js";

export function InputTemperature({defaultValue, onChangeText}){
    return( 
        <View style={s.container}>
            <TextInput 
                style={s.input} placeholder=" Tape une temperature"
                keyboardType="numeric" 
                maxLength={4} 
                defaultValue={defaultValue}
                onChangeText={onChangeText}
            />
            <Text style={s.unite}>°C</Text>
        </View>
            
    );
}