const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>total of {sum} exercises </p>

const Part = ({ part }) => 
  <p>
    <li>{part.name} {part.exercises}</li>
  </p>

const Content = ({ parts }) => 
  <ul>
    {parts.map(part =><Part
      key= {part.id} part={part} 
    /> )}
  </ul>

  const Partcourse = ({course}) => {
    const sum = course.parts.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.exercises
    }, 0);

    return(
      <>
        <Header course={course.name} />
        <Content parts={course.parts}/>
        <Total sum={sum} />
      </>
    )
  }

  const Course = ({courses}) => {
    return(
      <>
        {courses.map(course => <Partcourse key={course.id} course={course} />)}
      </>
    )
  }

  export default Course