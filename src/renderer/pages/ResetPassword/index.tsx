import ButtonEle from 'renderer/components/Button'
import Input from 'renderer/components/Input'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styles from "./styles.module.css"
import fields from 'renderer/utils/formUtils';

const ResetPassword = () => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(9, 'Password must be at least 9 characters')
      .max(40, 'Password must not exceed 40 characters'),
    newPassword: Yup.string()
    .required('Password is required')
    .min(9, 'Password must be at least 9 characters')
    .max(40, 'Password must not exceed 40 characters'),
  }) as Yup.ObjectSchema<FieldValues>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data,"::::::::::::")
  };
  return (
    <>
    <div className={styles.header}>
      <h1>INFLOWW LOGO</h1>
    </div>
    <div className={styles.resetpass}>
      <h1 className={styles.heading}>Reset Password</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.resetPasswordFields?.map((field)=>(
          <Input
          key={field.name}
          label={field.label}
          name={field.name}
          type={field.type}
          register={register}
          errors={errors}
          />
        ))}
        <ButtonEle className={styles.button} type="submit">Confirm</ButtonEle>
      </form>
    </div>
    <div className={styles.links}>
      <a href='#'>Terms of Service</a>|
      <a href='#'>Privacy Policy</a>|
      <a href='#'>DMCA</a>|
      <a href='#'>2257 Disclosure Statement</a>
    </div>
    </>
  )
}
export default ResetPassword