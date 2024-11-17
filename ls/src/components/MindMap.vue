<script setup>
const props = defineProps(['data'])
console.log(props.data)
</script>

<template>
  <div class="mind_map">
    <div v-if="data.level===1" class="mind_map_item">
      {{ data.title }}
      {{ data.level }}
      <mind-map v-for="(item) in data.children" :key="item.id" :data="item"/>
    </div>
    <div v-if="data.level===2" class="mind_map_item">
      {{ data.title }}
      {{ data.level }}
      <mind-map v-for="(item) in data.children" :key="item.id" :data="item"/>
    </div>
    <div v-if="data.level===3" class="mind_map_item">
      {{ data.title }}
      {{ data.level }}
      <mind-map v-for="(item) in data.children" :key="item.id" :data="item"/>
    </div>

  </div>
</template>

<style scoped>
.mind_map {
  display: flex;
  justify-content: start;
  height: 100%;
  flex-direction: row-reverse;
}

.mind_map_item {
  border: red solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>