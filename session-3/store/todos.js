export const state = () => ({
        counter: 2
})


export const getters =  {
    counter(state) {
        return state.counter;
    }
}


export const mutations = {
    ADD(state) {
        state.counter++;
    }
}