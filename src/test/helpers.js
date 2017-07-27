// @flow

// JS Dom doesn't know about requestAnimationFrame?
//
export const isIntegrationTest = () => {
  if (!global.requestAnimationFrame) global.requestAnimationFrame = () => {}
}
