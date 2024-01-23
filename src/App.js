import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm/index'
import Home from './components/Home/index'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App
