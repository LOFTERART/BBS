const WXAPI = require('../../API/API')
import create from '../../utils/omi/create'
import store from '../../store/store'
import UTIL from '../../utils/util'
create(store,{
    context: {
        emitter: create.emitter
    },
    data: {
        //广告
        banners:[
            {id:1,image:'https://dcdn.it120.cc/2019/10/24/cbfc929a-3011-482e-a8d9-30afa09090b7.jpg',type:'H5',link:'url',name:'banner'},
            {id:2,image:'https://dcdn.it120.cc/2019/10/24/dd570f26-f5e1-48fb-b8d6-9adb19831fd8.jpg',type:'H5',link:'url',name:'banner'},
            {id:3,image:'https://dcdn.it120.cc/2019/10/24/18f43bc3-511a-4ae3-95b5-ec446617196c.jpg',type:'sourceCode',link:'',name:'banner'},
            {id:4,image:'https://dcdn.it120.cc/2019/10/24/569b0a25-e9ad-4aed-90b7-2397130ee4b8.jpg',type:'H5',link:'url',name:'banner'},
        ],
        //金刚位
        KING:[
            {id:1,name:'美食',image:'https://dcdn.it120.cc/2019/09/26/ef633ab3-4bf4-47cc-9e47-b12367613398.png',type:'MS'},
            {id:1,name:'宠物',image:'https://dcdn.it120.cc/2019/08/22/921823b7-1df9-479e-8351-bf14bce698e1.png',type:'CW'},
            {id:1,name:'相亲',image:'https://dcdn.it120.cc/2019/08/22/b938febf-48e9-4f31-8a4b-cab00e6e8092.png',type:'XQ'},
            {id:1,name:'结婚',image:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png',type:'JH'},
            {id:1,name:'家居',image:'https://dcdn.it120.cc/2019/09/26/ef633ab3-4bf4-47cc-9e47-b12367613398.png',type:'JJ'},
            {id:1,name:'亲子',image:'https://dcdn.it120.cc/2019/08/22/1643cf11-1778-4c36-a707-646bf89b2f83.png',type:'QZ'},
            {id:1,name:'教育',image:'https://dcdn.it120.cc/2019/09/26/ef633ab3-4bf4-47cc-9e47-b12367613398.png',type:'JY'},
            {id:1,name:'旅游',image:'https://dcdn.it120.cc/2019/09/26/24362dc4-e21f-466e-9423-efc03156b730.png',type:'LY'},
            {id:1,name:'爆料',image:'https://dcdn.it120.cc/2019/09/26/d9429381-1b41-4444-9309-e2ba73b09620.png',type:'QG'},
            {id:1,name:'物业',image:'https://dcdn.it120.cc/2019/08/22/8bfbb776-b2ba-46cd-a2e8-ee6afbf447b0.png',type:'WY'}
        ],
        //首页动态列表
        dynamicList:[],
    //    文章
        artList:[],
        hotList:[
            {
                id:1,
                image:'http://www.mingyue.musemore.art/storage/backend/article/cover/150633483e98b4b437ce75c2912fbef3.jpg',
                beginTime:'11月23号 14:00-18:00',
                name:'0元+游玩北京香山',
                address:'地址:北京市海淀区人民大学',
                subName:'这个突破经由CEO皮猜亲自官宣、论文登上“如果大家都不学化学，那富士康就没人了”，齐拴虎说道。',
                partakeNum: '98人参与',
                actionDes:'去参与',
            },
            {
                id:1,
                image:'http://www.mingyue.musemore.art/storage/backend/article/cover/150633483e98b4b437ce75c2912fbef3.jpg',
                beginTime:'11月23号 14:00-18:00',
                name:'0元+游玩北京香山',
                address:'地址:北京市海淀区人民大学',
                subName:'这个突破经由CEO皮猜亲自官宣、论文登上',
                partakeNum: '98人参与',
                actionDes:'去参与',
            },
            {
                id:1,
                image:'http://www.mingyue.musemore.art/storage/backend/article/cover/150633483e98b4b437ce75c2912fbef3.jpg',
                beginTime:'11月23号 14:00-18:00',
                name:'0元+游玩北京香山',
                address:'地址:北京市海淀区人民大学',
                subName:'这个突破经由CEO皮猜亲自官宣、论文登上',
                partakeNum: '98人参与',
                actionDes:'去参与',
            },
            {
                id:1,
                image:'http://www.mingyue.musemore.art/storage/backend/article/cover/150633483e98b4b437ce75c2912fbef3.jpg',
                beginTime:'11月23号 14:00-18:00',
                name:'0元+游玩北京香山',
                address:'地址:北京市海淀区人民大学',
                subName:'这个突破经由CEO皮猜亲自官宣、论文登上',
                partakeNum: '98人参与',
                actionDes:'去参与',
            },
            {
                id:1,
                image:'http://www.mingyue.musemore.art/storage/backend/article/cover/150633483e98b4b437ce75c2912fbef3.jpg',
                beginTime:'11月23号 14:00-18:00',
                name:'0元+游玩北京香山',
                address:'地址:北京市海淀区人民大学',
                subName:'这个突破经由CEO皮猜亲自官宣、论文登上',
                partakeNum: '98人参与',
                actionDes:'去参与',
            },

        ],
        //成员动态
        articleList:[

        ],
        homeNews:[],
        active: 0,
        community:'阳光花墅',
        current:0

    },
    /**
     * 生命周期函数--监听页面加载
     *
     */
    onLoad: function (options) {
        // this.getBanner(this.store.data.userInfo);
        this.getDataList(0);
        // this.getKing();

        let arrayList=[];
        let arrayArticleList=[];
        for (let i =0;i<=10;i++){
            arrayList.push(
                {
                    id:1,
                    name:'趣知游第一届香山旅游活动召集令',
                    subName:'2019年 河南人在北京同乡会',
                    tags:'#免费 #旅游 #香山 #吃喝玩乐 #一日游',
                    price:99, //现价
                    originalPrice:199, //原价
                    image:'https://dcdn.it120.cc/2019/10/22/9043ba2f-d4a2-4934-a4d3-acd6d5e8e0e6.jpg',
                    memNum:10, //已报名成员
                    totalNum:100, //总成员
                    status:{color:'#ff7900',desc:'进行中'},  //动态当前状态    未开始 进行中 已结束
                    author: "趣知游",
                    dateAdd: "2019-10-22 14:26:01",
                    dateUpdate: "2019-10-22 14:29:02",
                    views: 10 //浏览量
                },
                {
                    id:2,
                    name:'趣知游第一届香山旅游活动召集令',
                    subName:'2019年 河南人在北京同乡会',
                    tags:'#免费 #旅游 #香山 #吃喝玩乐 #一日游',
                    price:99, //现价
                    originalPrice:199, //原价
                    image:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg',
                    memNum:10, //已报名成员
                    totalNum:100, //总成员
                    status:{color:'#ff7900',desc:'进行中'},  //动态当前状态    未开始 进行中 已结束
                    author: "趣知游",
                    dateAdd: "2019-10-22 14:26:01",
                    dateUpdate: "2019-10-22 14:29:02",
                    views: 10 //浏览量
                }
                )

            arrayArticleList.push(


                {
                    address: "阳光花墅",
                    tag:'# 结婚注意事项',
                    avatar: "https://dcdn.it120.cc/2019/08/22/1643cf11-1778-4c36-a707-646bf89b2f83.png",
                    comment: 800,
                    content: "明天就要结婚了 亲们给点意见 第一次 有点紧张",
                    follow: 0,
                    follow_user_id: 3804,
                    follow_user_type: "teacher",
                    id: 27565,
                    image_url_came: [
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                    ],
                    image_url_came_thumb: [
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                    ],
                    is_activating: true,
                    is_del: true,
                    is_follow: false,
                    is_like: true,
                    is_parent: false,
                    is_top: false,
                    like: 10,
                    name: "小龙女",
                    status: "掌门人",
                    timer: '刚刚',
                    url: "https://www.meishuquanyunxiao.com/share/daily-view.html?daily_id=27565",
                    views: 100,
                },
                {
                    address: "阳光花墅",
                    tag:'# 中考加油',
                    avatar: "https://dcdn.it120.cc/2019/08/22/1643cf11-1778-4c36-a707-646bf89b2f83.png",
                    comment: 800,
                    content: "儿子明天中考,这个时候还在努力学习,加油!!!你是最棒的",
                    follow: 0,
                    follow_user_id: 3804,
                    follow_user_type: "teacher",
                    id: 27565,
                    image_url_came: [
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                    ],
                    image_url_came_thumb: [
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                    ],
                    is_activating: true,
                    is_del: true,
                    is_follow: false,
                    is_like: true,
                    is_parent: false,
                    is_top: false,
                    like: 10,
                    name: "杨过",
                    status: "部门经理",
                    timer: '刚刚',
                    url: "https://www.meishuquanyunxiao.com/share/daily-view.html?daily_id=27565",
                    views: 100,
                },
                {
                    address: "阳光花墅",
                    tag:'# 家居装修',
                    avatar: "https://dcdn.it120.cc/2019/08/22/1643cf11-1778-4c36-a707-646bf89b2f83.png",
                    comment: 800,
                    content: "刚装新加 欢迎大家参观 北欧风~",
                    follow: 0,
                    follow_user_id: 3804,
                    follow_user_type: "teacher",
                    id: 27565,
                    image_url_came: [
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                    ],
                    image_url_came_thumb: [
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                    ],
                    is_activating: true,
                    is_del: true,
                    is_follow: false,
                    is_like: true,
                    is_parent: false,
                    is_top: false,
                    like: 10,
                    name: "欧阳锋",
                    status: "掌门人",
                    timer: '刚刚',
                    url: "https://www.meishuquanyunxiao.com/share/daily-view.html?daily_id=27565",
                    views: 500,
                },
                {
                    address: "阳光花墅",
                    tag:'# 寻找流浪猫',
                    avatar: "https://dcdn.it120.cc/2019/08/22/1643cf11-1778-4c36-a707-646bf89b2f83.png",
                    comment: 0,
                    content: "在小区发现一只流浪喵,有认识的吗?",
                    follow: 0,
                    follow_user_id: 3804,
                    follow_user_type: "teacher",
                    id: 27565,
                    image_url_came: [
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                    ],
                    image_url_came_thumb: [
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                    ],
                    is_activating: true,
                    is_del: true,
                    is_follow: false,
                    is_like: true,
                    is_parent: false,
                    is_top: false,
                    like: 1,
                    name: "赵文",
                    status: "前端开发",
                    timer: '1天前',
                    url: "https://www.meishuquanyunxiao.com/share/daily-view.html?daily_id=27565",
                    views: 0,
                },
                {
                    address: "阳光花墅",
                    tag:'# 包打听',
                    avatar: "https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg",
                    comment: 0,
                    content: "咱们附件有九阳豆浆机售后吗?",
                    follow: 0,
                    follow_user_id: 3804,
                    follow_user_type: "teacher",
                    id: 27565,
                    image_url_came: [
                        {url:'https://dcdn.it120.cc/2019/10/22/9043ba2f-d4a2-4934-a4d3-acd6d5e8e0e6.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/9043ba2f-d4a2-4934-a4d3-acd6d5e8e0e6.jpg'},
                    ],
                    image_url_came_thumb: [

                        {url:'https://dcdn.it120.cc/2019/10/22/9043ba2f-d4a2-4934-a4d3-acd6d5e8e0e6.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},

                    ],
                    is_activating: true,
                    is_del: true,
                    is_follow: false,
                    is_like: true,
                    is_parent: false,
                    is_top: false,
                    like: 1,
                    name: "闫莎",
                    status: "销售",
                    timer: '刚刚',
                    url: "https://www.meishuquanyunxiao.com/share/daily-view.html?daily_id=27565",
                    views: 0,
                },
            )
        }

        this.setData({
            dynamicList:arrayList,
            articleList:arrayArticleList,
        })

    },



    change: function (e) {
        this.setData({
            current: e.detail.current
        })
    },

    //    ad 点击
    tapBannerAD: function (e) {
        console.log(e.currentTarget.dataset.type);
        if(e.currentTarget.dataset.type==='SP'){
            wx.navigateTo({
                url: '/homeSub/pages/courseList/courseList?name='+e.currentTarget.dataset.name+'&id='+e.currentTarget.dataset.id+'&type='+e.currentTarget.dataset.type
            })
        }else if(e.currentTarget.dataset.type==='DK'){
            wx.navigateTo({
                url: '/homeSub/pages/courseDetail/courseDetail?name='+e.currentTarget.dataset.name+'&id='+e.currentTarget.dataset.id+'&type='+e.currentTarget.dataset.type
            })
        }else if(e.currentTarget.dataset.type==='home'){
            wx.navigateTo({
                url: '/mySub/pages/web/web?url='+encodeURIComponent(e.currentTarget.dataset.url)+'&name='+e.currentTarget.dataset.name
            })
        }else if(e.currentTarget.dataset.type==='shop'){
            wx.navigateTo({
                url:e.currentTarget.dataset.id
            })
        }



    },
    
    
    //点击头像

    clickAva:function(e){
      wx.navigateTo({
        url: '/mySub/pages/mySpace/mySpace?name='+e.currentTarget.dataset.name
      })  
    },

    //监听校区返回
    emitSchool(city) {
        console.log(city,'gggggg');
        this.setData({
            community:city,
        })

    },


    //更多社区活动

    clickMoreActivity:function(){
        wx.navigateTo({
            url: '/homeSub/pages/moreActivity/moreActivity'
        })
    },



    //点击king
    clickKing:function(e){
        let type = e.currentTarget.dataset.type;

        wx.navigateTo({
            url: '/pages/kingList/kingList?name='+e.currentTarget.dataset.name
        })

    },

    //选择切换社区

    choseCommunity:function(){
        wx.navigateTo({
            url: '/pages/Community/Community'
        })
    },



    clickDy:function(e){
        wx.navigateTo({
          url: '/pages/homeDetail/homeDetail'
        })

    },
    
    onChange(event) {
        this.getDataList(event.detail.name);
    },


    jumpLink(e) {
        var src = e.currentTarget.dataset.src
        var name = e.currentTarget.dataset.name

        if(name==='VIP'){
            wx.navigateTo({
              url: '/homeSub/pages/UserVIP/UserVIP'
            })
        }else {
            UTIL.toast('待开发')
            if (!src) return
            wx.navigateTo({
                // url: src+'&name='+name
                url: '/homeSub/pages/NewsList/NewsList'
            })

        }
        
    },

    getDataList:function(cid){
        WXAPI.ArtMingYueHomeList(
            {
                cid:cid
            }
        ).then((res)=>{
            this.setData({
                artList:res.data
            })
        })
    },

    // 美术世界banner
    getBanner:function(userInfo){

        WXAPI.ArtMingYueBanner({
            type:'home'
        }).then((res)=>{
            this.setData({
                banners:res.data.top_carousels,
                scrollList:res.data.middle_carousels,
                homeNews:res.data.homeNews,
            })
        })

    },


    //KING
    getKing:function(){

        WXAPI.ArtMingYueKing().then((res)=>{
            this.setData({
                KING:res.data
            })
        })

    },

    //  新闻点击
    clickDetail:function(e){
        // UTIL.toast('待开发')
        console.log(e.currentTarget.dataset);
        wx.navigateTo({
            url: '/mySub/pages/web/web?url='+decodeURIComponent(e.currentTarget.dataset.link)
        })

    },



//    发表

    //发表状态
    clickAdd:function(e){
        wx.navigateTo({
            url: '/homeSub/pages/AddBbs/AddBbs'
        })


    },
    
    
    
//   点击#

    clickTogether:function (e) {
        wx.navigateTo({
          url: '/pages/together/together?name='+e.currentTarget.dataset.tag
        })
    },


    //点击更多
    clickMore:function(e){

        var that=this

        wx.showActionSheet({
            itemList: [
                '投诉'
            ],
            success (res) {
                if(res.tapIndex===0){
                    wx.navigateTo({
                        url: '/homeSub/pages/tousu/tousu?id='+e.currentTarget.dataset.id
                    })

                }
            },
            fail (res) {
                console.log(res.errMsg)
            }
        })


    },

    //  like 点赞
    clickLike:function(e){

        wx.vibrateShort();
        let index = e.currentTarget.dataset.index;
        let is_like= "articleList["+index+"].is_like";
        let like= "articleList["+index+"].like";

        if(this.data.articleList[index].is_like){
            this.setData({
                [is_like]: !this.data.articleList[index].is_like,
                [like]: this.data.articleList[index].like-1,
            })
            // this.likeVSNoLikeComment(e.currentTarget.dataset.id,true)
        }else {
            this.setData({
                [is_like]: !this.data.articleList[index].is_like,
                [like]: this.data.articleList[index].like+1,
            })
            // this.likeVSNoLikeComment(e.currentTarget.dataset.id,false)
        }



    },

    //预览图片
    tapBanner:function(e){

        var newPic=[]
        e.currentTarget.dataset.pics.forEach((item,index)=>{
            newPic.push(item.url)
        })
        wx.previewImage({
            current: e.currentTarget.dataset.pic,
            urls: newPic
        })

    },


})