import { NPC, npcs } from "../const";
import { Npc } from "../Npc";
import { Player } from "../Player";

export class NPCMakan extends Npc {
  isdapetMakan!: boolean;

  constructor(scene: Phaser.Scene, player: Player, npc: NPC) {
    super(scene, player, npc);
  }

  override interact(): void {

    if (this.isdapetMakan) {
        this.scene.scene.launch("Textbox", {
          player: this.player,
          text: [
            {
              name: this.data.name,
              dialogs: "Terima kasih atas makanannya tadi kak",
            },
            {
              name: "Player",
              dialogs: "Sama sama kak, saya cuma menyalurkan saja",
            },
          ],
          order: [[[0, 1]]],
          callback: () => {},
          correctAnswer: [],
          npcProfile: this.data.frames[0],
        });
        return;
      }

    if (this.player.makananQuest === 1) {
      if (!this.data.isInteracted) {
        this.data.isInteracted = true;
        this.player.data.NpcInteraction++;
        this.Chat.destroy();

        const NpcQuantity = npcs.length;
        if (this.player.data.NpcInteraction === NpcQuantity) {
          this.player.data.Achievements.achievement1.isAchieved = true;
        }
      }

      this.scene.scene.launch("Textbox", {
        player: this.player,
        text: [
          {
            name: "Player",
            dialogs: "Assalamu’alaikum! permisi kak",
          },
          {
            name: this.data.name,
            dialogs: "Wa’alaikumussalam! Iya, ada apakak",
          },
          {
            name: "Player",
            dialogs:
            "Ini ada makanan lebih dari jamaah lain. Mohon diterima kak",
          },
          {
            name: this.data.name,
            dialogs:
              "Baik terima kasih kak, Sampaikan juga terima kasihnya ke beliau ya",
          },
          {
            name: "Player",
            dialogs: "Sama sama kak, Baik akan saya sampaikan",
          },
        ],
        order: [[[0, 1, 2, 3, 4]]],
        callback: () => {
          this.player.makananQuestCounter++;
          this.isdapetMakan = true;
        },
        correctAnswer: [],
        npcProfile: this.data.frames[0],
      });
    const NpcQuestMakan = npcs.filter((npc) => npc.name === "NPCMakan").length;
      if(this.player.makananQuestCounter === NpcQuestMakan){
        this.player.data.Achievements.achievement4.isAchieved = true;
        this.player.makananQuest = 2;
      }

      return;
    }

    if (!this.data.isInteracted) {
      this.data.isInteracted = true;
      this.player.data.NpcInteraction++;
      this.Chat.destroy();

      const NpcQuantity = npcs.length;
      if (this.player.data.NpcInteraction === NpcQuantity) {
        this.player.data.Achievements.achievement1.isAchieved = true;
      }
    }
    this.scene.scene.launch("Textbox", {
      player: this.player,
      text: [...this.data.dialogs],
      order: JSON.parse(JSON.stringify(this.data.order)),
      callback: null,
      correctAnswer: [...this.data.correctAnswer],
      npcProfile: this.data.frames[0],
    });
  }

  updateAfterMasjid() {
    this.data.dialogs = [
      {
        name: this.data.name,
        dialogs: "Lapeeeer, harusnya aku tadi berangkat lebih awal",
      },
      {
        name: "Player",
        dialogs: "Kenapa kak? kok sedih",
      },
      {
        name: this.data.name,
        dialogs: "Aku tidak dapet kupon makanan tadi kak, jadi nggak makan",
      },
      {
        name: "Player",
        dialogs:
          "Oalah iya kak, harus berangkat awal supaya dapet shaf depan biar dapet kuponnya",
      },
      {
        name: this.data.name,
        dialogs:
          "Iya kak, mulai besok aku bakal dateng lebih awal dan dapetin shaf paling depan",
      },
    ];

    this.Chat.destroy();
    this.Chat = this.scene.add
      .sprite(this.data.position.x, this.data.position.y - 20, "TandaSeruOrange")
      .setOrigin(0.5, 0.5)
      .play("TandaSeruOrange")
      .setScale(0.8);
  }

  dapetMakan() {

  }
}
