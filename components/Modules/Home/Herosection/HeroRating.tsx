import Image from "next/image";

const HeroRating = () => {
  return (
    <div className="flex items-center space-x-3 px-4 lg:px-0">
      <div className="flex -space-x-3 lg:-space-x-4 border-r pr-3">
        <Image
          src="/images/user1.png"
          alt=""
          width={50}
          height={50}
          className="rounded-full w-[33px] h-[33px] lg:w-[45px] lg:h-[45px] object-cover border"
        />
        <Image
          src="/images/user2.png"
          alt=""
          width={50}
          height={50}
          className="rounded-full w-[33px] h-[33px] lg:w-[45px] lg:h-[45px] object-cover border"
        />
        <Image
          src="/images/user3.png"
          alt=""
          width={50}
          height={50}
          className="rounded-full w-[33px] h-[33px] lg:w-[45px] lg:h-[45px] object-cover border"
        />
        <Image
          src="/images/user4.png"
          alt=""
          width={50}
          height={50}
          className="rounded-full w-[33px] h-[33px] lg:w-[45px] lg:h-[45px] object-cover border"
        />
        <Image
          src="/images/user5.png"
          alt=""
          width={50}
          height={50}
          className="rounded-full w-[33px] h-[33px] lg:w-[45px] lg:h-[45px] object-cover border"
        />
        <Image
          src="/images/googleicon.png"
          alt=""
          width={50}
          height={50}
          className="rounded-full w-[30px] h-[30px] object-cover border"
        />
      </div>

      <div className="flex flex-col -mt-5 justify-center space-y-0 ">
        <div className="flex space-x-1 items-center">
          <div className="flex -space-x-2 mt-5 ">
            <Image
              src="/images/svg/star.svg"
              alt=""
              height={50}
              width={50}
              className="w-[25px] lg:w-[35px] h-[25px] lg:h-[35px]"
            />
            <Image
              src="/images/svg/star.svg"
              alt=""
              height={50}
              width={50}
              className="w-[25px] lg:w-[35px] h-[25px] lg:h-[35px]"
            />
            <Image
              src="/images/svg/star.svg"
              alt=""
              height={50}
              width={50}
              className="w-[25px] lg:w-[35px] h-[25px] lg:h-[35px]"
            />
            <Image
              src="/images/svg/star.svg"
              alt=""
              height={50}
              width={50}
              className="w-[25px] lg:w-[35px] h-[25px] lg:h-[35px]"
            />
            <Image
              src="/images/svg/star.svg"
              alt=""
              height={50}
              width={50}
              className="w-[25px] lg:w-[35px] h-[25px] lg:h-[35px]"
            />
          </div>

          <p className="lg:text-xl font-medium text-zinc-600 mt-5">5.0</p>
        </div>

        <p className="text-center text-xs lg:text-sm mt-2 pl-1 text-zinc-700 font-medium">
          Over 200+ businesses worldwide
        </p>
      </div>
    </div>
  );
};

export default HeroRating;
