const state = {
  user : JSON.parse(sessionStorage.getItem('$user'))||{}
}

const getters = {
  getUser : state =>{
    return state.user;
  }
}

const actions = {
  setUser({commit}, item){
    commit('setUser', item)
  }
}

const mutations = {
  setUser(state, item){
    state.user = item;
    sessionStorage.setItem('$user',JSON.stringify(state.user))
  },
  clearUser(state){
    state.user = {};
    sessionStorage.setItem('$user',JSON.stringify(state.user))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}


