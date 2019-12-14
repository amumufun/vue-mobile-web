<template>
  <div class="page-tabbar">
    <slot></slot>
    <div class="ignore-tabbar-padding"></div>
    <mt-tabbar :value="tab">
      <mt-tab-item id="index" @click.native="switchTab('index')">
        <img slot="icon" src="https://dummyimage.com/100x100/999/fff&text=ICON" />
        首页
      </mt-tab-item>
      <mt-tab-item id="category" @click.native="switchTab('category')">
        <img slot="icon" src="https://dummyimage.com/100x100/999/fff&text=ICON" />
        分类
      </mt-tab-item>
      <mt-tab-item id="cart" @click.native="switchTab('cart')">
        <img slot="icon" src="https://dummyimage.com/100x100/999/fff&text=ICON" />
        购物车
      </mt-tab-item>
      <mt-tab-item id="user" @click.native="switchTab('user')">
        <img slot="icon" src="https://dummyimage.com/100x100/999/fff&text=ICON" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'TabBarPage',
  props: {
    tab: {
      type: String,
      default: 'index',
    },
  },
  methods: {
    switchTab(tab) {
      this.$router.replace({
        path: `/${tab}`,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.page-tabbar {
  height: 100%;
  overflow: auto;

  // 加上.ignore前缀可以防止px单位被转换
  .ignore-tabbar-padding {
    height: 60px;
  }
  .tabbar {
    background-color: #ffffff;
  }
}
</style>
