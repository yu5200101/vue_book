import * as Types from './mutations-types'

const mutations = {
  [Types.INCREMENT](state, count) {//state是自动放入的，默认指的就是当前的state
    state.count += count;
  },
  [Types.DECREMENT](state) {
    state.count -= 1;
  }
};
export default mutations;
//宏 快捷键
