/* eslint-disable @typescript-eslint/no-explicit-any */
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselButton";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselButtons";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options }:any = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container mt-9">
          {slides.map(
            ({ name, testimonial, logo, title }: any, index: number) => (
              <div className="embla__slide border bg-gray-100" key={index}>
                <div className="embla__slide__number">
                  <div>
                    <Image
                      width={90}
                      height={90}
                      alt={name}
                      src={logo}
                      className="rounded-full object-cover border-2 border-black h-16 w-16 mx-auto mb-7"
                    />
                    <p className="text-black text-xl text-center font-medium">
                      {testimonial}
                    </p>

                    <p className="text-center text-lg font-normal text-zinc-600 mt-8">
                      - {name}
                    </p>
                    <p className="text-center text-sm font-light text-zinc-600 mt-1">
                      {title}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
