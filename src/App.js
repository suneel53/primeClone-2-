import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Account from './components/Account'
import Popular from './components/Popular'
import NotFound from './components/NotFound'
import MovieDetailView from './components/MovieDetailView'
import SearchFilter from './components/SearchFilter'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/popular" component={Popular} />
      <ProtectedRoute exact path="/movies/:id" component={MovieDetailView} />
      <ProtectedRoute exact path="/search" component={SearchFilter} />
      <ProtectedRoute exact path="/account" component={Account} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </>
)

export default App
