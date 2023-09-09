
const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
};

// eslint-disable-next-line react/prop-types
export default function TemperatureInput({temperature, scale, onTemperatureChange}) {
    return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]} :</legend>
                <input type="text" value={temperature} onChange={ (e) => onTemperatureChange(e, scale)} />
            </fieldset>
    );
}