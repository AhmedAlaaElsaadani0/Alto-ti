import React, { createContext, useEffect, useState } from "react";
import LoadingPage from "../Component/LoadingPage/LoadingPage";
export const IsMobileContext = createContext();

export default function IsMobileProvider({ children }) {
  const [isMobile, setIsMobile] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const checkMobile = (e) => {
    setIsMobile(e.matches);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:1200px)");
    mediaQuery.addEventListener("change", checkMobile);
    setIsMobile(window.matchMedia("(max-width:1200px)").matches);
    return () => mediaQuery.removeEventListener("change", checkMobile);
  }, []);

  function contentGetLoaded() {
    setIsDataLoaded(true);
    console.log("HI");
  }
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      contentGetLoaded();
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <IsMobileContext.Provider value={{ isMobile }}>
      {!isDataLoaded && <LoadingPage />}
      {children}
    </IsMobileContext.Provider>
  );
}
