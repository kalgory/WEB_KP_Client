import { useQuery } from 'react-query';

import fetcher from '@/utils/fetcher';

export const useUsersMe = () =>
  useQuery(['users/me'], () => fetcher.get('/api/users/me'), {
    select: ({ data }) => data,
  });
