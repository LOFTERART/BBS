
Page({

    /**
     * 页面的初始数据
     */
    data: {
        VipList: [
            {id:1,name:'金星会员',discount:'9',image:"https://dcdn.it120.cc/2019/10/14/4cb61a3f-5350-4f98-8955-74ee6242b62a.png",is_clear:true},
            {id:1,name:'木星会员',discount:'8',image:"https://dcdn.it120.cc/2019/10/14/4cb61a3f-5350-4f98-8955-74ee6242b62a.png",is_clear:true},
            {id:1,name:'水星会员',discount:'7',image:"https://dcdn.it120.cc/2019/10/14/4cb61a3f-5350-4f98-8955-74ee6242b62a.png",is_clear:true},
            {id:1,name:'火星会员',discount:'6',image:"https://dcdn.it120.cc/2019/10/14/4cb61a3f-5350-4f98-8955-74ee6242b62a.png",is_clear:true},
            {id:1,name:'土星会员',discount:'5',image:"https://dcdn.it120.cc/2019/10/14/4cb61a3f-5350-4f98-8955-74ee6242b62a.png",is_clear:true},
        ],

        task:[
            {id:1,name:'满足积分2000分',task_type_title:'还需要1900积分',illustrate:false,finish:false,speed:'10',number:2000,new_number:100},
            {id:1,name:'消费金额3999元',task_type_title:'还需要3900元',illustrate:false,finish:false,speed:'0',number:3900,new_number:0},
            {id:1,name:'累计签到100天',task_type_title:'还需要80元',illustrate:false,finish:false,speed:'20',number:3900,new_number:20},
        ],//任务列表
        illustrate:'',//任务说明
        indicatorDots: false,
        circular: true,
        autoplay: false,
        interval: 3000,
        duration: 500,
        swiperIndex: 0,
        growthValue: true,

        level_id:0,//任务id,
        host_product:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    },

    /**
     * 会员切换
     *
     */
    bindchange(e) {
        var index = e.detail.current
        console.log(index);
        this.setData({swiperIndex: index,level_id: this.data.VipList[index].id || 0});


    //    更新升级要求


        if(index===1){
            this.setData({
                task:[
                    {id:1,name:'满足积分2000分',task_type_title:'还需要1900积分',illustrate:false,finish:false,speed:'10',number:2000,new_number:100},
                    {id:1,name:'消费金额4999元',task_type_title:'还需要3900元',illustrate:false,finish:false,speed:'0',number:3900,new_number:0},
                    {id:1,name:'累计签到200天',task_type_title:'还需要80元',illustrate:false,finish:false,speed:'20',number:3900,new_number:20},
                ],
            })
        }


    },










})