import { useEffect, useState } from "react";

export const useModal = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
    
      useEffect(() => {
        // Check if the modal has already been shown and if the time has expired
        const modalLastShown = localStorage.getItem("modalLastShown");
        const currentTime = new Date().getTime();
        const expirationTime = 1 * 60 * 60 * 1000; // 12 hours in milliseconds

        if (!modalLastShown || currentTime - parseInt(modalLastShown, 10) > expirationTime) {
          // Show the modal after 10 seconds
          const timer = setTimeout(() => {
            setIsModalOpen(true);
            localStorage.setItem("modalLastShown", currentTime.toString()); // Save the current timestamp
          }, 10000);
    
          // Cleanup the timer on component unmount
          return () => clearTimeout(timer);
        }
      }, []);

        const closeModal = () => {
            setIsModalOpen(false);
        };

        return {
            isModalOpen,
            closeModal,
        };
}