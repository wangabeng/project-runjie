export const selectItem = ({commit, state}, {item, index}) => {
  commit('setCurItem', item);
  commit('setCurIndex', index);
}

export const selectNav = ({commit, state}, {flag}) => {
  commit('setNavShow', flag);
}
