import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import formUtils from 'renderer/utils/formUtils';
import Input from 'renderer/components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import ButtonEle from 'renderer/components/Button';
import { Link } from 'react-router-dom';
import Logo from '../../../../../assets/only-manage-logo.png';
import styles from './styles.module.css';

export default function Login() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
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
    // Handle form submission here
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <main className={styles.loginWrap}>
      <section className={styles.login}>
        <div>
          <img src={Logo} className={styles.logo} alt="only-manage" />
        </div>
        <h1 className={styles.introHeader}>Manage your creators and profits</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {formUtils.loginFields.map((field) => (
            <Input
              key={field.name}
              label={field.label}
              name={field.name}
              register={register}
              errors={errors}
              type={field.type}
            />
          ))}
          <ButtonEle color="primary" type="submit" className={styles.loginBtn}>
            Login
          </ButtonEle>
        </form>
        <div className={styles.forgotPasswordWrap}>
          <Link to="/forgot-password" className={styles.forgotPassword}>
            Forgot Password
          </Link>
        </div>
      </section>
    </main>
  );
}
