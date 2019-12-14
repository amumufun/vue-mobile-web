import Vue from 'vue';

export function getUserList(params) {
  return Vue.axios({
    url: '/admin/management/users/list',
    params,
  });
}

export function getDetailById(id) {
  return Vue.axios({
    url: `/admin/management/details/${id}`,
  });
}

export function valiMobile(data) {
  return Vue.axios({
    url: '/admin/management/kol/validmob',
    method: 'post',
    data,
  });
}

export function createKol(data) {
  return Vue.axios({
    url: '/admin/management/kol/createkol',
    method: 'post',
    data,
  });
}

export function smsStatus(data) {
  return Vue.axios({
    url: '/admin/management/kol/smsStatus',
    method: 'post',
    data,
  });
}

export function sendSms(data) {
  return Vue.axios({
    url: '/admin/management/kol/sendSms',
    method: 'post',
    data,
  });
}
