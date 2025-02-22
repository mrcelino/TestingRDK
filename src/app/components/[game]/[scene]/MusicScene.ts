export class MusicScene extends Phaser.Scene {

    private bgMusic!: Phaser.Sound.BaseSound;
    constructor() {
        super({ key: 'MusicScene' });
    }

    preload() {
    }

    create() {

        // Play music only if it isn't already playing
        
        this.bgMusic = this.sound.add('bgMusic', { loop: true, volume: 0.5 });

        if ( this.scale.isFullscreen) {
            this.bgMusic.play();
        }

        this.scale.on('enterfullscreen', () => {
            this.sys.canvas.classList.remove('hidden')
            this.sys.canvas.classList.add('block')
            this.scale.refresh()
            this.bgMusic.play();
            this.scene.resume();
        });

        this.scale.on('leavefullscreen', () => {
            this.sys.canvas.classList.remove('block')
            this.sys.canvas.classList.add('hidden')
            this.scene.pause();
            this.bgMusic.pause();
        });


    }
}
