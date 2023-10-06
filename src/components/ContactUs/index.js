import {useEffect} from 'react'

const ContactUs = () => {
  useEffect(() => {
    document.title = 'Contact Us for Online Education'
  }, [])

  return <h1>ContactUs Page</h1>
}

export default ContactUs
