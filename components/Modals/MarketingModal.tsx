import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../UI/Button/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MarketingModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { push } = useRouter();
  const handleDownload = () => {
    push("/resources/political-branding-strategy");
  };
  
  if (!isOpen) return null;


  return (
    <div className="fixed  bg-white/20 inset-0  flex justify-center items-center z-50">
      <div className="sm:flex w-[360px] bg-white lg:h-[600px] lg:w-[1000px] md:w-[700px]">
        <div className="bg-[#b6d337] relative p-6 items-baseline  w-full lg:p-12 shadow-lg max-w-md lg:w-full space-y-4 grid">
          <button
            onClick={onClose}
            className="bg-gray-50 rounded-full w-10 h-10 grid place-content-center text-black absolute top-4 left-4  hover:bg-white/90"
          >
            X
          </button>
          <h2 className="text-4xl md:text-4xl  pt-12 font-bold lg:text-9xl mb-4">📚</h2>
          <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl">
            Free E-Book on how to position your business or personal brand for
            success.
          </h2>
          <Button
            onClick={handleDownload}
            className="space-x-4 py-4 px-4 flex justify-items-center bg-white items-center rounded-full justify-center hover:bg-white/80 text-black font-medium "
          >
            DOWNLOAD NOW
          </Button>
        </div>

        <div className="bg-white grid place-content-center h-[300px] lg:h-[600px] w-full">
          <Image
            src="/images/mak.png"
            alt="market"
            className="lg:w-[350px] mx-auto w-[180px]"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default MarketingModal;
