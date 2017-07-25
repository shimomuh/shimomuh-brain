const ua = navigator.userAgent.toLowerCase()
// less than ie11
const isMSIE = (ua.indexOf('msie') > -1) && (ua.indexOf('opera') == -1)
// ie11
const isIE11 = (ua.indexOf('trident/7') > -1)
// edge
const isEdge = (ua.indexOf('edge') > -1)
export const isFirefox = (ua.indexOf('firefox') > -1)
export const isIE = isMSIE || isIE11 || isEdge
