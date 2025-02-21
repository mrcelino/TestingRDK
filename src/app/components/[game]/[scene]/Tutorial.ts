import { Scene } from "phaser";


export class TutorialScene extends Scene
{
    constructor(){
        super('TutorialScene');
    }

    create(){
        this.scale.on('enterfullscreen', () => {
            this.sys.canvas.classList.remove('hidden')
            this.sys.canvas.classList.add('block')
            this.scale.refresh()
            const musicScene = this.scene.get("MusicScene");
            if (musicScene && musicScene.bgMusic) {
                musicScene.bgMusic.resume();
            }
            this.scene.resume();
        });

        this.scale.on('leavefullscreen', () => {
            this.sys.canvas.classList.remove('block')
            this.sys.canvas.classList.add('hidden')
            this.scene.pause();
            const musicScene = this.scene.get("MusicScene");
            if (musicScene && musicScene.bgMusic) {
                musicScene.bgMusic.pause();
            }
        });


        // Create the board (papan) and center it
        const papan = this.add.image(0, 0, 'papanTanpa').setScale(0.62);
        papan.setPosition(this.sys.canvas.width / 2, this.sys.canvas.height / 2);

        // Create the close button and position it at the top-right of the board
        const close = this.add.image(0, 0, 'close-button').setScale(0.7);
        close.setPosition(this.sys.canvas.width / 2 + 460, 50);
        close.setInteractive(new Phaser.Geom.Rectangle(0, 0, close.width, close.height), Phaser.Geom.Rectangle.Contains);
        close.on('pointerdown', () => {
            this.scene.stop();
        });

        // Shortened welcome and tutorial text
        const welcomeTutorialText =
            "RDK Quest: Petualangan Ramadan di Masjid Kampus UGM!\n\n" +
            "Game interaktif untuk merayakan Ramadan di Kampus UGM. Jelajahi aktivitas seru dan nikmati pengalaman penuh tantangan.\n\n" +
            "Tutorial:\n" +
            "1. Gunakan analog untuk bergerak.\n" +
            "2. Tekan tombol aksi di sebelah kanan untuk interaksi.\n\n" +
            "Selamat bermain!";

        // Position text at the top of the board with a margin
        const marginTop = 20;
        const tutorialText = this.add.text(
            papan.x,
            papan.y - papan.displayHeight / 2 + marginTop +30,
            welcomeTutorialText,
            {
                font: '28px Arial',
                fill: '#ffffff',
                wordWrap: { width: papan.displayWidth - 40 }
            }
        );
        tutorialText.setOrigin(0.5, 0);
            }
}