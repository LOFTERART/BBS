import data from "../data/data";

export default {
    data: {
        aiCatList:[
            {id:1,name:'活动精选',image:'https://dcdn.it120.cc/2019/10/26/e6a977e7-cecb-45b2-9c8f-7b7512e7a9ea.png',type:'JX'},
            {id:2,name:'热门活动',image:'https://dcdn.it120.cc/2019/10/26/2b4ab83c-5d78-486e-a25e-ff693f00da4d.png',type:'RM'},
            {id:3,name:'最新话题',image:'https://dcdn.it120.cc/2019/10/26/b2012b31-25e4-47b8-8f72-1554ac0dc797.png',type:'JX'},
        ],
        articleList:data.aiDyList,
        userInfo: {
            name:'',
            admin_id:4027,
            user_role:'teacher',
            studio_id:183,
            code_number:'zhao0183',
        }
    },
    debug: true,
    updateAll: true
}


