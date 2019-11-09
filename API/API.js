
// const API_BASE_URL = 'https://www.calligraphy.musemore.art';

const request = (url, method, data,isShowLoading) => {
   return new Promise((resolve, reject) => {
       if(isShowLoading){
           wx.showLoading({
               "mask": true,
               "title":''
           })
       }
        wx.request({
            url:  url,
            method: method,
            data: data,
            header: {
                'Content-Type': 'application/json',
                'userId':wx.getStorageSync('userId')
            },
            success(request) {
                // 停止下拉动作
                wx.hideLoading();
                wx.stopPullDownRefresh();
              console.log('---------start----------');
              console.log('请求的header: ', wx.getStorageSync('userId'));
              console.log('请求的url: ', url);
              console.log('请求类型: ',method);
              console.log('请求参数: ',data);
              console.log('返回数据: ',request.data);
              console.log('---------end----------');
                resolve(request.data)
            },
            fail(error) {
                wx.hideLoading();
                wx.stopPullDownRefresh();
              reject(error)

            },
            complete(aaa) {
                wx.hideLoading();
                wx.stopPullDownRefresh();
                // 加载完成
            }
        })
    })
}

/**
 * 小程序的promise没有finally方法，自己扩展下
 */
Promise.prototype.finally = function (callback) {
    var Promise = this.constructor;
    return this.then(
        function (value) {
            Promise.resolve(callback()).then(
                function () {
                    return value;
                }
            );
        },
        function (reason) {
            Promise.resolve(callback()).then(
                function () {
                    throw reason;
                }
            );
        }
    );
}

module.exports = {
    request,



   //趣知游 登录
    QZYLogin:(data)=>{
        return request('https://192.168.1.2:9001/wechat/login/getUserId', 'GET',data,true)
    },
    //趣知游 活动首页
    ActivityHome:(data)=>{
        return request('https://192.168.1.2:9001/wechat/activity/selectActivityList', 'GET',data,true)
    },


    //趣知游 活动详情
    ActivityDetail:(data)=>{
        return request('https://192.168.1.2:9001/wechat/activity/selectActivicyInfoById', 'GET',data,true)
    },

    //趣知游 活动收藏
    ActivityCollection:(data)=>{
        return request('https://192.168.1.2:9001/wechat/conllection/insertCollection', 'POST',data,true)
    },

    //趣知游 取消活动收藏
    ActivityDelCollection:(data)=>{
        return request('https://192.168.1.2:9001/wechat/conllection/delectCollecion', 'GET',data,true)
    },

    //趣知游 活动评论
    ActivityComments:(data)=>{
        return request('https://192.168.1.2:9001/wechat/evaluate/selectEvaluateListByActivityId', 'GET',data,true)
    },











    //登录
    ArtLogin:(data)=>{
        // return request('https://api.teacher.meishuquanyunxiao.com/v2/admin/login-test', 'GET',data)
        return request('https://api.pbook.musemore.art/v1/user/login', 'GET',data)
    },

    //发表状态
    ArtAddZT:(data)=>{
        return request('https://api.meishuquanyunxiao.com/v1/news/add-daily', 'POST',data)
    },

    //评论状态
    ArtZTPL:(data)=>{
        return request('https://api.meishuquanyunxiao.com/v1/news/add-daily-comment', 'POST',data)
    },

    //解析视频

    ArtVideoJieXI:(data)=>{
        return request('https://p.bokecc.com/servlet/getvideofile', 'GET',data)
    },


    //视频列表
    ArtVideoList:(data)=>{
        return request('https://api.teacher.meishuquanyunxiao.com/v2/video/getmeis-list', 'GET',data)
    },
    //视频详情
    ArtVideoListDetail:(data)=>{
        return request('https://api.teacher.meishuquanyunxiao.com/v2/video/info', 'GET',data)
    },



    //验证码
    ArtSendCode:(data)=>{
        return request('https://api.teacher.meishuquanyunxiao.com/v2/admin/send-phone-verify-code', 'GET',data)
    },

    //获取用户信息
    ArtGetUserInfo:(data)=>{
        return request('https://api.teacher.meishuquanyunxiao.com/v2/share/get-info', 'POST',data)
    },

    //状态置顶
    ArtztTop:(data)=>{
        return request('https://api.meishuquanyunxiao.com/v1/news/set-daily-top', 'POST',data)
    },
    //老师删除任意状态
    ArtztDel:(data)=>{
        return request('https://api.meishuquanyunxiao.com/v1/news/del-daily', 'POST',data)
    },

    //老师删除任意状态的用户
    ArtztDelUser:(data)=>{
        return request('https://api.meishuquanyunxiao.com/v1/news/del-user', 'POST',data)
    },

    //获取详情状态评论
    ArtztDetail:(data)=>{
        return request('https://api.meishuquanyunxiao.com/v1/news/get-daily-comment', 'POST',data)
    },

    //获取用户全部评论
    ArtAllComment:(data)=>{
        return request('https://api.meishuquanyunxiao.com/v1/news/get-comment', 'POST',data)
    },


    //首页list

    ArtMingYueHomeList: (data) => {
        return request('https://www.mingyue.musemore.art/api/index/getArticles', 'GET',data)
    },

    //首页newsbanner

    ArtMingYueBanner: (data) => {
        return request('https://www.mingyue.musemore.art/api/index/getCarousels', 'GET',data)
    },

    //首页KING

    ArtMingYueKing: (data) => {
        return request('https://www.mingyue.musemore.art/api/index/getCategories', 'GET',data)
    },

    //首页banner

    ArtHomeBanner: (data) => {
        return request('https://api.meishuquanyunxiao.com/v1/news/get-banner/', 'POST',data)
    },

    //首页状态

    ArtHomeZT: (data) => {
        return request('https://api.meishuquanyunxiao.com/v1/news/get-daily', 'POST',data)
    },

    //king

    ArtHomeKing: (data) => {
        return request('https://api.meishuquanyunxiao.com/v1/news/get-name', 'POST',data)
    },


    //新闻资讯列表

    ArtNewsHome: (data) => {
        return request('https://api.meishuquanyunxiao.com/v1/news/get-list', 'POST',data)
    },


    //    电子书 banner
    EbookBanner:()=>{
        return request('https://api.teacher.meishuquanyunxiao.com/v2/ebook/get-ebook-banners','GET',)
    },

    //    电子书 分类
    EbookCat:(data)=>{
        return request('https://api.teacher.meishuquanyunxiao.com/v2/ebook/get-main-ebook-list','GET',data)
    },

    //    电子书 详情
    EbookDetail:(data)=>{
        return request('https://api.teacher.meishuquanyunxiao.com/v2/ebook/get-ebook-info','GET',data)
    },

    //    电子书
    EbookMore:(data)=>{
        return request('https://api.teacher.meishuquanyunxiao.com/v2/ebook/get-ebooks','GET',data)
    },



    //状态点赞
    ZtLike:(data)=>{
        return request('https://api.meishuquanyunxiao.com/v1/news/add-like','POST',data)
    },






    HomeKing:()=>{
        return request('https://www.calligraphy.musemore.art/api/index/getNavs','GET')
    },
    HomeBanner:()=>{
        return request('https://www.calligraphy.musemore.art/api/index/getBanners','GET')
    },

    HomeYearCourse:()=>{
        return request('https://www.calligraphy.musemore.art/api/index/getCategories','GET')
    },
    //课程信息
    CourseDetail:(data)=>{
        return request('https://www.calligraphy.musemore.art/api/course/view','POST',data)
    },
    //论坛首页

    BBSHome:(data)=>{
        return request('https://api.meishuquanyunxiao.com/v1/news/get-daily','POST',data)
    },


    //获取视频打卡列表
    VideoDaKaHome:(data)=>{
        return request('https://api.pbook.musemore.art/v1/players','GET',data)
    },

    //客服
    getKeFu:()=>{
        return request('https://api.pbook.musemore.art/v1/service/main-list','GET',)
    },




    //字帖详情

    ZiTieDetail:(data)=>{
        return request('https://www.calligraphy.musemore.art/api/category/info','POST',data)
    },
    //字帖目录
    ZiTieDetailList:(data)=>{
        return request('https://www.calligraphy.musemore.art/api/category/list','POST',data)
    },


    ARTLogin: (data) => {
        return request('https://api.teacher.meishuquanyunxiao.com/v2/vip/get-open-id', 'GET',data)
    },




    Login: (code) => {
        return request('https://api.it120.cc/lofter/user/wxapp/login', 'POST',{
            code:code,
            type:'2'
        })
    },

    checkToken: (token) => {
        return request('https://api.it120.cc/lofter/user/check-token', 'get', {
            token
        })
    },
    //获取文章分类
    CmsCateGory: () => {
        return request('/cms/category/list', 'GET')
    },
    //根据cms分类id 获取文章列表
    CmsArticleList: (data) => {
        return request('https://api.it120.cc/lofter/cms/news/list', 'POST',data)
    },

    //根据cms分类id 获取文章详情
    CmsArticleDetail: (data) => {
        return request('https://api.it120.cc/lofter/cms/news/detail', 'GET',data)
    },

    //获取单页详情
    CmsArticleDanYeDetail: (data) => {
        return request('https://api.it120.cc/lofter/cms/page/info', 'GET',data)
    },

    //获取商品分类
    ShopCateGory: () => {
        return request('/shop/goods/category/all', 'GET')
    },
    //获取商品列表
    ShopList: (data) => {
        return request('/shop/goods/list', 'POST',data)
    },
    //获取商品详情
    ShopDetail: (data) => {
        return request('https://api.it120.cc/lofter/shop/goods/detail', 'POST',data)
    },

    //banner 首页
    Banner: (data) => {
        return request('/banner/list', 'GET',data)
    },

    //微信登录
    register: (data) => {
        return request('/user/wxapp/register/complex', 'POST',data)
    },

    //商品预约
    GoodsYuYue: (data) => {
        return request('/order/create', 'POST',data)
    },

    //我的预约
    MyYuYue: (data) => {
        return request('/order/list', 'POST',data)
    },

    //我的good收藏
    MyFav: (data) => {
        return request('/shop/goods/fav/add', 'POST',data)
    },

    //我的good收藏列表
    MyFavList: (data) => {
        return request('/shop/goods/fav/list', 'POST',data)
    },

    //b获取公告
    NoticeList: () => {
        return request('http/notice/list', 'GET')
    },

    //b获取公告详情
    NoticeDetail: (data) => {
        return request('https://api.it120.cc/lofter/notice/detail', 'GET',data)
    },


    //b获取公告详情
    GetJson: (data) => {
        return request('/json/list', 'POST',data)
    },

    //b获取校区列表
    GetSchoolList: () => {
        return request('/shop/subshop/list', 'POST')
    },

    //提交报名信息
    UserYuyue: (data) => {
        return request('/comment/add', 'POST',data)
    },

    //手机号绑定
    bindWechatPhone: (data) => {
        return request('/user/wxapp/bindMobile', 'POST',data)
    },

    //优惠券列表
    getFreeCardList: (data) => {
        return request('/discounts/coupons', 'GET',data)
    },

    //领取优惠券
    getFreeCard: (data) => {
        return request('/discounts/fetch', 'POST',data)
    },

    //我的已经领取优惠券
    getMyFreeCard: (data) => {
        return request('/discounts/my', 'GET',data)
    },

}