import { Scene } from "phaser";
import { Player } from "./utils/Player";
import { Achievement, Item } from "./utils/PlayerData";




export class Ending extends Scene
{
    note!: Phaser.GameObjects.Text;
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
        this.scene.stop('Pause');
        this.scene.stop('ControllerScene');
        this.scene.stop('Escape');
        this.scene.stop('GameScene');

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

        this.note = this.add.text(60, 150, 'Kumpulkan seluruh achivement dan item untuk mendapatkan hadiah', {
            fontSize: '17px',
            color: '#664032',
            fontFamily: 'Arial',
            fontStyle: 'bold'
        }).setOrigin(0,0);

        this.note.setPosition(60, 520);
        container.add(this.note);
        

        
        if(AchivementQuantity === sumAchievement && ItemQuantity === sumItem ){
            this.hadiah().then((hadiah) => {
                const base = process.env.NEXT_PUBLIC_API_BASE_URL
                fetch(`${base}hadiahs/${(hadiah[0] as Hadiah).id}/decrease`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => {
                    if (response.status === 200) {
                        if(hadiah.length > 0){
                            const hadiahText = this.add.text(100, 200, `Kupon : ${hadiah[0].hadiah}${hadiah[0].quantity}`, {
                                fontSize: '27px',
                                color: '#664032',
                                fontFamily: 'Arial',
                                fontStyle: 'bold'
                            }).setOrigin(0,0);
        
                            hadiahText.setPosition(100, 350);
                            container.add(hadiahText);
                            this.note.setText('Kamu dapat menukarkan Voucher ini menjadi iftar gratis di Masjid Kampus UGM dengan menunjukkan screenshot ini');
                        }else{
                            const hadiahText = this.add.text(100, 200, `Kupon : Maaf kupon sudah habis`, {
                                fontSize: '27px',
                                color: '#664032',
                                fontFamily: 'Arial',
                                fontStyle: 'bold'
                            }).setOrigin(0,0);
        
                            hadiahText.setPosition(100, 350);
                            container.add(hadiahText);
                        }
                    }
                });
                
            });
        }

    }

    async hadiah(){
        const base = process.env.NEXT_PUBLIC_API_BASE_URL
        const response = await fetch(base+`hadiahs`);
        const data = await response.json();
        
        const hadiah= data.data as Hadiah[];
        const Today = new Date();
        const date = Today.getFullYear()+'-'+(Today.getMonth()+1)+'-'+Today.getDate();
        hadiah.filter((hadiah) => hadiah.date === "2025-03-01");
        return hadiah;
    }


}

interface Hadiah {
    id: number;
    documentId: string;
    hadiah: string;
    date: string;
    quantity: number;
}