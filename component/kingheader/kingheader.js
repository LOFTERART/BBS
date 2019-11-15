// component/kingheader/kingheader.js
import create from '../../utils/omi/create'
create({
  /**
   * 组件的属性列表
   */
  properties: {


      KingHeader:{
            type: Object,
            value: {}, //不存在此属性时
          }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

      //点击关注按钮
      clickAction:function(e){


          let id = e.currentTarget.dataset.id;
          console.log(id,this.store);


          let isFollow= "KingHeader.isFollow";

          if(this.data.KingHeader.isFollow){
              this.setData({
                  [isFollow]: !this.data.KingHeader.isFollow,

              })
              // this.likeVSNoLikeComment(e.currentTarget.dataset.id,true)
          }else {
              this.setData({
                  [isFollow]: !this.data.KingHeader.isFollow,
              })
              // this.likeVSNoLikeComment(e.currentTarget.dataset.id,false)
          }



      },

  }
})
