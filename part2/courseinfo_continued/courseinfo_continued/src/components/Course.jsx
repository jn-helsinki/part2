const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <p><b>Number of exercises {sum}</b></p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>


const Content = ({ parts }) => 
  <>
  {parts.map(part => <Part part={part} key={part.id}/>)}
  </>


const Course = ({course}) => {


    const s = course.parts.reduce((running_sum, part)=> running_sum+=part.exercises
    ,0)
    return (<>
    <Header course={course.name} />
    <Content parts ={course.parts} />
    <Total sum={s} />
    </>
    )
  }

  export default Course;