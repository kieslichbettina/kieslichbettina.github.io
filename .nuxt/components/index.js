export const MaterialIconAccount = () => import('../../node_modules/vue-material-design-icons/Account.vue' /* webpackChunkName: "components/material-icon-account" */).then(c => wrapFunctional(c.default || c))
export const MaterialIconBriefcaseAccount = () => import('../../node_modules/vue-material-design-icons/BriefcaseAccount.vue' /* webpackChunkName: "components/material-icon-briefcase-account" */).then(c => wrapFunctional(c.default || c))
export const MaterialIconCardAccountMail = () => import('../../node_modules/vue-material-design-icons/CardAccountMail.vue' /* webpackChunkName: "components/material-icon-card-account-mail" */).then(c => wrapFunctional(c.default || c))
export const MaterialIconHome = () => import('../../node_modules/vue-material-design-icons/Home.vue' /* webpackChunkName: "components/material-icon-home" */).then(c => wrapFunctional(c.default || c))
export const AppFooter = () => import('../../components/AppFooter.vue' /* webpackChunkName: "components/app-footer" */).then(c => wrapFunctional(c.default || c))
export const AppMenu = () => import('../../components/AppMenu.vue' /* webpackChunkName: "components/app-menu" */).then(c => wrapFunctional(c.default || c))
export const AppModal = () => import('../../components/AppModal.vue' /* webpackChunkName: "components/app-modal" */).then(c => wrapFunctional(c.default || c))
export const PageHeader = () => import('../../components/PageHeader.vue' /* webpackChunkName: "components/page-header" */).then(c => wrapFunctional(c.default || c))
export const CardsEducation = () => import('../../components/cards/Education.vue' /* webpackChunkName: "components/cards-education" */).then(c => wrapFunctional(c.default || c))
export const CardsExperience = () => import('../../components/cards/Experience.vue' /* webpackChunkName: "components/cards-experience" */).then(c => wrapFunctional(c.default || c))
export const CardsPortfolio = () => import('../../components/cards/Portfolio.vue' /* webpackChunkName: "components/cards-portfolio" */).then(c => wrapFunctional(c.default || c))
export const CardsSkill = () => import('../../components/cards/Skill.vue' /* webpackChunkName: "components/cards-skill" */).then(c => wrapFunctional(c.default || c))
export const ModalsPortfolioDetails = () => import('../../components/modals/PortfolioDetails.vue' /* webpackChunkName: "components/modals-portfolio-details" */).then(c => wrapFunctional(c.default || c))
export const TabsAbout = () => import('../../components/tabs/About.vue' /* webpackChunkName: "components/tabs-about" */).then(c => wrapFunctional(c.default || c))
export const TabsContact = () => import('../../components/tabs/Contact.vue' /* webpackChunkName: "components/tabs-contact" */).then(c => wrapFunctional(c.default || c))
export const TabsHome = () => import('../../components/tabs/Home.vue' /* webpackChunkName: "components/tabs-home" */).then(c => wrapFunctional(c.default || c))
export const TabsPortfolio = () => import('../../components/tabs/Portfolio.vue' /* webpackChunkName: "components/tabs-portfolio" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
