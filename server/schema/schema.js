const graphql = require("graphql");
const _ = require("lodash");
var songData = require("../songData.json");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

var playlist = songData;

const PlaylistType = new GraphQLObjectType({
  name: "Playlist",
  fields: () => ({
    song: { type: GraphQLID },
    artist: { type: GraphQLString },
    songReleaseDate: { type: GraphQLString },
    playCount: { type: GraphQLInt },
    metricA: { type: GraphQLInt },
    metricB: { type: GraphQLInt },
    metricC: { type: GraphQLInt },
    metricD: { type: GraphQLInt },
    metricE: { type: GraphQLInt },
    metricF: { type: GraphQLInt },
    metricG: { type: GraphQLInt },
    metricH: { type: GraphQLInt },
    metricI: { type: GraphQLInt },
    metricJ: { type: GraphQLInt },
    metricK: { type: GraphQLInt },
    metricL: { type: GraphQLInt },
    metricM: { type: GraphQLInt },
    metricN: { type: GraphQLInt },
    metricO: { type: GraphQLInt },
    metricP: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    music: {
      type: PlaylistType,
      args: { song: { type: GraphQLID } },
      resolve(parent, args) {
        console.log(typeof args.song);
        return _.find(playlist, { song: args.song });
      },
    },
    musics: {
      type: new GraphQLList(PlaylistType),
      resolve(parent, args) {
        return playlist;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
