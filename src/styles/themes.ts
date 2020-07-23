import { setLightness } from "polished";

const themes = {
    colors: {
        primary: '#15121E',
        primaryLigther: setLightness(0.2, '#15121E'),
        secondary: '#191622',
        white: '#E1E1E6',
        red: '#BF1A2F',
        border: '#212126',
        shadow: 'rgba(0, 0, 0, .15)'
    }
}

export default themes;