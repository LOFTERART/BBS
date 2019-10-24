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
            {id:1,name:'商业',image:'https://dcdn.it120.cc/2019/09/26/ef633ab3-4bf4-47cc-9e47-b12367613398.png',type:'business'},
            {id:1,name:'交友',image:'https://dcdn.it120.cc/2019/09/26/24362dc4-e21f-466e-9423-efc03156b730.png',type:'business'},
            {id:1,name:'旅游',image:'https://dcdn.it120.cc/2019/09/26/ef633ab3-4bf4-47cc-9e47-b12367613398.png',type:'business'},
            {id:1,name:'帮助',image:'https://dcdn.it120.cc/2019/09/26/24362dc4-e21f-466e-9423-efc03156b730.png',type:'business'},
            {id:1,name:'运动',image:'https://dcdn.it120.cc/2019/09/26/ef633ab3-4bf4-47cc-9e47-b12367613398.png',type:'business'}
        ],
        //首页动态列表
        dynamicList:[],
    //    文章
        artList:[],
        hotList:[
            {
                id:1,
                image:'http://www.mingyue.musemore.art/storage/backend/article/cover/150633483e98b4b437ce75c2912fbef3.jpg',
                beginTime:'7月23号 14:00-18:00',
                name:'30元+吃晋江豪华大餐',
                address:'地址:晋江万达3楼501室醉得意餐厅',
                subName:'这个突破经由CEO皮猜亲自官宣、论文登上“如果大家都不学化学，那富士康就没人了”，齐拴虎说道。',
                partakeNum: '98人参与',
                actionDes:'去参与',
            },
            {
                id:1,
                image:'http://www.mingyue.musemore.art/storage/backend/article/cover/150633483e98b4b437ce75c2912fbef3.jpg',
                beginTime:'7月23号 14:00-18:00',
                name:'30元+吃晋江豪华大餐',
                address:'地址:晋江万达3楼501室醉得意餐厅',
                subName:'这个突破经由CEO皮猜亲自官宣、论文登上',
                partakeNum: '98人参与',
                actionDes:'去参与',
            },
            {
                id:1,
                image:'http://www.mingyue.musemore.art/storage/backend/article/cover/150633483e98b4b437ce75c2912fbef3.jpg',
                beginTime:'7月23号 14:00-18:00',
                name:'30元+吃晋江豪华大餐',
                address:'地址:晋江万达3楼501室醉得意餐厅',
                subName:'这个突破经由CEO皮猜亲自官宣、论文登上',
                partakeNum: '98人参与',
                actionDes:'去参与',
            },
            {
                id:1,
                image:'http://www.mingyue.musemore.art/storage/backend/article/cover/150633483e98b4b437ce75c2912fbef3.jpg',
                beginTime:'7月23号 14:00-18:00',
                name:'30元+吃晋江豪华大餐',
                address:'地址:晋江万达3楼501室醉得意餐厅',
                subName:'这个突破经由CEO皮猜亲自官宣、论文登上',
                partakeNum: '98人参与',
                actionDes:'去参与',
            },
            {
                id:1,
                image:'http://www.mingyue.musemore.art/storage/backend/article/cover/150633483e98b4b437ce75c2912fbef3.jpg',
                beginTime:'7月23号 14:00-18:00',
                name:'30元+吃晋江豪华大餐',
                address:'地址:晋江万达3楼501室醉得意餐厅',
                subName:'这个突破经由CEO皮猜亲自官宣、论文登上',
                partakeNum: '98人参与',
                actionDes:'去参与',
            },

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

        let arrayList=[]
        for (let i =0;i<=5;i++){
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
        }

        this.setData({
            dynamicList:arrayList
        })

    },



    change: function (e) {
        this.setData({
            current: e.detail.current
        })
    },

    //    ad 点击
    tapBanner: function (e) {
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

    //监听校区返回
    emitSchool(city) {
        console.log(city,'gggggg');
        this.setData({
            community:city,
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

    }


})