const mutations = {
  setCurItem (state, item) {
    state.curItem = item;
  },
  setCurIndex (state, index) {
    state.curIndex = index;
  },
  setCurPageArr (state, contArr) {
    state.curPageArr = contArr;
  },
  setNavShow (state, flag) {
    state.navShow = flag;
  },
  setShowFlag (state, flag) {
    state.showFlag = flag;
  }
}

export default mutations
