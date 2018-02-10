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

export const selectNav = ({commit, state}, {flag}) => {
  commit('setNavShow', flag);
}

export const changeSubject = ({commit, state}, {flag}) => {
  commit('setchangeSubject', flag);
}
