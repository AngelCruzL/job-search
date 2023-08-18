import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from '@/App.vue'

import './assets/main.css'

library.add(faSearch)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
