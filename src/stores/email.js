import { writable } from 'svelte/store'
import axios from 'axios'
const emailStore = writable(null)
export default emailStore
