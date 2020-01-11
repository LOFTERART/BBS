const WXAPI = require('../../../API/API')
import  UTIL from '../../../utils/util'
Page({

    data: {
        changeColor:'rgba(231,231,232,1)',
        images: [], //存放图片的数组
        message:'',
        huati:'选择合适的话题会有更多赞~',
        addressLocal:'不显示地区'
    },


    onLoad:function(options){
        this.setData({
            huati:options.name||'选择合适的话题会有更多赞~',
            community:options.community,
            communityid:options.communityid
        })

    },



    //选择图片方法
    chooseImage: function (e) {
        wx.chooseImage({
            count: 9 - this.data.images.length,
            sizeType: [ 'compressed'], //可选择原图或压缩后的图片
            sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
            success: res => {
                if (this.data.images.length <= 9) {
                    const images = this.data.images.concat(res.tempFilePaths)
                    // 限制最多只能留下2张照片
                    this.setData({
                        images: images
                    })
                }
            }
        })
    },

    //删除图片
    removeImage(e) {
        const idx = e.target.dataset.idx;
        console.log(e.target.dataset.idx);
        this.data.images.splice(idx, 1);
        var del_image = this.data.images;
        this.setData({
            images: del_image
        })
    },


//    预览图片

    handleImagePreview(e) {
        const idx = e.target.dataset.idx
        const images = this.data.images
        wx.previewImage({
            current: images[idx], //当前预览的图片
            urls: images, //所有要预览的图片
        })
    },




    messInput:function(e){
        this.setData({
            message:e.detail.value
        })

        if (e.detail.value.length>1){
            this.setData({
                changeColor:'#3CCB9B'
            })
        }else {
            this.setData({
                changeColor:'rgba(231,231,232,1)'
            })
        }

    },



    //监听小区返回
    emitSchool(city) {
        console.log(city,'gggggg');
        this.setData({
            xiaoqu:city,
        })

    },

//    你在哪里位置选择

    clickXiaoQu:function(){
        var that =this;

        wx.showActionSheet({
            itemList: [
                '获取当前定位信息',
                '不显示地区'
            ],
            success (res) {
                if(res.tapIndex===0){
                    that.getLocation();

                }else {
                    that.setData({
                        addressLocal:'来自银河地球'
                    })
                }
            },
            fail (res) {
                console.log(res.errMsg)
            }
        })


    },


    // 微信api，获取经纬度
    getLocation() {
        let that = this;
        wx.chooseLocation({
            success: function (res) {
                that.setData({
                    addressLocal:res.name
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
                                                    wx.chooseLocation({
                                                        success: function(res) {
                                                            obj.setData({
                                                                addr: res.address
                                                            })
                                                        },
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




    //监听话题返回
    emitHuaTi(huati) {
        this.setData({
            huati
        })

    },



//    话题

    clickHuaTi:function(){
        wx.navigateTo({
            url: '/homeSub/pages/conversation/conversation'
        })
    },


    up1:function(){


        WXAPI.postDiary({
            avatar:"https://dcdn.it120.cc/2019/10/26/2b4ab83c-5d78-486e-a25e-ff693f00da4d.png",
            name:"曹阿瞒",
            content:this.data.message,
            address:this.data.addressLocal,
            community:this.data.community,
            photos:["fd3ab27b-1ddc-4554-93ca-e0bd6e83bd32.jpeg","9ed88469-5287-481e-ab44-d3287517a020.jpeg","66ad24e5-fb97-4497-b2a0-202766859b53.jpeg"],
            tag:this.data.huati
        }).then((res=>{
            console.log(res,"------")
            UTIL.toast('发布成功!增加了10经验值');
            wx.navigateBack();

        }))


    },

//    文字发表

    up:   function () {
        var that=this;
        var images_list = [];
        for (let i = 0; i < that.data.images.length; i++) {
            wx.showLoading({
                "mask": true,
                "title":'上传中'
            })
            wx.uploadFile({
                url: 'http://127.0.0.1:8080/home/upload',
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
                filePath: that.data.images[i],
                name: 'file',
                type: 'image/jpg',
                formData: {
                    indexSort:i,
                },
                success:   function (res) {
                    var jsonObj =  JSON.parse(res.data)
                    images_list.push({showPic:jsonObj.data.url,indexAZ:jsonObj.data.post_indexSort});
                    if (that.data.images.length === images_list.length) {
                        let pass=[];
                        images_list.sort(that.compare).map((item,index)=>{
                            pass.push(item.showPic);
                        })

                        WXAPI.postDiary({
                            avatar:"https://dcdn.it120.cc/2019/10/26/2b4ab83c-5d78-486e-a25e-ff693f00da4d.png",
                            name:"曹阿瞒",
                            content:that.data.message,
                            address:that.data.addressLocal,
                            community:that.data.community,
                            photos:pass,
                            tag:that.data.huati,
                            communityId:Number(that.data.communityid),
                            ClassifyId:2, //大标签ID
                            sub_topic_id:1
                        }).then((res=>{
                            console.log(res,"------")
                            UTIL.toast('发布成功!增加了10经验值');
                            let pages = getCurrentPages();
                            let prePage = pages[pages.length - 2];
                            prePage.emitGetNewDiary()
                            wx.navigateBack({
                                delta: 1
                            })
                        }))




                        // let params = {
                        //     studio_id:that.store.data.userInfo.studio_id,
                        //     user_id:that.store.data.userInfo.admin_id,
                        //     user_type:that.store.data.userInfo.user_role,
                        //     content:that.data.message,
                        //     image_url_came:pass
                        // };
                        // WXAPI.ArtAddZT(params).then((res)=>{
                        //     if(res.success){
                        //         that.context.emitter.emit('getNewDataList', res)
                        //         wx.navigateBack();
                        //     }
                        // })
                    }
                },
                fail: function (error) { }
            })
        }


    },

    //    比较图片顺序
    compare:function(obj1, obj2){
        let val1 = obj1.indexAZ;
        let val2 = obj2.indexAZ;
        if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0;
        }
    }

})





