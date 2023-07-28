
const SortComponent = ({ sortOrder, onSortChange }) => {
    const handleSortChange = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        onSortChange(newSortOrder);
    };

    return (
        <div>
            <button onClick={handleSortChange}>
                Sort by {sortOrder === 'asc' ? 'descending' : 'ascending'}
            </button>
        </div>
    );
};

export {SortComponent};
