import Home from "./components/home";
import Show from "./components/show";
import Test from "./view/test";
module.exports = (router,app) => {
    router.map({
        "/": {
            name: "Home",
            component: Home
        },
        "/show": {
            name: "Show",
            component: Show,
        },
    })
    router.redirect({
        "*" : "/404"
    })
    router.start(app, '#app');    
}