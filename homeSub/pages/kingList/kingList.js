// pages/together/together.js
import UTIL from '../../../utils/util'
import create from '../../../utils/omi/create'
import store from '../../../store/index'
import data from '../../../data/data'
create(store,{

    /**
     * 页面的初始数据
     */
    data: {
        articleList:data.homeDyList,
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



        this.setData({

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