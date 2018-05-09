import React from 'react';
import Wad from "web-audio-daw";

const soundSettings = {
    volume: 0.5,
    source: 'mic',
    delay: {
        delayTime: .5,      // Time in seconds between each delayed playback.
        wet: .25,           // Relative volume change between the original sound and the first delayed playback.
        feedback: .25,      // Relative volume change between each delayed playback and the next. 
    }
};
const microphone = new Wad(soundSettings);

class SoundController extends React.Component {

    static startMic() {
        microphone.play(soundSettings);
        console.log("START MIC");
    }

    static stopMic() {
        console.log("STOP MIC");
    }
}

export default SoundController;