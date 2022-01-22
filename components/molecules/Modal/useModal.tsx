import React, { useState } from 'react';

const $BODY = (typeof window !== 'undefined' && document.body) as Element;

const useModal = (initShow = false) => {
  const [isShowing, setIsShowing] = useState(initShow);

  const toggle = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    isShowing ? $BODY.classList.add('modal-on') : $BODY.classList.remove('modal-on');

    if (target.closest('.close')) {
      setIsShowing(!isShowing);
      return;
    }
    if (target.closest('.contents')) {
      return;
    }
    setIsShowing(!isShowing);
  };

  return { isShowing, toggle };
};

export default useModal;
