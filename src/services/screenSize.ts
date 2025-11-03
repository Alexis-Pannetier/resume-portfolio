const SM = 576
const MD = 768
const LG = 992

export function isExtraSmall(width: number = window.innerWidth): boolean {
  return width < SM
}

export function isSmall(width: number = window.innerWidth): boolean {
  return width >= SM
}

export function isMedium(width: number = window.innerWidth): boolean {
  return width >= MD
}

export function isLarge(width: number = window.innerWidth): boolean {
  return width >= LG
}
