const WXAPI = require('../../../API/API')
import create from '../../../utils/omi/create'
import store from '../../../store/store'

import  UTIL from '../../../utils/util'



import md5 from '../../../utils/md5.min.js'
// 请使用你自己的密钥
const QQMapKey = 'XUQBZ-TDDCW-BXXRQ-OCU7L-XAAFE-HPFDY';

// 在密钥设置中开启WebServiceAPI，选择签名校验，即可获取Secret key，即SK
// 请使用你自己的SK
const SK = 'jFXVCoBLZqz8LfkJ3pZwm9R5ghR9pFz8';


create(store,{
    context: {
        emitter: create.emitter
    },
    data: {
        changeColor:'rgba(231,231,232,1)',
        images: [], //存放图片的数组
        message:'',
        huati:'选择合适的话题会有更多赞~',
        addressLocal:''
    },


    onLoad:function(options){
        console.log(options,'opopopo');

        this.setData({
            huati:options.name||'选择合适的话题会有更多赞~'
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
                changeColor:'#12d58b'
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
    
//    你在哪里位置选择

    clickXiaoQu:function(){
        this.getLocation();
    },


    // 微信api，获取经纬度
    getLocation() {
        let that = this;
        wx.getLocation({
            type: 'gcj02',
            success:(res)=>{
                this.updateLocation(res)
                this.setData({
                    isShowCity:true
                })
            },
            fail(err) {
                console.log('fail', err);
            }
        });

    },


    // 根据经纬度，设置数据
    updateLocation(res) {
        let {latitude: lat, longitude: lon} = res
        let data = {
            lat,
            lon
        }
        this.setData(data)
        this.getAddress(lat, lon)
    },

    // 根据经纬度，逆地址解析
    getAddress(lat, lon) {
        var that = this
        wx.showLoading({
            title: '定位中',
            mask: true,
            duration: 3000
        })
        let SIG = md5("/ws/geocoder/v1?key=" + QQMapKey +"&location="+String(lat)+","+String(lon)+SK)
        wx.request({
            url: 'https://apis.map.qq.com/ws/geocoder/v1',
            data: {
                key: QQMapKey,
                location: `${lat},${lon}`,
                sig: SIG,
            },
            success(res) {
                let result = res.data.result
                // 此处的that指向app
                that.setData({
                    addressLocal:result.address
                })
                wx.hideLoading()
            },
            fail:(e) => {
                console.log(e)
                wx.hideLoading()
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


    up:function(){
      UTIL.toast('待开发')
    },

//    文字发表

    upText:   function () {
        var that=this;
        var images_list = [];
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





