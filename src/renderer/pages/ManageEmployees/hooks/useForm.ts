import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useMutation from 'renderer/hooks/useMutation';
import * as Yup from 'yup';
import refetch, { ISelectedEmployee } from './useData';
import fetchReq from 'utils/fetch';

const useFormEmployee = (
  callback: () => void,
  type: 'add' | 'edit',
  selectedEmployee: ISelectedEmployee
) => {
  const [groupOptions, setGroupOptions] = useState<
    {
      label: string;
      value: string;
    }[]
  >([]);
  const [assignCreator, setAssignCreator] = useState<
    {
      label: string;
      value: string;
    }[]
  >([]);
  const { mutate: mutataCreate, isLoading: loadingCreate } = useMutation({
    key: 'create-employee',
  });
  const { mutate: mutateUpdate, isLoading: loadingUpdate } = useMutation({
    key: 'update-employee',
  });

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required'),
    role: Yup.string().required('Role is required'),
    agencyId: Yup.string().required('Group is required'),
    assignCreator: Yup.string().required('AssignCreator is required'),
  });

  const { register, handleSubmit, reset, setValue } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    // window.electron.ipcRenderer
    //   .invoke('get-store', 'agency')
    //   .then((res) => {
    //     const result = {
    //       label: res?.agencyName || '',
    //       // eslint-disable-next-line no-underscore-dangle
    //       value: res?._id || '',
    //     };
    //     return setGroupOptions([result]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  const onSubmit = (data: any) => {
    if (type === 'add') {
      const endPoint = 'employee/' + data.agencyId;
      const options = {
        method: 'POST' as 'POST',
        headers: {
          'content-type': 'application/json',
        },
        withAuth: true,
        body: JSON.stringify(data),
      };
      fetchReq(endPoint, options)
        .then((responce) => responce.json)
        .then((res) => {
          callback();
          reset();
          refetch();
        })
        .catch((error) => {
          console.log('there is a error: ', error);
          callback();
          reset();
        });
    } else {
      mutateUpdate(
        { ...data, id: selectedEmployee?.id },
        {
          onSuccess: () => {
            callback();
            reset();
            refetch();
          },
        }
      );
    }
  };

  useEffect(() => {
    if (selectedEmployee && type === 'edit') {
      setValue('name', selectedEmployee?.name);
      setValue('email', selectedEmployee?.email);
      setValue('role', selectedEmployee?.role);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedEmployee, type]);

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    groupOptions,
    assignCreator,
    isLoading: loadingCreate || loadingUpdate,
  };
};

export default useFormEmployee;
