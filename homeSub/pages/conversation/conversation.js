Page({
  data: {
    tabbar: ['美食','宠物','相亲','结婚','家居','亲子','教育','旅游','闲置','物业'],

    menuHeight: "", //菜单高度
    currentTab: 0, //预设当前项的值
    scrollTop: 0, //tab标题的滚动条位置

    huaTiList:[]
  },
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          menuHeight: res.windowHeight - res.windowWidth / 750 * 92
        });
      }
    });



    this.setData({
        huaTiList1:[
            [
                {
                    id:1,name:'# 1帮助身边的流浪动物',subName:'4079条讨论 6299人围观'
                },
                {
                    id:2,name:'# 2包打听',subName:'1079条讨论 1299人围观'
                }
            ],
            [
                {
                    id:3,name:'# 3帮助身边的流浪动物',subName:'4079条讨论 6299人围观'
                },
                {
                    id:4,name:'# 4包打听',subName:'1079条讨论 1299人围观'
                }
            ],
            [
                {
                    id:3,name:'# 3帮助身边的流浪动物',subName:'4079条讨论 6299人围观'
                },
                {
                    id:4,name:'# 4包打听',subName:'1079条讨论 1299人围观'
                }
            ],
            [
                {
                    id:3,name:'# 3帮助身边的流浪动物',subName:'4079条讨论 6299人围观'
                },
                {
                    id:4,name:'# 4包打听',subName:'1079条讨论 1299人围观'
                }
            ],
            [
                {
                    id:3,name:'# 3帮助身边的流浪动物',subName:'4079条讨论 6299人围观'
                },
                {
                    id:4,name:'# 4包打听',subName:'1079条讨论 1299人围观'
                }
            ],
            [
                {
                    id:3,name:'# 3帮助身边的流浪动物',subName:'4079条讨论 6299人围观'
                },
                {
                    id:4,name:'# 4包打听',subName:'1079条讨论 1299人围观'
                }
            ]
        ],
        huaTiList:[
            {
                id:1,name:'# 0帮助身边的流浪动物',subName:'4079条讨论 6299人围观'
            },
            {
                id:2,name:'# 0包打听',subName:'1079条讨论 1299人围观'
            }
        ]
    })


  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
      this.setData({
          huaTiList:this.data.huaTiList1[e.currentTarget.dataset.current]
      })
      console.log(this.data.huaTiList,'huaTiList');
    let cur = e.currentTarget.dataset.current;
      console.log(e.currentTarget.dataset.current,'e.currentTarget.dataset.current');
      if (this.data.currentTab == cur) {
        this.setData({
            huaTiList:this.data.huaTiList[e.currentTarget.dataset.current]
        })
      return false;
    } else {
      wx.pageScrollTo({
        scrollTop: 0
      })
      this.setData({
        currentTab: cur
      })
      this.checkCor();
    }


  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    let that = this;
    //这里计算按照实际情况进行修改，动态数据要进行动态分析
    //思路：窗体高度/单个分类高度 200rpx 转px计算 =>得到一屏幕所显示的个数，结合后台传回分类总数进行计算
    //数据很多可以多次if判断然后进行滚动距离计算即可
    if (that.data.currentTab > 7) {
      that.setData({
        scrollTop: 500
      })
    } else {
      that.setData({
        scrollTop: 0
      })
    }
  },
  detail(e) {
    wx.navigateTo({
      url: '../extend-view/productDetail/productDetail'
    })
  },
  productList(e) {
    let key = e.currentTarget.dataset.name;
      console.log(key,'key');

      //返回并刷新上一页面
      let pages = getCurrentPages();
      let prePage = pages[pages.length - 2];
      prePage.emitHuaTi(key)
      wx.navigateBack({
          delta: 1
      })

  },

})
