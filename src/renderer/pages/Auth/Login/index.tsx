import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import formUtils from 'renderer/utils/formUtils';
import Input from 'renderer/components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import ButtonEle from 'renderer/components/Button';
import { Link, useNavigate } from 'react-router-dom';
import Logo from 'renderer/assets/png/agency-go-logo.png';
import useMutation from 'renderer/hooks/useMutation';
import { ButtonBase } from '@mui/material';
import styles from './styles.module.css';
import { useContext } from 'react';
import { AuthContext } from 'renderer/contexts/AuthContext';

export default function Login() {
  const { login } = useContext(AuthContext);
  const { mutate: mutateLogin, isLoading } = useMutation({ key: 'login' });
  const navigate = useNavigate();
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
    // mutateLogin(data, {
    //   onSuccess: () => {
    //     navigate('/home');
    //   },
    // });
    login();
    navigate('/home');
  };

  return (
    <main className={styles.loginWrap}>
      <section className={styles.login}>
        <img src={Logo} className={styles.logo} alt="only-manage" />
        <h1 className={styles.introHeader}>Manage your creators and profits</h1>
        <p className={styles.introDescription}>
          Welcome back! Please enter your details.
        </p>
        <form
          style={{
            width: '100%',
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
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
          <div className={styles.forgotPasswordWrap}>
            <Link to="/forgot-password" className={styles.forgotPassword}>
              Forgot Password
            </Link>
          </div>
          <ButtonEle
            color="primary"
            type="submit"
            className={styles.loginBtn}
            disabled={isLoading}
          >
            Login
          </ButtonEle>
          <div className={styles.createNewContainer}>
            <p className={styles.createNewText}>Don’t have an account?</p>
            <ButtonBase
              className={styles.createNewTextLink}
              onClick={() => {
                navigate('/register');
              }}
              type="button"
            >
              Create New Account
            </ButtonBase>
          </div>
        </form>
      </section>
    </main>
  );
}
