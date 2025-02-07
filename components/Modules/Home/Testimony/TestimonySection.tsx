import React from "react";
import Image from "next/image";

const TestimonySection = () => {
  return (
    <div>
      <div>
              <Image
                  fill
                  src="/images/happiness.png"
                  alt="Happingess"
                  className=""
              />
        <span>What Our Clients Are Saying</span>
      </div>
      <div></div>
    </div>
  );
};

export default TestimonySection;
