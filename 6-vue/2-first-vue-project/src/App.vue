<template>
  <div>
    <p>Testando <code>v-if/v-else-if/v-else</code></p>
    <button v-if="count == 1" @click="addCount">
      Botão 1 - Count is: {{ count }}
    </button>
    <button v-else-if="count == 2" @click="addCount">
      Botão 2 - Count is: {{ count }}
    </button>
    <button v-else @click="addCount">
      Botão 3 - Count is: {{ count }}
    </button>
    <br>
    <input v-model="count" type="text">
  </div>
  <div>
    <p>Testando <code>v-for</code></p>
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.description }}
      </li>
    </ol>
    <!-- <ol>
      <li v-for="num in 10">
        {{ num }}
      </li>
    </ol> -->
    <!-- <ol>
      <li v-for="(todo, index) in todos">
        {{ todo.description }} - {{ index }}
      </li>
    </ol> -->
  </div>
  <div>
    <p>Testando <code>v-html</code></p>
    <span v-html="rawHtml"></span>
    <br>
    <span>{{ rawHtml }}</span>
  </div>
  <div>
    <p>Testando props booleanas</p>
    <input type="text" disabled>
    <br>
    <input type="text" :disabled="disableInput">
    <button @click="disableInput = !disableInput">Toogle</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      show: true,
      todos: [
        { id: 1, description: 'Comer' },
        { id: 2, description: 'Beber água' },
        { id: 3, description: 'Passear com o doguinho' },
      ],
      rawHtml: '<input type="text">',
      disableInput: true
    }
  },
  computed: {
    doubleCount: (state) => state.count * 2,
    tripleCount() {
      return this.count * 3
    }
  },
  methods: {
    addCount() {
      this.count++
    }
  }
}
</script>

<style>
  button {
    background-color: aquamarine;
  }
</style>
