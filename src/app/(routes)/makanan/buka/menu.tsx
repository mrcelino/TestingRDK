'use client'
import Image from "next/image";
import { useState, useEffect, useCallback } from 'react';

type Food = {
  id: number;
  name: string;
  date: string;
};

async function fetchData() {
  const data = await fetch(`http://localhost:3000/api/makanan/buka`, {
    cache: "no-store",
  });
  return await data.json();
}

function Menu({ food }: { food: Food }) {
  return(
    <div className="flex items-center space-x-2 mx-auto">
      <img
        alt="A plate of Sate Betawi with dipping sauce and garnish"
        className="size-36 xl:size-40 rounded-full border-4 border-black -mt-12 xl:-mt-4 z-10 hover:scale-110 transition duration-500"
        height="100"
        src="https://storage.googleapis.com/a1aa/image/Y8PUtNENfMWLeEb3NfrU8UVSnCpNgOTaYob2YTYc5w2w7dEoA.jpg"
        width="100"
      />
      <div>
        <div className="flex items-center justify-center bg-[#15575B] text-white px-2 py-2 xl:py-2 -ml-20 xl:mt-14 xl:-ml-20 pl-20 xl:pl-16 xl:px-2 rounded-full border-4 border-black w-70">
          <span className="text-2xl xl:text-2xl font-medium text-center italic">
            {food.date}
          </span>
        </div>
        <p className="text-sm xl:text-lg italic font-semibold mt-2 -ml-1">
          Day {food.id} Ramadhan
        </p>
        <p className="text-[#F4AA3D] italic font-body font-semibold text-sm xl:text-lg -ml-1 mt-1">
          {food.name}
        </p>
        <p className="italic text-sm -ml-1 mt-1 font-body font-medium xl:text-base">
          "Sungguh nikmatnya berbuka <br />puasa dengan penuh syukur <br />kepada Allah SWT."
        </p>
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
  }, []);

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
    const food = foods.find(food => food.id === todayDate);
    
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
        <div className="fixed inset-0 flex justify-center items-start bg-black bg-opacity-50 z-50">
          <div className="relative p-8 bg-white rounded-[50px] shadow-lg w-80 mt-14 sm:size-[350px]">
            <img
              alt="A plate of Sate Betawi with dipping sauce and garnish"
              className="p-4 rounded-[50px] size-[350px] object-cover absolute top-0 left-0 z-0"
              src="https://storage.googleapis.com/a1aa/image/Y8PUtNENfMWLeEb3NfrU8UVSnCpNgOTaYob2YTYc5w2w7dEoA.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10 rounded-[50px] z-10"></div>
            <div className="relative z-10 text-center text-white mt-36">
              <h2 className="text-2xl font-bold font-body italic">OUR MENU TODAY</h2>
              <h2 className="text-lg font-body italic">{selectedFood.id} Ramadan 1446 H</h2>
              <h2 className="text-lg font-body italic font-semibold mb-2">{selectedFood.name}</h2>
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

      <div className="flex justify-between xl:mx-60 min-h-12 my-10">
        <button
          onClick={prevPage}
          className="flex justify-between px-6 items-center bg-[#F4AA3D] font-body italic font-medium border-[3px] border-black rounded-full w-44 cursor-pointer hover:scale-105 transition duration-200"
        >
          <Image src="/ic_before.png" alt="Before logo" width={20} height={20} />
          <span>Day Before</span>
        </button>
        <button
          onClick={nextPage}
          disabled={!hasMoreData}
          className="flex justify-between px-6 items-center bg-[#15575B] font-body text-white italic font-medium border-[3px] border-black rounded-full w-44 cursor-pointer hover:scale-105 transition duration-200"
        >
          <Image src="/ic_after.png" alt="After logo" width={20} height={10} />
          <span>Next Day</span>
        </button>
      </div>
    </>
  );
}
