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
        height: 64, //header高度
        top: 50, //标题图标距离顶部距离
        scrollH: 0, //滚动总高度
        opcity: 0,
        iconOpcity: 0.5,
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

        let obj = wx.getMenuButtonBoundingClientRect();
        this.setData({
            width: obj.left,
            height: obj.top + obj.height + 8,
            top: obj.top + (obj.height - 32) / 2
        }, () => {
            wx.getSystemInfo({
                success: (res) => {
                    this.setData({
                        scrollH: res.windowWidth
                    })
                }
            })
        });

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

    //页面滚动执行方式
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
    back: function () {
        wx.navigateBack()
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