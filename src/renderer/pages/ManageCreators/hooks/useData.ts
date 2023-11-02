import { useEffect, useState } from 'react';
import useQuery from 'renderer/hooks/useQuery';
import fetchReq from 'utils/fetch';

export interface ICreatorList {
  creatorName: string;
  imageSrc: string;
  gender: string;
  internalNotes: string;
  assignEmployee: string[];
  activated: boolean;
  autoRelink: boolean;
  id: string;
  status: boolean;
}

export interface ISelectedCreator {
  creatorName: string;
  gender: string;
  id: string;
  internalNotes: string;
  autoRelink: boolean;
  assignEmployee: any[];
  proxy: boolean;
  agency: string;
  creator: string;
  status: boolean;
}

const useDataCreators = () => {

  const agencyId = localStorage.getItem('AgencyId');
  const [creators, setCreators] = useState<ICreatorList[]>([]);
  const [selectedCreator, setSelectedCreator] = useState<ICreatorList | null>(
    null
  );
  const { data, isLoading, refetch, setData } = useQuery({
    key: 'get-creator',
    params: '6527ad93dedd0418c5d1dc50',
  });

  useEffect(() => {
    const creatorsRes =
      data?.data?.map((item: any) => ({
        ...item,
        id: item?._id,
      })) || [];
    // setCreators(creatorsRes);
  }, [data]);

  const handleSearch = (data: any) => {
    const queryString = Object.keys(data)
      .map((key) => `${key}=${encodeURIComponent(data[key])}`)
      .join('&');

    let endpoint = `creators/search/?agencyId=${agencyId}`;
    let options = {
      method: 'GET' as 'GET',
      headers: {
        'content-type': 'application/json',
      },
      withAuth: true,
    };
    fetchReq(endpoint, options)
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        setCreators(res?.data)
      })
      .catch((err) => {
        console.log('Error occured: ', err);
      });
  };

  return {
    creators,
    isLoading,
    selectedCreator,
    setSelectedCreator,
    refetch,
    handleSearch,
  };
};

export default useDataCreators;
