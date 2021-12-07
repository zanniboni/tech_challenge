/* Components */
import Playlist from "./components/PlayList";
import Header from "./components/Header/Header.component";
import Homepage from "./Feature/Home/views/Homepage/Homepage.component";

/* ApolloClient Setup */
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Routes, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/musictracker" element={<Playlist />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
