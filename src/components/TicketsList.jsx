import PropTypes from 'prop-types';
import '../styled-components/ticketsList.scss';
import TicketCard from './TicketCard';

export default function TicketsList({ tickets, onDelete }) {
    return (
        <>
        <div className="tickets-container">
            <h2>Current Tickets</h2>
            {tickets.map((ticket) => {
                return <TicketCard key={ticket.id} ticket={ticket} onDelete={onDelete}/>
            })}
        </div>
        </>
    )
}

TicketsList.propTypes = {
    tickets: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
};
