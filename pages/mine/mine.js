import UTIL from '../../utils/util'
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
            {id:1,name:'我的活动',image:'https://dcdn.it120.cc/2019/10/24/f2d366a3-8dbe-4335-b7b6-1d24a1ac5cf9.png',isHot:'',type:'MR'},
            {id:1,name:'我的等级',image:'https://dcdn.it120.cc/2019/10/24/f2d366a3-8dbe-4335-b7b6-1d24a1ac5cf9.png',isHot:'',type:'DJ'},
            {id:1,name:'产品建议',image:'https://dcdn.it120.cc/2019/10/24/9042e6b3-c1d7-4ce6-a648-acf0df3ecdf8.png',isHot:'',type:'XZ'},
            {id:1,name:'关于我们',image:'https://dcdn.it120.cc/2019/10/24/a5851f96-80fd-4f77-9fac-a073dfb5482c.png',isHot:'',type:'GY'},
        ],

        actions:[
            {id:1,name:'关注',number:12,type:'GZ'},
            {id:1,name:'粉丝',number:165,type:'FS'},
            {id:1,name:'动态',number:10,type:'DT'},
            {id:1,name:'收藏夹',number:90,type:'SCJ'},
            {id:1,name:'评论',number:10,type:'PL'}
        ],

        dyActions:[
            {id:1,name:'赞数',number:1,type:'ZAN',image:'https://dcdn.it120.cc/2019/10/24/97d002d9-656a-4aff-8e9a-59182e14226c.png'},
            {id:1,name:'评论数',number:7,type:'PL',image:'https://dcdn.it120.cc/2019/10/24/b6dd3726-2f8c-4ef1-83a3-87a808b83226.png'},
            {id:1,name:'收藏数',number:10,type:'SC',image:'https://dcdn.it120.cc/2019/10/24/0f0b9f6a-8c94-473e-9d24-7f8741628787.png'},
            {id:1,name:'查看数',number:100,type:'CK',image:'https://dcdn.it120.cc/2019/10/24/5413d396-0eda-4f63-b136-e2eb24b6c3f2.png'},
            {id:1,name:'举报数',number:1,type:'JB',image:'https://dcdn.it120.cc/2019/10/24/c1b3f270-e054-4ce6-b884-3e5973392019.png'},
        ],

        userInfo:{
            id:1,
            ava:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png',
            name:'赵文',
            grade:'https://dcdn.it120.cc/2019/10/24/114a3daa-2804-44ef-9ead-2591eeb595d1.png',
            badge:'https://dcdn.it120.cc/2019/10/25/12bbe9e6-7e26-40d9-a1f7-e45a1dc9a6f5.png',
            community:'阳光花墅',

        }





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
        } else{
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