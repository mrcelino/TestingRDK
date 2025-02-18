"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return null; // Tidak perlu ada return UI
};

export default AOSInitializer;