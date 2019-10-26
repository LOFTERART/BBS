// pages/addwork/addwork.js

import md5 from '../../../utils/md5.min.js'
// 请使用你自己的密钥
const QQMapKey = 'XUQBZ-TDDCW-BXXRQ-OCU7L-XAAFE-HPFDY';

// 在密钥设置中开启WebServiceAPI，选择签名校验，即可获取Secret key，即SK
// 请使用你自己的SK
const SK = 'jFXVCoBLZqz8LfkJ3pZwm9R5ghR9pFz8';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        changeColor:'rgba(231,231,232,1)',
        lat: 40.056974,
        lon: 116.307689,
        address: '定位中',
        showCity:false,

    },



    //监听校区返回
    emitSchool(city) {
        this.setData({
            school:city,
            changeColor:city?'rgba(253,96,28,1)':'rgba(231,231,232,1)'
        })

    },

    chooseCity:function(){
        if(this.data.isShowCity){
            this.setData({
                showCity:true
            })
        }else {
            this.getLocation();
        }

    },


    onClose() {
        this.setData({ showCity: false });
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        this.getLocation();

    },




    onConfirm(event) {
        const { values } = event.detail;
        console.log(values.map(item => item.code).join('-'),'code');
        this.setData({
            showCity:false,
            addressLocal:values.map(item => item.name).join('-'),
            addressCode:values.map(item => item.code).join('-'),
        })
    },




    // 微信api，获取经纬度
    getLocation() {
        let that = this;
        wx.getLocation({
            type: 'gcj02',
            success:(res)=>{
                console.log(res,'reddddddddddd');
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
                console.log(res,'地址');
                let result = res.data.result
                // 此处的that指向app
                that.setData({
                    addressLocal:result.address_component.province+'-'+result.address_component.city+'-'+result.address_component.district
                })
                wx.hideLoading()
            },
            fail:(e) => {
                console.log(e)
                wx.hideLoading()
            }
        })
    },




})

