Page({
    data: {
        currentTab: 0,
        navbar: [
            {
            name: "消息"
            },
            {
            name: "动态"
            },
            {
                name: "通知"
            }
        ],


        followUserList:[
            {id:1,name:'闫莎',image:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png'},
            {id:1,name:'闫莎',image:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png'},
            {id:1,name:'闫莎',image:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png'},
            {id:1,name:'闫莎',image:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png'},
            {id:1,name:'闫莎',image:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png'},
            {id:1,name:'闫莎',image:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png'},
            {id:1,name:'闫莎',image:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png'},
        ],
        conversationList:[
            {id:1,name:'您因为睡过头误过哪些事?',image:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png',viewNum:'6016阅读 - 257状态'},
            {id:1,name:'您因为睡过头误过哪些事?',image:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png',viewNum:'6016阅读 - 257状态'},
            {id:1,name:'您因为睡过头误过哪些事?',image:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png',viewNum:'6016阅读 - 257状态'},
            {id:1,name:'您因为睡过头误过哪些事?',image:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png',viewNum:'6016阅读 - 257状态'},
        ]


    },
    onLoad: function(options) {

    },
    change(e) {
        console.log(e);
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