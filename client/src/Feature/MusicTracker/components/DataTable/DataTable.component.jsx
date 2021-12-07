import { graphql } from "react-apollo";
import { getMusicsQuery } from "../queries/queries";
import React, { useState } from "react";

/* Componentes */
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "song",
    headerName: "Song name",
    width: 150,
    editable: true,
  },
  {
    field: "artist",
    headerName: "Artist Name",
    width: 150,
    editable: true,
  },
  {
    field: "songReleaseDate",
    headerName: "Release date",
    width: 110,
    editable: true,
  },
  {
    field: "playCount",
    headerName: "Play count",
    width: 110,
    editable: true,
  },
  {
    field: "metricA",
    headerName: "Metric A",
    width: 110,
    editable: true,
  },
  {
    field: "metricB",
    headerName: "Metric B",
    width: 110,
    editable: true,
  },
  {
    field: "metricC",
    headerName: "Metric C",
    width: 110,
    editable: true,
  },
];

function Playlist(props) {
  console.log(props.data.musics);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        getRowId={(row) =>
          `${row.artist}-${row.song}-${row.songReleaseDate}`
            .split(" ")
            .join("_")
        }
        rows={props.data.musics}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
/* 
function Playlist(props) {
  return (
    <div>
      <ul id="music-list">{DisplayMusics(props)}</ul>
      <MusicsDetails />
    </div>
  );
} */

/* function DisplayMusics(props) {
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
} */

export default graphql(getMusicsQuery)(Playlist);
