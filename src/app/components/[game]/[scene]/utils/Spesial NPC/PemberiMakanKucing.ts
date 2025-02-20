import { catsData, NPC, npcs } from "../const";
import { Npc } from "../Npc";
import { Player } from "../Player";





export class PemberiMakanKucing extends Npc
{
    constructor(scene: Phaser.Scene,  player: Player, npc: NPC)
    {
        super(scene, player, npc)
    }

    create(): void {
        this.data.isInteracted = false;
        this.Chat = this.scene.add.sprite(this.data.position.x, this.data.position.y - 20, 'TandaSeru').setOrigin(0.5, 0.5).play("TandaSeru");
        this.sprite = this.scene.physics.add.sprite(this.data.position.x, this.data.position.y, this.data.frames[0]).play(`${this.data.name}_idle`);

        this.sprite.setImmovable(true);
        this.scene.physics.add.collider(this.player.object, this.sprite);
        this.sprite.setBodySize(this.sprite.width, this.sprite.height - 10, false);
        this.sprite.setOffset(0, 10);

    }

    override interact(): void {
        if(!this.data.isInteracted){
            this.data.isInteracted = true;
            this.player.data.NpcInteraction ++;
            this.Chat.destroy()
            const NpcQuantity = npcs.length;
            if(this.player.data.NpcInteraction === NpcQuantity){
                this.player.data.Achievements.achievement1.isAchieved = true;
            }
        }

        if(this.player.catQuest === 2){
            this.scene.scene.launch("Textbox", { player: this.player, text: [
                {
                    name: "Player",
                    dialogs:
                      "Sudah selesai kak, semoga kucingnya sehat-sehat ya",
                  },
                  {
                    name: this.data.name,
                    dialogs:
                      "Terima kasih atas bantuannya",
                  },
                  { 
                    name: "Player", 
                    dialogs: "Sama sama kak, senang bisa membantu"
                  }
            ], order:  JSON.parse(JSON.stringify(this.data.order)), callback: ()=>{}, correctAnswer: [...this.data.correctAnswer], npcProfile: this.data.frames[0] });
            return

        }


        if(this.player.catQuest === 1){
            this.scene.scene.launch("Textbox", { player: this.player, text: [
                {
                    name: "Player",
                    dialogs:
                      "Kucing - kucingnya ada berapa kak?",
                  },
                  {
                    name: this.data.name,
                    dialogs:
                      "Ada 6 kucing kak. Biasanya mereka berkeliaran disekitar maskam",
                  },
                  {
                    name: "Player",
                    dialogs:
                      "Baik kak, terima kasih banyak ya",
                  },
                  {
                    name: this.data.name,
                    dialogs:
                      "Sama-sama, Terimakasih juga sudah mau membantu",
                  },
            ], order:  JSON.parse(JSON.stringify(this.data.order)), callback: ()=>{}, correctAnswer: [...this.data.correctAnswer], npcProfile: this.data.frames[0] });
            return

        }
        this.scene.scene.launch("Textbox", { player: this.player, text: [...this.data.dialogs], order:  JSON.parse(JSON.stringify(this.data.order)), callback: ()=>{

            this.player.catQuest=1;
            this.player.data.Items.MakananKucing.quantity = catsData.length;
            this.player.data.Items.MakananKucing.acquired = true;

        }, correctAnswer: [...this.data.correctAnswer], npcProfile: this.data.frames[0] });
    }

}