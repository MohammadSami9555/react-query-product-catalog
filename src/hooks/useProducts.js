import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useProducts(page) {
  return useQuery({
    queryKey: ['products', page],
    queryFn: async () => {
      const res = await axios.get('https://fakestoreapi.com/products');
      return res.data;
    },
    select: (data) => {
      const pageSize = 6;
      const totalPages = Math.ceil(data.length / pageSize);

      const start = (page - 1) * pageSize;
      const end = start + pageSize;

      return {
        items: data.slice(start, end),
        totalPages,
      };
    },
    keepPreviousData: true,
  });
}
