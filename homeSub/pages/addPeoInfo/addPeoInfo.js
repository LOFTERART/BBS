// const form = require("/component/utils/formValidation.js")

import form  from '../../../component/utils/formValidation.js'




Page({
  data: {

      name:'',
      iDCard:'',

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
        info.push({title:'游客',subTitle:'点击补全游客信息',name:'',iDCard:''});
        this.setData({
            info: info
        });
    },

    removeItem: function () {
        console.log(this.data.info,'000000');
        let info = this.data.info;
        info.pop();
        info = this.data.info
        this.setData({
            info: info
        });
    },








    clickEdit:function(e){
        console.log(e.currentTarget.dataset.index,'ddddddddd');
        this.setData({
          popupShow: true,
          editIndex:e.currentTarget.dataset.index,
            name:'',
            iDCard:''
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


    //获取输入姓名
    getName:function(e){

        this.setData({
            name:e.detail.value
        })

    },
    //获取输入id
    getIdCard:function(e){
        this.setData({
            iDCard:e.detail.value
        })

    },


    //编辑完成
    clickOk: function(e) {
        console.log(this.data.name,this.data.iDCard,'9999999');
        this.data.info[this.data.editIndex].name=this.data.name
        this.data.info[this.data.editIndex].iDCard=this.data.iDCard

        this.setData({
            info:this.data.info,
            popupShow: false,
        })

    },

    //点击报名
    clickBM:function () {
        console.log(this.data.info,'this.data.info');

    }





})