import Toast from '../../../utils/util'
Page({
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
        menuShow: false,
        popupShow: false,
        value: 1,
        collected: false
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
    openMenu: function () {
        this.setData({
            menuShow: true
        })
    },
    closeMenu: function () {
        this.setData({
            menuShow: false
        })
    },
    showPopup: function () {
        this.setData({
            popupShow: true
        })
    },
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
    collecting: function () {
        this.setData({
            collected: !this.data.collected
        })
    },
    common: function () {
        console.log(1);
        Toast.toast('待开发')
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
        const longitude = Number(e.currentTarget.dataset.lag)
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
        const longitude = Number(e.currentTarget.dataset.lag)
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