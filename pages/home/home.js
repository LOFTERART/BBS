const WXAPI = require('../../API/API')
import UTIL from '../../utils/util'
import data from '../../data/data'
import create from '../../utils/omi/create'
import store from '../../store/index'
create(store,{
    data: {
        //首页广告
        banners:[],
        //首页金刚位
        KING:[],

        //首页成员动态
        articleList:[],

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

        //默认社区名称
        community:'魏都星球',
        //默认社区魏都星球id
        communityid:1,

        current:0,   //轮播图

        topBarHeight:0,

        loading: false,


    },
    /**
     * 生命周期函数--监听页面加载
     *
     */
    onLoad: function (options) {
        this.getBanner()
        this.getKing()
        this.getDiary()
    },

    //获取banner
    getBanner:function(){
        WXAPI.getHomeAd().then(res=>{
            this.setData({
                banners:res.data
            })
        })
    },
    //获取King
    getKing:function(){
        WXAPI.getHomeKing().then(res=>{
            this.setData({
                KING:res.data
            })
        })
    },

    //获取日志
    getDiary:function(){
        WXAPI.getHomeDiarys({
            page:1,
            size:10,
            communityId:this.data.communityid
        }).then(res=>{
            this.setData({
                articleList:res.data.items
            })
        })
    },

    //获取导航栏高度
    getBarInfo(e){
        this.setData({topBarHeight:e.detail.topBarHeight})
    },

    //轮播图切换
    change: function (e) {
        this.setData({
            current: e.detail.current
        })
    },

    //    ad 点击
    tapBanner: function (e) {
        // UTIL.toast(e.currentTarget.dataset.name)
        wx.navigateTo({
            url: '/storySub/pages/storyDetail/storyDetail'
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
            url: '/homeSub/pages/Community/Community',
            events:{
                getValue:(city)=>{
                    console.log(city,"city------");
                    this.setData({
                        community:city.name,
                        communityid:city.id,
                    })

                    this.getDiary()

                }
            }
        })
    },


    //监听小区返回
    emitSchool(city) {
        this.setData({
            community:city,
        })

    },

    emitGetNewDiary(){
        this.getDiary()
    },


    //发表状态
    clickAdd:function(e){
        wx.navigateTo({
            url: '/homeSub/pages/AddBbs/AddBbs?community='+this.data.community+"&communityid="+this.data.communityid
        })
    },

    onPullDownRefresh () {
        this.getDiary()
    },



})
