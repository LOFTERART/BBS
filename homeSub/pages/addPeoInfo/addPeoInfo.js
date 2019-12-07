// const form = require("/component/utils/formValidation.js")

import form  from '../../../component/utils/formValidation.js'

import  UTIL from '../../../utils/util'
const WXAPI = require('../../../API/API')

Page({
  data: {

      getName:'',
      getIDCard:'',
      sex:'1',

      popupShow: false,

      //数量 人数
      value2: 1,
      info: [
        { contactsName: '', contactsIdCard: '', contactsSex:'1'}
      ]

  },


  onLoad: function(options) {
    
    console.log(options,"oppppp")

    this.getPeople(options.id);
    this.setData({
      name:options.name,
      date: options.date
    })

  },

// 获取已经报名人信息
  getPeople:function(id){
    
    WXAPI.ActivityaddpPeopleList({
      activityId: id
    }).then(res => {
      if (res.code === 200) {
        console.log(res, 'user');
      } else {
        UTIL.toast(res.message)
      }
    })

  },





    change2: function (e) {
        console.log(e.detail);


        if(e.detail.type==='reduce'){
            this.setData({
                value2: e.detail.value
            })
            this.removeItem()
        }else if(e.detail.type==='plus'){
            this.setData({
                value2: e.detail.value
            })
            this.addItem()
        }else if(e.detail.type==='blur'){
            UTIL.toast("暂不支持手动输入数量")
            return
        }

    },

    addItem: function () {
        let info = this.data.info;
      info.push({ contactsName: '', contactsIdCard: '', contactsSex:'1'});
        this.setData({
            info: info
        });
    },

    removeItem: function () {
        console.log(this.data.info,'000000');
        let info = this.data.info;
        info.pop();
        this.setData({
            info: info
        });
    },


    hidePopup: function () {
        this.setData({
            popupShow: false
        })
    },






    //获取输入姓名
    getName:function(e){
        console.log(e.detail);
        this.setData({
            getName:e.detail.value
        })

    },
    //获取输入id
    getIdCard:function(e){
        this.setData({
            getIDCard:e.detail.value
        })

    },
    //获取手机号
    getPhone:function(e){
        this.setData({
            phone:e.detail.value
        })
    },

    radioChange: function (e) {
        this.setData({
          sex:e.detail.value
        })
    },


    //编辑游客信息
    clickEdit:function(e){
        console.log(e.currentTarget.dataset.index,'ddddddddd');
        this.setData({
            popupShow: true,
            editIndex:e.currentTarget.dataset.index,
            getName :'',
            getIDCard:'',
            sex:'1'
        })
    },

    //编辑完成
    clickOk: function(e) {
      this.data.info[this.data.editIndex].contactsName=this.data.getName
      this.data.info[this.data.editIndex].contactsIdCard=this.data.getIDCard
      this.data.info[this.data.editIndex].contactsSex=this.data.sex
        this.setData({
            info:this.data.info,
            popupShow: false,
        })

    },

    //删除游客信息
    clickDel:function(e){

        let idx = e.currentTarget.dataset.index;
        console.log(e.target.dataset.idx);
        this.data.info.splice(idx, 1);
        var info = this.data.info;
        var value2 =info.length
        console.log(info.length,'8888');
        this.setData({
            info: info,
            value2:value2
        })

    },

    //点击报名
    clickBM:function () {
      console.log(this.data.info, 'this.data.info', this.data.phone);
        UTIL.toast("模拟提交")

      WXAPI.ActivityaddpInfo({
        activityId:  9,
        contactsList: this.data.info,
        phone: this.data.phone
      }).then(res => {
        if (res.code === 200) {
          console.log(res, 'res');

        } else {
          UTIL.toast(res.message)
        }
      })


    }






})