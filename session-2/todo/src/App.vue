<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1> <input autofocus="autofocus" autocomplete="off" placeholder="What needs to be done?" class="new-todo"></header>
    <section class="main" style=""><input type="checkbox" class="toggle-all">
      <ul class="todo-list">
        <li class="todo">
          <div class="view"><input type="checkbox" class="toggle">
            <label>A</label>
            <button class="destroy"></button>
          </div> <input type="text" class="edit"></li>
        <li class="todo">
          <div class="view"><input type="checkbox" class="toggle">
            <label>B</label>
            <button class="destroy"></button>
          </div> <input type="text" class="edit"></li>
        <li class="todo">
          <div class="view"><input type="checkbox" class="toggle">
            <label>C</label>
            <button class="destroy"></button>
          </div> <input type="text" class="edit"></li>
      </ul>
    </section>
    <footer class="footer" style="">
      <span class="todo-count">
        <strong>3</strong> items left
      </span>
      <ul class="filters">
        <li>
          <a href="#/all" class="selected">All</a>
        </li>
        <li>
          <a href="#/active" class="">Active</a>
        </li>
        <li>
          <a href="#/completed" class="">Completed</a>
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
  data () {
    return {
      msg: 'Welcome to Your Vue.js App...'
    }
  }
}
</script>

<style src="./assets/app.css"></style>
