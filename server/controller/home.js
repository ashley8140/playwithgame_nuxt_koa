export const homeData = async (ctx, next) => {
    ctx.body = {
        code: 200,
        message: 'success',
        data: {
            slide: [
                {
                    id: 33,
                    slide_name: '3',
                    slide_pic: '/imgs/banner.png',
                    slide_url: '3',
                    slide_content: '3'
                },
                {
                    id: 32,
                    slide_name: '2',
                    slide_pic: '/imgs/banner.png',
                    slide_url: '2',
                    slide_content: '2'
                },
                {
                    id: 31,
                    slide_name: '1',
                    slide_pic: '/imgs/banner.png',
                    slide_url: '1',
                    slide_content: '1'
                }
            ],
            game: [
                {
                    key: 'wzry',
                    title: '王者荣耀',
                    web_logo1: '/imgs/wzry_web_logo1.png',
                    web_logo2: '/imgs/wzry_web_logo2.png',
                    web_logo3: '/imgs/wzry_web_logo3.png',
                    lists: [
                        {
                            user_id: 1,
                            nickname: 'test1',
                            lv_level: 4,
                            sex: 1,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/930dd21576d54cddaf39a21c76390568.jpg',
                            v_level: 3,
                            min_price: 30,
                            voice:
                                'https://pwgyy.gz.bcebos.com/0185f342a315be89e07de3edddf97b7e.mp3',
                            voice_length: 5,
                            discount_open: 0
                        },
                        {
                            user_id: 2,
                            nickname: 'test2',
                            lv_level: 0,
                            sex: 1,
                            v_level: 3,
                            min_price: 20,
                            discount_open: 1,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg',
                            voice:
                                'https://pwgyy.gz.bcebos.com/6ec570d495634a3ba0c6714465023b7f.mp3',
                            voice_length: 5
                        },
                        {
                            user_id: 3,
                            nickname: 'test3',
                            lv_level: 1,
                            sex: 2,
                            v_level: 16,
                            min_price: 35,
                            discount_open: 0,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/90f05af1c20a45dbb057afcb4cda0e8d.jpg',
                            voice:
                                'https://pwgyy.gz.bcebos.com/00fa315501ce4a3f8163bcadbea38d5b.mp3',
                            voice_length: 5
                        },
                        {
                            user_id: 4,
                            nickname: 'test4',
                            lv_level: 1,
                            sex: 1,
                            v_level: 1,
                            min_price: 35,
                            discount_open: 0,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/55603908cf0b4a767a17a351623757d1.png',
                            voice:
                                'https://pwgyy.gz.bcebos.com/8dd3ed02a3df39392f29f146ace9f2ca.mp3',
                            voice_length: 6
                        }
                    ]
                },
                {
                    key: 'jdqs',
                    title: '绝地求生',
                    web_logo1: '/imgs/jdqs_web_logo1.png',
                    web_logo2: '/imgs/jdqs_web_logo2.png',
                    web_logo3: '/imgs/jdqs_web_logo3.png',
                    lists: [
                        {
                            user_id: 25,
                            nickname: 'zzzlong',
                            lv_level: 1,
                            sex: 2,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/33796ebe04064d94a63a4cdaac10855a.jpg',
                            min_price: 32,
                            v_level: 0,
                            voice:
                                'https://pwgyy.gz.bcebos.com/74a679cceff84937a816b3f442d39789.mp3',
                            voice_length: 5,
                            discount_open: 1
                        },
                        {
                            user_id: 26,
                            nickname: 'zzzlong',
                            lv_level: 1,
                            sex: 2,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/33796ebe04064d94a63a4cdaac10855a.jpg',
                            min_price: 32,
                            v_level: 0,
                            voice:
                                'https://pwgyy.gz.bcebos.com/74a679cceff84937a816b3f442d39789.mp3',
                            voice_length: 5,
                            discount_open: 1
                        },
                        {
                            user_id: 27,
                            nickname: 'zzzlong',
                            lv_level: 1,
                            sex: 2,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/33796ebe04064d94a63a4cdaac10855a.jpg',
                            min_price: 32,
                            v_level: 0,
                            voice:
                                'https://pwgyy.gz.bcebos.com/74a679cceff84937a816b3f442d39789.mp3',
                            voice_length: 5,
                            discount_open: 1
                        },
                        {
                            user_id: 28,
                            nickname: 'zzzlong',
                            lv_level: 1,
                            sex: 2,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/33796ebe04064d94a63a4cdaac10855a.jpg',
                            min_price: 32,
                            v_level: 0,
                            voice:
                                'https://pwgyy.gz.bcebos.com/74a679cceff84937a816b3f442d39789.mp3',
                            voice_length: 5,
                            discount_open: 1
                        }
                    ]
                },
                {
                    key: 'yxlm',
                    title: '英雄联盟',
                    web_logo1: '/imgs/yxlm_web_logo1.png',
                    web_logo2: '/imgs/yxlm_web_logo2.png',
                    web_logo3: '/imgs/yxlm_web_logo3.png',
                    lists: [
                        {
                            user_id: 29,
                            nickname: '测试下',
                            lv_level: 1,
                            sex: 1,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg',
                            min_price: 21,
                            v_level: 3,
                            voice:
                                'https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3',
                            voice_length: 10,
                            discount_open: 1
                        },
                        {
                            user_id: 30,
                            nickname: '呵呵',
                            lv_level: 1,
                            sex: 2,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/6f5192dda7bedacff821818b11163d0a.jpeg',
                            min_price: 26,
                            v_level: 0,
                            voice:
                                'https://pwgyy.gz.bcebos.com/6d6661116bc4114e181c4c7768c795ad.mp3',
                            voice_length: 5,
                            discount_open: 1
                        },
                        {
                            user_id: 31,
                            nickname: 'test31',
                            lv_level: 1,
                            sex: 1,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/5a6d9a6d3c974fa4ae085791fdb160ed.jpg',
                            min_price: 26,
                            v_level: 0,
                            voice:
                                'https://pwgyy.gz.bcebos.com/ccc545b59a9746fab292cad9271c1d73.mp3',
                            voice_length: 6,
                            discount_open: 0
                        },
                        {
                            user_id: 32,
                            nickname: 'test32',
                            lv_level: 1,
                            sex: 1,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/5a6d9a6d3c974fa4ae085791fdb160ed.jpg',
                            min_price: 26,
                            v_level: 0,
                            voice:
                                'https://pwgyy.gz.bcebos.com/ccc545b59a9746fab292cad9271c1d73.mp3',
                            voice_length: 6,
                            discount_open: 0
                        }
                    ]
                },
                {
                    key: 'cjzc',
                    title: '刺激战场',
                    web_logo1: '/imgs/cjzc_web_logo1.png',
                    web_logo2: '/imgs/cjzc_web_logo2.png',
                    web_logo3: '/imgs/cjzc_web_logo3.png',
                    lists: [
                        {
                            user_id: 33,
                            nickname: '测试下',
                            lv_level: 1,
                            sex: 1,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg',
                            min_price: 21,
                            v_level: 3,
                            voice:
                                'https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3',
                            voice_length: 10,
                            discount_open: 1
                        },
                        {
                            user_id: 34,
                            nickname: '测试下',
                            lv_level: 1,
                            sex: 1,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg',
                            min_price: 21,
                            v_level: 3,
                            voice:
                                'https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3',
                            voice_length: 10,
                            discount_open: 1
                        },
                        {
                            user_id: 35,
                            nickname: '测试下',
                            lv_level: 1,
                            sex: 1,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg',
                            min_price: 21,
                            v_level: 3,
                            voice:
                                'https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3',
                            voice_length: 10,
                            discount_open: 1
                        },
                        {
                            user_id: 36,
                            nickname: '测试下',
                            lv_level: 1,
                            sex: 1,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg',
                            min_price: 21,
                            v_level: 3,
                            voice:
                                'https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3',
                            voice_length: 10,
                            discount_open: 1
                        }
                    ]
                },
                {
                    key: 'hyxd',
                    title: '荒野行动',
                    web_logo1: '/imgs/hyxd_web_logo1.png',
                    web_logo2: '/imgs/hyxd_web_logo2.png',
                    web_logo3: '/imgs/hyxd_web_logo3.png',
                    lists: [
                        {
                            user_id: 37,
                            nickname: '测试下',
                            lv_level: 1,
                            sex: 1,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg',
                            min_price: 21,
                            v_level: 3,
                            voice:
                                'https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3',
                            voice_length: 10,
                            discount_open: 1
                        },
                        {
                            user_id: 38,
                            nickname: '测试下',
                            lv_level: 1,
                            sex: 1,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg',
                            min_price: 21,
                            v_level: 3,
                            voice:
                                'https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3',
                            voice_length: 10,
                            discount_open: 1
                        },
                        {
                            user_id: 39,
                            nickname: '测试下',
                            lv_level: 1,
                            sex: 1,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg',
                            min_price: 21,
                            v_level: 3,
                            voice:
                                'https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3',
                            voice_length: 10,
                            discount_open: 1
                        },
                        {
                            user_id: 40,
                            nickname: '测试下',
                            lv_level: 1,
                            sex: 1,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg',
                            min_price: 21,
                            v_level: 3,
                            voice:
                                'https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3',
                            voice_length: 10,
                            discount_open: 1
                        }
                    ]
                },
                {
                    key: 'qjcj',
                    title: '全军出击',
                    web_logo1: '/imgs/qjcj_web_logo1.png',
                    web_logo2: '/imgs/qjcj_web_logo2.png',
                    web_logo3: '/imgs/qjcj_web_logo3.png',
                    lists: [
                        {
                            user_id: 41,
                            nickname: '测试下',
                            lv_level: 1,
                            sex: 1,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg',
                            min_price: 21,
                            v_level: 3,
                            voice:
                                'https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3',
                            voice_length: 10,
                            discount_open: 1
                        },
                        {
                            user_id: 42,
                            nickname: '测试下',
                            lv_level: 1,
                            sex: 1,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg',
                            min_price: 21,
                            v_level: 3,
                            voice:
                                'https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3',
                            voice_length: 10,
                            discount_open: 1
                        },
                        {
                            user_id: 43,
                            nickname: '测试下',
                            lv_level: 1,
                            sex: 1,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg',
                            min_price: 21,
                            v_level: 3,
                            voice:
                                'https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3',
                            voice_length: 10,
                            discount_open: 1
                        },
                        {
                            user_id: 44,
                            nickname: '测试下',
                            lv_level: 1,
                            sex: 1,
                            avatar:
                                'https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg',
                            min_price: 21,
                            v_level: 3,
                            voice:
                                'https://pwgyy.gz.bcebos.com/e9e1b053658f45269c3657b9a9509918.mp3',
                            voice_length: 10,
                            discount_open: 1
                        }
                    ]
                }
            ]
        }
    }
}
export const listData = async (ctx, next) => {
    //console.log('authorization=>', ctx.headers)
    ctx.body = {
        code: 200,
        message: 'success',
        data: {
            game: {
                wzry: {
                    key: 'wzry',
                    title: '王者荣耀',
                    web_logo1: '/imgs/wzry_web_logo1.png',
                    web_logo2: '/imgs/wzry_web_logo2.png',
                    web_logo3: '/imgs/wzry_web_logo3.png'
                },
                jdqs: {
                    key: 'jdqs',
                    title: '绝地求生',
                    web_logo1: '/imgs/jdqs_web_logo1.png',
                    web_logo2: '/imgs/jdqs_web_logo2.png',
                    web_logo3: '/imgs/jdqs_web_logo3.png'
                },
                yxlm: {
                    key: 'yxlm',
                    title: '英雄联盟',
                    web_logo1: '/imgs/yxlm_web_logo1.png',
                    web_logo2: '/imgs/yxlm_web_logo2.png',
                    web_logo3: '/imgs/yxlm_web_logo3.png'
                },
                cjzc: {
                    key: 'cjzc',
                    title: '刺激战场',
                    web_logo1: '/imgs/cjzc_web_logo1.png',
                    web_logo2: '/imgs/cjzc_web_logo2.png',
                    web_logo3: '/imgs/cjzc_web_logo3.png'
                },
                hyxd: {
                    key: 'hyxd',
                    title: '荒野行动',
                    web_logo1: '/imgs/hyxd_web_logo1.png',
                    web_logo2: '/imgs/hyxd_web_logo2.png',
                    web_logo3: '/imgs/hyxd_web_logo3.png'
                },
                qjcj: {
                    key: 'qjcj',
                    title: '全军出击',
                    web_logo1: '/imgs/qjcj_web_logo1.png',
                    web_logo2: '/imgs/qjcj_web_logo2.png',
                    web_logo3: '/imgs/qjcj_web_logo3.png'
                }
            },
            tags: {
                title: '王者荣耀',
                logo: '/imgs/wzry_logo.png',
                web_logo1: '/imgs/wzry_web_logo1.png',
                web_logo2: '/imgs/wzry_web_logo2.png',
                web_logo3: '/imgs/wzry_web_logo3.png',
                screenshot: '/imgs/wzry.jpg',
                lists: [
                    {
                        title: '技能水平',
                        key: 'jnsp',
                        lists: [
                            {
                                id: 1,
                                value: '倔强青铜',
                                price: 14
                            },
                            {
                                id: 2,
                                value: '秩序白银',
                                price: 15
                            },
                            {
                                id: 3,
                                value: '荣耀黄金',
                                price: 18
                            },
                            {
                                id: 4,
                                value: '尊贵铂金',
                                price: 18
                            },
                            {
                                id: 5,
                                value: '永恒钻石5',
                                price: 19
                            },
                            {
                                id: 6,
                                value: '永恒钻石4',
                                price: 19
                            },
                            {
                                id: 7,
                                value: '永恒钻石3',
                                price: 20
                            },
                            {
                                id: 8,
                                value: '永恒钻石2',
                                price: 20
                            },
                            {
                                id: 9,
                                value: '永恒钻石1',
                                price: 21
                            },
                            {
                                id: 10,
                                value: '至尊星耀5',
                                price: 21
                            },
                            {
                                id: 11,
                                value: '至尊星耀4',
                                price: 25
                            },
                            {
                                id: 12,
                                value: '至尊星耀3',
                                price: 25
                            },
                            {
                                id: 13,
                                value: '至尊星耀2',
                                price: 26
                            },
                            {
                                id: 14,
                                value: '至尊星耀1',
                                price: 28
                            },
                            {
                                id: 15,
                                value: '最强王者1-10星',
                                price: 30
                            },
                            {
                                id: 16,
                                value: '最强王者11-20星',
                                price: 32
                            },
                            {
                                id: 17,
                                value: '最强王者21-30星',
                                price: 33
                            },
                            {
                                id: 18,
                                value: '最强王者30星以上',
                                price: 35
                            }
                        ]
                    },
                    {
                        title: '大区',
                        key: 'daqu',
                        lists: [
                            {
                                id: 1,
                                value: '微信区'
                            },
                            {
                                id: 2,
                                value: '手Q区'
                            }
                        ]
                    },
                    {
                        title: '包上分段位',
                        key: 'bsfdw',
                        lists: [
                            {
                                id: 19,
                                value: '全段位包上分'
                            },
                            {
                                id: 18,
                                value: '最强王者30星以下'
                            },
                            {
                                id: 17,
                                value: '最强王者20星以下'
                            },
                            {
                                id: 16,
                                value: '最强王者10星以下'
                            },
                            {
                                id: 15,
                                value: '至尊星耀1以下'
                            },
                            {
                                id: 14,
                                value: '至尊星耀2以下'
                            },
                            {
                                id: 13,
                                value: '至尊星耀3以下'
                            },
                            {
                                id: 12,
                                value: '至尊星耀4以下'
                            },
                            {
                                id: 11,
                                value: '至尊星耀5以下'
                            },
                            {
                                id: 10,
                                value: '永恒钻石1以下'
                            },
                            {
                                id: 9,
                                value: '永恒钻石2以下'
                            },
                            {
                                id: 8,
                                value: '不提供上分服务'
                            }
                        ]
                    },
                    {
                        title: '擅长位置',
                        key: 'scwz',
                        lists: [
                            {
                                id: 1,
                                value: '全能'
                            },
                            {
                                id: 2,
                                value: '上单'
                            },
                            {
                                id: 3,
                                value: '中单'
                            },
                            {
                                id: 4,
                                value: 'ADC'
                            },
                            {
                                id: 5,
                                value: '辅助'
                            },
                            {
                                id: 6,
                                value: '打野'
                            }
                        ]
                    },
                    {
                        title: '分类',
                        key: 'fl',
                        lists: [
                            {
                                id: 1,
                                value: '游戏上分',
                                beizhu:
                                    '带领并确保客户升段上分。（若部分段位无法保证，则需先与客户提前协商）'
                            },
                            {
                                id: 2,
                                value: '游戏辅导',
                                beizhu:
                                    '辅助客户提升游戏技术、或提高客户的游戏体验。'
                            }
                        ]
                    }
                ]
            },
            info: [
                {
                    user_id: 27,
                    nickname: 'zz',
                    auth_avatar:
                        'https://pwgyy.gz.bcebos.com/930dd21576d54cddaf39a21c76390568.jpg',
                    lv_level: 3,
                    sex: 1,
                    v_level: 4,
                    order_total: 1,
                    comments_total: 0,
                    min_price: 30,
                    introduce: 'jsjjdjdjdjdjdjjdjsjj',
                    online_status: 1,
                    discount_open: 0,
                    game: '王者荣耀',
                    avatar:
                        'https://pwgyy.gz.bcebos.com/930dd21576d54cddaf39a21c76390568.jpg',
                    tags: '最强王者1-10星•微信区',
                    voice:
                        'https://pwgyy.gz.bcebos.com/0185f342a315be89e07de3edddf97b7e.mp3',
                    voice_length: 5
                },
                {
                    user_id: 19,
                    nickname: '测试下',
                    auth_avatar:
                        'https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg',
                    lv_level: 1,
                    sex: 1,
                    v_level: 3,
                    order_total: 0,
                    comments_total: 0,
                    min_price: 20,
                    introduce:
                        'glow我摸摸哦哦马6哦KKKKKK就咯啦咯啦咯啦咯啦咯啦咯啦咯啦咯啦咯啦看着啦啦啦啦洗衣机洗可以可以可以可以可以可以可以可以可以可以好了我睡了我睡了一觉一记忆力下降',
                    online_status: 1,
                    discount_open: 1,
                    game: '王者荣耀',
                    avatar:
                        'https://pwgyy.gz.bcebos.com/155220faad1341d5b759e663cadb65be.jpg',
                    tags: '永恒钻石2•微信区',
                    voice:
                        'https://pwgyy.gz.bcebos.com/6ec570d495634a3ba0c6714465023b7f.mp3',
                    voice_length: 5
                },
                {
                    user_id: 16,
                    nickname: 'Nicole',
                    auth_avatar:
                        'https://pwgyy.gz.bcebos.com/90f05af1c20a45dbb057afcb4cda0e8d.jpg',
                    lv_level: 1,
                    sex: 2,
                    v_level: 0,
                    order_total: 2,
                    comments_total: 0,
                    min_price: 35,
                    introduce: '王者大神带飞～～\n有哦哦哦哦哦透露一下适配器',
                    online_status: 1,
                    discount_open: 0,
                    game: '王者荣耀',
                    avatar:
                        'https://pwgyy.gz.bcebos.com/90f05af1c20a45dbb057afcb4cda0e8d.jpg',
                    tags: '最强王者30星以上•微信区',
                    voice:
                        'https://pwgyy.gz.bcebos.com/00fa315501ce4a3f8163bcadbea38d5b.mp3',
                    voice_length: 5
                },
                {
                    user_id: 11,
                    nickname: 'Yanglei',
                    auth_avatar:
                        'https://pwgyy.gz.bcebos.com/55603908cf0b4a767a17a351623757d1.png',
                    lv_level: 1,
                    sex: 1,
                    v_level: 0,
                    order_total: 0,
                    comments_total: 0,
                    min_price: 35,
                    introduce: '111',
                    online_status: 0,
                    discount_open: 0,
                    game: '王者荣耀',
                    avatar:
                        'https://pwgyy.gz.bcebos.com/55603908cf0b4a767a17a351623757d1.png',
                    tags: '最强王者30星以上•微信区',
                    voice:
                        'https://pwgyy.gz.bcebos.com/8dd3ed02a3df39392f29f146ace9f2ca.mp3',
                    voice_length: 6
                },
                {
                    user_id: 20,
                    nickname: 'blood',
                    auth_avatar:
                        'https://pwgyy.gz.bcebos.com/dc3feeb19cf24ab7bfc03edbf5c74863.jpg',
                    lv_level: 1,
                    sex: 2,
                    v_level: 0,
                    order_total: 0,
                    comments_total: 0,
                    min_price: 14,
                    introduce:
                        '半醒半睡吧。，你肯定几点能到男士健康代码的你男的女的那女的你男的女的那么多吗等你',
                    online_status: 0,
                    discount_open: 0,
                    game: '王者荣耀',
                    avatar:
                        'https://pwgyy.gz.bcebos.com/dc3feeb19cf24ab7bfc03edbf5c74863.jpg',
                    tags: '倔强青铜•微信区',
                    voice:
                        'https://pwgyy.gz.bcebos.com/89f0e31992cd4e4599c4bc4979ec07f8.mp3',
                    voice_length: 6
                },
                {
                    user_id: 22,
                    nickname: '2',
                    auth_avatar:
                        'https://pwgyy.gz.bcebos.com/cf256a039860bae5a96da7a5b4468a44.jpeg',
                    lv_level: 1,
                    sex: 1,
                    v_level: 0,
                    order_total: 0,
                    comments_total: 0,
                    min_price: 14,
                    introduce: '11111',
                    online_status: 0,
                    discount_open: 0,
                    game: '王者荣耀',
                    avatar:
                        'https://pwgyy.gz.bcebos.com/cf256a039860bae5a96da7a5b4468a44.jpeg',
                    tags: '倔强青铜•微信区',
                    voice:
                        'https://pwgyy.gz.bcebos.com/b9f050c350881ddb6731fdbaf8253f3b.mp3',
                    voice_length: 4
                }
            ],
            info_pages: 1
        }
    }
}
