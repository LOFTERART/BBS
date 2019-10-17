import {config,sandBox,cookieStorage} from '../../../lib/myapp.js'
Page({
    data: {

        topCell:[
            {id:1,title:'今日推荐',cid:0},
            {id:2,title:'版画专区',cid:1},
            {id:3,title:'国画专区',cid:2},
            {id:5,title:'艺术衍生品',cid:3},
        ],

        goodInfo:[],
        carousels:[],
        info:'',
        screenWidth: '',
        imgHeight: '',
        active: 0
    },
    onLoad() {
        wx.getSystemInfo({
            success: res => {
                this.setData({
                    screenWidth: res.screenWidth
                })
            }
        });
      this.getIndexData(0);
    },



    onChange(event) {
        this.getIndexData(event.detail.name);
        console.log(event.detail);
    },


    jumpLink(e) {
        var src = e.currentTarget.dataset.src
        var name = e.currentTarget.dataset.name
        if (!src) return
        wx.navigateTo({
            url: src+'&name='+name
        })
    },
    jumpDetail(e) {
        var id = e.currentTarget.dataset.id

        wx.navigateTo({
            url: '/pages/store/detail/detail?id=' + id
        })
    },
    jumpSearch() {
        wx.navigateTo({
            url: '/pages/store/search/search'
        })
    },
    getIndexData(cid) {
        wx.showLoading({
            title: '加载中',
            mask: true
        })
        sandBox.get({
            api:'api/home',
            data:{
                cid:cid
            }
        }).then(res => {
            if (res.statusCode == 200) {
                res = res.data;

                if (res.status) {
                    this.setData({
                        info: res.data
                    })
                } else {
                    wx.showModal({
                        content: res.message || '请求失败',
                        showCancel: false
                    })
                }
            } else {
                wx.showModal({
                    content: '请求失败',
                    showCancel: false
                })
            }
            wx.hideLoading();
        }).catch(() => {
            wx.hideLoading();
            wx.showModal({
                content: '请求失败',
                showCancel: false
            })
        })
    },

    onPullDownRefresh(){
        this.getIndexData();

    }
})