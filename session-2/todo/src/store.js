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
        }],
        filter: 'All'
    },
    getters: {
        todos(state) {
            return state.todos.filter((todo) => {
                if(state.filter === 'All')
                    return true
                else if(state.filter === 'Active')
                    return todo.active
                else if(state.filter === 'Compeleted')
                    return !todo.active
            });
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
        },
        SET_FILTER(state, filter) {
            state.filter = filter;
        }
    },
    actions: {

    }
})

// module.exports = store
export default store

