import PropTypes from 'prop-types';

export default function DeleteButton({ ticketId, onDelete }) {
    const handleDelete = () => {
        onDelete(ticketId);
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
}

DeleteButton.propTypes = {
    ticketId: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};
