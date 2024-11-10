import { useEffect, useRef, useState } from 'react';

export const useControls = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsShow(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [wrapperRef]);

  return {
    isShow,
    setIsShow,
    wrapperRef,
  };
};
