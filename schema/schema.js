const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

var playlist = [
  { song: "Teste", artist: "Teste 2 ", songReleaseDate: "Janeiro" },
  { song: "Teste2", artist: "Teste 2 ", songReleaseDate: "Janeiro" },
];

const PlaylistType = new GraphQLObjectType({
  name: "Playlist",
  fields: () => ({
    song: { type: GraphQLString },
    artist: { type: GraphQLString },
    songReleaseDate: { type: GraphQLString },
    playCount: { type: GraphQLString },
    metricA: { type: GraphQLString },
    metricB: { type: GraphQLString },
    metricC: { type: GraphQLString },
    metricD: { type: GraphQLString },
    metricE: { type: GraphQLString },
    metricF: { type: GraphQLString },
    metricG: { type: GraphQLString },
    metricH: { type: GraphQLString },
    metricI: { type: GraphQLString },
    metricJ: { type: GraphQLString },
    metricK: { type: GraphQLString },
    metricL: { type: GraphQLString },
    metricM: { type: GraphQLString },
    metricN: { type: GraphQLString },
    metricO: { type: GraphQLString },
    metricP: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    playlist: {
      type: PlaylistType,
      args: { song: { type: GraphQLString } },
      resolve(parent, args) {
        return _.find(playlist, { song: args.song });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
