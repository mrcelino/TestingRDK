
import Image from "next/image"

export default function Footer() {

    return(


        <>
            <div className="absolute bottom-100 right-0 left-0 ">
    
    
                <div className="flex text-white w-full bg-greenCS border-black border-4 relative">
    
                    <div className="w-1/2 italic text-center p-10 text-3xl font-light">
                        <p>“Ramadan Penuh <span className="font-bold">Berkah,</span></p> 
                        <p>Mari Raih <span className="font-bold">Pahala Jariyah</span></p>
                        <p>Mulai dari <span className="font-bold">Satu Rupiah”</span></p>
                    </div>
    
                    
                    <Image
                            src="/images/footer/speaker.png"
                            alt="Logo"
                            width={225}
                            height={225}
                            className="position-fixed right-0 z-10"
                        />
                  
    
                    <div className="text-white bg-orangeCS w-1/2 border-black rounded-s-full border-l-4 p-10 font-bold">
                        <p className="text-3xl text-greenCS ml-20" >Titipkan Kebaikan,</p> 
                        <p className="text-5xl ml-20">Tebarkan</p>
                        <p className="text-5xl ml-20">Keberkahan</p>
    
    
                    <div/>
                </div>
                    
                </div>
           
                <div className="flex mt-5 items-center justify-center">
                    {/* Kiri */}
                    <div className="w-1/2 mx-auto italic">
    
                        <div className="flex justify-center items-center">
                            <Image
                                src="/logo_with_name.png"
                                alt="Logo"
                                width={198}
                                height={95}
                                className="my-2"
                            />
    
                        </div>
                    
    
                        <div className="w-2/3 mx-auto text-center text-greenCS font-semibold mt-4">
                            <p>Donasi Langsung melalui COD Sekitar Kampus UGM /</p>
    
                            <p>Sekretariat Jama’ah Shalahuddin (Sayap Selatan Masjid</p>
    
                            <p>Kampus UGM)</p>
                        </div>
    
    
                        <p className="bg-greenCS text-white mt-4 py-1 px-20 rounded-full w-fit mx-auto">Jenis Donasi</p>
    
                        <div className="flex justify-around items-center mt-6 text-greenCS text-xl font-semibold">
                            <div className="flex items-center">
                                <p className="mr-3">Uang</p>
                                <Image
                                src="/images/footer/uang.png"
                                alt="Logo"
                                width={50}  
                                height={50}
                                />
                            </div>
                            
                            <div className="flex items-center">
                                <p className="mr-3">Logistik</p>
                                <Image
                                src="/images/footer/logistik.png"
                                alt="Logo"
                                width={50}  
                                height={50}
                                />
                               
                            </div>
    
                            <div className="flex items-center">
                                <p className="mr-3">Makanan</p>
                                <Image
                                src="/images/footer/makanan.png"
                                alt="Logo"
                                width={50}  
                                height={50}
                                />
                          
                            </div>
                        </div>
    
                        <div className="flex justify-evenly items-center text-greenCS mt-5 text-xs">
                            <p className="bg-greenCS text-white py-2 px-10 rounded-xl">Narahubung Donasi Kegiatan</p>
                            <p className="bg-greenCS text-white py-2 px-4 rounded-xl">Narahubung Donasi Iftar dan Sahurs</p>
                        </div>
    
                        <div className="flex justify-evenly items-center text-greenCS font-bold mt-6">
                            <p className="rounded-2xl roundedCS py-2 px-4">0895332785320 (Salma Arsepti)
                            </p>
                            <p className="rounded-2xl roundedCS py-2 px-4">081377660189 (Rofi’ Khoirullah)</p>
                        </div>
    
                        <div className="flex justify-center items-center roundedCS mt-8 w-fit content-center mx-auto rounded-xl">
                            <p className="text-xs bg-greenCS text-white py-1 px-10  py-2 px-4 mr-4">Konfirmasi Donasi</p>
                            <p className="text-greenCS font-semibold px-4">bit.ly/DonasiOperasionalRDK46H</p>
                        </div>
    
                    </div>
    
    
                    {/* Kanan */}
                    <div className="w-1/2 border-black border-4 my-5 mr-5 h-fit w-fit ml-4">
    
                        {/* Title */}
                        <div className="flex justify-evenly items-center bg-orangeCS font-bold text-xl">
    
                            <div className="text-center py-2">
                                <p>Donasi</p>
                                <p>Iftar dan Sahur</p>
                            </div>
                          
                          
                            <p>Donasi Kegiatan</p>
                        </div>
    
    
                        {/* Qris Masjid Kampus */}
                        <div className="flex justify-evenly items-center bg-greenCS p-4 border-y-4 border-black">
    
                         
                            <div>
                                <Image
                                    src="/images/footer/text_qris.png"
                                    alt="Logo"
                                    width={150}
                                    height={150}
                                    />
    
                                <Image
                                    src="/images/footer/qrisMK.png"
                                    alt="Logo"
                                    width={150}
                                    height={150}
                                    />
    
                                <p className="italic text-white text-center text-xs mt-2">a.n. Masjid Kampus UGM</p>
    
                            </div>
    
                            {/* Qris Jama'ah Shalahuddin */}
                            <div>
                                <Image
                                    src="/images/footer/text_qris.png"
                                    alt="Logo"
                                    width={150}
                                    height={150}
                                    />
    
                                <Image
                                    src="/images/footer/qrisMK.png"
                                    alt="Logo"
                                    width={150}
                                    height={150}
                                    />
    
                                <p className="italic text-white text-center text-xs mt-2">a.n. Jam'ah Shalahuddin</p>
    
                            </div>
    
                        </div>
    
    
                        {/* Donasi Melalui bank */}
                        <div className="flex items-center bg-white p-3">
    
                            {/* Kiri */}
                            <div className="w-1/2">
                                <div className="flex ">
                                    
                                    {/* BSI */}
                                    <Image
                                        src="/images/footer/bank_bsi.png"
                                        alt="Logo"
                                        width={90}
                                        className="object-contain h-10 w-20 mr-10"
                                        height={4}
                                        />
    
                                    <div className="">
                                        <p className="text-greenCS font-semibold text-sm">7191219494</p>
                                        <p className="italic text-white text-greenCS text-xs">a.n Masjid Kampus UGM</p>
    
                                    </div>
                                
                                </div>
    
                                <div className="flex">
                                    
                                    {/* Muamalat */}
                                    <Image
                                        src="/images/footer/bank_muamalat.png"
                                        alt="Logo"
                                        width={100}
                                        height={28}
                                        className="object-contain h-10 w-20 mr-10"
                                        />
    
                                    <div className="ml-17">
                                        <p className="text-greenCS font-semibold text-sm">5350007800</p>
                                        <p className="italic text-white text-greenCS text-xs">a.n Masjid Kampus UGM</p>
    
                                    </div>
                                
                                </div>
                            </div>
                           
                        
                            {/* Kanan */}
                            <div className="ml-4">
                                {/* BPD */}
                                <div className="flex w-auto">
                                    <Image
                                        src="/images/footer/bank_bpd.png"
                                        alt="Logo"
                                        width={90}
                                        height={10}
                                        className="object-contain h-10 w-20"
                                        />
    
                                    <div className="w-44 ml-10" >
                                        <p className="text-greenCS font-semibold text-sm w-fit">801241004070</p>
                                        <p className="italic text-white text-greenCS text-xs w-fit">a.n Jama'ah Shalahuddin</p>
                                    </div>
    
                                </div>
                            </div>
    
    
    
                        </div>
                    </div>
                 </div>
    
    
                <div className="position-relative">
    
                    <div className="bg-greenCS mt-10 flex justify-center items-center z-10  border-4 border-black">
                        <div className="flex items-center py-8">
    
                                <div className="bg-white border-black border-4 p-6 rounded-3xl text-center italic text-greenCS font-medium">
                                    <p>"Kamu sekali-kali tidak akan memperoleh kebajikan (yang sempurna)</p>
                                    <p>sebelum kamu menginfakkan sebagian harta yang kamu cintai. Apa pun</p>  
                                    <p>yang kamu infakkan, sesungguhnya Allah Maha Mengetahui tentangnya."</p>
                                    <p className="font-bold">(QS. Ali Imran : 92)</p>
                                </div>                  
                        </div>
                    </div>
    
                    <Image
                        src="/images/maskot.png"
                        alt="Logo"
                        width={294}
                        height={294}
                        className="absolute top-1/2 left-1/4 transform -translate-x-40 -translate-y-10"/>  
    
                    
                </div>
    
    
                <div className="bg-greenCS mt-10 text-white">
                    <div className="py-7 px-14 flex ">
                        <div className="w-1/2">
                            <p className="text-3xl font-bold">Ramadhan Di Kampus</p>
                            <p className="text-xl font-bold">Universitas Gadjah Mada</p>
    
                            <p className="font-semibold mt-7">Unit Kegiatan Mahasiswa Kerohanian Islam Jama'ah Shalahuddin</p>
                            <p className="font-semibold">Universitas Gadjah Mada</p>
    
                            <div className="flex mt-7">
                                <Image
                                src="/images/footer/location.png"
                                alt="logo"
                                width={24}
                                height={24}
                                className="object-contain"
                                
                                />
    
                                <div className="ml-2">
                                    <p>Sekretariat Jama’ah Shalahuddin, Sayap Selatan Masjid Kampus UGM
                                    </p>
                                    <p>Jl. Tevesia No. 1 Bulaksumur, UGM, Yogyakarta 55281</p>
    
                                </div>
    
                            </div>
    
    
    
                            <div className="flex mt-4">
                                <Image
                                    src="/images/footer/mail.png"
                                    alt="logo"
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                    
                                    />
    
                                <p className="ml-2">rdk@ugm.ac.id</p>
    
                            </div>
    
    
                            <p className="mt-7">#PembangunanInklusif</p>
                            <p>#UpayaKolaboratif</p>
                            <p>#Ramadan Berdaya</p>
    
    
    
                        </div>
    
                        <div className="w-1/2 h-[356px] flex-items-end">
                        
                            <div className="flex justify-around">
                                <p>Explorasi</p>
                                <p>Kegiatan</p>
                                <p>Petunjuk</p>
                            </div>
    
                            <div className="mt-20 py-48">
                                <div className="flex justify-center">
                                    <Image
                                        src="/images/footer/mediaRDK.svg"
                                        alt="logo"
                                        width={112}
                                        height={24}
                                        className="object-cover mr-2"
                                        
                                        />
    
                                        <p>Ramadhan Di Kampus UGM</p>
    
                                </div>
    
                                <div className="flex mt-3 justify-center ml-3">
                                    <Image
                                        src="/images/footer/mediaMK.svg"
                                        alt="logo"
                                        width={172}
                                        height={24}
                                        className="object-cover mr-2"
                                        
                                        />
    
                                        <p>Masjid Kampus UGM</p>
    
                                </div>
    
    
                            </div>
                        
                        </div>
                    </div>
    
                    <div className="flex justify-center items-center p-6  bg-gradient-to-r from-cyan-700 to-blue-500s ">
                        <p className="italic text-lg">RDK UGM 1446H. All Rights Reserved</p>
                    </div>
                </div>
    
            
    
    
            </div>
        </>

            
        // </div>
    
    )
}