import React from 'react';
import useGetUsers from '../../hooks/useGetUsers';
import { DataTable } from '@/components/users/DataTable';

const Users = () => {
    const { users, loading } = useGetUsers();

    const columns = [
        {
            accessorKey: 'username',
            header: 'Username',
        },
        {
            accessorKey: 'email',
            header: 'Email',
        },
        {
            accessorKey: 'Class',
            header: 'Class',
            cell: ({ row }) => row.original.Class || 'N/A',
        },
        {
            accessorKey: 'Level',
            header: 'Level',
            cell: ({ row }) => row.original.Level || 'N/A',
        },
    ];

    return (
        <div className='w-[900px]'>
            <DataTable columns={columns} data={users} />
        </div>
    );
};

export default Users;
