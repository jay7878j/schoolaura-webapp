import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'

import './App.css'
import Blogs from './components/Blogs'
import Registration from './components/Registrastion'
import Courses from './components/Courses'
import ContactUs from './components/ContactUs'
import Login from './components/Login'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/blogs" component={Blogs} />
    <Route exact path="/registration" component={Registration} />
    <Route exact path="/courses" component={Courses} />
    <Route exact path="/contactus" component={ContactUs} />
    <Route exact path="/login" component={Login} />
  </Switch>
)

export default App
