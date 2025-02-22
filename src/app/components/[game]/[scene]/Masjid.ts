import { Data, Scene } from "phaser";
import { EventBus } from "../EventBus";
import { Player } from "./utils/Player";
import { DIALOG } from "./utils/const";
import { es } from "date-fns/locale";

    

interface DataMasjid {
    text: DIALOG[];
    order: number[][][];
    callback: Function | null;
    correctAnswer: number[];
}

const dataMasjid: DataMasjid = {

    "text": [
        {
            "name": "Ustad",
            "dialogs": "Assalamu'alaikum warahmatullahi wabarakatuh. Selamat datang di kajian kita hari ini. Pada kesempatan kali ini, kita akan membahas tentang pentingnya meningkatkan kualitas ibadah dalam kehidupan sehari-hari."
        },
        {
            "name": "Ustad",
            "dialogs": "Sebagai umat Muslim, kita harus senantiasa berusaha memperbaiki diri dan mendekatkan diri kepada Allah. Ibadah bukan hanya sebatas shalat dan puasa, tetapi juga mencakup akhlak dan perilaku kita sehari-hari."
        },
        {
            "name": "Ustad",
            "dialogs": "Bagaimana kita berinteraksi dengan orang lain, bagaimana kita menjaga lisan, serta bagaimana kita menunjukkan rasa syukur atas nikmat yang diberikan Allah, semua itu juga bagian dari ibadah."
        },
        {
            "name": "Ustad",
            "dialogs": "Membaca Al-Qur'an dan memahami maknanya adalah salah satu cara untuk meningkatkan kualitas ibadah kita. Dengan memahami Al-Qur'an, kita bisa mendapatkan petunjuk hidup yang benar dan menjadikan diri kita lebih baik dari sebelumnya."
        },
        {
            "name": "Ustad",
            "dialogs": "Oleh karena itu, mari kita biasakan membaca dan mengamalkan isi Al-Qur'an dalam kehidupan kita. Selain itu, kita juga dianjurkan untuk memperbanyak sedekah dan membantu sesama."
        },
        {
            "name": "Ustad",
            "dialogs": "Sedekah bukan hanya tentang harta, tetapi juga bisa berupa tenaga, waktu, atau bahkan senyuman yang tulus. Dengan bersedekah, kita tidak hanya membantu orang lain tetapi juga membersihkan hati dan mendekatkan diri kepada Allah."
        },
        {
            "name": "Ustad",
            "dialogs": "Menjaga hubungan baik dengan sesama juga merupakan bagian dari ibadah. Rasulullah SAW mencontohkan bagaimana pentingnya bersikap lemah lembut dan penuh kasih sayang kepada semua orang, baik Muslim maupun non-Muslim."
        },
        {
            "name": "Ustad",
            "dialogs": "Jangan biarkan amarah dan kesombongan menghalangi kita untuk berbuat baik. Sekarang, saya ingin bertanya kepada kalian. Menurut kalian, apa saja yang bisa kita lakukan untuk terus meningkatkan kualitas ibadah dalam kehidupan kita sehari-hari?"
        },
        {
            "name": "Player",
            "dialogs": "Untuk meningkatkan kualitas ibadah, kita bisa mulai dengan memperbaiki niat, menjalankan ibadah dengan lebih khusyuk, serta selalu berusaha memperbaiki akhlak dalam kehidupan sehari-hari."
        },
        {
            "name": "Ustad",
            "dialogs": "Masya Allah, jawaban yang sangat baik. Itulah yang seharusnya kita lakukan sebagai seorang Muslim. Dengan niat yang ikhlas dan usaha yang sungguh-sungguh, kita bisa menjadi pribadi yang lebih baik setiap harinya."
        },
        {
            "name": "Player",
            "dialogs": "Kita hanya perlu beribadah saat memiliki waktu luang, karena yang terpenting adalah niat dalam hati saja, tidak perlu terlalu sering melaksanakannya."
        },
        {
            "name": "Ustad",
            "dialogs": "Masya Allah, jawaban yang benar sangat baik dan mencerminkan pemahaman yang mendalam tentang ibadah. Namun, jawaban yang salah kurang tepat."
        },
        {
            "name": "Ustad",
            "dialogs": "Ibadah bukan hanya dilakukan saat kita memiliki waktu luang, tetapi harus menjadi bagian dari kehidupan kita sehari-hari. Allah mencintai hamba-Nya yang istiqamah, yang terus beribadah dengan konsisten, meskipun sedikit demi sedikit."
        },
        {
            "name": "Ustad",
            "dialogs": "Oleh karena itu, mari kita perbaiki pemahaman kita dan terus berusaha menjadi lebih baik dalam beribadah. Semoga kita semua bisa terus meningkatkan kualitas ibadah kita dan menjalani hidup yang lebih bermakna dengan penuh keimanan dan ketakwaan."
        },
        {
            "name": "Ustad",
            "dialogs": "Jangan lupa untuk selalu berdoa agar Allah memudahkan langkah kita dalam meraih kebaikan."
        }
    ],
    order:[[[0,1,2,3,4,5,6,7],[8,9],[10,11,12,13]]],
    callback: null,
    correctAnswer: [1]
}




export class Masjid extends Scene
{
    player!: Player;
    datalogs!: DataMasjid;

    constructor(){
        super('Masjid');
    }

    init(data:{player: Player}){
        this.player = data.player;
        const jsonData = this.cache.json.get('masjidData');

        if (!jsonData || !jsonData.data || jsonData.data.length === 0) {
            this.datalogs = dataMasjid;
        }else{
            const rawData = jsonData.data[0];
            const parsedData: DataMasjid = {
                text: rawData.text,
                order: rawData.order,
                callback: rawData.callback || null,
                correctAnswer: rawData.correctAnswer
            };
            this.datalogs = parsedData;
        }


    }

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

        const { width, height } = this.scale;
        this.add.image(0, 0, 'Masjid').setOrigin(0, 0).setDisplaySize(width, height);
        this.datalogs.callback = () => {
            this.player.data.Achievements.achievement2.isAchieved = true;
        }
        this.scene.launch('Textbox', {player: this.player, text:{ ...this.datalogs.text}, order: JSON.parse(JSON.stringify(this.datalogs.order)), callback: this.datalogs.callback, correctAnswer: JSON.parse(JSON.stringify(this.datalogs  .correctAnswer)), npcProfile: "panitiaidle1",}, );
        this.scene.get('Textbox').events.on('shutdown', () => {
            this.scene.stop();
        });

        EventBus.emit('current-scene-ready', this);
    }
}
