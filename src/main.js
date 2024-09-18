import VolumeController from './controllers/VolumeController.js';
import PulseAudioManager from './controllers/PulseAudioManager.js';

function init() {
    const audioManager = new PulseAudioManager();
    const volumeController = new VolumeController(audioManager);

    volumeController.increaseVolume(5);
    volumeController.mute();
}

export default init;
