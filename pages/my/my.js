
Page({
    data:{
        detail:"",
        orderInfo:"",
        token:"",
        MyList:[
            [
                {
                    icon: "http://www.mingyue.musemore.art/storage/api/me/list/我的订单.png",
                    id: 1,
                    isShowArrow: true,
                    isShowPoint: true,
                    name: "我的订单",
                    subName: "订单",
                    type: "DD",
                }
            ],
            [
                {
                    id:1,name:'关于'
                }
            ]
        ],
        MyDataInfo:[
            {id:1,name:'收藏',num:0,type:'jf'},
            {id:2,name:'地址',num:0,type:'jf'},
            {id:3,name:'优惠券',num:0,type:'jf'},
            {id:4,name:'余额',num:0,type:'jf'},
        ]
    },

    clickCell:function (e) {
        if(e.currentTarget.dataset.type==='XX'){
            wx.navigateTo({
                url: '/pages/withdraw/withdraw'
            })
        }else  if(e.currentTarget.dataset.type==='DD'){
            wx.navigateTo({
                url: '/pages/order/index/index?type=0'
            })
        }else  if(e.currentTarget.dataset.type==='TZ'){
            wx.navigateTo({
                url: '/pages/withdraw/withdraw'
            })
        }
        else  if(e.currentTarget.dataset.type==='JF'){
            wx.navigateTo({
                url: '/pages/score/score'
            })
        }else  if(e.currentTarget.dataset.type==='SC'){
            wx.navigateTo({
                url: '/mySub/pages/favorite/index'
            })
        }else  if(e.currentTarget.dataset.type==='YHQ'){
            wx.navigateTo({
                url: '/pages/coupon/index/index'
            })
        }else  if(e.currentTarget.dataset.type==='DZ'){
            wx.navigateTo({
                url: '/pages/address/list/list'
            })
        }else  if(e.currentTarget.dataset.type==='GWC'){
            wx.navigateTo({
                url: '/pages/store/cart/cart'
            })
        }else  if(e.currentTarget.dataset.type==='CZW'){
            wx.navigateTo({
                url: '/pages/cart/cart'
            })
        }else  if(e.currentTarget.dataset.type==='GY'){
            wx.navigateTo({
                url: '/mySub/pages/about/about'
            })
        }


    },

    onShow(){

    },


})
