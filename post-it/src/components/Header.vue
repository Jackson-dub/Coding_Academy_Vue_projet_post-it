<template>
  <header class="header">
    <h1 class="d-flex justify-content-center">{{ title }}</h1>
  </header>
</template>

<script>

export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Hello World",
    },
  },


};
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
