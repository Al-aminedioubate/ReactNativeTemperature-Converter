import { UNITS } from "../constante";

function getOpossiteUnit(unit) {
  return unit === UNITS.celcius ? UNITS.faranheit : UNITS.celcius;
}

function convertTemperatureTo(unit, value) {
  if (unit === UNITS.celcius) {
    return (value - 32) / 1.8;
  } else {
    return value * 1.8 + 32;
  }
}

export { getOpossiteUnit, convertTemperatureTo };
