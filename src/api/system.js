import Vue from 'vue';

export function login(data) {
  return Vue.axios({
    url: '/admin/auth/signin',
    method: 'post',
    data,
  });
}

export function getEnums() {
  return Vue.axios({
    url: '/admin/setting/enums',
  });
}
