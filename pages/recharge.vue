<template>
    <div class="container">
        <p class="p1">
            首页 >
            <span style="color: rgb(255, 76, 46);">充值</span>
        </p>
        <div class="main">
            <div class="bold p4">
                <nuxt-link tag="span"
                           to="/recharge/yeRecharge">余额充值</nuxt-link>|
                <nuxt-link tag="span"
                           to="/recharge/diamondRecharge">钻石充值</nuxt-link>
            </div>
        </div>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>
<script>
export default {
    middleware: "auth",
    data() {
        return {};
    }
};
</script>
<style lang='scss' scoped>
.main {
    background: #fff;
}
.wrap {
    background: #fff;
}
.p1 {
    margin-top: 25px;
    font-size: 12px;
    margin-bottom: 20px;
}

.p4 {
    padding-left: 20px;
    margin-top: 35px;
    padding-bottom: 22px;
    padding-top: 22px;
    font-size: 18px;
    border-bottom: 1px solid #ebebeb;
    color: #999999;
    //cursor: pointer;

    .active {
        color: #ff4c2e;
    }
}
</style>
