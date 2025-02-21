export class MusicScene extends Phaser.Scene {

    private bgMusic!: Phaser.Sound.BaseSound;
    constructor() {
        super({ key: 'MusicScene' });
    }

    preload() {
        this.load.audio('bgMusic', 'assets/music/background.mp3');
    }

    create() {
        // Play music only if it isn't already playing
        if (!this.sound.get('bgMusic')) {
            this.bgMusic = this.sound.add('bgMusic', { loop: true, volume: 0.5 });
            this.bgMusic.play();
        }

    }
}
