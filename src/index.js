module.exports = {
  componentWilLMount () {
    this.__rs_listeners = []
  },

  componentWillUnmount () {
    this.__rs_listeners.forEach(listener => {
      var { emitter, eventName, callback } = listener

      var removeListener = emitter.removeListener || emitter.removeEventListener
      removeListener.call(emitter, eventName, callback)
    })
  },

  watch (emitter, eventName, callback) {
    this.__rs_listeners.push({
      emitter: emitter,
      eventName: eventName,
      callback: callback
    })

    var addListener = emitter.addListener || emitter.addEventListener
    addListener.call(emitter, eventName, callback)
  },

  unwatch (emitter, eventName, callback) {
    this.__rs_listeners = this.__rs_listeners.filter(listener => {
      return listener.emitter === emitter &&
              listener.eventName === eventName &&
              listener.callback === callback
    })

    var removeListener = emitter.removeListener || emitter.removeEventListener
    removeListener.call(emitter, eventName, callback)
  }
}
