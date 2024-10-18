const SearchInput = ({ setSearchTerm }) => {
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); // Update the search term in parent component
    };

    return (
        <form className="input input-bordered flex items-center gap-2">
            <input
                type="text"
                className="grow"
                placeholder="Search"
                onChange={handleSearchChange}
            />
        </form>
    );
};

export default SearchInput;
