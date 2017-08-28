import Vue from 'vue'
import Vuex from 'vuex'

// Install vuex for vue
Vue.use(Vuex)

// Create new Store
const store = new Vuex.Store({
    state: {
        todos: [{
            label: "first",
            active: false
        },
        {
            label: "sec",
            active: false
        },{
            label: "third",
            active: false
        }]
    },
    getters: {
        todos(state) {
            return state.todos;
        }
    },
    mutations: {
        ADD_TODO(state, NewTodo) {
            NewTodo.active = false;
            state.todos.push(NewTodo);
        },
        DELETE_TODO(state, todo) {
            var index = state.todos.indexOf(todo); //find it in the array
            state.todos.splice(index, 1); // remove the item
        }
    },
    actions: {

    }
})

// module.exports = store
export default store

