import ButtonEle from 'renderer/components/Button';
import Input from 'renderer/components/Input';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { Box, Typography, Link } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styles from './styles.module.css';
import fields from 'renderer/utils/formUtils';


import fetchReq from 'utils/fetch';
import { useState } from 'react';

const SetPassword = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const id = location.pathname.split('/').slice(-1).pop();
    const pass = data.password;
    const payload = {
      password: pass,
      newInvite: true,
      status: 'active'
    };
    let endpoint = `employee/${id}`;
    let options = {
      method: 'PATCH' as 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      //withAuth: true,
      body: JSON.stringify(payload),
    };

    fetchReq(endpoint, options)
      .then((response) => response.json())
      .then((res) => {
        setSuccessMessage(res?.message)
        setErrorMessage(null)
        console.log(res);
      })
      .catch((err) => {
        setErrorMessage(err)
        setSuccessMessage(null)
        console.log('Error occur: ', err);
      });
  };

  return (
    <>
      <Box>
        <Box className={styles.header}>
          <h1>INFLOWW LOGO </h1>
        </Box>
        {
          (errorMessage || successMessage) ?
            <Box display={'flex'} sx={{ display: 'flex', justifyContent: 'center' }}>
              {
                successMessage ?
                  <Typography color={'success'} sx={{ fontSize: '24px' }} >
                     {successMessage}
                  </Typography> :
                  <Box>
                    <Typography color={'error'} sx={{ fontSize: '24px' }}>
                    error in setting password try agian
                    </Typography>
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
                  </Box>
              }
            </Box>
            :
            <Box>
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
            </Box>
        }
        <Box className={styles.links}>
          <Link href="#">Terms of Service</Link>|
          <Link href="#">Privacy Policy</Link>|<Link href="#">DMCA</Link>|
          <Link href="#">2257 Disclosure Statement</Link>
        </Box>
      </Box>
    </>
  );
};

export default SetPassword;
