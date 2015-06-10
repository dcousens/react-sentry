module.exports = function () {
  var listeners = []

  return {
    componentWillUnmount () {
      listeners.forEach(function (listener) {
        var { emitter, eventName, callback } = listener

        emitter.removeListener(eventName, callback)
      })
    },

    on (emitter, eventName, callback) {
      listeners.push({
        emitter: emitter,
        eventName: eventName,
        callback: callback
      })

      emitter.on(eventName, callback)
    },

    removeListener (emitter, eventName, callback) {
      listeners = listeners.filter((listener) => {
        return listener.emitter === emitter &&
               listener.eventName === eventName &&
               listener.callback === callback
      })

      emitter.removeListener(eventName, callback)
    }
  }
}
