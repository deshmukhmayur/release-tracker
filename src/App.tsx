import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RepoContextProvider from './context/Repo'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Repository from './pages/Repository'

export default function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact component={Home} />

        <Route path="/:owner/:repoName">
          <RepoContextProvider>
            <Repository />
          </RepoContextProvider>
        </Route>

        <Route path="*" component={NotFound} />

      </Switch>
    </Router>
  )
}
