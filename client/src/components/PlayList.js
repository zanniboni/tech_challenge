import { graphql } from "react-apollo";
import { getMusicsQuery } from "../queries/queries";
import React, { useState } from "react";

/* Componentes */
import MusicsDetails from "./MusicsDetails";

function Playlist(props) {
  return (
    <div>
      <ul id="music-list">{DisplayMusics(props)}</ul>
      <MusicsDetails />
    </div>
  );
}

function DisplayMusics(props) {
  const [count, setCount] = useState(0);
  var data = props.data;
  if (data.loading) {
    return <div>Loading musics...</div>;
  } else {
    return data.musics.map((song) => {
      return (
        <li key={song.song} onClick={() => setCount(count + 1)}>
          {song.song}
        </li>
      );
    });
  }
}
export default graphql(getMusicsQuery)(Playlist);
