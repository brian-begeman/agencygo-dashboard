import ButtonEle from 'renderer/components/Button';
import Input from 'renderer/components/Input';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styles from './styles.module.css';
import fields from 'renderer/utils/formUtils';
import { Box, Link } from '@mui/material';

const SetPassword = () => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(9, 'Password must be at least 9 characters'),
  }) as Yup.ObjectSchema<FieldValues>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {};

  return (
    <>
      <Box className={styles.header}>
        <h1>INFLOWW LOGO</h1>
      </Box>
      <Box className={styles.resetpass}>
        <h1 className={styles.heading}>Set Password</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.setPasswordFields?.map((field) => (
            <Input
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              register={register}
              errors={errors}
            />
          ))}
          <ButtonEle className={styles.button} type="submit">
            Confirm
          </ButtonEle>
        </form>
      </Box>
      <Box className={styles.links}>
        <Link href="#">Terms of Service</Link>|
        <Link href="#">Privacy Policy</Link>|<Link href="#">DMCA</Link>|
        <Link href="#">2257 Disclosure Statement</Link>
      </Box>
    </>
  );
};

export default SetPassword;
