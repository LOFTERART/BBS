// const form = require("/component/utils/formValidation.js")

import form  from '../../../component/utils/formValidation.js'

import  UTIL from '../../../utils/util'


Page({
  data: {

      getName:'',
      getIDCard:'',

      popupShow: false,

      //数量 人数
      value2: 1,
      info: [
          {name:'',iDCard:''}
      ]

  },


  onLoad: function(options) {

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
            UTIL.toast("不支持手动输入数量")
            let value = this.data.value2
            console.log(value,'7777777');

            return
        }

    },

    addItem: function () {
        let info = this.data.info;
        info.push({name:'',iDCard:''});
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

    getPhone:function(e){
        this.setData({
            phone:e.detail.value
        })
    },


    //编辑游客信息
    clickEdit:function(e){
        console.log(e.currentTarget.dataset.index,'ddddddddd');
        this.setData({
            popupShow: true,
            editIndex:e.currentTarget.dataset.index,
            getName :'',
            getIDCard:''
        })
    },

    //编辑完成
    clickOk: function(e) {
        console.log(this.data.getName,this.data.getIDCard,'9999999');
        this.data.info[this.data.editIndex].name=this.data.getName
        this.data.info[this.data.editIndex].iDCard=this.data.getIDCard

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
        this.setData({
            info: info
        })

    },

    //点击报名
    clickBM:function () {
        console.log(this.data.info,'this.data.info');
        UTIL.toast("模拟提交")

    }





})