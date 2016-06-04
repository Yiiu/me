import vue from "vue";
import Router from "vue-router";
import routers from "./router.js";
import App from "./components/app";
vue.config.devtools = true;

vue.use(Router);

// 创建新实例
const router = new Router(); 

routers(router,App);