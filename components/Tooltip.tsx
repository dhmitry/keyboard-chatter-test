import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';

interface TooltipProps {
  children: ReactNode;
  text: ReactNode;
}

const Tooltip = ({ children, text }: TooltipProps): JSX.Element => {
  // TODO: come up with a better variable name
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const opacity = useMemo(
    () => (isAnimationStarted ? 'opacity-100' : 'opacity-0'),
    [isAnimationStarted]
  );

  const handleIsVisibleChange = (newIsVisible: boolean) => {
    if (newIsVisible) {
      setIsVisible(true);
      setTimeout(() => setIsAnimationStarted(true), 100);
    } else {
      setIsAnimationStarted(false);
      setTimeout(() => setIsVisible(false), 100);
    }
  };

  const { getTooltipProps, setTooltipRef, setTriggerRef } = usePopperTooltip({
    interactive: true,
    visible: isVisible,
    onVisibleChange: handleIsVisibleChange,
    delayHide: 200,
  });

  return (
    <div>
      <div ref={setTriggerRef}>{children}</div>
      {isVisible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps()}
          className={`mt-2 rounded bg-zinc-900 px-2 py-1 text-slate-100 ${opacity} transition-opacity duration-300 ease-in-out dark:bg-slate-600`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
