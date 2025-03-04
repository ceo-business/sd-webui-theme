import { type CSSProperties, memo } from 'react';

import { sndiLogo } from './style';

export interface SndiLogoProps {
  size?: number;
  style?: CSSProperties;
}

const SndiLogo = memo<SndiLogoProps>(({ size = 32, style }) => {
  return (
    <img
      alt="logo"
      src={sndiLogo}
      style={{ height: size, ...style }}
    />
  );
});

export default SndiLogo;
