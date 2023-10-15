import { FieldValues, UseFormRegister } from 'react-hook-form';
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
  value?: string;
  required?: boolean;
  inputStyle?: any;
  handleOnChange?: (name: string, value: string) => void;
  register?: UseFormRegister<FieldValues>;
}
export function InputWithLabel(props: InputWithLabelProps) {
  const {
    label,
    inputIdentifierName,
    placeholder,
    value,
    inputStyle,
    required = false,
    handleOnChange = () => {},
    register = () => ({}),
  } = props;
  return (
    <div className={classes.inputLabelWrapper}>
      <LabelText label={label} />
      <input
        style={inputStyle}
        className={classes.inputCss}
        name={inputIdentifierName}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => handleOnChange(inputIdentifierName, e.target.value)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register(inputIdentifierName)}
      />
    </div>
  );
}

interface Option {
  label: string;
  value: string;
}

interface DropdownWithLabelProps {
  label?: string;
  inputIdentifierName?: string;
  value?: string;
  selectStyle?: any;
  handleOnChange?: (name: string, value: string) => void;
  options?: Option[]; // Array of options
  placeholder?: string;
  register?: UseFormRegister<FieldValues>;
}

export function DropdownWithLabel(props: DropdownWithLabelProps) {
  const {
    label,
    inputIdentifierName,
    value,
    selectStyle,
    handleOnChange = () => {},
    options,
    placeholder = '',
    register = () => ({}),
  } = props;

  return (
    <div className={classes.inputLabelWrapper}>
      <LabelText label={label} />
      <select
        style={selectStyle}
        className={classes.selectCss}
        name={inputIdentifierName}
        id={inputIdentifierName}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleOnChange(inputIdentifierName, e.target.value)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register(inputIdentifierName)}
      >
        {options?.map((res, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <option key={index} value={res?.value}>
            {res?.label}
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
  isLoading?: boolean;
  id?: string;
}

export function ModalFooter(props: ModalFooterProps) {
  const {
    addHandler,
    cancelHandler,
    cancelText = 'Cancel',
    addText = 'Add',
    isLoading,
    id = '',
  } = props;
  return (
    <div className={classes.modalFooter}>
      <button
        className={classes.cancelButtonCss}
        onClick={cancelHandler}
        type="button"
      >
        {cancelText}
      </button>
      <button
        onClick={addHandler}
        className={classes.addButtonCss}
        type="submit"
        id={id}
        disabled={isLoading}
      >
        {addText}
      </button>
    </div>
  );
}
