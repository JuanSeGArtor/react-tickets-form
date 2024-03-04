import { useState } from 'react';
import AddTicket from '../components/AddTicket';
import './formScreen.scss';
import TicketsList from '../components/TicketsList';

export default function FormScreen() {
    const [tickets, setTickets] = useState([]);

    const handleAddTicket = (newTicket) => {
        setTickets([...tickets, newTicket]);
    }

    return (
        <>
        <section>
            <AddTicket handleAddTicket={handleAddTicket}/>
            <TicketsList tickets={tickets}/>
        </section>
        </>
    )
}
