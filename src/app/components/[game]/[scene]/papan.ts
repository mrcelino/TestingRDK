import { Scene } from "phaser";


export class papan extends Scene
{
    constructor(){
        super('papan');
    }

    poster_compe!: Phaser.GameObjects.Image;
    posterRDK!: Phaser.GameObjects.Image;

    create(){
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


        const papan = this.add.image(0, 0, 'papan').setScale(0.62);
    const close = this.add.image(0,0, 'close-button').setScale(0.7);

        papan.setPosition(this.sys.canvas.width / 2, this.sys.canvas.height / 2);
        close.setPosition(this.sys.canvas.width / 2 +460, 50);

        close.setInteractive(new Phaser.Geom.Rectangle(0, 0, close.width, close.height), Phaser.Geom.Rectangle.Contains);

        close.on('pointerdown', () => {
            this.scene.stop();
        });
        
        this.poster_compe = this.add.image(0, 0, 'poster-donasi-js');
        this.poster_compe.setScale(0.12);

        this.poster_compe.setPosition(this.sys.canvas.width / 2 -200, this.sys.canvas.height / 2+30);

        this.poster_compe.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.poster_compe.width, this.poster_compe.height), Phaser.Geom.Rectangle.Contains);
         
        this.poster_compe.on('pointerdown', () => {
            if(this.poster_compe.scaleX === 0.12){
                this.poster_compe.setScale(.301)
                this.poster_compe.setPosition(this.sys.canvas.width / 2 , this.sys.canvas.height / 2);
                this.posterRDK.setVisible(false);
            }else
            {
                this.poster_compe.setScale(0.12)
                this.poster_compe.setPosition(this.sys.canvas.width / 2 -200, this.sys.canvas.height / 2+30);
                this.posterRDK.setVisible(true);
            }

        });

        this.posterRDK = this.add.image(0, 0, 'poster-donasi-maskam');
        this.posterRDK.setScale(0.12);

        this.posterRDK.setPosition(this.sys.canvas.width / 2 +200, this.sys.canvas.height / 2+30);

        this.posterRDK.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.posterRDK.width, this.posterRDK.height), Phaser.Geom.Rectangle.Contains);
         
        this.posterRDK.on('pointerdown', () => {
            if(this.posterRDK.scaleX === 0.12){
                this.posterRDK.setScale(.301)
                this.posterRDK.setPosition(this.sys.canvas.width / 2 , this.sys.canvas.height / 2);
                this.poster_compe.setVisible(false);
            }else
            {
                this.posterRDK.setScale(0.12)
                this.posterRDK.setPosition(this.sys.canvas.width / 2 +200, this.sys.canvas.height / 2+30);
                this.poster_compe.setVisible(true);
            }

        });

    }
}