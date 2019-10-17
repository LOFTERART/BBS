var Wxparse = require('../../../component/wxParse/wxParse');
import Rater from '../../../component/rater/rater';
const util = require('../../../utils/util.js')
var app = getApp();

var newspecs = [];
import {
    config, getUrl, weapp,
    cookieStorage,
    connect,
    bindActionCreators,
    store,
    actions,
    sandBox
} from '../../../lib/myapp.js'
import Animation from '../../../utils/animation.js'

Page({
    data: {
        //评论默认头像
        ava:'http://www.mingyue.musemore.art/storage/logo.jpg',
        oneComment:[]
    },



    onLoad(options){
       this.getComList(options.id)
    },


    //
    getComList(id) {
        var token = cookieStorage.get('user_token');

        sandBox.get({
            api: 'api/store/detail/comments/'+id,
            data: {},
            header: {
                Authorization: token
            },

        }).then(res =>{
            this.setData({
                oneComment:res.data.data.comments
            })
        })
    },

    //预览评论图片

    preImge:function(e){
        wx.previewImage({
            current: e.currentTarget.dataset.url, // 当前显示图片的http链接
            urls: e.currentTarget.dataset.list // 需要预览的图片http链接列表
        })
    },


})

