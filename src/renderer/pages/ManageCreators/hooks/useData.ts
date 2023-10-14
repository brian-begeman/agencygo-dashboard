import { useEffect, useState } from 'react';
import useQuery from 'renderer/hooks/useQuery';

export interface ICreatorList {
  creatorName: string;
  imageSrc: string;
  gender: string;
  internalNotes: string;
  assignEmployee: string;
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
  assignEmployee: string;
  proxy: boolean;
  agency: string;
  creator: string;
  status: boolean;
}

const useDataCreators = () => {
  const [creators, setCreators] = useState<ICreatorList[]>([]);
  const [selectedCreator, setSelectedCreator] = useState<ICreatorList | null>(
    null
  );
  const { data, isLoading, refetch } = useQuery({ key: 'get-creator' });

  useEffect(() => {
    const creatorsRes =
      data?.data?.map((item: any) => ({
        ...item,
        // eslint-disable-next-line no-underscore-dangle
        id: item?._id,
      })) || [];
    setCreators(creatorsRes);
  }, [data]);

  return {
    creators,
    isLoading,
    selectedCreator,
    setSelectedCreator,
    refetch,
  };
};

export default useDataCreators;
