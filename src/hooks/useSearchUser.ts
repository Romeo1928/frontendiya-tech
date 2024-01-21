import { ChangeEvent, useState } from 'react';

import { useDebouncedValue } from '@mantine/hooks';

import { useSearchUsersQuery } from 'features/api/apiSlice.ts';
import { ResponseType } from 'models/models.ts';

type UseSearchUserReturnType = {
  searchQuery: string;
  isLoading: boolean;
  isError: boolean;
  data?: ResponseType;
  currentPage: number;
  handleInputSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePageChange: (newPage: number) => void;
};

export const useSearchUser = (): UseSearchUserReturnType => {
  // useState для input.
  const [searchQuery, setSearchQuery] = useState('');
  // свой кастомный hook для оптимизации при вводе в input.
  // const debounced = useDebounce(searchQuery);
  // useState для Pagination
  const [currentPage, setCurrentPage] = useState(1);
  // hook из  Mantine для оптимизации при вводе в input.
  const [debouncedSearchValue] = useDebouncedValue(searchQuery, 300);

  // кастомный хук из RTK Query, выполняет запрос на получение данных пользователей и возвращает результат запроса в виде объекта с полями data, isLoading и isError.
  const { data, isLoading, isError } = useSearchUsersQuery(
    {
      q: debouncedSearchValue,
      page: currentPage,
      perPage: 1,
    },
    {
      skip: debouncedSearchValue.trim().length < 2, // при каких условиях нам не нужно делать запросы.
    },
  );

  const handleInputSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.currentTarget.value.trim());
  };

  const handlePageChange = (newPage: number): void => {
    setCurrentPage(newPage);
  };

  return {
    searchQuery,
    isLoading,
    isError,
    data,
    currentPage,
    handleInputSearch,
    handlePageChange,
  };
};
