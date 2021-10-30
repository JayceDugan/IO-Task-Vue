import Vue from 'vue';
import dayjs from 'dayjs';

Vue.filter('projectDate', (val) => (!val ? '' : dayjs(val).format('DD MMM YYYY')));
Vue.filter('taskDueDate', (val) => (!val ? '' : dayjs(val).format('DD MMM YYYY')));
