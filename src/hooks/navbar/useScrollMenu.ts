import { useEffect, useState } from 'react';

function useScrollMenu() {
  const [aboveThreshold, setAboveThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;

      if (scrollPosition >= 500 && !aboveThreshold) {
        // -+- console.log('menuButton');
       
      } else if (scrollPosition < 500 && aboveThreshold) {
        // -+- console.log('menuDesktop');
      
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Gọi lần đầu để thiết lập trạng thái ban đầu
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [aboveThreshold]);

  return null; // Không cần trả về gì nếu chỉ muốn lắng nghe sự kiện
}

export default useScrollMenu;
