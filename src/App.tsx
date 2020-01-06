import React, { Fragment } from 'react';
import { ApolloProvider } from 'react-apollo'
import { client } from './apollo/client';
import Header from './components/Header';
import { ListClientes, EditarCliente, CreateCliente } from './pages/Clientes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ClientesRoutes } from './routes';

const RouteWithClientes = Object.keys(ClientesRoutes).map(key => {
  const route = ClientesRoutes[key]
  return (
    <Route
      key={key}
      exact={route.exact}
      path={route.declarativePath}
      component={route.component}
    />
  )
})

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <Header></Header>
          <div className='container'>
            <Switch>
              {RouteWithClientes}
            </Switch>
          </div>
        </Fragment>
      </Router>

    </ApolloProvider>

  );
}

export default App;
