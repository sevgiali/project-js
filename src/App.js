
import Home from './pages/home';

import DefaultLayout from './layouts/Default';

import Movies from './pages/Movies';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';





const routes = [
  {
    path: '/',
    exact: true,
    main: () => <DefaultLayout>
       <Movies></Movies>
    </DefaultLayout>

  },

  
  {
    path: '/example',
    main: () => <DefaultLayout>
    
      <Home></Home>
    </DefaultLayout>
  },
]

const getRoutes = () => {
  const routeComponents = routes.map((route, index) => {
    return <Route
    key={index}
      exact={route.exact}
      path={route.path}
    >
      {route.main}
    </Route>
  })
  return routeComponents
}

function App() {
  return (
    <Router>
      <Switch>

        {getRoutes()}
      </Switch>
    </Router>

  );
}

export default App;
