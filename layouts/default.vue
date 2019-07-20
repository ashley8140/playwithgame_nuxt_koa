<template>
    <div>
        <NavBar></NavBar>
        <!-- 路由视图，相当于router-view -->
        <nuxt keep-alive />
        <FooterBar></FooterBar>
        <Login :class="{'show': showLoginBox}"></Login>
        <!-- <Float></Float> -->
    </div>
</template>
<script>
import { mapState } from "vuex";
const NavBar = r => require.ensure([], () => r(require("../components/Nav")));
const FooterBar = r =>
    require.ensure([], () => r(require("../components/Footer")));
const Login = r => require.ensure([], () => r(require("../components/login")));
const Float = r => require.ensure([], () => r(require("../components/Float")));

export default {
    components: {
        NavBar,
        FooterBar,
        Login,
        Float
    },
    computed: {
        ...mapState("login", ["showLoginBox"])
    },
    mounted() {}
};
</script>
<style lang="scss" scoped>
</style>
