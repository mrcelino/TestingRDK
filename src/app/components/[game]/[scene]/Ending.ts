import { Scene } from "phaser";
import { Player } from "./utils/Player";
import { Achievement, Item } from "./utils/PlayerData";
import GlobalFullscreenPlugin from "./utils/globalInitialize";




export class Ending extends Scene
{
    player!: Player;
    constructor()
    {
        super('Ending');
    }


    init(data:{player:Player}){
        this.player = data.player;
    }

    create()
    {
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
        this.cameras.main.setBackgroundColor('#000000');

        const ending = this.add.image(0, 0, 'Ending').setOrigin(0.5, 0.5).setScale(0.6);   
        ending.setPosition(this.sys.canvas.width / 2, this.sys.canvas.height / 2);
        
        const AchivementQuantity = Object.values(this.player.data.Achievements).length;
        const ItemQuantity = Object.values(this.player.data.Items).length;

        const sumAchievement = Object.values(this.player.data.Achievements).filter((achievement: Achievement) => achievement.isAchieved).length;
        const sumItem = Object.values(this.player.data.Items).filter((item: Item) => item.acquired).length;

        const AchivementText = this.add.text(850, 213, `${sumAchievement} / ${AchivementQuantity}`, {
            fontSize: '33px',
            color: '#664032',
            fontFamily: 'Arial',
            fontStyle: 'bold'
        }).setOrigin(0.5);
    
    
        const ItemText = this.add.text(850, 300, `${sumItem} / ${ItemQuantity}`, {
            fontSize: '33px',
            color: '#664032',
            fontFamily: 'Arial',
            fontStyle: 'bold'
        }).setOrigin(0.5);


        const close = this.add.image(0,0, 'Ending-Button').setScale(0.7);
        close.setPosition(this.sys.canvas.width / 2, 650);
        close.setInteractive().on('pointerup', () => {
            this.scale.stopFullscreen();
        });
        const container = this.add.container(0, -70);
        container.add([ending, AchivementText, ItemText, close]);
    }
}