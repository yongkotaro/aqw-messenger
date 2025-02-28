import React from 'react';
import useGetLobbies from '../../hooks/useGetLobbies';
import { LobbyTable } from '@/components/users/LobbyTable';

const Lobbies = () => {
    const { lobbies, loading } = useGetLobbies();

    const columns = [
        {
            accessorKey: 'name',
            header: 'Name',
        },
        {
            header: 'Members',
            cell: ({ row }) => `${row.original.participants.length} / ${row.original.size}`,
        },
    ];

    return (
        <div className='w-[900px]'>
            <LobbyTable columns={columns} data={lobbies} />
        </div>
    );
};

export default Lobbies;
