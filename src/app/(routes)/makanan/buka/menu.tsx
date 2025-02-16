'use client'
import Image from "next/image";
import { useState, useEffect, useCallback } from 'react';

type Food = {
  id: number;
  menu: string;
  date_romawi: string;
  day: number;
  quote: string;
  date_hijriyah: string;
  menu_url: string;
};

async function fetchData() {
  const baseurl  = process.env.NEXT_PUBLIC_API_BASE_URL
  const response = await fetch(baseurl+"menu-bukas", {
    cache: "no-store",
  });
  const result = await response.json();
  
  return result.data.map((item: any) => ({
    id: item.id,
    menu: item.menu,
    date_romawi: item.date_romawi,
    day: item.day,
    quote: item.quote,
    date_hijriyah: item.date_hijriyah,
    menu_url: item.menu_url,
  }));
}



function Menu({ food }: { food: Food }) {
  return (
    <div className="flex items-center space-x-2 mt-4 mx-auto">
      <img
        alt={food.menu}
        className="size-28 sm:size-36 xl:size-40 rounded-full border-4 border-black -mt-14 xl:-mt-8 z-10 hover:scale-110 transition duration-500"
        height="100"
        src={food.menu_url}
        width="100"
      />
      <div>
        <div className={`flex items-center justify-center text-white px-2 py-2 pl-14 xl:py-2 -ml-20 xl:mt-14 xl:-ml-20 sm:pl-20 xl:pl-16 xl:px-2 rounded-full border-4 border-black 
          ${food.day % 2 === 1 ? "bg-[#15575B]" : "bg-[#F4AA3D]"}`}>
          <span className="sm:text-2xl xl:text-2xl font-medium text-center italic">
            {food.date_romawi}
          </span>
        </div>
        <div>
        <p className="text-xs sm:text-sm xl:text-lg italic font-semibold mt-2 -ml-1">
          Day {food.day} Ramadan
        </p>
        <p className="text-xs text-[#F4AA3D] italic font-body font-semibold sm:text-sm xl:text-lg -ml-1 mt-1">
          {food.menu}
        </p>
        <p className="italic text-xs sm:text-sm -ml-1 mt-1 font-body font-medium xl:text-base max-w-52 min-h-14 xl:min-h-[4.5rem] sm:min-w-52 whitespace-pre-wrap ">
          "{food.quote}"
        </p>
        </div>

      </div>
    </div>
  );
}


export default function Food() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const perPage = 6;
  const currentFoods = foods.slice((currentPage - 1) * perPage, currentPage * perPage);

  const loadData = useCallback(async () => {
    const data = await fetchData();
    setFoods(data);
  }, [fetchData]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  const nextPage = () => {
    if ((currentPage * perPage) < foods.length) {
      setCurrentPage(prev => prev + 1);
    } else {
      setHasMoreData(false);
    }
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
    setHasMoreData(true);
  };

  const closeModal = () => setShowModal(false);

  const selectFoodByDate = useCallback(() => {
    const todayDate = new Date().getDate();
    const food = foods.find(food => food.day === todayDate);
    
    if (food) {
      setSelectedFood(food);
      setShowModal(true);
    } else {
      setSelectedFood(null);
      setShowModal(false);
    }
  }, [foods]);
  

  useEffect(() => {
    if (foods.length > 0) {
      selectFoodByDate();
    }
  }, [foods, selectFoodByDate]);

  return (
    <>
      {showModal && selectedFood && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="relative p-8 bg-white rounded-[35px] lg:rounded-[50px] shadow-lg w-80 mt-14 sm:size-[350px]">
            <img
              alt="A plate of Sate Betawi with dipping sauce and garnish"
              className="p-4 rounded-[50px] size-[350px] object-cover absolute top-0 left-0 z-0"
              src={selectedFood.menu_url}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10 rounded-[35px] lg:rounded-[50px] z-10"></div>
              <div className="relative z-10 text-center text-white mt-40">
                <div className="mx-4">
                  <h2 className="text-2xl text-left font-bold font-body italic">OUR MENU TODAY</h2>
                  <h2 className="text-sm text-left font-body italic">{selectedFood.date_romawi} / {selectedFood.date_hijriyah}</h2>
                  <h2 className="text-lg text-left font-body italic font-semibold mb-2">{selectedFood.menu}</h2>
                </div>
                <button
                  onClick={closeModal}
                  className="px-4 py-1 bg-[#F4AA3D] text-white rounded-full text-lg font-body font-semibold"
                >
                  Okay
                </button>
              </div>
            </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {currentFoods.map(food => (
          <Menu key={food.id} food={food} />
        ))}
      </div>

      <div className="flex justify-around gap-2 xl:mx-40 mx-2 h-10 sm:h-12 my-10">
        <button
          onClick={prevPage}
          className="flex justify-evenly px-4 items-center bg-[#F4AA3D] font-body italic font-medium border-[3px] border-black rounded-full w-32 sm:w-44 cursor-pointer hover:scale-105 transition duration-200"
        >
          <Image src="/images/makanan/ic_before.png" alt="Before logo" width={20} height={20} />
          <span className="text-xs sm:text-base">Previous</span>
        </button>
        <button
          onClick={nextPage}
          disabled={!hasMoreData}
          className="flex justify-evenly px-4 items-center bg-[#15575B] font-body text-white italic font-medium border-[3px] border-black rounded-full w-32 sm:w-44 cursor-pointer hover:scale-105 transition duration-200"
        >
          <span className="text-xs sm:text-base">Next</span>
          <Image src="/images/makanan/ic_after.png" alt="After logo" width={20} height={10} />
        </button>
      </div>
    </>
  );
}
