<template>
  <div>
    <!--  请对头部组件封装 -->
    <mt-header title="标题标题标题标题标题标题标题标题标题标题标题标题标题">
      <router-link to="/" slot="left">
        <div><img class="icon-back" src="../../assets/back.png" alt="" />返回</div>
      </router-link>
      <div slot="right">按钮</div>
    </mt-header>
    详情页
  </div>
</template>

<script>
export default {
  name: 'Detail',
};
</script>

<style scoped lang="scss">
.icon-back {
  width: 30px;
  height: 30px;
  vertical-align: -5px;
}
</style>
