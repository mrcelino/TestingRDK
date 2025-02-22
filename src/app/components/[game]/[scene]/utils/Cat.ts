import { Tilemaps } from "phaser";
import { Player } from "./Player";
import { NavMesh } from "navmesh";
import { ca, th } from "date-fns/locale";
import { catsData } from "./const";

export class Cat {
    scene: Phaser.Scene;
    player: Player;
    sprite: Phaser.Physics.Arcade.Sprite;
    navMesh: NavMesh;
    path: Phaser.Math.Vector2[] = [];
    speed: number = 32; // Speed of movement
    map: Tilemaps.Tilemap;
    tileset:string;
    currentTargetPosition?: Phaser.Math.Vector2|null;
    lastAnimation: string = '';
    getFood: boolean = false;
    inInteraction: boolean = false;
    needReset: boolean = false;

    constructor(scene: Phaser.Scene, player: Player, map: Tilemaps.Tilemap, tileset:string, position: {x: number, y: number}, navMesh: NavMesh) {
        this.scene = scene;
        this.player = player;
        this.tileset = tileset
        this.sprite = this.scene.physics.add.sprite(position.x, position.y, this.tileset, 36).setScale(0.5);
        this.map = map;
        this.navMesh = navMesh

        this.loadAnimations();
        this.create();
        this.sprite.setOrigin(0.5, 0.5); // Center anchor
        this.sprite.setBodySize(this.sprite.width * 0.5, this.sprite.height * 0.5);

    }

    create() {
        this.sprite.setImmovable(true);
        this.scene.physics.add.collider(this.player.object, this.sprite);
        this.sprite.setBodySize(this.sprite.width, this.sprite.height - 10, false);
        this.sprite.setOffset(0, 10);
        
        this.sprite.play(`${this.tileset}LookingAroundDown`, true);

        

        this.moving();

    }

    moveTo(targetX: number, targetY: number) {
        if (!this.navMesh) return;

        const start = new Phaser.Math.Vector2(this.sprite.x, this.sprite.y);
        const end = new Phaser.Math.Vector2(targetX, targetY);
    
        // ✅ Find the path
        const pathPoints = this.navMesh.findPath(start, end);
        if (!pathPoints || pathPoints.length === 0) {   
            this.moving()
            return;
        }
    
        this.path = pathPoints.map(point => new Phaser.Math.Vector2(point.x, point.y));
    
    
        if (this.path.length > 0) {
            this.followPath();
        }
    }
    
    followPath() {
        if (this.path.length === 0) {
            this.sprite.play(`${this.tileset}SitingDownDown`);
            this.sprite.once('animationcomplete', () => {
                this.sprite.play({ key: `${this.tileset}LookingAroundDown`, repeat: -1 });
                this.currentTargetPosition = null;
                this.scene.time.delayedCall(10000, () => {
                    if(this.inInteraction) {
                        this.needReset = true;
                        return;}
                    this.moving();``
                });
            });

            return;
        }
    
        const nextPoint = this.path.shift(); 
        if (!nextPoint) return;
        this.currentTargetPosition = nextPoint;
    
        const angle = Phaser.Math.Angle.Between(this.sprite.x, this.sprite.y, nextPoint.x, nextPoint.y);
        if (angle >= -Math.PI / 8 && angle <= Math.PI / 8) {
            this.sprite.play({ key: `${this.tileset}WalkingRight`, repeat: -1 });
        } else if (angle > Math.PI / 8 && angle < 3 * Math.PI / 8) {
            this.sprite.play({ key: `${this.tileset}WalkingRightDown`, repeat: -1 });
        } else if (angle >= 3 * Math.PI / 8 && angle <= 5 * Math.PI / 8) {
            this.sprite.play({ key: `${this.tileset}WalkingDown`, repeat: -1 });
        } else if (angle > 5 * Math.PI / 8 && angle < 7 * Math.PI / 8) {
            this.sprite.play({ key: `${this.tileset}WalkingLeftDown`, repeat: -1 });
        } else if (angle >= 7 * Math.PI / 8 || angle <= -7 * Math.PI / 8) {
            this.sprite.play({ key: `${this.tileset}WalkingLeft`, repeat: -1 });
        } else if (angle < -5 * Math.PI / 8 && angle > -7 * Math.PI / 8) {
            this.sprite.play({ key: `${this.tileset}WalkingLeftUp`, repeat: -1 });
        } else if (angle <= -3 * Math.PI / 8 && angle >= -5 * Math.PI / 8) {
            this.sprite.play({ key: `${this.tileset}WalkingUp`, repeat: -1 });
        } else {
            this.sprite.play({ key: `${this.tileset}WalkingRightUp`, repeat: -1 });
        }
    
        // ✅ Ensure duration is reasonable
        const duration = (Phaser.Math.Distance.Between(
            this.sprite.x, this.sprite.y, nextPoint.x, nextPoint.y
        ) / this.speed) * 1000; // Convert to milliseconds
    
        this.scene.tweens.add({
            targets: this.sprite,
            x: { from: this.sprite.x, to: nextPoint.x, round: true },
            y: { from: this.sprite.y, to: nextPoint.y, round: true },
            duration: duration,
            ease: "Linear",
            onUpdate: () => {
                if (Phaser.Math.Distance.Between(this.sprite.x, this.sprite.y, nextPoint.x, nextPoint.y) < 1) {
                    this.sprite.setPosition(nextPoint.x, nextPoint.y);
                }
            },
            onComplete: () => {
                this.sprite.setPosition(nextPoint.x, nextPoint.y); // ✅ Prevent floating-point drift
                this.followPath();
            },
        });
    }
    

    loadAnimations()
    {
        this.scene.anims.create({
            key: `${this.tileset}LookingAroundDown`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [36, 37, 38,39,68, 39, 38,37] }),
            frameRate: 3,
        });

        this.scene.anims.create({
            key: `${this.tileset}LookingAroundRight`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [420,421, 422, 423, 452] }),
            frameRate: 3,
        });

        this.scene.anims.create({
            key: `${this.tileset}LookingAroundUp`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [292, 293, 294, 295, 324] }),
            frameRate: 3,
        });

        this.scene.anims.create({
            key: `${this.tileset}LookingAroundLeft`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [164, 165, 166, 167, 196] }),
            frameRate: 3,
        });

        this.scene.anims.create({
            key: `${this.tileset}LayingDownDown`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [40, 41, 42, 43, 72, 73,74,75] }),
            frameRate: 10,
        });

        this.scene.anims.create({
            key: `${this.tileset}LayingDownRight`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [424, 425, 426, 427, 456, 457, 458, 459] }),
            frameRate: 10,
        });

        this.scene.anims.create({
            key: `${this.tileset}LayingDownUp`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [296, 297, 298, 299, 328, 329, 330, 331] }),
            frameRate: 10,
        });

        this.scene.anims.create({
            key: `${this.tileset}LayingDownLeft`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [168, 169, 170, 171, 200, 201, 202, 203] }),
            frameRate: 10,
        });

        this.scene.anims.create({
            key: `${this.tileset}SitingDownDown`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [32, 33,34,35,64,65,66] }),
            frameRate: 10,
        });

        this.scene.anims.create({
            key: `${this.tileset}SitingDownRight`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [416, 417, 418, 419, 448, 449, 450, 451] }),
            frameRate: 10,
        });

        this.scene.anims.create({
            key: `${this.tileset}SitingDownUp`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [288, 289, 290, 291, 320, 321, 322, 323] }),
            frameRate: 10,
        });

        this.scene.anims.create({
            key: `${this.tileset}SitingDownLeft`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [160, 161, 162, 163, 192, 193, 194, 195] }),
            frameRate: 10,
        });

        this.scene.anims.create({
            key: `${this.tileset}WalkingDown`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [44,45,46,47] }),
            frameRate: 4,
        });

        this.scene.anims.create({
            key: `${this.tileset}WalkingLeftDown`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [108, 108,110,111] }),
            frameRate: 4,
        });



        this.scene.anims.create({
            key: `${this.tileset}WalkingRight`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [428,429,430,431] }),
            frameRate: 4,
        });

        this.scene.anims.create({
            key: `${this.tileset}WalkingRightDown`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [492,493,494,495] }),
            frameRate: 4,
        });

        this.scene.anims.create({
            key: `${this.tileset}WalkingRightUp`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [364,365.366,367] }),
            frameRate: 4,
        });



        this.scene.anims.create({
            key: `${this.tileset}WalkingUp`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [300,301,302,303] }),
            frameRate: 4,
        });

        this.scene.anims.create({
            key: `${this.tileset}WalkingLeftUp`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [236,237,238,239] }),
            frameRate: 4,
        });

        this.scene.anims.create({
            key: `${this.tileset}WalkingLeft`,
            frames: this.scene.anims.generateFrameNumbers(this.tileset, { frames: [172,173,174,175] }),
            frameRate: 4,
        });

    }


    moving(){
        const objectLayer = this.map.getObjectLayer(`navmesh`);
        if (objectLayer && objectLayer.objects.length > 0) {
            const randomIndex = Phaser.Math.Between(0, objectLayer.objects.length - 1);
            const randomObject = objectLayer.objects[randomIndex];
            if (randomObject.x !== undefined && randomObject.y !== undefined && randomObject.width !== undefined && randomObject.height !== undefined) {
                var randomPoint = {
                    x: Phaser.Math.Between(randomObject.x, randomObject.x + randomObject.width),
                    y: Phaser.Math.Between(randomObject.y, randomObject.y + randomObject.height)
                };
                this.moveTo(randomPoint.x, randomPoint.y);
            }
        }
    }


    interact() {
        const tweens = this.scene.tweens.getTweensOf(this.sprite);
        this.inInteraction = this.inInteraction? false : true;

        if (tweens.length > 0) {
            if (tweens[0].isPlaying()) { 
                tweens.forEach(tween => tween.pause());
                const currentAnimation = this.sprite.anims.getName();
                this.lastAnimation = currentAnimation;
                this.sprite.play(`${this.tileset}SitingDownDown`);
                this.sprite.once('animationcomplete', () => {
                    this.sprite.play({ key: `${this.tileset}LookingAroundDown`, repeat: -1 });
                });
                this.inInteraction = true;
            } else {
                this.sprite.play(this.lastAnimation);
                tweens.forEach(tween => tween.resume()); 

                if(this.sprite.body!.velocity.x !== 0 || this.sprite.body!.velocity.y !== 0){
                    this.moving();
                }
            }
        } 

        if(this.needReset){
            this.needReset = false;
            this.inInteraction = false;
            this.moving();
        }
    }

    getCatsFood(){
        this.getFood = true;
        
        const loveSprite = this.scene.add.sprite(this.sprite.x, this.sprite.y - 5, 'love').setOrigin(0.5, 0.5).play("love").setScale(0.5);
        loveSprite.on('animationcomplete', () => {
            loveSprite.destroy();
        });
        const catQuantity = catsData.length;
        if(this.player.catCounter === catQuantity){
            this.player.data.Achievements.achievement3.isAchieved = true;
        }
    }
}
