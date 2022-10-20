<script>
import Button from './components/Button.vue'

export default {
  components: {
    Button
  },
  data() {
    return {
      count: 0,
      myStyles: {
        color: 'blue',
        backgroundColor: 'red'
      },
      otherStyles: {
        fontSize: '32px',
        backgroundColor: 'green'
      }
    }
  },
  computed: {
    doubleCount: (state) => state.count * 2
  },
  methods: {
    addCount(event) {
      console.log(event)
      this.count++
    }
  },
  watch: {
    count: (newCount, oldCount) => console.log(newCount, oldCount)
  },
  beforeCreate() {
    console.log('before create')
  },
  created() {
    console.log('created')
  },
  mounted: () => console.log('mounted'),
  updated() {
    console.log('updated')
  }
}
</script>

<template>
  <div>
    <!-- <Button @meu-evento="addCount" label="Count" :number="count"/> -->
    <Button :applyClass="false" @meu-evento="addCount">
      Count: {{ count }}
      <!-- <template #meuSlot>
        Count: {{ count }}
      </template>
      <template #outroSlot>
        Alguma outra coisa
      </template> -->
    </Button>
    <p>Meu contador é: {{ count }}</p>
    <p :style="[myStyles, otherStyles]" >Duas vezes o meu contador é: {{ doubleCount }}</p>
  </div>
</template>

<style>
</style>
