/* Components */
import Playlist from "./components/PlayList";

/* ApolloClient Setup */
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>iHeartMedia Playlist</h1>
        <Playlist />
      </div>
    </ApolloProvider>
  );
}

export default App;
