<script setup>
import { onMounted } from "vue";
import routes from "@/route/routes.js";
import {useRouter} from "vue-router";

const router = useRouter();

onMounted(() => {
  console.log(123);
})

const init = () => {

}

const handleToPages = (name) => {
  router.push({
    name
  })

}
</script>

<template>
<div>
  <ul>
    <li v-for="item in routes" @click="handleToPages(item.name)">{{ item.name }}</li>
  </ul>
</div>
</template>

<style scoped>

</style>
