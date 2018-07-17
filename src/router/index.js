import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
Vue.use(Router);
export default new Router({
  routes: [
    {path:'/',redirect:'/index'},
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/mess',
      name: "mess",
      component: () => import("@/components/Mess")
    },
    {
      path: '/my',
      name: "my",
      component: () => import("@/components/My")
    }, {
      path: '/login',
      name: "login",
      meta: {
        title: '登 录'
      },
      component: () => import("@/base/Login")
    }, {
      path: '/xingongxinwen',
      name: "xingongxinwen",
      meta: {
        title: '信工新闻眼'
      },
      component: () => import("@/base/Xingongxinwen")
    }, {
      path: '/zhangshang',
      name: "zhangshang",
      meta: {
        title: '掌上组织生活'
      },
      component: () => import("@/base/Zhangshang")
    }, {
      path: '/dangjian',
      name: "dangjian",
      meta: {
        title: '党建一点通'
      },
      component: () => import("@/base/Dangjian")
    }, {
      path: '/dangyuan',
      name: "dangyuan",
      meta: {
        title: '党员亮身份'
      },
      component: () => import("@/base/Dangyuan")
    }, {
      path: '/dangshi',
      name: "dangshi",
      meta: {
        title: '党史上的今天'
      },
      component: () => import("@/base/Dangshi")
    }, {
      path: '/suoxue',
      name: "suoxue",
      meta: {
        title: '随时随地学'
      },
      component: () => import("@/base/Suoxue")
    }, {
      path: '/suopai',
      name: "suopai",
      meta: {
        title: '随时随地拍'
      },
      component: () => import("@/base/Suopai")
    }, {
      path: '/zhidu',
      name: "zhidu",
      meta: {
        title: '制度建设'
      },
      component: () => import("@/base/Zhidu")
    }, {
      path: '/tese',
      name: "tese",
      meta: {
        title: '特色活动'
      },
      component: () => import("@/base/Tese")
    }, {
      path: '/zhengzhi',
      name: "zhengzhi",
      meta: {
        title: '政治学习'
      },
      component: () => import("@/base/Zhengzhi")
    }, {
      path: '/sixiang',
      name: "sixiang",
      meta: {
        title: '思想汇报'
      },
      component: () => import("@/base/Sixiang")
    }, {
  path: '/xinde',
    name: "xinde",
    meta: {
    title: '心得总结'
  },
  component: () => import("@/base/Xinde")
}, {
      path: '/minzhu',
      name: "minzhu",
      meta: {
        title: '民主评议'
      },
      component: () => import("@/base/Minzhu")
    }, {
      path: '/liudong',
      name: "liudong",
      meta: {
        title: '流动党员找组织'
      },
      hidden:true,
      component: () => import("@/base/Liudong")
    }, {
      path: '/newsDetails',
      name: "newsDetails",
      meta: {
        title: '新闻详情'
      },
      component: () => import("@/base/newsDetails")
    }, {
      path: '/myinfo',
      name: "myinfo",
      meta: {
        title: '个人信息',
      },
      component: () => import("@/base/Myinfo")
    }
    , {
      path: '/myinfoxiugai',
      name: "myinfoxiugai",
      meta: {
        title: '个人信息修改',
      },
      component: () => import("@/base/Myinfoxiugai")
    }
    , {
      path: '/myinfojifen',
      name: "myinfojifen",
      meta: {
        title: '个人量化积分',
      },
      component: () => import("@/base/Myinfojifen")
    }, {
      path: '/xiugaimima',
      name: "xiugaimima",
      meta: {
        title: '修改密码',
      },
      component: () => import("@/base/Xiugaimima")
    }, {
      path: '/dangfei',
      name: "dangfei",
      meta: {
        title: '党费缴纳',
      },
      component: () => import("@/base/Dangfei")
    }, {
      path: '/hudong',
      name: "hudong",
      meta: {
        title: '党员云互动',
      },
      component: () => import("@/base/Hudong")
    }, {
      path: '/zongjie',
      name: "zongjie",
      meta: {
        title: '个人总结',
      },
      component: () => import("@/base/Zongjie")
    }, {
      path: '/pingyi',
      name: "pingyi",
      meta: {
        title: '民主评议',
      },
      component: () => import("@/base/Pingyi")
    }, {
      path: '/news',
      name: "news",
      meta: {
        title: '通知早知道',
      },
      component: () => import("@/base/news")
    }, {
      path: '/tupianup',
      name: "tupianup",
      meta: {
        title: '图片上传',
      },
      component: () => import("@/base/Tupianup")
    }, {
      path: '/tijiao',
      name: "tijiao",
      meta: {
        title: '思想汇报',
      },
      component: () => import("@/base/tijiao")
    }, {
      path: '/tijiao1',
      name: "tijiao1",
      meta: {
        title: '心得总结',
      },
      component: () => import("@/base/tijiao1")
    }, {
      path: '/tijiao2',
      name: "tijiao2",
      meta: {
        title: '个人总结',
      },
      component: () => import("@/base/tijiao2")
    }, {
      path: '/canpingyiyuan',
      name: "canpingyiyuan",
      meta: {
        title: '参评议员',
      },
      component: () => import("@/base/canpingyiyuan")
    }, {
      path: '/geren00',
      name: "geren00",
      meta: {
        title: '民主评议',
      },
      component: () => import("@/base/geren00")
    }, {
      path: '/wenzi',
      name: "wenzi",
      component: () => import("@/base/wenzi")
    }, {
      path: '/huifu',
      name: "huifu",
      meta:{
        title:'党员云互动'
      },
      component: () => import("@/base/huifu")
    }, {
      path: '/jifenmingxi',
      name: "jifenmingxi",
      meta:{
        title:'积分明细'
      },
      component: () => import("@/base/jifenmingxi")
    }
  ]
})
