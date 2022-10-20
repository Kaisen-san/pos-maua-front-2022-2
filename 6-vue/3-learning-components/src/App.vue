<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import Button from './components/Button.vue'
import { count, doubleCount, addCount } from './lib/counter'

onMounted(() => console.log('mounted'))

const myStyles = {
  color: 'blue',
  backgroundColor: 'red'
}
const otherStyles = {
  fontSize: '32px',
  backgroundColor: 'green'
}

watch(
  count,
  (newCount, oldCount) => console.log(`Novo valor: ${newCount} - Valor antigo: ${oldCount}`)
)
</script>

<template>
  <div>
    <!-- <Button @meu-evento="addCount" label="Count" :number="count"/> -->
    <Button :applyClass="true" @meu-evento="addCount">
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
