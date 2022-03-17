import './styles.css'
import router from '@router/index'

window.router = () => router()

window.addEventListener('load', window.router)
window.addEventListener('popstate', window.router)
