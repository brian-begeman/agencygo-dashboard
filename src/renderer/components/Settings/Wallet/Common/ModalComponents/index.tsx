import React from 'react';
import classes from './styles.module.css';

interface LabelTextProps {
  label: string;
}

export function LabelText(props: LabelTextProps) {
  const { label } = props;
  return <div className={classes.labelText}>{label}</div>;
}

interface InputWithLabelProps {
  label: string;
  inputIdentifierName: string;
  placeholder: string;
  value: string;
  handleOnChange: (name: string, value: string) => void;
}
export function InputWithLabel(props: InputWithLabelProps) {
  const { label, inputIdentifierName, placeholder, value, handleOnChange } =
    props;
  return (
    <div className={classes.inputLabelWrapper}>
      <LabelText label={label} />
      <input
        className={classes.inputCss}
        name={inputIdentifierName}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleOnChange(inputIdentifierName, e.target.value)}
      />
    </div>
  );
}

interface Option {
  label: string;
  value: string;
}

interface DropdownWithLabelProps {
  label: string;
  inputIdentifierName: string;
  value: string;
  handleOnChange: (name: string, value: string) => void;
  options: Option[]; // Array of options
  placeholder?: string;
}

export function DropdownWithLabel(props: DropdownWithLabelProps) {
  const {
    label,
    inputIdentifierName,
    value,
    handleOnChange,
    options,
    placeholder = '',
  } = props;

  return (
    <div className={classes.inputLabelWrapper}>
      <LabelText label={label} />
      <select
        className={classes.selectCss}
        name={inputIdentifierName}
        id={inputIdentifierName}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleOnChange(inputIdentifierName, e.target.value)}
      >
        {options.map(({ label, value }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

interface ModalFooterProps {
  addHandler: () => void;
  cancelHandler: () => void;
  cancelText?: string;
  addText?: string;
}

export function ModalFooter(props: ModalFooterProps) {
  const {
    addHandler,
    cancelHandler,
    cancelText = 'Cancel',
    addText = 'Add',
  } = props;
  return (
    <div className={classes.modalFooter}>
      <button
        className={classes.cancelButtonCss}
        onClick={addHandler}
        type="button"
      >
        {cancelText}
      </button>
      <button
        onClick={cancelHandler}
        className={classes.addButtonCss}
        type="button"
      >
        {addText}
      </button>
    </div>
  );
}
