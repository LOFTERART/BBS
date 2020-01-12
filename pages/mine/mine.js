import UTIL from '../../utils/util'
const WXAPI = require('../../API/API')
Page({
    data: {
        height: 64, //header高度
        top: 0, //标题图标距离顶部距离
        scrollH: 0, //滚动总高度
        opcity: 0,
        iconOpcity: 0.5,
        pageIndex: 1,
        loadding: false,
        pullUpOn: true,
        tools:[
            {id:1,name:'签到',image:'https://dcdn.it120.cc/2019/10/24/74866bee-8ab5-4c37-b584-a5d1f5a4a55c.png',isHot:'https://dcdn.it120.cc/2019/10/24/188c03fd-540a-4b07-a14e-40a5ce998c44.png',type:'QD'},
            {id:1,name:'认证',image:'https://dcdn.it120.cc/2019/10/24/0344f011-f18e-4cf3-803b-9b4ac62d2582.png',isHot:'',type:'RZ'},
            {id:1,name:'使用帮助',image:'https://dcdn.it120.cc/2019/10/24/c72d8838-2371-4e4a-a1b3-f225c35264d3.png',isHot:'',type:'SY'},
            {id:1,name:'客服服务',image:'https://dcdn.it120.cc/2019/10/24/4ffb2c09-5846-4ba8-aada-8430708e0f4f.png',isHot:'',type:'KF'},
            {id:1,name:'我的活动',image:'https://dcdn.it120.cc/2019/10/24/f2d366a3-8dbe-4335-b7b6-1d24a1ac5cf9.png',isHot:'',type:'HD'},
            {id:1,name:'个人信息',image:'https://dcdn.it120.cc/2019/10/24/f2d366a3-8dbe-4335-b7b6-1d24a1ac5cf9.png',isHot:'',type:'GR'},
            {id:1,name:'产品建议',image:'https://dcdn.it120.cc/2019/10/24/9042e6b3-c1d7-4ce6-a648-acf0df3ecdf8.png',isHot:'',type:'XZ'},
            {id:1,name:'关于我们',image:'https://dcdn.it120.cc/2019/10/24/a5851f96-80fd-4f77-9fac-a073dfb5482c.png',isHot:'',type:'GY'},
            {id:1,name:'点赞',image:'https://dcdn.it120.cc/2019/10/24/a5851f96-80fd-4f77-9fac-a073dfb5482c.png',isHot:'',type:'GY'},
            {id:1,name:'评论',image:'https://dcdn.it120.cc/2019/10/24/a5851f96-80fd-4f77-9fac-a073dfb5482c.png',isHot:'',type:'GY'},
            {id:1,name:'扫一扫',image:'https://dcdn.it120.cc/2019/10/24/a5851f96-80fd-4f77-9fac-a073dfb5482c.png',isHot:'',type:'GY'},
            {id:1,name:'会员',image:'https://dcdn.it120.cc/2019/10/24/a5851f96-80fd-4f77-9fac-a073dfb5482c.png',isHot:'',type:'GY'},
        ],

        actions:[
            {id:1,name:'关注',number:12,type:'GZ'},
            {id:1,name:'粉丝',number:165,type:'FS'},
            {id:1,name:'动态',number:10,type:'DT'},
            {id:1,name:'收藏夹',number:90,type:'SCJ'},
            {id:1,name:'评论',number:10,type:'PL'}
        ],

        dyActions:[
            {id:1,name:'赞数',number:1,type:'ZAN',image:'https://dcdn.it120.cc/2019/10/29/6af3114d-d07c-4e3a-8179-fdb2d9fc64f8.png'},
            {id:1,name:'评论数',number:7,type:'PL',image:'https://dcdn.it120.cc/2019/10/29/085809eb-f6b1-4140-9010-49f4b605c1eb.png'},
            {id:1,name:'收藏数',number:10,type:'SC',image:'https://dcdn.it120.cc/2019/10/29/3799b6ad-7dad-4e9a-a3bc-681293717051.png'},
            {id:1,name:'查看数',number:100,type:'CK',image:'https://dcdn.it120.cc/2019/10/29/1494d5d5-e804-4276-9cbe-6cd9abcc7623.png'},
            {id:1,name:'举报数',number:1,type:'JB',image:'https://dcdn.it120.cc/2019/10/29/dd9f5420-1dc0-410f-912a-6c35b11f2504.png'},
        ],

        userInfo:{
            id:1,
            ava:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png',
            name:'赵文',
            grade:'https://dcdn.it120.cc/2019/10/24/114a3daa-2804-44ef-9ead-2591eeb595d1.png',
            badge:'https://dcdn.it120.cc/2019/10/25/12bbe9e6-7e26-40d9-a1f7-e45a1dc9a6f5.png',
            community:'阳光花墅',

        },
        hotTools:[
            {id:1,name:'消息通知',image:'https://dcdn.it120.cc/2019/10/24/a5851f96-80fd-4f77-9fac-a073dfb5482c.png',isHot:'',type:'GY'},
            {id:1,name:'私信',image:'https://dcdn.it120.cc/2019/10/24/a5851f96-80fd-4f77-9fac-a073dfb5482c.png',isHot:'',type:'GY'},
            {id:1,name:'收藏',image:'https://dcdn.it120.cc/2019/10/24/a5851f96-80fd-4f77-9fac-a073dfb5482c.png',isHot:'',type:'GY'},
            {id:1,name:'阅读历史',image:'https://dcdn.it120.cc/2019/10/24/a5851f96-80fd-4f77-9fac-a073dfb5482c.png',isHot:'',type:'GY'},
            {id:1,name:'钱包',image:'https://dcdn.it120.cc/2019/10/24/a5851f96-80fd-4f77-9fac-a073dfb5482c.png',isHot:'',type:'GY'},
            {id:1,name:'用户反馈',image:'https://dcdn.it120.cc/2019/10/24/a5851f96-80fd-4f77-9fac-a073dfb5482c.png',isHot:'',type:'GY'},
            {id:1,name:'服务',image:'https://dcdn.it120.cc/2019/10/24/a5851f96-80fd-4f77-9fac-a073dfb5482c.png',isHot:'',type:'GY'},
            {id:1,name:'系统设置',image:'https://dcdn.it120.cc/2019/10/24/a5851f96-80fd-4f77-9fac-a073dfb5482c.png',isHot:'',type:'GY'},
        ],
        autherTools:[
            {id:1,name:'动态管理',image:'https://dcdn.it120.cc/2019/10/24/a5851f96-80fd-4f77-9fac-a073dfb5482c.png',isHot:'',type:'GY'},
        ],







    },


    onLoad: function(options) {
        let obj = wx.getMenuButtonBoundingClientRect();
        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    width: obj.left || res.windowWidth,
                    height: obj.top ? (obj.top + obj.height + 8) : (res.statusBarHeight + 44),
                    top: obj.top ? (obj.top + (obj.height - 32) / 2) : (res.statusBarHeight + 6),
                    scrollH: res.windowWidth * 0.6
                })
            }
        })
    },






    //提交用户信息
    onGotUserInfo:function(e){
        WXAPI.wxLoginGetUserinfo({
            nick_name:e.detail.userInfo.nickName,
            avatar_url:e.detail.userInfo.avatarUrl,
            province:e.detail.userInfo.province,
            city:e.detail.userInfo.city,
            country:e.detail.userInfo.country,
            gender:e.detail.userInfo.gender,
        }).then(res=>{
            console.log(res.msg,"------msg-----");
            UTIL.toast(res.msg)
        })
    },


    //点击头部数据
    clickAction:function(e){

    let type = e.currentTarget.dataset.type;





        if(type==='GZ'){
            wx.navigateTo({
              url: '/mySub/pages/follow/follow'
            })
        }else if(type==='FS'){
            wx.navigateTo({
                url: '/mySub/pages/Fans/Fans'
            })
        }else if(type==='DT'){
            wx.navigateTo({
                url: '/mySub/pages/mySpace/mySpace'
            })
        }else if(type==='SCJ'){
            wx.navigateTo({
                url: '/mySub/pages/Favorites/Favorites'
            })
        }else if(type==='PL'){
            wx.navigateTo({
                url: '/mySub/pages/commentS/commentS'
            })
        }else{
            UTIL.toast('稍后再试')
        }

    },



    //点击动态数据
    clickDyAction:function(e){

    let type = e.currentTarget.dataset.type;

    UTIL.toast('待开发')

},

    //点击常用工具

    clickTool:function(e){

        let type = e.currentTarget.dataset.type

        if(type==='GY'){
            wx.navigateTo({
                url: '/mySub/pages/about/about'
            })
        }else if(type==='DJ'){
            wx.navigateTo({
                url: '/pages/grade/grade'
            })
        }else if(type==='GR'){
            wx.navigateTo({
                url: '/mySub/pages/userInfo/userInfo'
            })
        }else if(type==='RZ'){
            wx.navigateTo({
                url: '/mySub/pages/auth/auth'
            })
        }else if(type==='HD'){
            wx.navigateTo({
                url: '/homeSub/pages/moreActivity/moreActivity'
            })
        }else {
            UTIL.toast('待开发')
        }


    },


    //点击勋章

    clickMedal:function(){
        wx.navigateTo({
          url: '/mySub/pages/medal/medal'
        })
    },


    //点击头像
    clickAva:function(e){
        wx.navigateTo({
          url: '/mySub/pages/mySpace/mySpace?name='+e.currentTarget.dataset.name
        })
    },



    href(e) {
        let page = Number(e.currentTarget.dataset.type)
        let url = "";
        switch (page) {
            case 1:
                break;
            case 2:
                url = "../set/set"
                break;
            case 3:
                url = "/mySub/pages/mySpace/mySpace"
                break;
            case 4:
                url = "../myOrder/myOrder"
                break;
            case 10:
                url = "/mySub/pages/about/about"
                break;
            case 11:
                url = "/pages/grade/grade"
                break;
            default:
                break;
        }
        if (url) {
            wx.navigateTo({
                url: url
            })
        } else {
            wx.showToast({
                title: "功能尚未完善~",
                icon:"none"
            })
        }
    },


    detail: function() {
        wx.navigateTo({
            url: '../../productDetail/productDetail'
        })
    },





    onPageScroll(e) {
        let scroll = e.scrollTop <= 0 ? 0 : e.scrollTop;
        let opcity = scroll / this.data.scrollH;
        if (this.data.opcity >= 1 && opcity >= 1) {
            return;
        }
        this.setData({
            opcity: opcity,
            iconOpcity: 0.5 * (1 - opcity < 0 ? 0 : 1 - opcity)
        })
    },
    onPullDownRefresh() {
        setTimeout(() => {
            wx.stopPullDownRefresh()
        }, 200)
    },
    onReachBottom: function() {
        if (!this.data.pullUpOn) return;
        this.setData({
            loadding:true
        })
        if (this.data.pageIndex == 4) {
            this.setData({
                loadding: false,
                pullUpOn:false
            })
        } else {
            let loadData = JSON.parse(JSON.stringify(this.data.productList));
            loadData = loadData.splice(0, 10)
            if (this.data.pageIndex == 1) {
                loadData = loadData.reverse();
            }
            this.setData({
                loadding: false,
                pageIndex: this.data.pageIndex + 1,
                productList: this.data.productList.concat(loadData)
            })
        }
    }
})
