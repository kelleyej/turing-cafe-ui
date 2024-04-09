import './Card.css';

export default function Card({id, name, date, time, number}){
    return (
        <section className='card'>   
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time} pm</p>
            <p>Number of guests: {number}</p>
            <button>Cancel</button>
        </section>
    )
}