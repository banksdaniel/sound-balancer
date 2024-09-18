class VolumeController {
    constructor(audioManager) {
        this.audioManager = audioManager;
    }

    increaseVolume(step) {
        this.audioManager.setVolume(this.audioManager.getVolume() + step);
    }

    decreaseVolume(step) {
        this.audioManager.setVolume(this.audioManager.getVolume() - step);
    }

    mute() {
        this.audioManager.setMute(true);
    }

    unmute() {
        this.audioManager.setMute(false);
    }
}

export default VolumeController;
