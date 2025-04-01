import { useCallback, useEffect, useState } from "react";

type UseSelectedSnapDisplayType = {
  selectedSnap: number;
  snapCount: number;
};


export interface UseEmblaCarouselType {
    scrollSnapList: () => { length: number }[];
    selectedScrollSnap: () => number;
    on?: any;
  }

export const useSelectedSnapDisplay = ( 
  emblaApi: UseEmblaCarouselType
) => {
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const updateScrollSnapState = useCallback(() => {
    setSnapCount(emblaApi.scrollSnapList().length);
    setSelectedSnap(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollSnapState();
    emblaApi.on("select", updateScrollSnapState);
    emblaApi.on("reInit", updateScrollSnapState);
  }, [emblaApi, updateScrollSnapState]);

  return {
    selectedSnap,
    snapCount,
  };
};