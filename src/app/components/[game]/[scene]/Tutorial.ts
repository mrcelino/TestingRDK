import { Scene } from "phaser";
import { PlayerDatas } from "./utils/PlayerData";

export class TutorialScene extends Scene {
  phase: number = 0;
  inInput: boolean = true;
  TutorialBox!: Phaser.GameObjects.Image;
  TutorialText!: Phaser.GameObjects.Text;
  isTutorialStart: boolean = false;
  pause!: Phaser.GameObjects.Image;
  escape!: Phaser.GameObjects.Image;
  analog!: Phaser.GameObjects.Image;
  action!: Phaser.GameObjects.Image;
  joyStickContainer!: Phaser.GameObjects.Container;
  boxPointer!: Phaser.GameObjects.Rectangle;
  private pauseContainer!: Phaser.GameObjects.Container;

  constructor() {
    super("TutorialScene");
  }

  create() {
    this.scale.on("enterfullscreen", () => {
      this.sys.canvas.classList.remove("hidden");
      this.sys.canvas.classList.add("block");
      this.scale.refresh();

      this.scene.resume();
    });

    this.scale.on("leavefullscreen", () => {
      this.sys.canvas.classList.remove("block");
      this.sys.canvas.classList.add("hidden");
      this.scene.pause();
    });

    // Create the board (papan) and center it
    const papan = this.add.image(0, 0, "papanTanpa").setScale(0.62);
    papan.setPosition(this.sys.canvas.width / 2, this.sys.canvas.height / 2);

    // Create the close button and position it at the top-right of the board
    const close = this.add.image(0, 0, "close-button").setScale(0.7);
    close.setPosition(this.sys.canvas.width / 2 + 460, 50);
    close.setInteractive(
      new Phaser.Geom.Rectangle(0, 0, close.width, close.height),
      Phaser.Geom.Rectangle.Contains
    );

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
      papan.y - papan.displayHeight / 2 + marginTop + 30,
      welcomeTutorialText,
      {
        font: "28px Arial",
        wordWrap: { width: papan.displayWidth - 40 },
        color: "#ffffff",
      }
    );
    tutorialText.setOrigin(0.5, 0);

    close.on("pointerdown", () => {
      close.destroy();
      tutorialText.destroy();
      papan.destroy();
      this.nextTutorial1();
      this.isTutorialStart = true;
    });

    this.input.on("pointerdown", () => {
      if (!this.isTutorialStart) return;
      this.updateTutorialBox();
      this.phase++;
    });

    this.input.on("pointerup", () => {});
  }

  nextTutorial1() {
    this.TutorialBox = this.add.image(0, 0, "TutorialBox");
    this.TutorialBox.setDisplaySize(480, 200);
    this.TutorialBox.setPosition(
      this.sys.canvas.width / 2,
      this.sys.canvas.height / 2
    );

    this.TutorialText = this.add.text(
      this.TutorialBox.x,
      this.TutorialBox.y - 20,
      "Tutorial Text Here",
      {
        font: "28px Arial",
        wordWrap: { width: this.TutorialBox.displayWidth - 40 },
        color: "#ffffff",
        align: "center",
      }
    );
    this.TutorialText.setOrigin(0.5, 0);

    this.pause = this.add.image(0, 0, "Pause-Button").setScale(0.5);

    this.pause.setPosition(this.sys.canvas.width / 2 + 450, 50);

    this.escape = this.add.image(0, 0, "Escape").setDisplaySize(50, 50);
    this.escape.setPosition(50, 50);

    this.joyStickContainer = this.add.container(0, 0);

    const joyStick = this.add.circle(200, 550, 50, 0x888888);
    const thumb = this.add.circle(200, 550, 25, 0xcccccc);

    this.joyStickContainer.add([joyStick, thumb]);

    this.boxPointer = this.add.rectangle(joyStick.x, joyStick.y, 120, 120);
    this.boxPointer.setSize(60, 60);
    this.boxPointer.setPosition(800, 550);
    this.boxPointer.setStrokeStyle(4, 0xff0000);
    this.boxPointer.setOrigin(0.5, 0.5);

    const actionButton = this.add
      .circle(800, 550, 30, 0x888888)
      .setInteractive();
    this.joyStickContainer.add(actionButton);

    this.updateTutorialBox();
  }

  updateTutorialBox() {
    switch (this.phase) {
      case 0:
        this.TutorialText.setText("Tekan tombol action untuk berinteraksi.");
        this.boxPointer.setSize(60, 60);
        this.boxPointer.setPosition(800, 550);
        this.TutorialText.setPosition(
          this.TutorialBox.x,
          this.TutorialBox.y - 25
        );
        break;
      case 1:
        this.TutorialText.setText("Gunakan analog untuk bergerak.");
        this.boxPointer.setSize(120, 120);
        this.boxPointer.setPosition(200, 550);
        this.TutorialText.setPosition(
          this.TutorialBox.x,
          this.TutorialBox.y - 25
        );
        break;
      case 2:
        this.TutorialText.setText("Tekan tombol escape untuk keluar dari game");
        this.boxPointer.setSize(50, 50);
        this.boxPointer.setPosition(50, 50);
        this.TutorialText.setPosition(
          this.TutorialBox.x,
          this.TutorialBox.y - 30
        );
        break;
      case 3:
        this.TutorialText.setText("Tekan tombol pause untuk membuka menu");
        this.boxPointer.setSize(50, 50);
        this.boxPointer.setPosition(this.sys.canvas.width / 2 + 450, 50);
        this.TutorialText.setPosition(
          this.TutorialBox.x,
          this.TutorialBox.y - 30
        );
        break;
      case 4:
        this.joyStickContainer.destroy();
        this.escape.destroy();
        this.pause.destroy();
        const PauseBox = this.add.image(0, 0, "Pause-box").setScale(0.582);
        const Resume = this.add.image(0, 0, "Resume-Button").setScale(0.4);

        PauseBox.setPosition(
          this.sys.canvas.width / 2,
          this.sys.canvas.height / 2
        );
        Resume.setPosition(this.sys.canvas.width / 2 + 390, 50);

        this.pauseContainer = this.add.container(0, 0, [PauseBox, Resume]);

        for (const achivement of Object.values(PlayerDatas[0].Achievements)) {
          const achievementImage = this.add
            .image(0, 0, "Achivement")
            .setScale(0.582);
          achievementImage.setPosition(
            this.sys.canvas.width / 2 + achivement.position.x,
            achivement.position.y
          );
          this.pauseContainer.add(achievementImage);

          let achievementText = this.add
            .text(0, 0, achivement.name, {
              fontSize: "20px",
              color: "#000",
              fontFamily: "Arial",
            })
            .setOrigin(0.5);

          if (achivement.isAchieved) {
            achievementText = this.add
              .text(0, 0, achivement.name, {
                fontSize: "20px",
                color: "#fff",
                fontFamily: "Arial",
              })
              .setOrigin(0.5);
          }

          achievementText.setPosition(
            this.sys.canvas.width / 2 + achivement.position.x,
            achivement.position.y
          );
          this.pauseContainer.add(achievementText);
        }

        const itemsContainer = this.add.container(0, 0);

        const offset = this.sys.canvas.width / 2 - 390;

        for (const item of Object.values(PlayerDatas[0].Items)) {
          const itemHolder = this.add.image(0, 0, "Item-Holder").setScale(0.5);
          itemHolder.setPosition(offset + item.position.x, item.position.y);
          itemsContainer.add(itemHolder);

          if (item.quantity > 0 || item.acquired) {
            const kupon = this.add.image(0, 0, item.image).setScale(1);
            kupon.setPosition(offset + item.position.x, item.position.y);
            itemsContainer.add(kupon);

            const kuponText = this.add
              .text(0, 0, item.quantity.toString(), {
                fontSize: "20px",
                color: "#fff",
                fontFamily: "Arial",
                fontStyle: "bold",
              })
              .setOrigin(0.5);

            kuponText.setPosition(
              offset + item.position.x + 20,
              item.position.y + 33
            );
            itemsContainer.add(kuponText);
          }
        }

        this.pauseContainer.add(itemsContainer);
        this.TutorialBox.destroy();
        this.TutorialText.destroy();
        this.boxPointer.destroy();
        this.boxPointer = this.add.rectangle(0, 0, 580, 50);
        this.boxPointer.setStrokeStyle(4, 0xff0000);

        this.boxPointer.setOrigin(0, 0);
        this.boxPointer.setPosition(this.sys.canvas.width / 2 - 290 - 170, 190);
        this.boxPointer.setSize(910, 180);

        this.TutorialBox = this.add.image(0, 0, "TutorialBox");
        this.TutorialBox.setDisplaySize(480, 200);

        this.TutorialBox.setPosition(
          this.sys.canvas.width / 2,
          this.sys.canvas.height / 2 + 200
        );
        this.TutorialText = this.add.text(
          this.TutorialBox.x,
          this.TutorialBox.y,
          "Achivement yang telah dicapai",
          {
            font: "28px Arial",
            wordWrap: { width: this.TutorialBox.displayWidth - 40 },
            color: "#ffffff",
            align: "center",
          }
        );
        this.TutorialText.setOrigin(0.5, 0.5);
        break;

      case 5:
        this.TutorialBox.setPosition(
          this.sys.canvas.width / 2,
          this.sys.canvas.height / 2 - 100
        );
        this.TutorialText.setText("Item yang telah diperoleh");
        this.TutorialText.setPosition(this.TutorialBox.x, this.TutorialBox.y -10);
        this.boxPointer.setOrigin(0, 0);
        this.boxPointer.setPosition(this.sys.canvas.width / 2 - 290 - 170, 390);
        this.boxPointer.setSize(510, 130);
        break;


        default:
          this.scene.stop();
          break;
    }
  }
}
