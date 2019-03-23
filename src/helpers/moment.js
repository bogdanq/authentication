import moment from 'moment/min/moment-with-locales.min.js'

moment.locale('ru');
export default function momentJs(date) {
  return moment(new Date(date)).format('ll')
}