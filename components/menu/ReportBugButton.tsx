import React from 'react';
import { MdBugReport } from 'react-icons/md';
import MenuIconWithTooltip from './MenuIconWithTooltip';

const ReportBugButton = (): JSX.Element => {
  const handleClick = () => {
    window.open('https://github.com/dhmitry/keyboard-chatter-test', '_blank');
  };

  return (
    <MenuIconWithTooltip
      icon={MdBugReport}
      tooltipText="Report a bug"
      onClick={handleClick}
    />
  );
};

export default ReportBugButton;
