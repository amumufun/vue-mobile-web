<template>
  <div class="container">
    <h1>404</h1>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped lang="scss">
.container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 80px;
    font-weight: normal;
  }
}
</style>
