const direction = {
  UP: 0,
  DOWN: 1,
  LEFT: 2,
  RIGHT: 3,
  NONE: 4,
};

export const tilesize = 16;

export interface NPC {
  name: string;
  dialogs: DIALOG[];
  order: number[][][];
  correctAnswer: number[];
  position: { x: number; y: number };
  frames: string[];
  src: string[];
  class: string;
  isInteracted?: boolean;
}

export interface DIALOG {
  name: string;
  dialogs: string;
}
// export const npcs: NPC[] = [
//     // {
//     // name: "panitia",
//     // dialogs: [
//     //     {
//     //         name: "panitia",
//     //         dialogs: "Halo, selamat datang di acara kami!"
//     //     },
//     //     {
//     //         name: "Player",
//     //         dialogs: "Terima kasih, senang berada di sini."
//     //     }
//     // ],
//     // order: [[[0,1]]],
//     // correctAnswer:[],
//     // position: { x: 345.25, y: 216.25 },
//     // frames: ["panitiaidle1", "panitiaidle2"],
//     // src: ["/assets/game/Karakter RDK/Panitia RDK/Panit lk (1).png", "/assets/game/Karakter RDK/Panitia RDK/Panit lk (2).png"],
//     // class: "Panitia"
//     // },
//     // {
//     //     name: "PengunjungIjoLk",
//     //     dialogs: [
//     //         {
//     //             name: "PengunjungIjoLk",
//     //             dialogs: "Hai, sudah lama tidak bertemu!"
//     //         },
//     //         {
//     //             name: "Player",
//     //             dialogs: "Iya, sudah lama sekali."
//     //         }
//     //     ],
//     //     order: [[[0,1]]],
//     //     correctAnswer:[],
//     //     position: { x: 492.67, y: 250.67 },
//     //     frames: ["PengunjungIjoLk1", "PengunjungIjoLk2"],
//     //     src: ["/assets/game/Karakter RDK/Pengunjung/Ijo/Peng ijo lk (1).png", "/assets/game/Karakter RDK/Pengunjung/Ijo/Peng ijo lk (2).png"],
//     //     class: "NPC"
//     // },
//     // {
//     //     name: "PengunjungIjoPr",
//     //     dialogs: [
//     //         {
//     //             name: "PengunjungIjoPr",
//     //             dialogs: "Selamat pagi, bagaimana kabarmu?"
//     //         },
//     //         {
//     //             name: "Player",
//     //             dialogs: "Pagi, kabar baik. Kamu?"
//     //         }
//     //     ],
//     //     order: [[[0,1]]],
//     //     correctAnswer:[],
//     //     position: { x: 342.50, y: 45.50 },
//     //     frames: ["PengunjungIjoPr1", "PengunjungIjoPr2"],
//     //     src: ["/assets/game/Karakter RDK/Pengunjung/Ijo/Peng ijo pr (1).png", "/assets/game/Karakter RDK/Pengunjung/Ijo/Peng ijo pr (2).png"],
//     //     class: "NPC"
//     // },
//     // {
//     //     name: "PengunjungMerahLk",
//     //     dialogs: [
//     //         {
//     //             name: "PengunjungMerahLk",
//     //             dialogs: "Apa yang kamu lakukan di sini?"
//     //         },
//     //         {
//     //             name: "Player",
//     //             dialogs: "Hanya berjalan-jalan."
//     //         }
//     //     ],
//     //     order: [[[0,1]]],
//     //     correctAnswer:[],
//     //     position: { x:  187.50, y: 246.50  },
//     //     frames: ["PengunjungMerahLk1", "PengunjungMerahLk2"],
//     //     src: ["/assets/game/Karakter RDK/Pengunjung/Merah/Peng merah lk (1).png", "/assets/game/Karakter RDK/Pengunjung/Merah/Peng merah lk (2).png"],
//     //     class: "NPC"
//     // },
//     // {
//     //     name: "PengunjungMerahPr",
//     //     dialogs: [
//     //         {
//     //             name: "PengunjungMerahPr",
//     //             dialogs: "Senang bertemu denganmu!"
//     //         },
//     //         {
//     //             name: "Player",
//     //             dialogs: "Senang bertemu denganmu juga!"
//     //         }
//     //     ],
//     //     order: [[[0,1]]],
//     //     correctAnswer:[],
//     //     position: { x: 105.50, y: 154 },
//     //     frames: ["PengunjungMerahPr1", "PengunjungMerahPr2"],
//     //     src: ["/assets/game/Karakter RDK/Pengunjung/Merah/Peng merah pr (1).png", "/assets/game/Karakter RDK/Pengunjung/Merah/Peng merah pr (2).png"],
//     //     class: "NPC"
//     // },
//     // {
//     //     name: "PengunjungPutihBiruLk",
//     //     dialogs: [
//     //         {
//     //             name: "PengunjungPutihBiruLk",
//     //             dialogs: "Apakah kamu menikmati acara ini?"
//     //         },
//     //         {
//     //             name: "Player",
//     //             dialogs: "Ya, sangat menyenangkan!"
//     //         }
//     //     ],
//     //     order: [[[0,1]]],
//     //     correctAnswer:[],
//     //     position: { x: 135.50, y: 40  },
//     //     frames: ["PengunjungPutihBiruLk1", "PengunjungPutihBiruLk2"],
//     //     src: ["/assets/game/Karakter RDK/Pengunjung/Putih-Biru/Putih biru lk (1).png", "/assets/game/Karakter RDK/Pengunjung/Putih-Biru/Putih biru lk (2).png"],
//     //     class: "NPC"
//     // },
//     // {
//     //     name: "PengunjungPutihBiruPr",
//     //     dialogs: [
//     //         {
//     //             name: "PengunjungPutihBiruPr",
//     //             dialogs: "Bagaimana pendapatmu tentang acara ini?"
//     //         },
//     //         {
//     //             name: "Player",
//     //             dialogs: "Acara ini sangat bagus!"
//     //         }
//     //     ],
//     //     order: [[[0,1]]],
//     //     correctAnswer:[],
//     //     position: { x: 67.50 , y: 420  },
//     //     frames: ["PengunjungPutihBiruPr1", "PengunjungPutihBiruPr2"],
//     //     src: ["/assets/game/Karakter RDK/Pengunjung/Putih-Biru/Putih biru pr (1).png", "/assets/game/Karakter RDK/Pengunjung/Putih-Biru/Putih biru pr (2).png"],
//     //     class: "NPC"
//     // },
//     // {
//     //     name: "PengunjungPutihPutihLk",
//     //     dialogs: [
//     //         {
//     //             name: "PengunjungPutihPutihLk",
//     //             dialogs: "Apakah kamu sudah mencoba makanan di sini?"
//     //         },
//     //         {
//     //             name: "Player",
//     //             dialogs: "Belum, tapi aku akan mencobanya nanti."
//     //         }
//     //     ],
//     //     order: [[[0,1]]],
//     //     correctAnswer:[],
//     //     position: { x: 212, y: 200 },
//     //     frames: ["PengunjungPutihPutihLk1", "PengunjungPutihPutihLk2"],
//     //     src: ["/assets/game/Karakter RDK/Pengunjung/Putih-Putih/Peng putih lk (1).png", "/assets/game/Karakter RDK/Pengunjung/Putih-Putih/Peng putih lk (2).png"],
//     //     class: "NPC"
//     // },
//     // {
//     //     name: "PengunjungPutihPutihPr",
//     //     dialogs: [
//     //         {
//     //             name: "PengunjungPutihPutihPr",
//     //             dialogs: "Apakah kamu datang sendirian?"
//     //         },
//     //         {
//     //             name: "Player",
//     //             dialogs: "Tidak, aku datang bersama teman-teman."
//     //         }
//     //     ],
//     //     order: [[[0,1]]],
//     //     correctAnswer:[],
//     //     position: { x: 314, y: 410.33 },
//     //     frames: ["PengunjungPutihPutihPr1", "PengunjungPutihPutihPr2"],
//     //     src: ["/assets/game/Karakter RDK/Pengunjung/Putih-Putih/Peng outih pr (1).png", "/assets/game/Karakter RDK/Pengunjung/Putih-Putih/Peng outih pr (2).png"],
//     //     class: "NPC"
//     // },
//     // {
//     //     name: "PengunjungPutihMerahLk",
//     //     dialogs: [
//     //         {
//     //             name: "PengunjungPutihMerahLk",
//     //             dialogs: "Apakah kamu sudah melihat pertunjukan tadi?"
//     //         },
//     //         {
//     //             name: "Player",
//     //             dialogs: "Ya, pertunjukannya sangat menarik!"
//     //         }
//     //     ],
//     //     order: [[[0,1]]],
//     //     correctAnswer:[],
//     //     position: { x: 314.50, y: 187.50 },
//     //     frames: ["PengunjungPutihMerahLk1", "PengunjungPutihMerahLk2"],
//     //     src: ["/assets/game/Karakter RDK/Pengunjung/Putih-Merah/Putih merah lk (1).png", "/assets/game/Karakter RDK/Pengunjung/Putih-Merah/Putih merah lk (2).png"],
//     //     class: "NPC"
//     // },
//     // {
//     //     name: "PengunjungPutihMerahPr",
//     //     dialogs: [
//     //         {
//     //             name: "PengunjungPutihMerahPr",
//     //             dialogs: "Apakah kamu suka musik yang dimainkan di sini?"
//     //         },
//     //         {
//     //             name: "Player",
//     //             dialogs: "Ya, musiknya sangat bagus!"
//     //         }
//     //     ],
//     //     order: [[[0,1]]],
//     //     correctAnswer:[],
//     //     position: { x: 219, y: 135 },
//     //     frames: ["PengunjungPutihMerahPr1", "PengunjungPutihMerahPr2"],
//     //     src: ["/assets/game/Karakter RDK/Pengunjung/Putih-Merah/Putih merah pr (1).png", "/assets/game/Karakter RDK/Pengunjung/Putih-Merah/Putih merah pr (2).png"],
//     //     class: "NPC"
//     // }
// ]

export const npcs: NPC[] = [
  {
    name: "Rafi",
    dialogs: [
      {
        name: "Player",
        dialogs:
          "Halo, Kak! Aku baru pertama kali ke RDK. Bisa kasih tahu apa aja yang bisa aku eksplor di sini?",
      },
      {
        name: "Rafi",
        dialogs:
          "Wah, mantap! Selamat datang di RDK! Ini bukan sekadar acara biasa, tapi pengalaman Ramadhan yang berkesan.",
      },
      { 
        name: "Player", 
        dialogs: "Menarik! Emangnya ada acara apa aja?"
    },
      {
        name: "Rafi",
        dialogs:
          "Banyak, Bro! Ada Kajian Buka Bersama buat yang pengen dapet insight sambil ngabuburit, terus ada Ramadan Public Lecture sebelum tarawih, dan Mimbar Subuh buat yang mau dapet ilmu setelah sholat subuh. Nah, kalau lo pengen liat update lengkap, cek aja papan informasi di sana!",
      },
      {
        name: "Player",
        dialogs:
          "Jelas! Apalagi ada Tabligh Akbar yang bakal ngundang tokoh-tokoh keren. Pokoknya kalau mau dapet vibes Ramadhan yang seru, ya di sini tempatnya!",
      },
    ],
    order: [[[0, 1, 2, 3, 4, 5]]],
    correctAnswer: [],
    frames: ["panitiaidle1", "panitiaidle2"],
    src: ["/assets/game/Karakter RDK/Panitia RDK/Panit lk (1).png", "/assets/game/Karakter RDK/Panitia RDK/Panit lk (2).png"],
    class: "NPC",
    isInteracted: false,
    position: { x: 346.50, y: 215.60 },
  },
  {
    name: "Naila",
    dialogs: [
      {
        name: "Player",
        dialogs:
          "Eh, Kak! Aku lihat ada banyak lomba di sini. Bisa ikut daftar sekarang nggak?",
      },
      {
        name: "Naila",
        dialogs:
          "Hmm, sayang banget sih, pendaftarannya udah ditutup. Tapi kalau mau tau info lengkap, cek aja sosial media kita di @rdkugm. Ada di TikTok, Instagram, sama Twitter (X).",
      },
      { 
        name: "Player", 
        dialogs: "Wah, telat dong ya… Tapi ini lombanya keren-keren deh! Ada apa aja sih?"
    },
      {
        name: "Naila",
        dialogs:
          "Banyak! Ada Da’i Nasional, Karya Tulis Ilmiah Al-Qur’an, Business Plan, Adzan, Poster, Fotografi, sama Ramadan Content Campaign. Oh iya, lomba-lombanya ini skala nasional loh, jadi pesertanya dari mana-mana!",
      },
      {
        name: "Player",
        dialogs:
          "Wah, keren! Boleh nonton lombanya aja nggak?",
      },
      {
        name: "Naila",
        dialogs: "Boleh banget! Datang aja ke area kompetisi. Siapa tahu lo jadi terinspirasi buat ikut tahun depan!"
      }
    ],
    order: [[[0, 1, 2, 3, 4, 5]]],
    correctAnswer: [],
    frames: ["panitiaidle1Pr", "panitiaidle2Pr"],
    src: ["/assets/game/Karakter RDK/Panitia RDK/Panit Pr (1).png", "/assets/game/Karakter RDK/Panitia RDK/Panit Pr (2).png"],
    class: "NPC",
    isInteracted: false,
    position: { x: 86.40, y: 19.20 },
  },
  {
    name: "Hanif",
    dialogs: [
      {
        name: "Player",
        dialogs:
          "Kak, kalau mau ikut kajian di RDK, gimana caranya? Harus daftar dulu atau gimana?",
      },
      {
        name: "Hanif",
        dialogs:
          "Nggak perlu daftar, langsung datang aja ke masjid. Kajian kita dibuka untuk umum!",
      },
      { 
        name: "Player", 
        dialogs: "Wah, fleksibel ya! Tapi di sini kajiannya bahas apa aja sih?"
    },
      {
        name: "Hanif",
        dialogs:
          "Macem-macem! Ada soal pendidikan, keuangan, pemerintahan, kesehatan mental, pokoknya luas banget!",
      },
      {
        name: "Player",
        dialogs:
          "Trus kalau aku mau dapet gambaran besar kajian ini di game gimana?",
      },
      {
        name: "Hanif",
        dialogs: "Gampang! Coba masuk ke masjid di dalam game ini. Nanti bakal ada simulasi yang kasih lo experience seolah-olah lagi ikut kajian langsung!"
      },
      {
        name: "Player",
        dialogs:
          "Wih, keren idenya!", 
      },
      {
        name:"Hanif",
        dialogs:"Jelas dong! Apalagi pembicaranya bukan orang sembarangan. Ada tokoh terkemuka, menteri, praktisi, pokoknya yang jago di bidangnya!"
      }
    ],
    order: [[[0, 1, 2, 3, 4, 5]]],
    correctAnswer: [],
    frames: ["panitiaidle1", "panitiaidle2"],
    src: ["/assets/game/Karakter RDK/Panitia RDK/Panit lk (1).png", "/assets/game/Karakter RDK/Panitia RDK/Panit lk (2).png"],
    class: "NPC",
    isInteracted: false,
    position: { x: 281.60, y: 102.40},
  },
  {
    name: "Fahri",
    dialogs: [
      {
        name: "Player",
        dialogs:
          "Kak, ini aku lihat orang-orang pada sibuk di RDK. Kok semangat banget ya?",
      },
      {
        name: "Fahri",
        dialogs:
          "Ya iyalah! RDK itu bukan cuma sekadar acara, tapi tempat kita buat belajar, berbagi, dan nambah pengalaman.",
      },
      { 
        name: "Player", 
        dialogs: "Tapi serius, kenapa banyak banget yang tertarik datang?"
    },
      {
        name: "Fahri",
        dialogs:
          "Selain acaranya yang seru, ada banyak hal yang bikin lo betah. Mulai dari kajian inspiratif, ngabuburit sambil nunggu buka, sampe kesempatan buat ketemu orang-orang hebat.",
      },
      {
        name: "Player",
        dialogs:
          "Wah, kalau gitu aku harus manfaatin waktu sebaik mungkin di sini!",
      },
      {
        name: "Fahri",
        dialogs: "Nah, itu baru mindset mahasiswa berkelas!"
      }
    ],
    order: [[[0, 1, 2, 3, 4, 5]]],
    correctAnswer: [],
    frames: ["PengunjungMerahLk1", "PengunjungMerahLk2"],
    src: ["/assets/game/Karakter RDK/Pengunjung/Merah/Peng merah lk (1).png", "/assets/game/Karakter RDK/Pengunjung/Merah/Peng merah lk (2).png"],
    class: "NPC",
    isInteracted: false,
    position: { x: 249.60, y: 201.60},
  },
  {
    name: "Rizky",
    dialogs: [
      {
        name: "Player",
        dialogs:
          "Kak, aku liat banyak yang mampir ke kajian, tapi ada juga yang lebih milih nongkrong di luar.",
      },
      {
        name: "Rizky",
        dialogs:
          "Nah, itu dia! Kadang kita lupa kalau momen Ramadhan itu harus dimanfaatin sebaik mungkin.",
      },
      { 
        name: "Player", 
        dialogs: "Maksudnya?"
    },
      {
        name: "Rizky",
        dialogs:
          "Gini deh… Lo mending denger kajian dari orang-orang hebat atau buang waktu tanpa dapet insight apa-apa?",
      },
      {
        name: "Player",
        dialogs:
          "Hmm, kena banget sih…",
      },
      {
        name: "Rizky",
        dialogs: "Yaudah, yuk gas ikut kajian! Sekali lo cobain, bakal ketagihan. Apalagi kalau dapet ilmu yang bisa ngebantu lo di masa depan!"
      },
      {
        name: "Player",
        dialogs:
          "Oke deh, let’s go!",
      },
    ],
    order: [[[0, 1, 2, 3, 4, 5]]],
    correctAnswer: [],
    frames: ["panitiaidle1", "panitiaidle2"],
    src: ["/assets/game/Karakter RDK/Panitia RDK/Panit lk (1).png", "/assets/game/Karakter RDK/Panitia RDK/Panit lk (2).png"],
    class: "NPC",
    isInteracted: false,
    position: { x: 208.00, y: 393.60},
  },
  {
    name: "Bagas",
    dialogs: [
      {
        name: "Player",
        dialogs:
          "Bang, Nggak masuk ke masjid buat ngikutin kajian?",
      },
      {
        name: "Dani",
        dialogs:
          "Belum, tadi aku lagi ngobrol sama temen-temen di luar.",
      },
      { 
        name: "Player", 
        dialogs: "Oalah, aku duluan ya"
      },
      {
        name: "Dani",
        dialogs:
          "Iya, iya, nggak apa-apa. Aku juga mau masuk nih, biar nggak ketinggalan kajian.",
      }
  ],
    order: [[[0, 1, 2, 3]]],
    correctAnswer: [],
    frames: ["panitiaidle1", "panitiaidle2"],
    src: ["/assets/game/Karakter RDK/Panitia RDK/Panit lk (1).png", "/assets/game/Karakter RDK/Panitia RDK/Panit lk (2).png"],
    class: "NPC",
    isInteracted: false,
    position: { x: 89.60, y: 406.40},
  },
  {
    name: "Fikri",
    dialogs: [
      {
        name: "Player",
        dialogs:
          "Assalamu’alaikum, Kak! Lagi nunggu buka di sini ya?",
      },
      {
        name: "Fikri",
        dialogs:
          "Wa’alaikumussalam! Iya, suasanya enak banget apalagi ada kajiannya",
      },
      { 
        name: "Player", 
        dialogs: "Oh, tiap hari ada kajian ya?"
      },
      {
        name: "Fikri",
        dialogs:
          "Iya, sebelum buka selalu ada kajian singkat.",
      },
      {
        name: "Player",
        dialogs:
          "Menarik! Aku masuk ke dalam dulu deh, sekalian ikut dengerin.",
      }
    ], 
    order: [[[0, 1, 2, 3, 4, 5]]],
    correctAnswer: [],
    frames: ["PengunjungPutihBiruLk1", "PengunjungPutihBiruLk2"],
    src: ["/assets/game/Karakter RDK/Pengunjung/Putih-Biru/Putih biru lk (1).png", "/assets/game/Karakter RDK/Pengunjung/Putih-Biru/Putih biru lk (2).png"],
    class: "NPCMakan",
    isInteracted: false,
    position: { x: 448.00, y: 396.80},
  },
  {
    name: "Rizal",
    dialogs: [
      {
        name: "Player",
        dialogs:
          "Bang, udah lama nunggu buka di sini?",
      },
      {
        name: "Rizal",
        dialogs:
          "Belum lama, ini baru dateng.",
      },
      { 
        name: "Player", 
        dialogs: "Oh, aku duluan ya, takut ketinggalan kajian"
      },
      {
        name: "Rizal",
        dialogs:
          "Iya, iya, nggak apa-apa. Aku juga mau masuk nih, biar nggak ketinggalan kajian.",
      }

    ],
    order: [[[0, 1, 2, 3]]],
    correctAnswer: [],
    frames: ["PengunjungPutihMerahLk1", "PengunjungPutihMerahLk2"],
    src: ["/assets/game/Karakter RDK/Pengunjung/Putih-Merah/Putih merah lk (1).png", "/assets/game/Karakter RDK/Pengunjung/Putih-Merah/Putih merah lk (2).png"],
    class: "NPCMakan",
    isInteracted: false,
    position: { x: 486.40, y: 259.20},
  },
  {
    name: "Asih",
    dialogs: [
      {
        name: "Player",
        dialogs:
          "Assalamu’alaikum! Kajian di dalam masih berlangsung ya?",
      },
      {
        name: "Asih",
        dialogs:
          "Wa’alaikumussalam! Iya, masih",
      },
      { 
        name: "Player", 
        dialogs: "Wah, masih sempet nih! Aku boleh ikut gabungkan?"
      },
      {
        name: "Asih",
        dialogs:
          "Tentu! Semua orang boleh ikut. Kajian sebelum buka memang selalu ada di sini.",
      },
      {
        name: "Player",
        dialogs:
          "Makasih infonya! Aku masuk dulu, biar nggak ketinggalan.",
      }
    ],
    order: [[[0, 1, 2, 3, 4]]],
    correctAnswer: [],
    frames: ["PengunjungPutihPutihPr1", "PengunjungPutihPutihPr2"],
    src: ["/assets/game/Karakter RDK/Pengunjung/Putih-Putih/Peng outih pr (1).png", "/assets/game/Karakter RDK/Pengunjung/Putih-Putih/Peng outih pr (2).png"],
    class: "NPCMakan",
    isInteracted: false,
    position: { x: 54.40, y: 163.20},
  },
  {
    name: "Pak joko",
    dialogs: [
      {
        name: "Pak joko",
        dialogs:
          "Assalamu’alaikum mas, Maaf menggannggu boleh minta tolong?",
      },
      {
        name: "Player",
        dialogs:
          "Wa’alaikumussalam pak boleh, Kenapa pak",
      },
      { 
        name: "Pak joko", 
        dialogs: "Ini mas saya sebelumnya sedang ada rezeki lebih jadi saya membagikan iftar tetapi ada iftar yang belum abis mas. boleh minta tolong dibagiin nggak mas?"
      },
      {
        name: "Player",
        dialogs:
          "Boleh pak, saya bantu ya",
      },
      {
        name: "Pak joko",
        dialogs:
          "Terima kasih mas",
      }
    ],
    order: [[[0, 1, 2, 3, 4]]],
    correctAnswer: [],
    frames: ["PengunjungPutihBiruLk1", "PengunjungPutihBiruLk2"],
    src: ["/assets/game/Karakter RDK/Pengunjung/Putih-Biru/Putih biru lk (1).png", "/assets/game/Karakter RDK/Pengunjung/Putih-Biru/Putih biru lk (2).png"],
    class: "NPCPemberiMakan",
    isInteracted: false,
    position: { x: 256, y: 160},
  },
  {
    name: "Mas Agus",
    dialogs: [
      {
        name: "Player",
        dialogs:
          "Assalamulaikum kak, Aku liat disini banyak kucing, boleh nggak kak aku memberi makan kucing-kucing ini?",
      },
      {
        name: "Mas Agus",
        dialogs:
          "Wa’alaikumussalam, boleh banget kak, ini aku ada beberapa makananan kucing. Boleh kak ambil dan berikan ke kucing-kucing ini",
      },
      {
        name: "Player",
        dialogs:
          "Terima kasih kak, aku bantu ya",
      },
      { 
        name: "Mas Agus", 
        dialogs: "Terima kasih kak"
      }
    ],
    order: [[[0, 1, 2, 3]]],
    correctAnswer: [],
    frames: ["panitiaidle1", "panitiaidle2"],
    src: ["/assets/game/Karakter RDK/Panitia RDK/Panit lk (1).png", "/assets/game/Karakter RDK/Panitia RDK/Panit lk (2).png"],
    class: "NPCPemberiMakanKucing",
    isInteracted: false,
    position: { x: 28, y: 403},
  },


];

interface Cat {
  tileset: string;
position: { x: number; y: number };
}

export const catsData:Cat[] =[
  {
    tileset: "BlackCat",
    position: { x: 249.60, y: 256 },
  },
  {
    tileset: "BrownCat",
    position: { x: 48.20, y: 249.60 },
  },
  {
    tileset: "WhiteCat",
    position: { x: 163, y: 240 },
  },
  {
    tileset: "OrangeCat",
    position: { x: 432.00, y: 35.20 },
  },
  {
    tileset: "GreyCat",
    position: { x: 467.80, y: 166.40 },
  },
  {
    tileset: "YellowCat",
    position: { x: 35.60, y: 99.40 },
  },
]



export default direction;
