import { type CSSProperties, memo } from 'react';

import SndiLogo from './SndiLogo';

export interface LogoProps {
  size?: number;
  style?: CSSProperties;
}

const Logo = memo<LogoProps>(({ size = 32, style }) => {
  return (
    <SndiLogo size={size * 0.75} style={style} />;
  );
});

export default Logo;
