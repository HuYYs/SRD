<script setup>
import {onMounted, reactive, ref, watch} from "vue";
import {useRoute} from "vue-router";
import data from "../../public/data.json"

const route = useRoute()
// 标题和内容
let title = ref("")
let body = reactive([])


onMounted(() => {
  getTileB("SRD-Index")
})
const getTileB = (id) => {
  title.value = data[id]?.title
  body = data[id]?.body
}
// 侦听路由的参数，以便再次获取数据
watch(() => route.params.id, getTileB, {immediate: true})

</script>

<template>
  <div class="bodys">
    <div class="body_title">{{ title }}</div>
    <div v-for="item in body" :key="item.title" class="bodys_body">
      <p class="bodys_body_title">{{ item.title }}</p>
      <div>
        <p v-for="items in item.paragraph">{{ items }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bodys {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 0 10px 0 10px;
}

.body_title {
  display: flex;
  justify-content: center;
  font-size: 30px;
}

.bodys_body {
  display: flex;
  flex-direction: column;
}

.bodys_body_title {
  font-weight: bold;
  font-size: 15px;
}
</style>