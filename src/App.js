import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { MainPage } from './pages/MainPage'
import {Switch, Route} from 'react-router-dom'
import Detail from './pages/DetailPage'


function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app'
  })

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route path='/details/:name' 
          children={<Detail/>} >
          </Route>
        </Switch>
      </div>
    </ApolloProvider>
  );
}

export default App;
