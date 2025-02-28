import useGetLobbies from '../../hooks/useGetLobbies';
import useJoinLobby from '../../hooks/useJoinLobby';
import { LobbyTable } from '@/components/lobbies/LobbyTable';

const Lobbies = () => {
    const { lobbies, loading } = useGetLobbies();
    const { joinLobby } = useJoinLobby();

    const handleJoinLobby = async (lobbyId) => {
        await joinLobby(lobbyId);
    }

    const columns = [
        {
            accessorKey: 'name',
            header: 'Name',
        },
        {
            header: 'Members',
            cell: ({ row }) => `${row.original.participants.length} / ${row.original.size}`,
        },
        {
            header: 'Action',
            cell: ({ row }) => (
                <button className="btn btn-square btn-outline text-white" onClick={() => handleJoinLobby(row.original._id)}>
                    Join
                </button>
            ),
        },
    ];

    return (
        <div className='w-[900px]'>
            {loading ? (
                <p>Loading lobbies...</p>
            ) : (
                <LobbyTable columns={columns} data={lobbies} />
            )}
        </div>
    );
};

export default Lobbies;
