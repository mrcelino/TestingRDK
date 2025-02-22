

export class Escape extends Phaser.Scene
{
    constructor ()
    {
        super('Escape');
    }

    preload()
    {
        
    }   

    create()
    {

        this.scale.on('enterfullscreen', () => {
            this.sys.canvas.classList.remove('hidden')
            this.sys.canvas.classList.add('block')
            this.scale.refresh()

            this.scene.resume();
        });

        this.scale.on('leavefullscreen', () => {
            this.sys.canvas.classList.remove('block')
            this.sys.canvas.classList.add('hidden')
            this.scene.pause();

                        });
            const Escape =this.add.image(0, 0, "Escape").setDisplaySize(50, 50);
            Escape.setPosition(50, 50);

            Escape.setInteractive(new Phaser.Geom.Rectangle(0, 0, Escape.width, Escape.height), Phaser.Geom.Rectangle.Contains);
            Escape.on('pointerdown', () => {
                this.scale.stopFullscreen();
            });
    }
}