import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app'
  })

  return (
    <ApolloProvider client={client}>
      <p>Hello</p>

    </ApolloProvider>
  );
}

export default App;
