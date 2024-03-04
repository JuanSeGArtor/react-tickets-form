import PropTypes from 'prop-types';
import '../styled-components/ticketCard.scss';


export default function TicketCard({ ticket }) {
    return (
        <div className='ticket-card' key={ticket.id}>
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <p>Resolved: {ticket.resolved ? 'Yes' : 'No'}</p>
            <div className="ticket-actions">
                <div className="priority">
                    P{ticket.priority}
                </div>
                <button>Delete</button>
            </div>
        </div>
    )
}

TicketCard.propTypes = {
    ticket: PropTypes.object.isRequired,
}
