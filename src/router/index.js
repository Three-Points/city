import Home from "@views/Home.js"
import Login from "@views/Login.js"

const routes = {
    "/": Home,
    "/login": Login,
}

const router = async () => {
    let view = routes[location.pathname] ?? Home
    document.querySelector("#app").innerHTML = view()
}

export default router
