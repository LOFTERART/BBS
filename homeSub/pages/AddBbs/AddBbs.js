const WXAPI = require('../../../API/API')
const app = getApp()
import CONFIG from '../../../config'
import create from '../../../utils/omi/create'
import store from '../../../store/store'
create(store,{
    context: {
        emitter: create.emitter
    },
    data: {
        changeColor:'rgba(231,231,232,1)',
        images: [], //存放图片的数组
        message:'',
        huati:'选择合适的话题会有更多赞~',
        xiaoqu:'阳光花墅'
    },

    //选择图片方法
    chooseImage: function (e) {
        wx.chooseImage({
            count: 9 - this.data.images.length,
            sizeType: ['original', 'compressed'], //可选择原图或压缩后的图片
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
                changeColor:'rgba(253,96,28,1)'
            })
        }else {
            this.setData({
                changeColor:'rgba(231,231,232,1)'
            })
        }

    },



    //监听校区返回
    emitSchool(city) {
        console.log(city,'gggggg');
        this.setData({
            xiaoqu:city,
        })

    },
    
//    小区选择

    clickXiaoQu:function(){
      wx.navigateTo({
        url: '/pages/Community/Community'
      })  
    },


//    话题

    clickHuaTi:function(){
        wx.navigateTo({
            url: '/homeSub/pages/conversation/conversation'
        })
    },

    
//    文字发表

    upText:   function () {
        var that=this;
        var images_list = []; //设置了一个空数组进行储存服务器端图片路径
        for (let i = 0; i < that.data.images.length; i++) {
            wx.showLoading({
                "mask": true,
                "title":'上传中'
            })
             wx.uploadFile({
                url: 'https://api.teacher.meishuquanyunxiao.com/v2/news/upload-image-yun?source=daily',
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
                filePath: that.data.images[i],
                name: 'file',
                type: 'image/jpg',
                formData: {
                    studio_id:this.store.data.userInfo.studio_id,
                    user_id:this.store.data.userInfo.admin_id,
                    user_type:this.store.data.userInfo.user_role,
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
                        let params = {
                            studio_id:that.store.data.userInfo.studio_id,
                            user_id:that.store.data.userInfo.admin_id,
                            user_type:that.store.data.userInfo.user_role,
                            content:that.data.message,
                            image_url_came:pass
                        };
                        WXAPI.ArtAddZT(params).then((res)=>{
                          if(res.success){
                              that.context.emitter.emit('getNewDataList', res)
                              wx.navigateBack();
                          }
                        })
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





