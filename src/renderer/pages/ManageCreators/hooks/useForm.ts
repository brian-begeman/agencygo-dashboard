import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import useMutation from 'renderer/hooks/useMutation';
import useQuery from 'renderer/hooks/useQuery';
import { ISelectedCreator } from './useData';

const useFormCreator = (
  callback: () => void,
  type: 'add' | 'edit',
  selectedCreator: ISelectedCreator
) => {
  const [employeeOptions, setEmployeeOptions] = useState<
    {
      label: string;
      value: string;
    }[]
  >([]);
  const { data: dataEmployeeRaw } = useQuery({ key: 'get-employee' });
  const { mutate: mutataCreate, isLoading: loadingCreate } = useMutation({
    key: 'create-creator',
  });
  const { mutate: mutateUpdate, isLoading: loadingUpdate } = useMutation({
    key: 'update-creator',
  });

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    gender: Yup.string().required('Gender is required'),
    assignEmployee: Yup.string().required('Assign Employee is required'),
    internalNotes: Yup.string(),
    isAutoRelink: Yup.boolean(),
    isAgencyProxy: Yup.boolean(),
    agency: Yup.string().required('Agency is required'),
    creator: Yup.string().required('Creator is required'),
  });

  const { register, handleSubmit, reset, setValue, getValues } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    if (type === 'add') {
      mutataCreate(data, {
        onSuccess: () => {
          callback();
          reset();
        },
      });
    } else {
      mutateUpdate(
        { ...data, id: selectedCreator?.id },
        {
          onSuccess: () => {
            callback();
            reset();
          },
        }
      );
    }
  };

  useEffect(() => {
    if (selectedCreator && type === 'edit') {
      setValue('name', selectedCreator?.creatorName);
      setValue('assignEmployee', selectedCreator?.assignEmployee);
      setValue('gender', selectedCreator?.gender);
      setValue('internalNotes', selectedCreator?.internalNotes);
      setValue('isAutoRelink', selectedCreator?.autoRelink);
      setValue('isAgencyProxy', selectedCreator?.isAgencyProxy);
      setValue('agency', selectedCreator?.agency);
      setValue('creator', selectedCreator?.creator);
    } else {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCreator, type]);

  useEffect(() => {
    if (dataEmployeeRaw?.data) {
      const employeeRes = dataEmployeeRaw?.data?.map((item: any) => {
        return {
          label: item?.name,
          // eslint-disable-next-line no-underscore-dangle
          value: item?._id,
        };
      });
      setEmployeeOptions(employeeRes);
    }
  }, [dataEmployeeRaw]);

  const toggleAutoRelink = () => {
    setValue('isAutoRelink', !getValues('isAutoRelink'));
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    onSubmit,
    isLoading: loadingCreate || loadingUpdate,
    employeeOptions,
    setEmployeeOptions,
    toggleAutoRelink,
    isAutoRelink: getValues('isAutoRelink'),
  };
};

export default useFormCreator;
