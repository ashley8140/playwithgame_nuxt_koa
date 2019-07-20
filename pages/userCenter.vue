<template>
    <div class="container"
         style="margin-top: 70px;overflow: hidden;margin-bottom: 50px;">
        <div class="left center">
            <div class="title">
                <span class="bold block"
                      style="font-size:24px;">个人中心</span>
                <span class="line"></span>
            </div>
            <ul class="nav">
                <nuxt-link :to="{path: i.link}"
                           v-for="(i,index) in hunterUserCenterNav"
                           tag="li"
                           :key=index>
                    {{i.name}}
                </nuxt-link>
            </ul>
        </div>

        <div class="right">
            <nuxt-child keep-alive></nuxt-child>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    middleware: "auth",
    data() {
        return {
            hunterUserCenterNav: [
                {
                    name: "订单中心",
                    link: "/userCenter/order"
                },
                {
                    name: "领取工资",
                    link: "/userCenter/getMoney"
                },
                {
                    name: "我的相册",
                    link: "/userCenter/album"
                },
                {
                    name: "自我推广",
                    link: "/userCenter/popularize"
                },
                {
                    name: "服务管理",
                    link: "/userCenter/service"
                },
                {
                    name: "我的钱包",
                    link: "/userCenter/purse"
                },
                {
                    name: "编辑资料",
                    link: "/userCenter/editInfo"
                },
                {
                    name: "我的礼物",
                    link: "/userCenter/gift"
                },
                {
                    name: "关注/粉丝",
                    link: "/userCenter/fans"
                }
            ],
            UserCenterNav: [
                {
                    name: "订单中心",
                    link: "/userCenter/order"
                },
                {
                    name: "成为陪玩",
                    link: "/userCenter/service"
                },
                {
                    name: "我的钱包",
                    link: "/userCenter/purse"
                },
                {
                    name: "编辑资料",
                    link: "/userCenter/editInfo"
                },
                {
                    name: "我的礼物",
                    link: "/userCenter/gift"
                },
                {
                    name: "关注/粉丝",
                    link: "/userCenter/fans"
                }
            ]
        };
    },

    created() {
        console.log("用户中心 created");
    },
    mounted() {
        console.log("用户中心 mounted");
    },
    activated() {
        console.log("用户中心 activated");
    },
    destroyed() {
        console.log("用户中心destoryed");
    }
};
</script>
<style lang='scss' scoped>
.left {
    overflow: hidden;
    float: left;
    width: 200px;
    box-sizing: border-box;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-bottom: 81px;

    .title {
        padding: 25px 0 10px;
        border-bottom: 1px solid #ebebeb;
        background: #fff;
    }

    .nav {
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;

        li {
            width: 200px;
            height: 56px;
            line-height: 56px;
            box-sizing: border-box;
            color: #666;
            font-size: 16px;
            border-bottom: 1px solid #ebebeb;
            cursor: pointer;
            background: #fff;

            &.navIsActive {
                color: #fff;
                background: #ff4c2e;
            }

            &:last-child {
                border-bottom: none;
            }
        }
    }
}

.line {
    display: inline-block;
    width: 32px;
    height: 4px;
    background: rgba(255, 76, 46, 1);
    border-radius: 2px;
    position: relative;
    top: -8px;
}

.right {
    float: right;
    width: 970px;
    background: #fff;
    border-radius: 20px;
}
</style>
