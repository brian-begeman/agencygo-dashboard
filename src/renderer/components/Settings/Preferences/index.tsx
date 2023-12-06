import { useTheme } from '@mui/material';
import classes from './styles.module.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Preferences() {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'de', label: 'German' },
    { value: 'fr', label: 'French' },
    { value: 'es', label: 'Spanish' },
    { value: 'ru', label: 'Russian' },
  ];

  return (
    <div className={classes.wrapper}>
      <div className={classes.prefernceWrapper}>
        <div className={classes.inputListWrapper}>
          <div className={classes.inputBox}>
            <label className={classes.labellist}>{t('Language')}</label>
            <div className={classes.select_box}>
              <select
                className={classes.optionlist}
                style={{
                  backgroundColor: isDarkTheme ? '#121212' : '#fff',
                  color: isDarkTheme ? '#fff' : '#121212',
                }}
                onChange={handleLanguageChange}
                value={i18n.language}
              >
                {languageOptions.map((val) => {
                  return <option value={val.value}>{val.label}</option>;
                })}
              </select>
            </div>
          </div>
          <div className={classes.inputBox}>
            <label className={classes.labellist}>{t('Creator timezone')}</label>
            <div className={classes.select_box}>
              <select
                className={classes.optionlist}
                style={{
                  backgroundColor: isDarkTheme ? '#121212' : '#fff',
                  color: isDarkTheme ? '#fff' : '#121212',
                }}
              >
                <option>UTC +1:00</option>
                <option>Test This Select</option>
              </select>
            </div>
          </div>
          <div className={classes.inputBox}>
            <label className={classes.labellist}>{t('My timezone')}</label>
            <div className={classes.select_box}>
              <select
                className={classes.optionlist}
                style={{
                  backgroundColor: isDarkTheme ? '#121212' : '#fff',
                  color: isDarkTheme ? '#fff' : '#121212',
                }}
              >
                <option>UTC +1:00</option>
                <option>Test This Select</option>
              </select>
            </div>
          </div>
          <div className={classes.inputBox}>
            <label className={classes.labellist}>{t('Weekly reports')}</label>
            <div className={classes.select_box}>
              <select
                className={classes.optionlist}
                style={{
                  backgroundColor: isDarkTheme ? '#121212' : '#fff',
                  color: isDarkTheme ? '#fff' : '#121212',
                }}
              >
                <option>{t('Sunday')}</option>
                <option>{t('Monday')}</option>
                <option>{t('Tuesday')}</option>
                <option>{t('Wednesday')}</option>
                <option>{t('Thursday')}</option>
                <option>{t('Friday')}</option>
                <option>{t('Saturday')}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preferences;
