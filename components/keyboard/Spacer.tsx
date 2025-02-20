import React, { useMemo, type JSX } from 'react';
import {
  keyHeightStyles,
  KeySize,
  keyWidthStyles,
} from '../../constants/keyboard';

interface SpacerProps {
  height?: KeySize;
  width?: KeySize;
}

const Spacer = ({ height, width }: SpacerProps): JSX.Element => {
  const widthStyle = useMemo(
    () => (width ? keyWidthStyles[width] : ''),
    [width]
  );
  const heightStyle = useMemo(
    () => (height ? keyHeightStyles[height] : ''),
    [height]
  );

  return <div className={`${widthStyle} ${heightStyle}`} />;
};

export default Spacer;
