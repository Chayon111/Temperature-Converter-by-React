import React from "react";
import TemperatureInput from "./TempetatureInput";
import { convert, toCelsius, toFahrenheit } from "../lib/Converter";
import BoilingVerdict from "./BoilingVerdict";

export default class Calculator extends React.Component{
    state= {
        temperature:"",
        scale: "c",
    }

    handelChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    }

    render() {
        const{temperature, scale} = this.state;
        const celsius = scale === "f" ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === "c" ? convert(temperature, toFahrenheit) : temperature;
        return(
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handelChange} /> <br/>
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handelChange} />
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </div>
        );
    }
}