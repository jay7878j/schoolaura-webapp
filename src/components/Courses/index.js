import {useEffect} from 'react'

const Courses = () => {
  useEffect(() => {
    document.title = 'Find Online Courses For Growing Knowledge'
  }, [])

  return <h1>Courses Page</h1>
}

export default Courses
