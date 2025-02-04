import PropTypes from 'prop-types';
import '../styled-components/ticketCard.scss';
import DeleteButton from './DeleteButton';

export default function TicketCard({ ticket, onDelete }) {
    return (
        <div className='ticket-card' key={ticket.id}>
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <p>Resolved: {ticket.resolved ? 'Yes' : 'No'}</p>
            <div className="ticket-actions">
                <div className="priority">
                    P{ticket.priority}
                </div>
                <DeleteButton ticketId={ticket.id} onDelete={onDelete} />
            </div>
        </div>
    );
}

TicketCard.propTypes = {
    ticket: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
};
