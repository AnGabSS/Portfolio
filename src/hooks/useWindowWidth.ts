import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState<number>(0); // Inicializa com 0 para evitar SSR issues

  useEffect(() => {
    if (typeof window === "undefined") return; // Garante que está no cliente

    function handleResize() {
      setWidth(window.innerWidth);
    }

    // Definir o tamanho inicial no primeiro render no cliente
    setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
