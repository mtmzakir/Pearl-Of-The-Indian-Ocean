new Vue({
  el: '#app',
  
  data: {
      isEditing: false,
      todo: '',
      todos: [],
      selectedTodo: null
  },
  
  methods: {
      storeTodo() {
          this.todos.push(this.todo)
          this.todo = ''
      },

      removeTodo(index) {
          this.todos.splice(index, 1)
      },

      updateTodo() {
          this.todos.splice(this.selectedIndex, 1, this.todo)
          this.todo = ''
          this.isEditing = false
      },

      editTodo(index, todo) {
          this.isEditing = true
          this.todo = todo
          this.selectedIndex = index
      }
  }
})