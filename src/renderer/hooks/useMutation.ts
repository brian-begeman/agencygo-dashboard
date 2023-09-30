import { useState } from 'react';
import { TMutationService } from 'types';

interface IProps {
  key: TMutationService;
}

interface IOptionsMutate {
  onSuccess?: (data: any) => void;
  onError?: (data: any) => void;
}

interface IResponse {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  data: any;
  mutate: (body: any, options?: IOptionsMutate) => void;
}

const useMutation = (props: IProps): IResponse => {
  const { key } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<any>(null);

  const mutate = async (body: any, options?: IOptionsMutate) => {
    try {
      const { onSuccess, onError } = options || {};
      setLoading(true);

      window.electron.ipcRenderer.sendMessage(`${key}-request`, body);
      await new Promise((resolve, reject) => {
        window.electron.ipcRenderer.on(`${key}-response`, (res) => {
          setLoading(false);
          setSuccess(true);
          setError(false);
          setData(res);
          if (onSuccess) {
            onSuccess(res);
          }
          resolve(res);
        });
        window.electron.ipcRenderer.on(`${key}-error`, () => {
          setLoading(false);
          setError(true);
          setSuccess(false);
          if (onError) {
            onError(data);
          }
          reject(data);
        });
      });
    } catch (err: any) {
      console.log(err);
    }
  };

  return {
    isLoading: loading,
    isError: error,
    isSuccess: success,
    data,
    mutate,
  };
};

export default useMutation;
