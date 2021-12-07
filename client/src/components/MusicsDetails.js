import { graphql } from "react-apollo";
import { getSingleMusicQuery } from "../queries/queries";

function MusicsDetails(props) {
  return (
    <div id="book-details">
      <p></p>
    </div>
  );
}

export default graphql(getSingleMusicQuery)(MusicsDetails);
