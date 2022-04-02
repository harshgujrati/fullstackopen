import Person from './Person'

const Persons = ({person}) => {
    return(<>
      {person.map(showNumber => <Person key={showNumber.name} name={showNumber.name} number={showNumber.number} />)}
    </>)
  }

export default Persons