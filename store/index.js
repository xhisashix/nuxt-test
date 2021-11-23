export const state = () => ({
  message: 'Hallow World'
})

export const mutations = {
  changeMessage(state, value){
    state.message = value
  }
}