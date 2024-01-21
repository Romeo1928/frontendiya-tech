import { CSSProperties, FC } from 'react';

import { Loader, Notification, Pagination, rem, TextInput } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

import { UserCard } from 'components/UserCard.tsx';
// import { useDebounce } from 'hooks/useDebounce.ts';
import { useSearchUser } from 'hooks/useSearchUser.ts';
import { UserType } from 'models/models.ts';

const style: CSSProperties = {
  width: '500px',
};
const SearchUser: FC = () => {
  const {
    searchQuery,
    handleInputSearch,
    handlePageChange,
    isError,
    isLoading,
    data,
    currentPage,
  } = useSearchUser();

  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;

  // isLoading ???.
  // if (isLoading) {
  //   return <Loader size={50} />;
  // }
  //
  // if (isError) {
  //   return <p>Error fetching users</p>;
  // }

  return (
    <div style={{ padding: '20px' }}>
      <form>
        <TextInput
          style={style}
          pointer
          size="xl"
          radius="md"
          variant="filled"
          value={searchQuery}
          onChange={handleInputSearch}
          placeholder="Search Github Users..."
        />
      </form>
      {/* уточнить где лучше писать isLoading, isError */}
      {isLoading && <Loader size="xl" />}
      {isError && (
        <Notification
          // onClose={onCloseError}
          style={{ width: '300 px' }}
          icon={xIcon}
          color="red"
          title="Error!"
        >
          Error fetching users
        </Notification>
      )}
      {data?.items.map((user: UserType) => <UserCard key={user.id} user={user} />)}

      {/* usePagination ??? */}
      <Pagination
        total={data?.total_count || 0}
        value={currentPage}
        onChange={handlePageChange}
        variant="outline"
      />
    </div>
  );
};

export default SearchUser;
