import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { usePrevNextButtons } from "@/components/Carousel/EmblaCarouselButtons";
import { EmblaOptionsType } from "embla-carousel";

export const useCarouselFunctions = () => {
    const OPTIONS: EmblaOptionsType = { loop: true };

    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
      AutoScroll({ playOnInit: false }),
    ]);
    const [isPlaying, setIsPlaying] = useState(false);
  
    const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick,
    } = usePrevNextButtons(emblaApi);
  
    const onButtonAutoplayClick = useCallback(
      (callback: () => void) => {
        const autoScroll = emblaApi?.plugins()?.autoScroll;
        if (!autoScroll) return;
  
        const resetOrStop =
          autoScroll.options.stopOnInteraction === false
            ? autoScroll.reset
            : autoScroll.stop;
  
        resetOrStop();
        callback();
      },
      [emblaApi]
    );
  
    const toggleAutoplay = useCallback(() => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;
  
      const playOrStop = autoScroll.isPlaying()
        ? autoScroll.stop
        : autoScroll.play;
      playOrStop();
    }, [emblaApi]);
  
    useEffect(() => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;
  
      setIsPlaying(autoScroll.isPlaying());
      emblaApi
        .on("autoScroll:play", () => setIsPlaying(true))
        .on("autoScroll:stop", () => setIsPlaying(false))
        .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
    }, [emblaApi]);
  
    return {
        isPlaying,
        toggleAutoplay,
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
        onButtonAutoplayClick,
        emblaRef,
        
    };
};