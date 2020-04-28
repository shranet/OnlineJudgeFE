import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const languages = [
  {value: 'uz-LAT', label: "O'zbekcha"},
  {value: 'en-US', label: 'English'}
]
const messages = {}

// combine admin and oj
for (let lang of languages) {
  let locale = lang.value
  let m = require(`./oj/${locale}`).m
  console.log(m)
  Object.assign(m, require(`./admin/${locale}`).m)
  messages[locale] = {m: m}
}

// load language packages
export default new VueI18n({
  locale: 'uz-LAT',
  messages: messages
})

export {languages}
