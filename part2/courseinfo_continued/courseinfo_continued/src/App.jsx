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

const App = () => {
  // const course = {
  //   id: 1,
  //   name: 'Half Stack application development',
  //   parts: [
  //     {
  //       name: 'Fundamentals of React',
  //       exercises: 10,
  //       id: 1
  //     },
  //     {
  //       name: 'Using props to pass data',
  //       exercises: 7,
  //       id: 2
  //     },
  //     {
  //       name: 'State of a component',
  //       exercises: 14,
  //       id: 3
  //     }
  //   ]
  // }

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (<>
  <h1>Web Development Curriculum</h1>
  {courses.map(course => <Course course={course} />)}
  </>)
  //  <Course course={course} />
}



export default App;