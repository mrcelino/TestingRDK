import Phaser from 'phaser';

export default class PreviewScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreviewScene' });
    }

    preload() {
        // No assets to load for the geometric play button
    }

    create() {
        // Create a rectangle as the play button
        const playButton = this.add.rectangle(this.cameras.main.centerX, this.cameras.main.centerY, 200, 100, 0x00ff00).setInteractive();

        // Add a click event listener to the play button
        playButton.on('pointerup', () => {
            this.lockOrientation()
            this.scene.start('Preloader');
        });

        // Optionally, add some text or other elements to the preview scene
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 100, 'Preview Scene', { fontSize: '32px', color: '#ffffff' }).setOrigin(0.5);
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Play', { fontSize: '32px', color: '#000000' }).setOrigin(0.5);
    }

    async lockOrientation() {
        try {
            if (!("orientation" in screen && "lock" in screen.orientation)) {
                console.error("Screen orientation API is not supported.");
                return;
            }

            // Request fullscreen first (required by most browsers)
            if (!document.fullscreenElement) {
                
                await this.scale.startFullscreen();
            }

            // Lock the orientation to landscape
            await screen.orientation.lock("landscape");

        } catch (error) {
            console.error("Failed to lock orientation:", error);
        }
    }
}