export const selectItem = ({commit, state}, {item, index, contArr}) => {
  commit('setCurItem', item);
  commit('setCurIndex', index);
  commit('setCurPageArr', contArr);
}

export const toggleItem = ({commit, state}, {item, index}) => {
  console.log('be');
  commit('setCurItem', item);
  commit('setCurIndex', index);
}

export const showNav = ({commit, state}, {flag}) => {
  commit('setNavShow', flag);
}

export const toggleShowFlag = ({commit, state}, {flag}) => {
  commit('setShowFlag', flag);
}
