import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Nav = () => {
  const { t } = useTranslation();

  return (
    <header className='nav'>
      <div>{t('i18react')}</div>
      <Link to="/">{t('home')}</Link>
      {/* <Link to="/page2">{t('page2')}</Link> */}
    </header>
  );
}

export default Nav;