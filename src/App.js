import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {MainPage} from './components/MainPage'
import Filter from './components/Filter'

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app'
  })

  return (
    <ApolloProvider client={client}>
      <main>
        <h1 className="App">Pokemon App</h1>
        <h1 className="App">Filter the Pokemon</h1>
        <Filter />
        <MainPage />
      </main>
    </ApolloProvider>
  );
}

export default App;
