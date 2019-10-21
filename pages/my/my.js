
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
                    name: "我的活动",
                    subName: "加入的活动",
                    type: "DD",
                }
            ],
            [
                {
                    icon: "http://www.mingyue.musemore.art/storage/api/me/list/我的订单.png",
                    id: 1,
                    isShowArrow: true,
                    isShowPoint: true,
                    name: "我的客服",
                    subName: "客服",
                    type: "DD",
                },
                {
                    icon: "http://www.mingyue.musemore.art/storage/api/me/list/我的订单.png",
                    id: 1,
                    isShowArrow: true,
                    isShowPoint: true,
                    name: "个人信息",
                    subName: "信息",
                    type: "DD",
                },
                {
                    icon: "http://www.mingyue.musemore.art/storage/api/me/list/我的订单.png",
                    id: 1,
                    isShowArrow: true,
                    isShowPoint: true,
                    name: "关于我们",
                    subName: "关于",
                    type: "GY",
                }
            ]
        ],
        MyDataInfo:[
            {id:1,name:'收藏',num:10,type:'jf'},
            {id:2,name:'已加入',num:20,type:'jf'},
            {id:3,name:'待出发',num:40,type:'jf'},
            {id:4,name:'已出发',num:60,type:'jf'},
        ]
    },

    clickCell:function (e) {
        if(e.currentTarget.dataset.type==='GY'){
            wx.navigateTo({
                url: '/mySub/pages/about/about'
            })
        }


    },

    onShow(){

    },


})
