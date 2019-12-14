<template>
  <TabBarPage tab="index">
    <header>首页</header>
    <div class="flex-box">
      <div class="box">文字文字文字文字文字</div>
      <div class="box">文字文字文字文字文字</div>
      <div class="box">文字文字文字文字文字</div>
    </div>
    <router-link to="/detail">点击查看详情页</router-link>
    <div class="btn u-border-radius" @click="showToast">toast提示</div>
    <div class="btn u-border-radius" @click="showLoading">loading加载动画</div>

    <p>更多组件请查看文档：<a href="http://elemefe.github.io/mint-ui/#/">http://elemefe.github.io/mint-ui/#/</a></p>
  </TabBarPage>
</template>

<script>
import TabBarPage from '../../components/TabBarPage';

export default {
  name: 'Index',
  components: {
    TabBarPage,
  },
  methods: {
    showToast() {
      this.$toast('显示toast消息');
    },
    showLoading() {
      this.$indicator.open('加载中...');
      setTimeout(() => {
        this.$indicator.close();
      }, 3000);
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/style/var.scss';

header {
  font-size: 38px;
  text-align: center;
  line-height: 90px;
  background-color: #fff;
}
.flex-box {
  display: flex;
  margin: 30px 0;
  font-size: 40px;
  justify-content: space-between;

  .box {
    width: 200px;
    height: 200px;
    background-color: #ccc;
  }
}
.btn {
  height: 80px;
  margin: 30px;
  font-size: 36px;
  line-height: 80px;
  text-align: center;
}
</style>
