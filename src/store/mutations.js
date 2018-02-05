const mutations = {
  setCurItem (state, item) {
    state.curItem = item;
  },
  setCurIndex (state, index) {
    state.curIndex = index;
  },
  setNavShow (state, flag) {
    state.navShow = flag;
  }
}

export default mutations
