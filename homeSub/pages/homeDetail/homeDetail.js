import UTIL from "../../../utils/util";
const WXAPI = require('../../../API/API')
import create from '../../../utils/omi/create'
import store from '../../../store/index'
create(store,{

    data: {
        height: 64, //header高度
        top: 0, //标题图标距离顶部距离
        scrollH: 0, //滚动总高度
        opcity: 0,
        iconOpcity: 0.5,
        banner: [
            "https://www.thorui.cn/img/product/11.jpg",
            "https://www.thorui.cn/img/product/2.png",
            "https://www.thorui.cn/img/product/33.jpg",
            "https://www.thorui.cn/img/product/4.png",
            "https://www.thorui.cn/img/product/55.jpg",
            "https://www.thorui.cn/img/product/6.png",
            "https://www.thorui.cn/img/product/7.jpg",
            "https://www.thorui.cn/img/product/8.jpg"
        ],
        bannerIndex: 0,

        //活动详情
        activityInfo:{
            id:1,
            collected:false, //是否收藏
            price:99, //现价
            priceTag:'首届',
            originalPrice:199, //原价
            name:'趣知游第一届香山旅游活动召集令',
            subName:'2019年 河南人在北京同乡会',
            peoNun:50, //人数
            signNum:20, //人数
            CollectionNum:30, //收藏数
            welfare:[
                {id:1,tag:'意外保险',des:'旅游意外险'},
                {id:2,tag:'新品赠送',des:'酒样品200ML'},
                {id:2,tag:'新品赠送',des:'酒样品200ML'},
            ],
            signTime:'2019-10-17 -2019-10-31',//报名时间
            activeTime:'2019-11-31全天',//活动时间
            gatherAdd:{address:'北京海淀区人民大学',lat:'39.975529',lng:'116.322402',name:'人民大学'}, //集合地
            destination:{address:'北京香山公园的具体地址',lat:'39.975529',lng:'116.322402',name:'香山公园'},//目的地
            tags:['河南同乡','免费一日游','吃喝全包','客车接送'],
            htmlCon:'<h1>11</h1>'
        },


        //评价list
        evaluateList:[
            {id:1,name:'杨过',ava:'url',from:'来自河南许昌',content:'XXXXXXXX'}
        ],





        popupShow: false,


        value: 1,
    },


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

        //获取活动详情
        this.getActivityDetail(options.id);
    //    模拟获取全部评论

        this.getActivityComments(options.id);

    },

   //获取活动详情
    getActivityDetail:function(id){
        WXAPI.ActivityDetail({
            activityId:id,
            userId:''
        }).then(res=>{
            if(res.code===200){
                console.log(res,'res');
            }else {
                UTIL.toast(res.message)
            }
        })

    },
    //    模拟获取全部评论
    getActivityComments:function(id){
        WXAPI.ActivityComments({
            activityId:id,
        }).then(res=>{
            if(res.code===200){
                console.log(res,'全部评论');
            }else {
                UTIL.toast(res.message)
            }
        })

    },










    bannerChange: function (e) {
        this.setData({
            bannerIndex: e.detail.current
        })
    },
    previewImage: function (e) {
        let index = e.currentTarget.dataset.index;
        wx.previewImage({
            current: this.data.banner[index],
            urls: this.data.banner
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




    //点击更多福利展示pop
    clickMore:function(){
        this.setData({
            popupShow:true
        })
    },

//关闭福利展示pop
    hidePopup: function () {
        this.setData({
            popupShow: false
        })
    },


    change: function (e) {
        this.setData({
            value: e.detail.value
        })
    },




    //活动收藏
    collecting: function (e) {

        let collected= "activityInfo.collected";
        let CollectionNum= "activityInfo.CollectionNum";
        if(this.data.activityInfo.collected){
            this.setData({
                [collected]: !this.data.activityInfo.collected,
                [CollectionNum]: this.data.activityInfo.CollectionNum-1,
            })
            UTIL.toast('取消收藏')
            this.collectedVSNocollected(e.currentTarget.dataset.id,false)
        }else{
            this.setData({
                [collected]: !this.data.activityInfo.collected,
                [CollectionNum]: this.data.activityInfo.CollectionNum+1,
            })
            UTIL.toast('收藏成功')
            this.collectedVSNocollected(e.currentTarget.dataset.id,true)
        }
    },

    //活动收藏API
    collectedVSNocollected:function(id,type){

        WXAPI.ActivityCollection({
            activityId:id,
            type:type,
            userId:''
        }).then(res=>{
            if(res.code===200){
                console.log(res,'res');
            }else {
                UTIL.toast(res.message)
            }
        })

    },



    //未开发功能
    common: function () {
        UTIL.toast('待开发')
    },





    clickBm:function(){
        wx.navigateTo({
          url: '/homeSub/pages/addPeoInfo/addPeoInfo'
        })
    },
    submit() {
        this.setData({
            popupShow:false
        })
        wx.navigateTo({
            url: '../mall-extend/submitOrder/submitOrder'
        })
    },


    //     点击集合地
    clickAddressFrom:function (e) {
        console.log(e.currentTarget.dataset);
        const latitude = Number(e.currentTarget.dataset.lat)
        const longitude = Number(e.currentTarget.dataset.lng)
        const name=e.currentTarget.dataset.name
        const address=e.currentTarget.dataset.address
        wx.openLocation({
            latitude,
            longitude,
            name,
            address,
            scale: 18
        })
    },
    
//     点击目的地
    clickAddressTo:function (e) {
        console.log(e.currentTarget.dataset);
        const latitude = Number(e.currentTarget.dataset.lat)
        const longitude = Number(e.currentTarget.dataset.lng)
        const name=e.currentTarget.dataset.name
        const address=e.currentTarget.dataset.address
        wx.openLocation({
            latitude,
            longitude,
            name,
            address,
            scale: 18
        })
    }
    
    
    
})