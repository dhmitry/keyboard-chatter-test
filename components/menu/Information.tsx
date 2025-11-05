import { type JSX } from 'react';
import { MdInfoOutline } from 'react-icons/md';
import MenuIconWithTooltip from './MenuIconWithTooltip';

const Information = (): JSX.Element => {
  return (
    <MenuIconWithTooltip
      icon={MdInfoOutline}
      tooltipText="Press any key to test it for chatter. If there is a second keypress within the configured threshold the key will turn red and become 'broken'. If a key is pressed 100 times without chatter it turns green and becomes 'healthy'. Otherwise the key will be 'uncertain' and will require more testing."
    />
  );
};

export default Information;
