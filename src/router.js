import Home from "./components/home"
module.exports = (router,app) => {
    router.map({
        "/": {
            name: "Home",
            component: Home
        }
    })
    router.redirect({
        "*" : "/404"
    })
    router.start(app, '#app');    
}