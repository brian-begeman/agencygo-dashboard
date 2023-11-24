import { useContext, useEffect, useState } from 'react';
import { AuthContext } from 'renderer/contexts/AuthContext';
import useQuery from 'renderer/hooks/useQuery';
import fetchReq from 'utils/fetch';

export interface IOfManagerCred {
  email: string;
  password: string;
}

export interface IProxyCreds {
  hostname: string;
  password: string;
  port: number;
  protocol: string;
  username: string;
}

export interface IProxyUser {
  user_pass: string;
  username: string;
}

export interface ICreatorProxy {
  creds: IProxyCreds;
  proxyUser: IProxyUser;
}

export interface ICreatorList {
  _id?: ICreatorList | null;
  creatorName: string;
  creatorImage: string;
  gender: string;
  internalNotes: string;
  assignEmployee: string[];
  activated: boolean;
  autoRelink: boolean;
  id: string;
  status: boolean;
  ofcreds: IOfManagerCred;
  proxy: ICreatorProxy;
}

export interface IOfCredsProps {
  email: string;
  password: string;
}
export interface ISelectedCreator {
  creatorName: string;
  ofcreds:IOfCredsProps;
  gender: string;
  id: string;
  internalNotes: string;
  autoRelink: boolean;
  assignEmployee: any[];
  proxy: boolean;
  agencyComission:number;
  creatorComission:number;
  creator: string;
  status: boolean;
  creatorImage:string;

}

const useDataCreators = () => {
  const { userData } = useContext(AuthContext);
  const agencyId = localStorage.getItem('AgencyId')
  const [creators, setCreators] = useState<ICreatorList[]>([]);
  const [totalCreatorsCount, setTotalCreatorsCount]= useState<number>()
  const [selectedCreator, setSelectedCreator] = useState<ICreatorList | null>(
    null
  );
  const { data, isLoading, refetch, setData,setCurrnetPage,currentPage ,paginationLimit} = useQuery({
    key: 'get-creator',
    params: userData?.agency?._id,
  });

  useEffect(() => {
    const creatorsRes =
      data?.data?.creators?.map((item: any) => ({
        ...item,
        id: item?._id,
      })) || [];
    setCreators(creatorsRes);
    setTotalCreatorsCount (data?.data?.totalDocument)
  }, [data]);

  const handleSearch = (data: any) => {
    const queryString = Object.keys(data)
      .map((key) => `${key}=${(data[key])}`)
      .join('&');
    let endpoint = `creators/search/data?${queryString}&page=${currentPage}&limit=${paginationLimit}`;
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
        // setCreators(res?.data.data);
        setSelectedCreator(res?.data[0]._id);
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
    setCurrnetPage,
    currentPage,
    totalCreatorsCount,
  };
};

export default useDataCreators;
