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
                    "slide_pic": "http://img.pwg.com/image/5c145e5ac3388cd2/ff4762fcf250b234.png",
                    "slide_url": "3",
                    "slide_content": "3"
                },
                {
                    "id": 32,
                    "slide_name": "2",
                    "slide_pic": "http://img.pwg.com/image/07208cb630c82984/74e495b547833fbc.png",
                    "slide_url": "2",
                    "slide_content": "2"
                },
                {
                    "id": 31,
                    "slide_name": "1",
                    "slide_pic": "http://img.pwg.com/image/7cf09a24015f1781/676b58f6491bcfc9.png",
                    "slide_url": "1",
                    "slide_content": "1"
                }
            ],
            "game": [{
                    "key": "wzry",
                    "title": "王者荣耀",
                    "web_logo1": "http://img.pwg.com/games/wzry_web_logo1.png",
                    "web_logo2": "http://img.pwg.com/games/wzry_web_logo2.png",
                    "web_logo3": "http://img.pwg.com/games/wzry_web_logo3.png",
                    "lists": [{
                            "user_id": 27,
                            "nickname": "zz",
                            "lv_level": 3,
                            "sex": 1,
                            "avatar": "https://pwgyy.gz.bcebos.com/930dd21576d54cddaf39a21c76390568.jpg",
                            "min_price": 30,
                            "v_level": 4,
                            "voice": "https://pwgyy.gz.bcebos.com/0185f342a315be89e07de3edddf97b7e.mp3",
                            "voice_length": 5,
                            "discount_open": 0
                        },
                        {
                            "user_id": 19,
                            "nickname": "测试下",
                            "lv_level": 1,
                            "sex": 1,
                            "avatar": "https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg",
                            "min_price": 20,
                            "v_level": 3,
                            "voice": "https://pwgyy.gz.bcebos.com/6ec570d495634a3ba0c6714465023b7f.mp3",
                            "voice_length": 5,
                            "discount_open": 1
                        },
                        {
                            "user_id": 22,
                            "nickname": "2",
                            "lv_level": 1,
                            "sex": 1,
                            "avatar": "https://pwgyy.gz.bcebos.com/cf256a039860bae5a96da7a5b4468a44.jpeg",
                            "min_price": 14,
                            "v_level": 0,
                            "voice": "https://pwgyy.gz.bcebos.com/b9f050c350881ddb6731fdbaf8253f3b.mp3",
                            "voice_length": 4,
                            "discount_open": 0
                        },
                        {
                            "user_id": 20,
                            "nickname": "blood",
                            "lv_level": 1,
                            "sex": 2,
                            "avatar": "https://pwgyy.gz.bcebos.com/dc3feeb19cf24ab7bfc03edbf5c74863.jpg",
                            "min_price": 14,
                            "v_level": 0,
                            "voice": "https://pwgyy.gz.bcebos.com/89f0e31992cd4e4599c4bc4979ec07f8.mp3",
                            "voice_length": 6,
                            "discount_open": 0
                        },
                        {
                            "user_id": 16,
                            "nickname": "Nicole",
                            "lv_level": 1,
                            "sex": 2,
                            "avatar": "https://pwgyy.gz.bcebos.com/90f05af1c20a45dbb057afcb4cda0e8d.jpg",
                            "min_price": 35,
                            "v_level": 0,
                            "voice": "https://pwgyy.gz.bcebos.com/00fa315501ce4a3f8163bcadbea38d5b.mp3",
                            "voice_length": 5,
                            "discount_open": 0
                        }
                    ]
                },
                {
                    "key": "jdqs",
                    "title": "绝地求生",
                    "web_logo1": "http://img.pwg.com/games/jdqs_web_logo1.png",
                    "web_logo2": "http://img.pwg.com/games/jdqs_web_logo2.png",
                    "web_logo3": "http://img.pwg.com/games/jdqs_web_logo3.png",
                    "lists": [{
                        "user_id": 10,
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
                    "web_logo1": "http://img.pwg.com/games/yxlm_web_logo1.png",
                    "web_logo2": "http://img.pwg.com/games/yxlm_web_logo2.png",
                    "web_logo3": "http://img.pwg.com/games/yxlm_web_logo3.png",
                    "lists": [{
                            "user_id": 19,
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
                            "user_id": 12,
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
                            "user_id": 28,
                            "nickname": "黄运同学",
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
                    "web_logo1": "http://img.pwg.com/games/cjzc_web_logo1.png",
                    "web_logo2": "http://img.pwg.com/games/cjzc_web_logo2.png",
                    "web_logo3": "http://img.pwg.com/games/cjzc_web_logo3.png",
                    "lists": []
                },
                {
                    "key": "hyxd",
                    "title": "荒野行动",
                    "web_logo1": "http://img.pwg.com/games/hyxd_web_logo1.png",
                    "web_logo2": "http://img.pwg.com/games/hyxd_web_logo2.png",
                    "web_logo3": "http://img.pwg.com/games/hyxd_web_logo3.png",
                    "lists": []
                },
                {
                    "key": "qjcj",
                    "title": "全军出击",
                    "web_logo1": "http://img.pwg.com/games/qjcj_web_logo1.png",
                    "web_logo2": "http://img.pwg.com/games/qjcj_web_logo2.png",
                    "web_logo3": "http://img.pwg.com/games/qjcj_web_logo3.png",
                    "lists": []
                }
            ]
        }

    }
})
export default router
