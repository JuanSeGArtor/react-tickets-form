import { useState, useEffect } from 'react';
import AddTicket from '../components/AddTicket';
import './formScreen.scss';
import TicketsList from '../components/TicketsList';

export default function FormScreen() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetch('../db.json')
            .then(response => response.json())
            .then(data => setTickets(data.tickets))
            .catch(error => console.error('Error fetching tickets:', error));
    }, []);

    const handleAddTicket = (newTicket) => {
        setTickets([...tickets, newTicket]);
    };

    const handleDeleteTicket = (ticketId) => {
        setTickets(tickets.filter(ticket => ticket.id !== ticketId));
    };

    return (
        <>
        <section>
            <AddTicket handleAddTicket={handleAddTicket}/>
            <TicketsList tickets={tickets} onDelete={handleDeleteTicket}/>
        </section>
        </>
    )
}
