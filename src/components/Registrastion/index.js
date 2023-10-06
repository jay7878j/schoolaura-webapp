import {useEffect} from 'react'

const Registration = () => {
  useEffect(() => {
    document.title = 'Create an Account with SchoolAura'
  }, [])

  return <h1>Registration Page</h1>
}

export default Registration
