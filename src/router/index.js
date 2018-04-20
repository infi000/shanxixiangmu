import Vue from 'vue';
import Router from 'vue-router';

import login from '@/components/page/login';
import admin from '@/components/page/admin';
import city from '@/components/page/city';
import student from '@/components/page/student';
import common from '@/components/page/common';
import school from '@/components/page/school';

import dashcity from '@/components/common/dashcity';
import tagcity from '@/components/common/tagcity';
import dashstudent from '@/components/common/dashstudent';
import dashcommon from '@/components/common/dashcommon';
import dashschool from '@/components/common/dashschool';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/admin',
    name: 'admin',
    component: admin
  }, {
    path: '/city',
    component: city,
    children: [{
      path: '',
      component: dashcity
    }, {
      path: 'tag/:name',
      component: tagcity,
    }]
  }, {
    path: '/student',
    component: student,
    children: [{
      path: '',
      component: dashstudent,
    }]
  },{
    path:'/common',
    component:common,
    children:[
    {
      path:'',
      component:dashcommon,
    }]
  },{
    path:'/school',
    component:school,
    children:[
    {
      path:'',
      component:dashschool,
    }]
  }]
});
