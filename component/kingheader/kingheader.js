// component/kingheader/kingheader.js
Component({
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

          let index = e.currentTarget.dataset.index;
          let id = e.currentTarget.dataset.id;

          console.log(1,index,id)
          let isFollow= "articleList["+index+"].isFollow";
          let followDes= "articleList["+index+"].followDes";

          if(this.data.articleList[index].isFollow){
              this.setData({
                  [isFollow]: !this.data.articleList[index].isFollow,
                  [followDes]: '关注',
              })
              // this.likeVSNoLikeComment(e.currentTarget.dataset.id,true)
          }else {
              this.setData({
                  [isFollow]: !this.data.articleList[index].isFollow,
                  [followDes]: '已关注',
              })
              // this.likeVSNoLikeComment(e.currentTarget.dataset.id,false)
          }



      },

  }
})
