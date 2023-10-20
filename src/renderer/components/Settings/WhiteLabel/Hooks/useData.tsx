import { useContext, useEffect, useState } from 'react';
import { AuthContext } from 'renderer/contexts/AuthContext';
import useQuery from 'renderer/hooks/useQuery';

export interface ISelectedWhiteLabel {
  logo?: string;
  primaryColor?: string;
  secondaryColor?: string;
  agencyName?: string;
  agencyEmail?: string;
  agencyPhone?: string;
  agencyWebsite?: string;
}

const userWhiteLabel = () => {
  const { userData } = useContext(AuthContext);
  const [whiteLables, setWhiteLabels] = useState<any>({});
  const { data, refetch } = useQuery({
    key: 'get-agencyById',
    params: { id: userData.user.agencyId },
  });

  useEffect(() => {
    if (data) {
      setWhiteLabels(data.data);
    }
  }, [data]);

  return {
    whiteLables,
  };
};

export default userWhiteLabel;
