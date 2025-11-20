import ReactGA from 'react-ga4'

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

export function initGA() {
  if (MEASUREMENT_ID) {
    ReactGA.initialize(MEASUREMENT_ID)
  } else {
    console.warn('GA measurement ID non configuré !')
  }
}

export const trackPage = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path })
}

export const trackButtonClick = (name: string) => {
  ReactGA.event({
    category: 'Button Click',
    action: 'Click',
    label: name,
  })
}
