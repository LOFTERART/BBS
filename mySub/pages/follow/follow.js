Page({
    data: {
        currentTab: 0,
        navbar: [{
            name: "用户"
        }, {
            name: "话题"
        }],


        followUserList:[
            {id:1,name:'闫莎',image:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png'},
            {id:1,name:'闫莎',image:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png'},
            {id:1,name:'闫莎',image:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png'},
            {id:1,name:'闫莎',image:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png'},
            {id:1,name:'闫莎',image:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png'},
            {id:1,name:'闫莎',image:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png'},
            {id:1,name:'闫莎',image:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png'},
        ]

    },
    onLoad: function(options) {

    },
    change(e) {
        this.setData({
            currentTab: e.detail.index
        })
    },
    goNavBar() {
        wx.navigateTo({
            url: "/pages/navbar-1/navbar-1"
        })
    }
})