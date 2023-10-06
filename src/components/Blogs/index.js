import {useEffect} from 'react'

const Blogs = () => {
  useEffect(() => {
    document.title = 'Get Daily Updates of SchoolAura'
  }, [])

  return <h1>Blogs Page</h1>
}

export default Blogs
