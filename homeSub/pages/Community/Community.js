const cityData = require('../../../utils/Community.js')
Page({
  data: {
    lists: [],
    touchmove: false, // 是否在索引表上滑动
    touchmoveIndex: -1,
    titleHeight: 0, // 索引二字距离窗口顶部的高度
    indexBarHeight: 0, // 索引表高度
    indexBarItemHeight: 0, // 索引表子项的高度
    scrollViewId: '', // scroll-view滚动到的子元素的id
    winHeight: 0,
    inputShowed: false, // 输入框是否显示
    inputVal: '', // 搜索框输入的内容
    hotCity: ['许昌橡树湾小区', '许昌一品蓝湾小区', '许昌森林半岛小区', '许昌祥和小区'], // 热门小区
    searchResult: [], // 搜索城市的结果
    localCity: ''
  },
  onLoad: function (options) {
    const that = this;
    that.setData({
      localCity: options.currentCity || "打开地图选择",
    })
    setTimeout(() => {
      wx.getSystemInfo({
        success: function (res) {
          let winHeight = res.windowHeight
          let barHeight = winHeight - res.windowWidth / 750 * 204
          that.setData({
            winHeight: winHeight,
            indexBarHeight: barHeight,
            indexBarItemHeight: barHeight / 25,
            titleHeight: res.windowWidth / 750 * 132,
            lists: cityData.list
          })
        }
      })
    }, 50)
  },
  showInput() {
    this.setData({
      inputShowed: true
    })
  },
  clearInput() {
    this.setData({
      inputVal: "",
      inputShowed: false,
      searchResult: []
    })
    wx.hideKeyboard() //强行隐藏键盘
  },
  inputTyping(e) {
    this.setData({
      inputVal: e.detail.value
    }, () => {
      this.searchCity()
    })
  },
  // 搜索城市
  searchCity() {
    let result = []
    cityData.list.forEach((item1, index1) => {
      item1.data.forEach((item2, index2) => {
        if (item2.keyword.indexOf(this.data.inputVal.toLocaleUpperCase()) !== -1) {
          result.push(item2.cityName)
        }
      })
    })
    this.setData({
      searchResult: result
    })
  },

    bindChoseAddress:function(){

      this.getLocation();

    },

    // 微信api，获取经纬度
    getLocation() {
        let that = this;
        wx.chooseLocation({
            success: function (res) {

                that.setData({
                    localCity:res.name
                })
                //授权成功之后，再调用chooseLocation选择地方
                let cityName = res.name;
                //返回并刷新上一页面
                let pages = getCurrentPages();
                let prePage = pages[pages.length - 2];
                prePage.emitSchool(cityName)
                wx.navigateBack({
                    delta: 1
                })

            },
            fail:function(){
                wx.getSetting({
                    success: function (res) {
                        var statu = res.authSetting;
                        if (!statu['scope.userLocation']) {
                            wx.showModal({
                                title: '是否授权当前位置',
                                content: '需要获取您的地理位置，请确认授权，否则地图功能将无法使用',
                                success: function (tip) {
                                    if (tip.confirm) {
                                        wx.openSetting({
                                            success: function (data) {
                                                if (data.authSetting["scope.userLocation"] === true) {
                                                    wx.showToast({
                                                        title: '授权成功',
                                                        icon: 'success',
                                                        duration: 1000
                                                    })
                                                    //授权成功之后，再调用chooseLocation选择地方
                                                    let cityName = res.address;
                                                    //返回并刷新上一页面
                                                    let pages = getCurrentPages();
                                                    console.log(pages,'pages',pages.length);
                                                    let prePage = pages[pages.length - 2];
                                                    prePage.emitSchool(cityName)
                                                    wx.navigateBack({
                                                        delta: 1
                                                    })



                                                } else {
                                                    wx.showToast({
                                                        title: '授权失败',
                                                        icon: 'success',
                                                        duration: 1000
                                                    })
                                                }
                                            }
                                        })
                                    }
                                }
                            })
                        }
                    },
                    fail: function (res) {
                        wx.showToast({
                            title: '调用授权窗口失败',
                            icon: 'success',
                            duration: 1000
                        })
                    }
                })
            },
            complete: function () {
// complete
            }
        })




    },


  // 选择城市
  selectCity(e) {
      const eventChannel = this.getOpenerEventChannel()
      eventChannel.emit('getValue', e.currentTarget.dataset.name);
        wx.navigateBack({
          delta: 1
        })
  },


  touchStart(e) {
    this.setData({
      touchmove: true
    })
    let pageY = e.touches[0].pageY
    let index = Math.floor((pageY - this.data.titleHeight) / this.data.indexBarItemHeight)
    let item = this.data.lists[index === 0 ? 1 : index]
    if (item) {
      this.setData({
        scrollViewId: item.letter,
        touchmoveIndex: index
      })
    }
  },
  touchMove(e) {
    let pageY = e.touches[0].pageY;
    let index = Math.floor((pageY - this.data.titleHeight) / this.data.indexBarItemHeight)
    let item = this.data.lists[index === 0 ? 1 : index]
    if (item) {
      this.setData({
        scrollViewId: item.letter,
        touchmoveIndex: index
      })
      console.log(index)
    }
  },
  touchEnd() {
    this.setData({
      touchmove: false,
      touchmoveIndex: -1
    })
  },
  touchCancel() {
    this.setData({
      touchmove: false,
      touchmoveIndex: -1
    })
  }
})