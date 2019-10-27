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
            {id:1,name:'运动',image:'https://dcdn.it120.cc/2019/10/26/e6a977e7-cecb-45b2-9c8f-7b7512e7a9ea.png',type:'MS',des:'运动使我快乐',desPic:'https://static1.keepcdn.com/2019/06/05/1559718008918_750x497.png'},
            {id:1,name:'宠物',image:'https://dcdn.it120.cc/2019/10/26/cc6c2417-58d4-4a12-a595-bdd73537d6c9.png',type:'CW',des:'爱宠之家',desPic:'https://static1.keepcdn.com/ark_gaea/2019/8/23/15665318427690b697mpb_710x400.jpg'},
            {id:1,name:'相亲',image:'https://dcdn.it120.cc/2019/10/26/2b4ab83c-5d78-486e-a25e-ff693f00da4d.png',type:'XQ',des:'一起来脱单~',desPic:'https://static1.keepcdn.com/2019/06/03/1559554899424_750x340.jpg'},
            {id:1,name:'结婚',image:'https://dcdn.it120.cc/2019/10/26/8154f8a5-58de-4872-9a1e-09f8729aed46.png',type:'JH',des:'结婚常见问题',desPic:'https://static1.keepcdn.com/2019/06/03/1559554899424_750x340.jpg'},
            {id:1,name:'家居',image:'https://dcdn.it120.cc/2019/10/26/2d0cde71-c50c-486e-8815-0d94a628cef0.png',type:'JJ',des:'秀出你的家居',desPic:'https://static1.keepcdn.com/2019/06/03/1559554899424_750x340.jpg'},
            {id:1,name:'亲子',image:'https://dcdn.it120.cc/2019/10/26/e34aa4cf-05dc-49ff-b240-4dd59a143027.png',type:'QZ',des:'和小朋友一起玩耍 感受童年快乐',desPic:'https://static1.keepcdn.com/2019/05/30/1559213871256_460x238.png'},
            {id:1,name:'教育',image:'https://dcdn.it120.cc/2019/10/26/b2012b31-25e4-47b8-8f72-1554ac0dc797.png',type:'JY',des:'做一个知书达理的人',desPic:'https://static1.keepcdn.com/2019/06/03/1559554899424_750x340.jpg'},
            {id:1,name:'旅游',image:'https://dcdn.it120.cc/2019/10/26/8ff607f2-94f9-4cc3-9943-7c958b3d5dc9.png',type:'LY',des:'旅游发现未知的美',desPic:'https://static1.keepcdn.com/FnGhoicwNCqK2b1Ohz0jM5ggPCgt'},
            {id:1,name:'闲置',image:'https://dcdn.it120.cc/2019/10/26/88c74b7a-1948-411a-ade2-6d613e71a22c.png',type:'QG',des:'闲置换取价值',desPic:'https://static1.keepcdn.com/2019/03/27/1553646719435_900x600.jpg'},
            {id:1,name:'物业',image:'https://dcdn.it120.cc/2019/10/26/894be9d3-656c-4e3b-921e-c55d3d76e477.png',type:'WY',des:'一起来吐槽物业吧',desPic:'https://static1.keepcdn.com/2019/06/03/1559554899424_750x340.jpg'}
        ],
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
        // this.getDataList(0);
        // this.getKing();

        let arrayArticleList=[];
        for (let i =0;i<=10;i++){
            arrayArticleList.push(
                {
                    community: "阳光花墅",
                    address:'许昌 陈庄幼儿园',
                    tag:'# 幼儿园瞬间',
                    avatar: "https://dcdn.it120.cc/2019/10/26/2b4ab83c-5d78-486e-a25e-ff693f00da4d.png",
                    comment: 800,
                    content: "拿着放大镜去发现秋天~~",
                    follow: 0,
                    follow_user_id: 3804,
                    follow_user_type: "teacher",
                    id: 30903,
                    image_url_came: [
                        {url:'https://dcdn.it120.cc/2019/10/26/fd3ab27b-1ddc-4554-93ca-e0bd6e83bd32.jpeg'},
                        {url:'https://dcdn.it120.cc/2019/10/26/9ed88469-5287-481e-ab44-d3287517a020.jpeg'},
                        {url:'https://dcdn.it120.cc/2019/10/26/66ad24e5-fb97-4497-b2a0-202766859b53.jpeg'},
                    ],
                    image_url_came_thumb: [
                        {url:'https://dcdn.it120.cc/2019/10/26/fd3ab27b-1ddc-4554-93ca-e0bd6e83bd32.jpeg'},
                        {url:'https://dcdn.it120.cc/2019/10/26/9ed88469-5287-481e-ab44-d3287517a020.jpeg'},
                        {url:'https://dcdn.it120.cc/2019/10/26/66ad24e5-fb97-4497-b2a0-202766859b53.jpeg'},
                    ],
                    is_activating: true,
                    is_del: true,
                    is_follow: false,
                    is_like: false,
                    is_parent: false,
                    is_top: false,
                    like: 10,
                    name: "曹阿瞒",
                    status: "宝爸",
                    specialist:true,
                    Auth:'医生认证',
                    timer: '刚刚',
                    url: "https://www.meishuquanyunxiao.com/share/daily-view.html?daily_id=27565",
                    views: i+100,
                },
                {
                    community: "阳光花墅",
                    address:'许昌 胖东来',
                    tag:'# 结婚注意事项',
                    avatar: "https://dcdn.it120.cc/2019/10/26/894be9d3-656c-4e3b-921e-c55d3d76e477.png",
                    comment: 800,
                    content: "明天就要结婚了 亲们给点意见 第一次 有点紧张",
                    follow: 0,
                    follow_user_id: 3804,
                    follow_user_type: "teacher",
                    id: 30903,
                    image_url_came: [
                        {url:'http://meishuquanyunxiao.img-cn-beijing.aliyuncs.com/0%2Fdaily%2Fimage%2Fff5457d51f5088f2b84f1ab6b04cdb35.6443607306861865?x-oss-process=style/ef92587c6ac8577915de51f9fa6cae2c'},
                        {url:'http://meishuquanyunxiao.img-cn-beijing.aliyuncs.com/0%2Fdaily%2Fimage%2F7cf05dc1753572192559e73309fe3484.6871809847494202?x-oss-process=style/ef92587c6ac8577915de51f9fa6cae2c'},
                    ],
                    image_url_came_thumb: [
                        {url:'http://meishuquanyunxiao.img-cn-beijing.aliyuncs.com/0%2Fdaily%2Fimage%2Fff5457d51f5088f2b84f1ab6b04cdb35.6443607306861865?x-oss-process=style/250x250'},
                        {url:'http://meishuquanyunxiao.img-cn-beijing.aliyuncs.com/0%2Fdaily%2Fimage%2F7cf05dc1753572192559e73309fe3484.6871809847494202?x-oss-process=style/250x250'},
                    ],
                    is_activating: true,
                    is_del: true,
                    is_follow: false,
                    is_like: false,
                    is_parent: false,
                    is_top: false,
                    like: 10,
                    name: "小龙女",
                    specialist:true,
                    Auth:'教师认证',
                    status: "掌门人",
                    timer: '刚刚',
                    url: "https://www.meishuquanyunxiao.com/share/daily-view.html?daily_id=27565",
                    views: i+100,
                },
                {
                    community: "阳光花墅",
                    address:'许昌 胖东来',
                    tag:'# 中考加油',
                    avatar: "https://dcdn.it120.cc/2019/10/26/e34aa4cf-05dc-49ff-b240-4dd59a143027.png",
                    comment: 800,
                    content: "儿子明天中考,这个时候还在努力学习,加油!!!你是最棒的",
                    follow: 0,
                    follow_user_id: 3804,
                    follow_user_type: "teacher",
                    id: 30903,
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
                    specialist:false,
                    Auth:'',
                    status: "部门经理",
                    timer: '刚刚',
                    url: "https://www.meishuquanyunxiao.com/share/daily-view.html?daily_id=27565",
                    views: 100,
                },
                {
                    community: "阳光花墅",
                    address:'许昌 胖东来',
                    tag:'# 家居装修',
                    avatar: "https://dcdn.it120.cc/2019/08/22/1643cf11-1778-4c36-a707-646bf89b2f83.png",
                    comment: 800,
                    content: "刚装新加 欢迎大家参观 北欧风~",
                    follow: 0,
                    follow_user_id: 3804,
                    follow_user_type: "teacher",
                    id: 30903,
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
                    specialist:true,
                    Auth:'瑜伽老师认证',
                    status: "掌门人",
                    timer: '刚刚',
                    url: "https://www.meishuquanyunxiao.com/share/daily-view.html?daily_id=27565",
                    views: 500,
                },
                {
                    community: "阳光花墅",
                    address:'许昌 胖东来',
                    tag:'# 寻找流浪猫',
                    avatar: "https://dcdn.it120.cc/2019/08/22/1643cf11-1778-4c36-a707-646bf89b2f83.png",
                    comment: 0,
                    content: "在小区发现一只流浪喵,有认识的吗?",
                    follow: 0,
                    follow_user_id: 3804,
                    follow_user_type: "teacher",
                    id: 30903,
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
                    specialist:true,
                    Auth:'小学语文老师认证',
                    status: "前端开发",
                    timer: '1天前',
                    url: "https://www.meishuquanyunxiao.com/share/daily-view.html?daily_id=27565",
                    views: 0,
                },
                {
                    community: "阳光花墅",
                    address:'许昌 胖东来',
                    tag:'# 包打听',
                    avatar: "https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg",
                    comment: 0,
                    content: "咱们附件有九阳豆浆机售后吗?",
                    follow: 0,
                    follow_user_id: 3804,
                    follow_user_type: "teacher",
                    id: 30903,
                    image_url_came: [
                        {url:'https://dcdn.it120.cc/2019/10/22/9043ba2f-d4a2-4934-a4d3-acd6d5e8e0e6.jpg'},
                        {url:'https://dcdn.it120.cc/2019/10/22/9043ba2f-d4a2-4934-a4d3-acd6d5e8e0e6.jpg'},
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
                    specialist:true,
                    Auth:'物理学教授认证',
                    status: "销售",
                    timer: '刚刚',
                    url: "https://www.meishuquanyunxiao.com/share/daily-view.html?daily_id=27565",
                    views: 0,
                },
            )
        }

        this.setData({
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
        UTIL.toast('待开发')
    },
    
    


    //监听小区返回
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
            url: '/homeSub/pages/kingList/kingList?name='+e.currentTarget.dataset.name+'&des='+e.currentTarget.dataset.des+'&pic='+decodeURIComponent(e.currentTarget.dataset.pic)+'&image='+decodeURIComponent(e.currentTarget.dataset.image)
        })
    },

    //选择切换社区

    choseCommunity:function(){
        wx.navigateTo({
            url: '/homeSub/pages/Community/Community'
        })
    },


    //点击进入社区活动
    clickDy:function(e){
        wx.navigateTo({
          url: '/homeSub/pages/homeDetail/homeDetail'
        })

    },
    
    onChange(event) {
        this.getDataList(event.detail.name);
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



    //发表状态
    clickAdd:function(e){
        wx.navigateTo({
            url: '/homeSub/pages/AddBbs/AddBbs'
        })


    },
    


})