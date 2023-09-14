import { TouchableOpacity, Text } from "react-native";
import {s} from "./buttonConvert.style";

export function ButtonConvert({unit}){
    return (
        <TouchableOpacity style={s.button}>
            <Text style={s.text}>Convertir en {unit}</Text>
        </TouchableOpacity>
    );
}