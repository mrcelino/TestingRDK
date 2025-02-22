import { Scene } from "phaser";
import { EventBus } from "../EventBus";
import { Player } from "./utils/Player";
import { Control } from "./utils/control";
import { npcsAnims } from "./utils/anims";
import direction, { catsData, npcs, tilesize } from "./utils/const";
import { Npc } from "./utils/Npc";
import { Panitia } from "./utils/Spesial NPC/Panitia";
import { Cat} from "./utils/Cat";
import GlobalFullscreenPlugin from "./utils/globalInitialize";
import { NPCMakan } from "./utils/Spesial NPC/NPCMakan";
import { NPCPemberiMakan } from "./utils/Spesial NPC/NPCPemberiMakan";
import NavMesh from "navmesh";
import { PemberiMakanKucing } from "./utils/Spesial NPC/PemberiMakanKucing";


interface Dictinary<T> {
    [key: string]: T;
}

export class GameScene extends Scene
{
    player!: Player;
    control!: Control;
    gender: string="Pria";
    textBoxContainer!: Phaser.GameObjects.Container;
    zoom!: number;
    objects:Dictinary<Phaser.Geom.Rectangle> = {};
    isInInteraction: boolean = false;
    npcs: Npc[]= [];
    cats: Cat[] = [];
    papanMarker!: Phaser.GameObjects.Sprite;
    standPenukaranPria!: Phaser.GameObjects.Sprite;
    standPenukaranWanita!: Phaser.GameObjects.Sprite;

    markerKursi1!:Phaser.GameObjects.Sprite;
    markerKursi2!:Phaser.GameObjects.Sprite;
    markerKursi3!:Phaser.GameObjects.Sprite;
    markerKursi4!:Phaser.GameObjects.Sprite;
    markerKursi5!:Phaser.GameObjects.Sprite;
    


    constructor ()
    {
        super('GameScene');
        
    }

    init(data:{gender: string}){
        this.gender = data.gender
        this.zoom = 4;
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

        
        this.loadAnimations();
        this.loadMap();


        EventBus.on('game-paused', () => {
            this.scene.pause();
            this.scene.stop('ControllerScene');

        });

        EventBus.on('game-resumed', () => {
            this.scene.resume();
            this.scene.launch('ControllerScene', {control: this.control});
        });

        this.scale.on('enterfullscreen', () => {
            this.scale.scaleMode = Phaser.Scale.ScaleModes.FIT;
            this.cameras.main.setZoom(this.zoom);
        });


        this.scale.on('leavefullscreen', () => {
            this.scale.scaleMode = Phaser.Scale.ScaleModes.NONE;
            this.cameras.main.setZoom(this.zoom);
        });
        this.scene.launch("TutorialScene");

        this.scene.get("TutorialScene").events.once('shutdown', () => {
            this.scene.launch("ControllerScene", { control: this.control });
            this.scene.launch('Pause', { player: this.player });
        });

        


        this.scale.refresh();

        EventBus.emit('current-scene-ready', this);

    }

    loadMap(){
       
        console.log(this.make.tilemap({ key: 'GameRDKVTWO' }));
        let map = this.make.tilemap({ key: 'GameRDKVTWO' });
        const tilesetNames = ['Maskam', 'Tangga', 'Papan', 'brikbaibrik', 'Grass', 'Rumput', 'ALA-14', 'ALA-14-14'];
        const tilesetNames2 = ["Basic_Grass_Biom_things", "Basic_Plants", "Wood_Bridge", "TEMPAT KUPON pria", "arumput", "brikbaibrik-08", "bunga love ", "Hills", "Kocheng-28", "kursi (3)", "Maskam Fixed-07-07", "Papan Fixed-11", "pohon", "rumput", "rumput (1)", "rumput (2)", "rumput (3)", "rumput (4)", "rumput (5)", "rumput (6)", "Rumput aw aw-13", "Tangga Fixed-09", "TEMPAT KUPON cewe"];
        const tilesetNames3 =["Maskam Fixed-07-07", "Tangga Fixed-09", "Papan Fixed-11", "brikbaibrik-08", "Basic_Grass_Biom_things", "Rumput aw aw-13", "Basic_Plants", "Kocheng-28", "kursi (3)", "TEMPAT KUPON cewe", "TEMPAT KUPON pria", "pohon", "bunga love ", "rumput (2)", "rumput (1)", "rumput (3)", "rumput (4)", "rumput (6)", "rumput (5)", "arumput", "Tilled_Dirt_v2", "Grass", "Hills", "Water", "rumput", "Wood_Bridge"];
        tilesetNames3.forEach(name => {
            map.addTilesetImage(name, name);
        });
        map.createLayer("Tile Layer 12", tilesetNames3)
        map.createLayer("Tile Layer 1", tilesetNames3)
        map.createLayer("Tile Layer 2", tilesetNames3)
        map.createLayer("Tile Layer 3", tilesetNames3)
        map.createLayer("pohon belakang", tilesetNames3)
        map.createLayer("pohon", tilesetNames3)
        map.createLayer("coba", tilesetNames3)
        map.createLayer("rumput", tilesetNames3)
        map.createLayer("Tile Layer 8", tilesetNames3)
        map.createLayer("Tile Layer 13", tilesetNames3)




        this.player = new Player(this, this.gender);



        this.cameras.main.startFollow(this.player.object).setScroll(0, 0);
        this.cameras.main.setZoom(this.zoom)

        this.setupCameras()
        this.addCats(map)
        this.addNpcs();
        this.addCollision(map)

        this.standPenukaranPria = this.add.sprite(169.60, 179.20, 'chat').setOrigin(0.5, 0.5).play("Chat");
        this.standPenukaranWanita = this.add.sprite(409.60, 182.40, 'chat').setOrigin(0.5, 0.5).play("Chat");

        this.player.object.setCollideWorldBounds(true)

        this.control = new Control( this);

    }

    update()
    {
        let directionPlayer:number[] = this.control.getDirectionKeysPressDown()!;
        this.player.move(directionPlayer);
        this.player.animate()

        let keys:string = this.control.getKeysPressDown();

        this.GameEvent(keys)
        this.player.PlayerInteraction();
    }

    addCollision(map: Phaser.Tilemaps.Tilemap){
        map.objects.forEach(layer => {
            if (layer.name === "Bounderies"){
                layer.objects.forEach(object => {
                    if (object){
                        const bound = this.add.rectangle(object.x! + object.width! / 2, object.y! + object.height! / 2, object.width!, object.height!, 0x000000, 0);
                        this.physics.add.existing(bound, true);
                        this.physics.add.collider(this.player.object, bound);
                    }
                });
            }
            if (layer.name == "Object Layer 1")
            {
                layer.objects.forEach(object => {
                    if (object.name){
                        const bound = this.add.rectangle(object.x! + object.width! / 2, object.y! + object.height! / 2, object.width!, object.height!, 0x000000, 0);
                        this.physics.add.existing(bound, true);
                        this.physics.add.collider(this.player.object, bound);
                        this.objects[object.name!] = new Phaser.Geom.Rectangle(object.x!, object.y!, object.width!, object.height!);
                    }
                    
                });
            }

        })
    }


    addNpcs(){
        npcs.forEach(npc => {
            if(npc.class === "NPC" ){
                this.npcs.push(new Npc(this, this.player, npc));
            }

            if(npc.class === "Panitia"){
                this.npcs.push(new Panitia(this, this.player, npc));
            }
            
            if(npc.class === "NPCMakan"){
                this.npcs.push(new NPCMakan(this, this.player, npc))
            }
            if(npc.class === "NPCPemberiMakanKucing"){
                this.npcs.push(new PemberiMakanKucing(this, this.player, npc))
            }
        });

    }

    addCats(map: Phaser.Tilemaps.Tilemap){
        const navmeshObjectLayer = map.getObjectLayer(`navmesh`);
        let navMesh: NavMesh | null
        if (navmeshObjectLayer) {
            const boundariesLayer = map.getObjectLayer(`Boundaries`);
        
            if (!boundariesLayer) {
            }
        const meshPolygonPoints = navmeshObjectLayer.objects
            .filter(obj => obj.polygon)
            .map(obj => obj.polygon!.map(point => ({ x: point.x + obj.x!, y: point.y + obj.y! })));
            navMesh = new NavMesh(meshPolygonPoints);
        }

        catsData.forEach(cat => {
            this.cats.push(new Cat(this, this.player, map, cat.tileset, cat.position, navMesh));
        })
    }

    loadAnimations(){
        this.anims.create({
            key: 'Chat',
            frames: this.anims.generateFrameNames('Chat', { start: 0, end: 3 }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({
            key: 'love',
            frames: this.anims.generateFrameNames('LoveIcon', { start: 0, end: 4 }),
            frameRate: 2,
            duration: 5000,
        });

        this.anims.create({
            key: "TandaSeru",
            frames: this.anims.generateFrameNames("TandaSeru", { start: 0, end: 4 }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({
            key: "TandaSeruOrange",
            frames: this.anims.generateFrameNames("TandaSeruOrange", { start: 0, end: 4 }),
            frameRate: 2,
            repeat: -1
        });

        // Play the animations on the scene
        for(let key in npcsAnims){
            for(let anim in npcsAnims[key]){
                const animConfig: any = npcsAnims[key][anim];
                animConfig.frames = animConfig.frames.map((frame: string) => ({ key: frame }));
                animConfig.duration = animConfig.duration || 1000;
                animConfig.duration += Math.random() * 200 - 100;
                this.anims.create(animConfig);
            }
        }

    }
    
    setupCameras(){
        this.cameras.main.setBounds(0, 0,32*16, 28*16);
        this.cameras.main.setRoundPixels(true);
    }

    GameEvent(keys:string){
        if(this.isInInteraction){
            return
        }


        if (keys === "space") {
            const playerRect = this.player.rectangle.getBounds();
            Object.keys(this.objects).forEach(key => {
                const object: Phaser.Geom.Rectangle = this.objects[key];
                const objectRect = new Phaser.Geom.Rectangle(object.x, object.y, object.width, object.height);
                if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, objectRect)){

                    if (key === "papan"){
                        this.setInInteraction(true)
                        this.control.setInInteraction(true);
    
                        this.scene.launch('papan');
                        this.scene.get('papan').events.once('shutdown', () => {
                            this.setInInteraction(false);
                            this.control.setInInteraction(false);
                        });
                    }else if (key === "PM-Masjid"){
                        this.setInInteraction(true)
                        this.control.setInInteraction(true);
                        
                        if(this.player.data.Items.Kupon.quantity === 1){
                            this.scene.launch("Textbox", { player: this.player, text: [
                                {
                                    name: "Player",
                                    dialogs:
                                      "Kajian tadi sangat menarik",
                                  },
                                  { 
                                    name: "Player", 
                                    dialogs: "Aku udah dapet kuponnya. Aku mungkin bisa menukarkannya di stand makanan"
                                },

                            ], order:  [[[0,1]]], callback: ()=>{
                                this.setInInteraction(false)
                                this.control.setInInteraction(false)
                            }, correctAnswer: [], npcProfile: "panitiaidle1", }, );
                        }else{
                            this.scene.launch('Masjid', {player: this.player});
                            this.scene.get('Masjid').events.once('shutdown', () => {
                                this.setInInteraction(false);
                                this.control.setInInteraction(false);
                                this.player.data.Items.Kupon.quantity =1;   
                                this.player.data.Items.Kupon.acquired =true;   
                                this.updateAfterMasjid()
                            });
                        }

                    }else if(key=== "KuponL"){
                        if(this.standPenukaranPria.active){
                            this.standPenukaranPria.destroy();
                        }

                        if(this.player.data.Items.Kupon.quantity !== 1){
                            this.setInInteraction(true)
                            this.control.setInInteraction(true)
                            this.scene.launch("Textbox", { player: this.player, text: [
                                {
                                    name: "Player",
                                    dialogs:
                                      "Assalamualaikum kak, ini stand apa kak?",
                                  },
                                  {
                                    name: "Tegar",
                                    dialogs:
                                      "Waalaikumsalam, ini stand penukaran kupon makanan dan iftar kak. Kupon ini bisa ditukar makanan atau iftar. Tapi maaf kak, masih siap siap dulu ya kak",
                                  },
                                  {
                                    name: "Tegar",
                                    dialogs:
                                      "Sementara kakak mengikuti kajian terlebih dahulu untuk dapetin tiketnya",
                                  },
                                  { 
                                    name: "Player", 
                                    dialogs: "Oh gitu makasih informasinya kak"
                                },
                                {
                                    name: "Tegar",
                                    dialogs: "Sama-sama kak"
                                }
                            ], order:  [[[0,1,2,3,4]]], callback: ()=>{
                                this.setInInteraction(false)
                                this.control.setInInteraction(false)
                            }, correctAnswer: [], npcProfile: "panitiaidle1", }, );
                            return
                        }

                        if(this.gender !== "Pria"){
                            
                            this.setInInteraction(true)
                            this.control.setInInteraction(true)
                            this.scene.launch("Textbox", { player: this.player, text: [
                                {
                                    name: "Player",
                                    dialogs:
                                      "Kak, aku dapet kupon ini. Bisa ditukarkan makanan kan, kak?",
                                  },
                                  {
                                    name: "Tegar",
                                    dialogs:
                                      "Kupon ini bisa buat tukar makanan atau iftar. Tapi maaf kak, tapi ini tempat penukaran untuk laki - laki kak!",
                                  },
                                  {
                                    name: "Tegar",
                                    dialogs:
                                      "Tempat penukaran perempuan ada di sebelah kanan",
                                  },
                                  { 
                                    name: "Player", 
                                    dialogs: "Oh gitu makasih informasinya kak"
                                },
                                {
                                    name: "Tegar",
                                    dialogs: "Sama-sama kak"
                                }
                            ], order:  [[[0,1,2,3,4]]], callback: ()=>{
                                this.setInInteraction(false)
                                this.control.setInInteraction(false)

                            }, correctAnswer: [], npcProfile: "panitiaidle1", }, );
                            return
                        }

                        if(this.player.data.Items.MakananRDK.acquired){
                            this.setInInteraction(true);
                            this.control.setInInteraction(true);
                            this.scene.launch("Textbox", {
                                player: this.player,
                                text: [
                                    {
                                        name: "Player",
                                        dialogs: "Terima kasih atas iftarnya kak",
                                    },
                                    {
                                        name: "Tegar",
                                        dialogs: "Sama sama, selamat menikmati",
                                    }

                                ],
                                order: [[[0, 1]]],
                                callback: () => {
                                    this.setInInteraction(false);
                                    this.control.setInInteraction(false);

                                },
                                correctAnswer: [],
                                npcProfile: "panitiaidle1",
                            });

                            return;
                        }   

                        this.setInInteraction(true)
                        this.control.setInInteraction(true)
                        this.scene.launch("Textbox", { player: this.player, text: [
                            {
                                name: "Player",
                                dialogs:
                                  "Kak, aku dapet kupon ini. Bisa ditukar sama apa aja?",
                              },
                              {
                                name: "Tegar",
                                dialogs:
                                  "Kupon ini bisa buat tukar makanan atau iftar. Tapi inget ya, sehari cuma dapet satu kupon!",
                              },
                              { 
                                name: "Player", 
                                dialogs: "Oh gitu… Kalau aku mau dapet hadiah tambahan, bisa nggak?"
                            },
                              {
                                name: "Tegar",
                                dialogs:
                                  "Bisa dong! Caranya, ikut Kajian Buka Bersama. Biasanya setelah kajian, kita bagiin kupon tambahan buat yang aktif. Jadi selain dapet ilmu, dapet bonus juga!",
                              },
                              {
                                name: "Player",
                                dialogs:
                                  "Wah, jadi makin semangat ikut kajian nih!",
                              },
                              {
                                name: "Tegar",
                                dialogs: "Nah, itu baru semangat RDK!"
                              },
                              {
                                name: "Player",
                                dialogs: "Alhamdulliah dapet iftar",
                            },
                            {
                                name: "Player",
                                dialogs: "Sekarang tinggal cari tempat untuk makan. Kayanya tadi aku liat ada kursi",
                            }
                        ], order:  [[[0,1,2,3,4,5,6,7]]], callback: ()=>{
                            this.setInInteraction(false)
                            this.control.setInInteraction(false)
                            this.player.data.Items.MakananRDK.acquired = true
                            this.player.data.Items.MakananRDK.quantity = 1
                            this.standPenukaranPria.destroy();
                            this.updateAfterMakanan();

                        }, correctAnswer: [], npcProfile: "panitiaidle1", }, );
                        
                    }else if(key === "KuponW"){
                        if(this.standPenukaranWanita.active){
                            this.standPenukaranWanita.destroy();
                        }


                        if(this.player.data.Items.Kupon.quantity !== 1){
                            
                            this.setInInteraction(true);
                            this.control.setInInteraction(true);
                            this.scene.launch("Textbox", { player: this.player, text: [
                                {
                                    name: "Player",
                                    dialogs:
                                      "Assalamualaikum kak, ini stand apa kak?",
                                  },
                                  {
                                    name: "Aisyah",
                                    dialogs:
                                      "Waalaikumsalam, ini stand penukaran kupon makanan dan iftar kak. Kupon ini bisa ditukar makanan atau iftar. Tapi maaf kak, masih siap siap dulu ya kak",
                                  },
                                  {
                                    name: "Aisyah",
                                    dialogs:
                                      "Sementara kakak mengikuti kajian terlebih dahulu untuk dapetin tiketnya",
                                  },
                                  { 
                                    name: "Player", 
                                    dialogs: "Oh gitu makasih informasinya kak"
                                },
                                {
                                    name: "Aisyah",
                                    dialogs: "Sama-sama kak"
                                }
                            ], order:  [[[0,1,2,3,4]]], callback: ()=>{
                                this.setInInteraction(false)
                                this.control.setInInteraction(false)
                            }, correctAnswer: [], npcProfile: "panitiaidle1Pr", }, );
                            return
                        }
                        if (this.gender !== "Wanita") {



                            
                            this.setInInteraction(true);
                            this.control.setInInteraction(true);
                            this.scene.launch("Textbox", { player: this.player, text: [
                                {
                                    name: "Player",
                                    dialogs: "Kak, aku dapet kupon ini. Kak, aku dapet kupon ini. Bisa ditukar sama apa aja?"
                                },
                                {
                                    name: "Aisyah",
                                    dialogs: "Kupon ini bisa buat tukar makanan atau iftar. Tapi kamu tampaknya berada di area yang salah untuk penukaran."
                                },
                                {
                                    name: "Aisyah",
                                    dialogs: "Tempat penukaran yang tepat untuk kamu, ada di sisi sebelah Kiri."
                                },
                                { 
                                    name: "Player", 
                                    dialogs: "Oh, begitu. Makasih banyak atas informasinya."
                                },
                                {
                                    name: "Aisyah",
                                    dialogs: "Sama-sama, kak!"
                                }
                            ], order:  [[[0,1,2,3,4]]], callback: ()=>{
                                this.setInInteraction(false)
                                this.control.setInInteraction(false)
                                this.standPenukaranWanita.destroy();
                            }, correctAnswer: [], npcProfile: "panitiaidle1Pr", }, );
                            return;
                        }

                        if(this.player.data.Items.MakananRDK.acquired){
                            this.setInInteraction(true);
                            this.control.setInInteraction(true);
                            this.scene.launch("Textbox", {
                                player: this.player,
                                text: [
                                    {
                                        name: "Player",
                                        dialogs: "Terima kasih atas iftarnya kak",
                                    },
                                    {
                                        name: "Aisyah",
                                        dialogs: "Sama sama, selamat menikmati",
                                    }

                                ],
                                order: [[[0, 1]]],
                                callback: () => {
                                    this.setInInteraction(false);
                                    this.control.setInInteraction(false);

                                },
                                correctAnswer: [],
                                npcProfile: "panitiaidle1Pr",
                            });

                            return;
                        }   

                        this.setInInteraction(true);
                        this.control.setInInteraction(true);
                        this.scene.launch("Textbox", {
                            player: this.player,
                            text: [
                                {
                                    name: "Player",
                                    dialogs: "Kak, aku dapet kupon ini. Bisa ditukar sama apa aja?",
                                },
                                {
                                    name: "Aisyah",
                                    dialogs: "Kupon ini bisa buat tukar makanan atau iftar. Tapi inget ya, sehari cuma dapet satu kupon!",
                                },
                                {
                                    name: "Player",
                                    dialogs: "Oh gitu… Kalau aku mau dapet hadiah tambahan, bisa nggak?",
                                },
                                {
                                    name: "Aisyah",
                                    dialogs: "Bisa dong! Caranya, ikut Kajian Buka Bersama. Biasanya setelah kajian, kita bagiin kupon tambahan buat yang aktif. Jadi selain dapet ilmu, dapet bonus juga!",
                                },
                                {
                                    name: "Player",
                                    dialogs: "Wah, jadi makin semangat ikut kajian nih!",
                                },
                                {
                                    name: "Aisyah",
                                    dialogs: "Nah, itu baru semangat RDK!",
                                },
                                {
                                    name: "Player",
                                    dialogs: "Alhamdulliah dapet iftar",
                                },
                                {
                                    name: "Player",
                                    dialogs: "Sekarang tinggal cari tempat untuk makan. Kayanya tadi aku liat ada kursi",
                                }
                            ],
                            order: [[[0, 1, 2, 3, 4, 5,6,7]]],
                            callback: () => {
                                this.setInInteraction(false);
                                this.control.setInInteraction(false);
                                this.player.data.Items.MakananRDK.acquired = true;
                                this.player.data.Items.MakananRDK.quantity = 1;
                                this.updateAfterMakanan();
                            },
                            correctAnswer: [],
                            npcProfile: "panitiaidle1Pr",
                        });
                    }else if(key === "Kursi1" || key === "Kursi2" ||  key === "Kursi3" ||  key === "Kursi4" ||  key === "Kursi5" ){
                        this.setInInteraction(true)
                        this.control.setInInteraction(true);
                        if(this.player.data.Items.MakananRDK.acquired){
                            this.scene.launch("Textbox", { player: this.player, text: [
                                {
                                    name: "Player",
                                    dialogs:
                                      "Kursi ini terlihat nyaman ya",
                                  },
                                  {
                                    name: "Player",
                                    dialogs:
                                      "Mungkin aku bisa makan di sini",
                                  },
                                  {
                                    name: "Player",
                                    dialogs:
                                      "Akhiri Game",
                                  },
                                  {
                                    name: "Player",
                                    dialogs:
                                      "Tunggu sebentar",
                                  }
                            ], order:  [[[0,1,],[2],[3]]], callback: ()=>{
                                this.scene.stop('ControllerScene');
                                this.scene.launch('Ending', {player: this.player});
                            }, correctAnswer: [1], npcProfile: "panitiaidle1", }, );

                            this.scene.get('Textbox').events.once('shutdown', () => {
                                this.control.setInInteraction(false)
                                this.setInInteraction(false)
                            });
                        }else{
                            this.scene.launch("Textbox", { player: this.player, text: [
                                {
                                    name: "Player",
                                    dialogs:
                                      "Kursi ini terlihat nyaman ya",
                                  }

                            ], order:  [[[0]]], callback: ()=>{
                                this.control.setInInteraction(false);
                                this.setInInteraction(false);
                            }, correctAnswer: [], npcProfile: "panitiaidle1", }, );
                            
                        }

                    }

                }
            });

            this.npcs.forEach(npc => {
                const npcRect = npc.sprite.getBounds();
                if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, npcRect)){
                    this.setInInteraction(true)
                    this.control.setInInteraction(true);
                    npc.interact()
                    this.scene.get("Textbox").events.once('shutdown', () => {
                        this.setInInteraction(false);
                        this.control.setInInteraction(false);
                    });
                }
            })

            this.cats.forEach(cat => {
                const catRect = cat.sprite.getBounds();
                if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, catRect)){
                    this.setInInteraction(true)
                    this.control.setInInteraction(true);
                    cat.interact()
                    if(this.player.catQuest === 0){
                        this.scene.launch("Textbox", {
                            player: this.player,
                            text: [
                                {
                                    name: "Player",
                                    dialogs: "Kucing kecil, kasihan keliatannya lapar",
                                }
       
                            ],
                            order: [[[0]]],
                            callback: () => {
                                this.setInInteraction(false);
                                this.control.setInInteraction(false);
                                this.time.delayedCall(5000, () => {
                                    cat.interact();
                                });
                            },
                            correctAnswer: [],
                            npcProfile: "catProfile",
                        });
                        return
                    }



                    if(!cat.getFood){
                        this.scene.launch("Textbox", {
                            player: this.player,
                            text: [
                                {
                                    name: "Player",
                                    dialogs: "Hei kucing kecil! Sedang apa kamu?",
                                },
                                {
                                    name: "Player",
                                    dialogs: "Kamu terlihat suka bermain. Apakah kamu butuh sesuatu?",
                                },
                                {
                                    name: "Player",
                                    dialogs: "Beri Makanan Kucing",
                                }
                            ],
                            order: [[[0, 1 ],[2]]],
                            callback: () => {
                                this.setInInteraction(false);
                                this.control.setInInteraction(false);
                                this.player.catCounter++;
                                cat.getCatsFood();
                                this.player.data.Items.MakananKucing.quantity--;
                                this.time.delayedCall(5000, () => {
                                    cat.interact();
                                });
                            },
                            correctAnswer: [],
                            npcProfile: "catProfile",
                        });
                    }else{
                        this.scene.launch("Textbox", {
                            player: this.player,
                            text: [
                                {
                                    name: "Player",
                                    dialogs: "Cepat besar ya kucing kecil!",
                                }
                            ],
                            order: [[[0]]],
                            callback: () => {
                                this.setInInteraction(false);
                                this.control.setInInteraction(false);
                                cat.getCatsFood();
                                this.time.delayedCall(2000, () => {
                                    cat.interact();
                                });
                            },
                            correctAnswer: [],
                            npcProfile: "catProfile",
                        });
                    }
                }
            })
        }
    }

    updateAfterMasjid(){
        this.npcs.forEach(npc => {
            if (npc.data.class === "NPCMakan") {
                (npc as NPCMakan).updateAfterMasjid();
            }
            
        });

        npcs.forEach(npc => {
            if(npc.class === "NPCPemberiMakan"){
                this.npcs.push(new NPCPemberiMakan(this, this.player, npc))
            }
        });

        this.standPenukaranPria.destroy();
        this.standPenukaranWanita.destroy();

        this.standPenukaranPria = this.add.sprite(169.60, 179.20 -5, 'TandaSeru').setOrigin(0.5, 0.5).play("TandaSeru").setScale(0.8);
        this.standPenukaranWanita = this.add.sprite(409.60, 182.40 -5, 'TandaSeru').setOrigin(0.5, 0.5).play("TandaSeru").setScale(0.8);
        


    }

    updateAfterMakanan(){
        this.markerKursi1 = this.add.sprite(336, 137.20, 'TandaSeru').setOrigin(0.5, 0.5).play("TandaSeru").setScale(0.8);
        this.markerKursi2 = this.add.sprite(176, 281.60, 'TandaSeru').setOrigin(0.5, 0.5).play("TandaSeru").setScale(0.8);
        this.markerKursi3 = this.add.sprite(32, 281.60, 'TandaSeru').setOrigin(0.5, 0.5).play("TandaSeru").setScale(0.8);
        this.markerKursi4 = this.add.sprite(336, 345.60, 'TandaSeru').setOrigin(0.5, 0.5).play("TandaSeru").setScale(0.8);
        this.markerKursi5 = this.add.sprite(400, 345.60, 'TandaSeru').setOrigin(0.5, 0.5).play("TandaSeru").setScale(0.8);
    }

    public setInInteraction(value: boolean){
        this.isInInteraction = value;

        if (value){
            this.scene.stop('Pause');
            this.scene.stop('ControllerScene');
        }else{
            this.scene.launch('Pause');
            this.scene.launch('ControllerScene', {control: this.control});
        }
    }
}