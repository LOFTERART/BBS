// const form = require("/component/utils/formValidation.js")

import form  from '../../../component/utils/formValidation.js'




Page({
  data: {
      popupShow: false,
      value2: 1,
      info: [
          {title:'游客',subTitle:'点击补全游客信息',name:'',idCard:''}
      ]

  },


  onLoad: function(options) {

  },

    change2: function (e) {
        console.log(e);
        this.setData({
            value2: e.detail.value
        })

        if(e.detail.type==='reduce'){
            this.removeItem()
        }else {
            this.addItem()
        }

    },

    addItem: function () {
        let info = this.data.info;
        info.push({title:'游客',subTitle:'点击补全游客信息',name:'',idCard:''});
        this.setData({
            info: info
        });
    },

    removeItem: function () {
        let info = this.data.info;
        info.pop();
        this.setData({
            info: info
        });
    },








    clickEdit:function(){
      this.setData({
          popupShow: true,
      })
    },

    hidePopup: function () {
        this.setData({
            popupShow: false
        })
    },




    setPlace: function (e) {
        let index = parseInt(e.currentTarget.id.replace("place-", ""));
        let place = e.detail.value;
        let info = this.data.info;
        info.details[index].placeName = place;
        this.setData({
            info: info
        });
    },

    setNumber: function (e) {
        let index = parseInt(e.currentTarget.id.replace("number-", ""));
        let number = e.detail.value;
        let info = this.data.info;
        info.details[index].number = number;
        this.setData({
            info: info
        });
    },



    clickBm: function(e) {
        console.log(e.detail.value,'9999999');

    },





})