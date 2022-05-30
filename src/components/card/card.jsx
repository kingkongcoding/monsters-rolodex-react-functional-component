import './card.css';

const Card = ({ monster: { id, name, email } }) => {
  return (
    <div key={id} className='card-container'>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2?size=180x180`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  )
}

export default Card;