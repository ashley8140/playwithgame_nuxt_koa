import Router from 'koa-router'

let router = new Router({
    prefix: '/api/'
})
router.get('index', async (ctx, next) => {
    ctx.body = {
        "code": 200,
        "message": "success",
        "data": {
            "slide": [{
                    "id": 33,
                    "slide_name": "3",
                    "slide_pic": "/imgs/banner.png",
                    "slide_url": "3",
                    "slide_content": "3"
                },
                {
                    "id": 32,
                    "slide_name": "2",
                    "slide_pic": "/imgs/banner.png",
                    "slide_url": "2",
                    "slide_content": "2"
                },
                {
                    "id": 31,
                    "slide_name": "1",
                    "slide_pic": "/imgs/banner.png",
                    "slide_url": "1",
                    "slide_content": "1"
                }
            ],
            "game": [{
                    "key": "wzry",
                    "title": "王者荣耀",
                    "web_logo1": "/imgs/wzry_web_logo1.png",
                    "web_logo2": "/imgs/wzry_web_logo2.png",
                    "web_logo3": "/imgs/wzry_web_logo3.png",
                    "lists": [{
                        "user_id": 1,
                        "nickname": "test1",
                        "lv_level": 4,
                        "sex": 1,
                        "avatar": "https:\/\/pwgyy.gz.bcebos.com\/930dd21576d54cddaf39a21c76390568.jpg",
                        "v_level": 3,
                        "min_price": 30,
                        "voice": "https:\/\/pwgyy.gz.bcebos.com\/0185f342a315be89e07de3edddf97b7e.mp3",
                        "voice_length": 5,
                        "discount_open": 0,
                    }, {
                        "user_id": 2,
                        "nickname": "test2",
                        "lv_level": 0,
                        "sex": 1,
                        "v_level": 3,
                        "min_price": 20,
                        "discount_open": 1,
                        "avatar": "https:\/\/pwgyy.gz.bcebos.com\/155220faad1341d5b759e663cadb65be.jpg",
                        "voice": "https:\/\/pwgyy.gz.bcebos.com\/6ec570d495634a3ba0c6714465023b7f.mp3",
                        "voice_length": 5
                    }, {
                        "user_id": 3,
                        "nickname": "test3",
                        "lv_level": 1,
                        "sex": 2,
                        "v_level": 16,
                        "min_price": 35,
                        "discount_open": 0,
                        "avatar": "https:\/\/pwgyy.gz.bcebos.com\/90f05af1c20a45dbb057afcb4cda0e8d.jpg",
                        "voice": "https:\/\/pwgyy.gz.bcebos.com\/00fa315501ce4a3f8163bcadbea38d5b.mp3",
                        "voice_length": 5
                    }, {
                        "user_id": 4,
                        "nickname": "test4",
                        "lv_level": 1,
                        "sex": 1,
                        "v_level": 1,
                        "min_price": 35,
                        "discount_open": 0,
                        "avatar": "https:\/\/pwgyy.gz.bcebos.com\/55603908cf0b4a767a17a351623757d1.png",
                        "voice": "https:\/\/pwgyy.gz.bcebos.com\/8dd3ed02a3df39392f29f146ace9f2ca.mp3",
                        "voice_length": 6
                    }]
                },
                {
                    "key": "jdqs",
                    "title": "绝地求生",
                    "web_logo1": "/imgs/jdqs_web_logo1.png",
                    "web_logo2": "/imgs/jdqs_web_logo2.png",
                    "web_logo3": "/imgs/jdqs_web_logo3.png",
                    "lists": [{
                        "user_id": 25,
                        "nickname": "zzzlong",
                        "lv_level": 1,
                        "sex": 2,
                        "avatar": "https://pwgyy.gz.bcebos.com/33796ebe04064d94a63a4cdaac10855a.jpg",
                        "min_price": 32,
                        "v_level": 0,
                        "voice": "https://pwgyy.gz.bcebos.com/74a679cceff84937a816b3f442d39789.mp3",
                        "voice_length": 5,
                        "discount_open": 1
                    },{
                        "user_id": 26,
                        "nickname": "zzzlong",
                        "lv_level": 1,
                        "sex": 2,
                        "avatar": "https://pwgyy.gz.bcebos.com/33796ebe04064d94a63a4cdaac10855a.jpg",
                        "min_price": 32,
                        "v_level": 0,
                        "voice": "https://pwgyy.gz.bcebos.com/74a679cceff84937a816b3f442d39789.mp3",
                        "voice_length": 5,
                        "discount_open": 1
                    },{
                        "user_id": 27,
                        "nickname": "zzzlong",
                        "lv_level": 1,
                        "sex": 2,
                        "avatar": "https://pwgyy.gz.bcebos.com/33796ebe04064d94a63a4cdaac10855a.jpg",
                        "min_price": 32,
                        "v_level": 0,
                        "voice": "https://pwgyy.gz.bcebos.com/74a679cceff84937a816b3f442d39789.mp3",
                        "voice_length": 5,
                        "discount_open": 1
                    },{
                        "user_id": 28,
                        "nickname": "zzzlong",
                        "lv_level": 1,
                        "sex": 2,
                        "avatar": "https://pwgyy.gz.bcebos.com/33796ebe04064d94a63a4cdaac10855a.jpg",
                        "min_price": 32,
                        "v_level": 0,
                        "voice": "https://pwgyy.gz.bcebos.com/74a679cceff84937a816b3f442d39789.mp3",
                        "voice_length": 5,
                        "discount_open": 1
                    }]
                },
                {
                    "key": "yxlm",
                    "title": "英雄联盟",
                    "web_logo1": "/imgs/yxlm_web_logo1.png",
                    "web_logo2": "/imgs/yxlm_web_logo2.png",
                    "web_logo3": "/imgs/yxlm_web_logo3.png",
                    "lists": [{
                            "user_id": 29,
                            "nickname": "测试下",
                            "lv_level": 1,
                            "sex": 1,
                            "avatar": "https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg",
                            "min_price": 21,
                            "v_level": 3,
                            "voice": "https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3",
                            "voice_length": 10,
                            "discount_open": 1
                        },
                        {
                            "user_id": 30,
                            "nickname": "呵呵",
                            "lv_level": 1,
                            "sex": 2,
                            "avatar": "https://pwgyy.gz.bcebos.com/6f5192dda7bedacff821818b11163d0a.jpeg",
                            "min_price": 26,
                            "v_level": 0,
                            "voice": "https://pwgyy.gz.bcebos.com/6d6661116bc4114e181c4c7768c795ad.mp3",
                            "voice_length": 5,
                            "discount_open": 1
                        },
                        {
                            "user_id": 31,
                            "nickname": "test31",
                            "lv_level": 1,
                            "sex": 1,
                            "avatar": "https://pwgyy.gz.bcebos.com/5a6d9a6d3c974fa4ae085791fdb160ed.jpg",
                            "min_price": 26,
                            "v_level": 0,
                            "voice": "https://pwgyy.gz.bcebos.com/ccc545b59a9746fab292cad9271c1d73.mp3",
                            "voice_length": 6,
                            "discount_open": 0
                        },
                        {
                            "user_id": 32,
                            "nickname": "test32",
                            "lv_level": 1,
                            "sex": 1,
                            "avatar": "https://pwgyy.gz.bcebos.com/5a6d9a6d3c974fa4ae085791fdb160ed.jpg",
                            "min_price": 26,
                            "v_level": 0,
                            "voice": "https://pwgyy.gz.bcebos.com/ccc545b59a9746fab292cad9271c1d73.mp3",
                            "voice_length": 6,
                            "discount_open": 0
                        }
                    ]
                },
                {
                    "key": "cjzc",
                    "title": "刺激战场",
                    "web_logo1": "/imgs/cjzc_web_logo1.png",
                    "web_logo2": "/imgs/cjzc_web_logo2.png",
                    "web_logo3": "/imgs/cjzc_web_logo3.png",
                    "lists": [{
                        "user_id": 33,
                        "nickname": "测试下",
                        "lv_level": 1,
                        "sex": 1,
                        "avatar": "https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg",
                        "min_price": 21,
                        "v_level": 3,
                        "voice": "https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3",
                        "voice_length": 10,
                        "discount_open": 1
                    },{
                        "user_id": 34,
                        "nickname": "测试下",
                        "lv_level": 1,
                        "sex": 1,
                        "avatar": "https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg",
                        "min_price": 21,
                        "v_level": 3,
                        "voice": "https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3",
                        "voice_length": 10,
                        "discount_open": 1
                    },{
                        "user_id": 35,
                        "nickname": "测试下",
                        "lv_level": 1,
                        "sex": 1,
                        "avatar": "https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg",
                        "min_price": 21,
                        "v_level": 3,
                        "voice": "https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3",
                        "voice_length": 10,
                        "discount_open": 1
                    },{
                        "user_id": 36,
                        "nickname": "测试下",
                        "lv_level": 1,
                        "sex": 1,
                        "avatar": "https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg",
                        "min_price": 21,
                        "v_level": 3,
                        "voice": "https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3",
                        "voice_length": 10,
                        "discount_open": 1
                    }]
                },
                {
                    "key": "hyxd",
                    "title": "荒野行动",
                    "web_logo1": "/imgs/hyxd_web_logo1.png",
                    "web_logo2": "/imgs/hyxd_web_logo2.png",
                    "web_logo3": "/imgs/hyxd_web_logo3.png",
                    "lists": [{
                        "user_id": 37,
                        "nickname": "测试下",
                        "lv_level": 1,
                        "sex": 1,
                        "avatar": "https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg",
                        "min_price": 21,
                        "v_level": 3,
                        "voice": "https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3",
                        "voice_length": 10,
                        "discount_open": 1
                    },{
                        "user_id": 38,
                        "nickname": "测试下",
                        "lv_level": 1,
                        "sex": 1,
                        "avatar": "https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg",
                        "min_price": 21,
                        "v_level": 3,
                        "voice": "https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3",
                        "voice_length": 10,
                        "discount_open": 1
                    },{
                        "user_id": 39,
                        "nickname": "测试下",
                        "lv_level": 1,
                        "sex": 1,
                        "avatar": "https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg",
                        "min_price": 21,
                        "v_level": 3,
                        "voice": "https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3",
                        "voice_length": 10,
                        "discount_open": 1
                    },{
                        "user_id": 40,
                        "nickname": "测试下",
                        "lv_level": 1,
                        "sex": 1,
                        "avatar": "https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg",
                        "min_price": 21,
                        "v_level": 3,
                        "voice": "https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3",
                        "voice_length": 10,
                        "discount_open": 1
                    }]
                },
                {
                    "key": "qjcj",
                    "title": "全军出击",
                    "web_logo1": "/imgs/qjcj_web_logo1.png",
                    "web_logo2": "/imgs/qjcj_web_logo2.png",
                    "web_logo3": "/imgs/qjcj_web_logo3.png",
                    "lists": [{
                        "user_id": 41,
                        "nickname": "测试下",
                        "lv_level": 1,
                        "sex": 1,
                        "avatar": "https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg",
                        "min_price": 21,
                        "v_level": 3,
                        "voice": "https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3",
                        "voice_length": 10,
                        "discount_open": 1
                    },{
                        "user_id": 42,
                        "nickname": "测试下",
                        "lv_level": 1,
                        "sex": 1,
                        "avatar": "https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg",
                        "min_price": 21,
                        "v_level": 3,
                        "voice": "https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3",
                        "voice_length": 10,
                        "discount_open": 1
                    },{
                        "user_id": 43,
                        "nickname": "测试下",
                        "lv_level": 1,
                        "sex": 1,
                        "avatar": "https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg",
                        "min_price": 21,
                        "v_level": 3,
                        "voice": "https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3",
                        "voice_length": 10,
                        "discount_open": 1
                    },{
                        "user_id": 44,
                        "nickname": "测试下",
                        "lv_level": 1,
                        "sex": 1,
                        "avatar": "https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg",
                        "min_price": 21,
                        "v_level": 3,
                        "voice": "https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3",
                        "voice_length": 10,
                        "discount_open": 1
                    }]
                }
            ]
        }

    }
})
export default router
