import Card from '../card/card';
import './card-list.css';

const CardList = ({ filteredMonsters }) =>
  <div className='card-list'>
    {filteredMonsters.map((monster) => {
      return (
        <Card
          monster={monster}
        />
      )
    })}
  </div>


export default CardList;