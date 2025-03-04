import { Icon } from '@lobehub/ui';
import { Loader2 } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Flexbox } from 'react-layout-kit';
import SndiLogo from '../Logo/SndiLogo';

const Loading = memo(() => {
  const { t } = useTranslation();

  return (
    <Flexbox height={'100vh'} width={'100%'}>
      <Center flex={1} gap={12} width={'100%'}>
        <p>Aboba</p>
      </Center>
    </Flexbox>
  );
});

export default Loading;
