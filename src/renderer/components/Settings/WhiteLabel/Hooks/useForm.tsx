import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import userWhiteLabel from './useData';
import { useContext, useEffect, useState } from 'react';
import fetchReq from 'utils/fetch';
import { AuthContext } from 'renderer/contexts/AuthContext';

const useFormWhiteLabel = () => {
  const { whiteLables } = userWhiteLabel();
  const { userData } = useContext(AuthContext);
  const [file, setFile] = useState<string | ArrayBuffer | null>('');
  const [agencyLogo, setAgencyLogo] = useState<string | null>(null);

  const validationSchema = Yup.object().shape({
    agencyLogo: Yup.string().required('Logo is required'),
    primaryColor: Yup.string(),
    secondaryColor: Yup.string(),
    agencyName: Yup.string().required('Agency name is required'),
    email: Yup.string()
      .required('Agency email is required')
      .email('Email is invalid'),
    phone: Yup.string(),
    websiteUrl: Yup.string().required('Agency website is required'),
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (whiteLables) {
      setValue('agencyName', whiteLables.agencyName);
      setValue('email', whiteLables?.userId?.email);
      setValue('websiteUrl', whiteLables.websiteUrl);
      setValue('phone', whiteLables.phone);
      // setFile(whiteLables.agencyLogo);
      setAgencyLogo(whiteLables.agencyLogo);
    }
  }, [whiteLables]);

  const onSubmit = (data: any) => {
    console.log(data.logo, 'data white label----------------------');
    let endpoint = `agency/update-agency/${userData?.agency?._id} `;
    let options = {
      method: 'PATCH' as 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      withAuth: true,
      // body:
    };
    // fetchReq(endpoint, options)
    //   .then((response) => response.json())
    //   .then((res) => {
    //     // setData(res);
    //     // setLoading(false);
    //   })
    //   .catch((error) => {
    //     // setError(true);
    //     // setLoading(false);
    //   });
  };

  const handleRemoveImage = () => {
    console.log('api called777777777777777777777777777');

    // const formData = new FormData();
    // const data = {
    //   agencyImage: null,
    // };
    // // formData.append('agencyImage', data);
    // let endpoint = `agency/update-agency/${userData?.agency?._id} `;
    // let options = {
    //   method: 'PATCH' as 'PATCH',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   withAuth: true,
    //   // body: formData,
    // };
    // fetchReq(endpoint, options)
    //   .then((response) => response.json())
    //   .then((res) => {
    //     // setData(res);
    //     // setLoading(false);
    //   })
    //   .catch((error) => {
    //     // setError(true);
    //     // setLoading(false);
    //   });
  };

  return {
    setValue,
    file,
    setFile,
    register,
    setAgencyLogo,
    agencyLogo,
    errors,
    handleRemoveImage,
    handleSubmit: handleSubmit(onSubmit),
  };
};

export default useFormWhiteLabel;
