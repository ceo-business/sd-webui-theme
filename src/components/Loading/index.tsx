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
        <SndiLogo size={48}/>
        <Center gap={16} horizontal>
          <Icon icon={Loader2} spin />
          {t('custom.initializing')}
        </Center>
      </Center>
    </Flexbox>
  );
});

export default Loading;
