import { useEffect, useState } from 'react';
import { TQueryService } from 'types';

interface IProps {
  key: TQueryService;
  params?: any;
  notInitialFetch?: boolean;
  onSuccess?: () => void;
  onError?: () => void;
}

const useQuery = (props: IProps) => {
  const { key, params, notInitialFetch, onError, onSuccess } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<any>(null);

  const fetch = async () => {
    setLoading(true);
    window.electron.ipcRenderer.sendMessage(`${key}-request`, params);
    window.electron.ipcRenderer.on(`${key}-response`, (res) => {
      setLoading(false);
      setSuccess(true);
      setError(false);
      setData(res);
      if (onSuccess) {
        onSuccess();
      }
    });
    window.electron.ipcRenderer.on(`${key}-error`, () => {
      setLoading(false);
      setError(true);
      setSuccess(false);
      if (onError) {
        onError();
      }
    });
  };

  useEffect(() => {
    if (!notInitialFetch) {
      fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading: loading,
    isError: error,
    isSuccess: success,
    data,
    refetch: fetch,
  };
};

export default useQuery;
