import React, { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  text: ReactNode;
}

const Tooltip = ({ children, text }: TooltipProps): JSX.Element => {
  return (
    <div className="group relative">
      {children}
      <span className="invisible absolute left-[50%] z-10 mt-2 -ml-16 w-32 rounded bg-zinc-900 px-2 py-1 text-center text-slate-100 opacity-0 transition-opacity ease-in-out group-hover:visible group-hover:opacity-100 dark:bg-slate-600">
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
