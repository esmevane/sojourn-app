// @flow

export const observeRepo = (repo: Repo<*>) => (emitter: Function) => {
  const listener = value => payload =>
    emitter({ type: value, payload })

  const actions = repo.actions()

  actions.forEach(action => repo.on(action, listener(action)))

  return () => {
    actions.forEach(action => repo.off(action, listener(action)))
  }
}
