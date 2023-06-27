

export const state = () => ({
  repos: [
    {
    name:"Productive Planning Poker",
    description:"Ein Planning Poker für agile Teams",
    image:"",
    client:"Agile Teams",
    tools:["RubyOnRails", "PostgreSQL", "Vue"],
    dateCompleted:"2023-12-01",
    website:"tbd"
  },
],
  projectData: []
});


export const mutations = {
  updateProjectData: (state, data) => {
    state.projectData = data;
  },
  updateRepoData: (state, data) => {
    state.repos = data;
  }
};

export const actions = {
  async getRepos({
    state,
    commit
  }) {
    if (state.repos.length) return;

    try {
      await fetch(process.env.GITHUB_API)
        .then(response => response.json())
        .then(data => {
          commit("updateRepoData", data.filter(d => ["kathalysth", "portfolio-nuxtjs"].map(d => d.toLowerCase()).includes(d.name.toLowerCase())));
        });
    } catch (err) {
      console.log(err);
    }
  }
};
