import React, { useState } from 'react';
import classes from './styles.module.css';

interface InputProps {
  placeholder: string;
  name: string;
  value: string;
  handleOnChange: (value: string, name: string) => void;
}
function Input(props: InputProps) {
  const { placeholder, name, handleOnChange, value } = props;
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => handleOnChange(e.target.value, name)}
      className={classes.inputWrap}
      value={value}
    />
  );
}
function Preferences() {
  const [timezone, setTimezone] = useState({
    creatorTimezone: '',
    myTimezone: '',
    weeklyReports: '',
  });
  const handleOnChange = (value: string, name: string) => {
    setTimezone((timezone) => ({
      ...timezone,
      [name]: value,
    }));
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.prefernceWrapper}>
        <div className={classes.inputListWrapper}>
          <label className={classes.labellist}>Creator timezone</label>
          <div>
          <div className={classes.select_box}>
            <select className={classes.optionlist}>
              <option>UTC +1:00</option>
              <option>Test This Select</option>
            </select>
          </div>
          </div>
          <label className={classes.labellist}>My timezone</label>
          <div className={classes.select_box}>
            <select className={classes.optionlist}>
              <option>UTC +1:00</option>
              <option>Test This Select</option>
            </select>
          </div>
          <label className={classes.labellist}>Weekly reports</label>
          <div className={classes.select_box}>
          <select className={classes.optionlist}>
              <option>Sunday</option>
              <option>Monday</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preferences;
