const resolvers = {
  Query: {
    projects: async () => {
      return;
    },
    project: async () => {
      return;
    },
  },
  // Mutation: {
  //    updateProject: async(parent, { projectId }) => {
  //       return Project.findOneAndUpdate(
  //          { _id: projectId },
  //          {
  //             new: true,
  //          }
  //       );
  //    }
  // }
};

export { resolvers };
