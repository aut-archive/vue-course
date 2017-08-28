<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input @keyup.enter="addTodo" v-model="inputBox" autofocus="autofocus" autocomplete="off" placeholder="What needs to be done?" class="new-todo">
    </header>
    <section class="main" style="">
      <input type="checkbox" class="toggle-all">
      <ul class="todo-list">
        <li class="todo" v-for="(todo,index) in $store.getters.todos" :key="index">
          <div class="view">
            <input type="checkbox" class="toggle" v-model="todo.active">
            <label> {{ todo.label + ' ' + todo.active }}</label>
            <button class="destroy" @click="delete_todo(todo)"></button>
          </div> <input type="text" class="edit">
        </li>
      </ul>
    </section>
    <footer class="footer" style="">
      <span class="todo-count">
        <strong>3</strong> items left
      </span>
      <ul class="filters">
        <li>
          <a href="#/all" :class="{selected: selectedFilter === 'All'}" @click="selectedFilter = 'All'">All</a>
        </li>
        <li>
          <a href="#/active" :class="{selected: selectedFilter === 'Active'}" @click="selectedFilter = 'Active'">Active</a>
        </li>
        <li>
          <a href="#/completed" :class="{selected: selectedFilter === 'Compeleted'}" @click="selectedFilter = 'Compeleted'">Completed</a>
        </li>
      </ul>
      <button class="clear-completed" style="display: none;">
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App...',
      inputBox: '',
      selectedFilter: 'All'
    }
  },
  methods: {
    addTodo() {
      var newTodo = {
        label: this.inputBox
      };
      if (this.inputBox.length) {
        this.$store.commit('ADD_TODO', newTodo);
      }
      this.inputBox = '';
    },
    delete_todo(todo) {
      this.$store.commit('DELETE_TODO', todo);
    },
  },
  watch: {
    selectedFilter(newFilter) {
      this.$store.commit('SET_FILTER', newFilter)
    }
  }
}
</script>

<style src="./assets/app.css"></style>
