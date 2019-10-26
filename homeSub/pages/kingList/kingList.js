// pages/together/together.js
import UTIL from '../../../utils/util'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        artList:[],
        newsList:[
            {id:1,name:"庆春节 迎新年 和睦邻里拉力赛",link:'url',type:'H5'},
            {id:2,name:"河南市海淀区人民大学",link:'url',type:'H5'},
            {id:3,name:"许昌市海淀区人民大学",link:'url',type:'H5'},
        ],

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
        wx.setNavigationBarTitle({
            title: options.name
        })

        setTimeout(()=>{
            this.setData({
                animation:true
            })
        },600)


        let arrayArticleList=[];
        for (let i =0;i<=20;i++){
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
                    timer: '刚刚',
                    url: "https://www.meishuquanyunxiao.com/share/daily-view.html?daily_id=27565",
                    views: i+100,
                },

                {
                    community: "许昌森林半岛",
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
                    status: "掌门人",
                    timer: '刚刚',
                    url: "https://www.meishuquanyunxiao.com/share/daily-view.html?daily_id=27565",
                    views: i+100,
                },
            )
        }

        this.setData({
            articleList:arrayArticleList,
            name:options.name,
            KingPic:options.pic,
            KingDes:options.des,
            KingImage:options.image,
        })

    },



    //点击公告
    detail(e) {
        console.log(e.currentTarget.dataset,'eee');
        UTIL.toast('详情功能尚未完善~')
    },

    //立即参与
    clickAction:function(e){
        
        wx.navigateTo({
          url: '/homeSub/pages/AddBbs/AddBbs'
        })

    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})