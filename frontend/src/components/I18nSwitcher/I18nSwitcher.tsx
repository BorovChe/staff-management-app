import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

const locales = { en: { title: 'EN' }, ua: { title: 'UA' } };

const I18nSwitcher: FC = (): ReactElement => {
  const { i18n } = useTranslation();

  return (
    <div>
      <ul>
        {Object.keys(locales).map((locale: any) => (
          <li key={locale}>
            <button type="submit" onClick={() => i18n.changeLanguage(locale)}>
              {locale}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default I18nSwitcher;
