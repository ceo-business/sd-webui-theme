import { type CSSProperties, memo } from 'react';

import SndiLogo from './SndiLogo';

export interface LogoProps {
  size?: number;
  style?: CSSProperties;
}

const Logo = memo<LogoProps>(({ size = 32, style }) => {

  if (setting.logoType === 'kitchen') {
    return <SndiLogo size={size * 0.75} style={style} />;
  }

  return (
    <SndiLogo size={size * 0.75} style={style} />;
  );
});

export default Logo;
