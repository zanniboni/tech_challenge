const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
} = graphql;

var playlist = [
  { song: "Teste", artist: "Teste 2 ", songReleaseDate: "Janeiro" },
  { song: "Teste2", artist: "Teste 2 ", songReleaseDate: "Janeiro" },
];

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
    playlist: {
      type: PlaylistType,
      args: { song: { type: GraphQLID } },
      resolve(parent, args) {
        console.log(typeof args.song);
        return _.find(playlist, { song: args.song });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
