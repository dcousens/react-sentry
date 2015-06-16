module.exports = function () {
  var listeners = []

  return {
    componentWillUnmount () {
      listeners.forEach(function (listener) {
        var { emitter, eventName, callback } = listener

        var removeListener = emitter.addListener || emitter.addEventListener
        removeListener.call(emitter, eventName, callback)
      })
    },

    watch (emitter, eventName, callback) {
      listeners.push({
        emitter: emitter,
        eventName: eventName,
        callback: callback
      })

      var addListener = emitter.addListener || emitter.addEventListener
      addListener.call(emitter, eventName, callback)
    },

    unwatch (emitter, eventName, callback) {
      listeners = listeners.filter((listener) => {
        return listener.emitter === emitter &&
               listener.eventName === eventName &&
               listener.callback === callback
      })

      var removeListener = emitter.addListener || emitter.addEventListener
      removeListener.call(emitter, eventName, callback)
    }
  }
}
