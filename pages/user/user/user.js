import {config,getUrl,pageLogin,sandBox,cookieStorage} from '../../../lib/myapp.js';
Page({
    data:{
        detail:"",
        orderInfo:"",
        token:"",
        MyList:[],
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
        var token=cookieStorage.get('user_token');
        this.setData({
            token:token
        });
        if(token){
            this.gitUserInfo();
            this.getCenter();
        }


        this.getMyList()

    },

    getMyList(){

        sandBox.get({
            api: 'api/me/list',
            header:{
                Authorization:cookieStorage.get('user_token')
            },
            data:{},
        }).then((res)=>{
            this.setData({
                MyList:res.data.data.list
            })
        })

    },
    jump(e){
        if(!this.data.token){
            return this.jumpLogin();
        }
        var status=e.currentTarget.dataset.status;
        wx.navigateTo({
            url: '/pages/order/index/index?type='+status
        })
    },
    jumpItem(e) {
        if(!this.data.token){
            return this.jumpLogin();
        }
        var url = e.currentTarget.dataset.url;
        wx.navigateTo({
            url: url
        })
    },
    jumpLogin(){
        wx.navigateTo({
            url: '/pages/user/register/register'
        })
    },
    bindgetuserinfo(e) {
        console.log(e);
        // 说明用户同意授权
        if (e.detail.userInfo) {
            this.updateUserInfo(e.detail.userInfo)
        }
    },
    // 更新用户信息
    updateUserInfo(e){
        wx.showLoading({
            title: '更新中',
            mask: true
        })
        sandBox.post({
            api: 'api/users/update/info',
            header:{
                Authorization:cookieStorage.get('user_token')
            },

            data:{
                nick_name:e.nickName,
                sex:e.gender == 1 ? '男' : '女',
                avatar:e.avatarUrl,
            },
        }).then(res =>{
            console.log(res);
            if(res.statusCode==200){
                res = res.data;
                if (res.status) {
                    wx.showToast({
                        title:'修改成功',
                        duration: 1500,
                        success:()=>{
                            setTimeout(()=>{
                                this.gitUserInfo();
                            },1500);
                        }
                    })
                } else {
                    wx.showModal({
                        content:res.message ||  "更新失败",
                        showCancel: false
                    });
                }
                wx.hideLoading();
            }
            else{
                wx.showModal({
                    content:"更新失败",
                    showCancel: false
                });
                wx.hideLoading();
            }
        })
    },
    // 获取用户信息
    gitUserInfo() {
        sandBox.get({
            api: 'api/me',
            header:{
                Authorization:cookieStorage.get('user_token')
            },
        }).then(res =>{
            if(res.data.status){
                this.setData({
                    detail:res.data.data
                })
            }
        })
    },
    //获取页面信息
    getCenter(){
        var token=cookieStorage.get('user_token');
        sandBox.get({
            api: 'api/users/ucenter',
            header:{
                Authorization:token
            },
        }).then(res =>{
            if(res.data.status){
                this.setData({
                    orderInfo:res.data.data
                })
            }
        })
    }

})
