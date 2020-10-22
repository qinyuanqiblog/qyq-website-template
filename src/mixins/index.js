import appClientMixin from './appClientMixin'
import bankMixin from './bankMixin'
// balanceMixin 里面会引入appClientMixin，请勿再次引入，以免发生意外~
import balanceMixin from './balanceMixin'
import shareMixin from './shareMixin'
import productMixin from './productMixin'
import rechargeMixin from './rechargeMixin'
import momentsMixin from './momentsMixin'
import commonMixin from './commonMixin'

export {
  appClientMixin,
  bankMixin,
  balanceMixin,
  shareMixin,
  productMixin,
  rechargeMixin,
  momentsMixin,
  commonMixin,
}
