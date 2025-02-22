import { NPC, npcs } from "../const";
import { Npc } from "../Npc";
import { Player } from "../Player";





export class NPCPemberiMakan extends Npc
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

        if(this.player.makananQuest === 2){
            this.scene.scene.launch("Textbox", { player: this.player, text: [
                {
                    name: "Player",
                    dialogs:
                      "Sudah selesai pak, semoga amal bapak diterima oleh Allah",
                  },
                  {
                    name: "Pak joko",
                    dialogs:
                      "Terima kasih juga mas atas bantuannya",
                  },
                  { 
                    name: "Player", 
                    dialogs: "Sama-sama pak, senang bisa membantu"
                  }
            ], order:  JSON.parse(JSON.stringify(this.data.order)), callback: ()=>{}, correctAnswer: [...this.data.correctAnswer], npcProfile: this.data.frames[0] });
            return

        }


        if(this.player.makananQuest === 1){
            this.scene.scene.launch("Textbox", { player: this.player, text: [
                {
                    name: "Pak joko",
                    dialogs:
                      "Mohon bantuannya ya mas",
                  },
                  {
                    name: "Player",
                    dialogs:
                      "Baik pak",
                  },
                  { 
                    name: "Pak joko", 
                    dialogs: "Terima kasih mas"
                  }
            ], order:  JSON.parse(JSON.stringify(this.data.order)), callback: ()=>{
                this.player.makananQuest=1
            }, correctAnswer: [...this.data.correctAnswer], npcProfile: this.data.frames[0] });
            return
        }

        this.scene.scene.launch("Textbox", { player: this.player, text: [...this.data.dialogs], order:  JSON.parse(JSON.stringify(this.data.order)), callback: ()=>{
            this.player.makananQuest=1;
        }, correctAnswer: [...this.data.correctAnswer], npcProfile: this.data.frames[0] });
    }

}