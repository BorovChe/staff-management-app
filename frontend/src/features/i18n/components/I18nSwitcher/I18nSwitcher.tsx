import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { I18nSwitcherBtnStyled } from './I18nSwitcher.styled';
import CustomIcon from 'components/CustomIcon/CustomIcon';

const getLanguage: () => string = () => i18next.language || window.localStorage.i18nextLng;

const I18nSwitcher: FC = (): ReactElement => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    getLanguage() === 'ua' ? i18n.changeLanguage('en') : i18n.changeLanguage('ua');
  };

  return (
    <I18nSwitcherBtnStyled type="submit" onClick={() => changeLanguage()}>
      {getLanguage() === 'ua' ? (
        <CustomIcon width="24px" height="24px" id="en" />
      ) : (
        <CustomIcon width="24px" height="24px" id="ua" />
      )}
    </I18nSwitcherBtnStyled>
  );
};

export default I18nSwitcher;
