import React, { ReactNode } from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';

interface TooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip = ({ children, text }: TooltipProps): JSX.Element => {
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } =
    usePopperTooltip({ delayShow: 150, delayHide: 300, interactive: true });

  return (
    <div>
      <div ref={setTriggerRef}>{children}</div>
      <div ref={setTooltipRef} {...getTooltipProps()}>
        <div
          className={`mt-2 rounded bg-zinc-900 px-2 py-1 text-slate-100 ${
            visible ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300 ease-in-out dark:bg-slate-600`}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
