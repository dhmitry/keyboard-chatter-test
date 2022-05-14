import React, { ReactNode, useMemo, useState } from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';

interface TooltipProps {
  children: ReactNode;
  text: ReactNode;
  hideOnClick?: boolean;
}

const Tooltip = ({
  children,
  text,
  hideOnClick,
}: TooltipProps): JSX.Element => {
  // TODO: think about implementing tooltips from scratch
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
    visible: isVisible,
    onVisibleChange: handleIsVisibleChange,
    offset: [0, 12],
  });

  const handleClick = () => {
    if (hideOnClick) {
      handleIsVisibleChange(false);
    }
  };

  return (
    <>
      <div ref={setTriggerRef} onClick={handleClick}>
        {children}
      </div>
      {text && isVisible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps()}
          className={`rounded bg-zinc-900 px-2 py-1 text-slate-100 ${opacity} transition-opacity duration-300 ease-in-out dark:bg-slate-600`}
        >
          {text}
        </div>
      )}
    </>
  );
};

export default Tooltip;
