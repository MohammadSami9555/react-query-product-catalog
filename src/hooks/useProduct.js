import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useProduct(id) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      return res.data;
    }
  });
}
