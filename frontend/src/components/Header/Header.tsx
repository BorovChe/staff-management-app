import { FC, ReactElement } from 'react';

import I18nSwitcher from '../../features/i18n/components/I18nSwitcher/I18nSwitcher';

const Header: FC = (): ReactElement => {
  return (
    <header>
      <I18nSwitcher />
    </header>
  );
};

export default Header;
