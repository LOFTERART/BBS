// components/banner/banner.js
Component({

    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        banners: Array,
        current:{
            type: Number,
            value: 0, //不存在此属性时
        }
    },
    methods:{
        //滑动banner事件处理函数
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



        }



    },





})