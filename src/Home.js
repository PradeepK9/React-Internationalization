import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    console.log("selectedLang ",selectedLang);
    i18n.changeLanguage(selectedLang);
  }

  return (
    <div className='body'>
      <h1>{t('heading')}</h1>
      <h3>{t('instruction')}</h3>
      <div className='div1'>
        <select onChange={handleChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="ch">Chinese</option>
        </select>
      </div>
      <div className='div2'>
        <p>{t('divText')}</p>
        <p>{t('divText')}</p>
      </div>

    </div>
  );

}

export default Home;
