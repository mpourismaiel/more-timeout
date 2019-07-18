function setTimeoutFor(callback, timeout, times) {
  var calledTimes = 0;
  var timeoutCallback = setTimeout(function customCallback() {
    if (times === 0) {
      return;
    }

    callback.call(null);

    calledTimes++;
    if (calledTimes === times) {
      return;
    }

    setTimeout(customCallback, timeout);
  }, timeout);

  return {
    timeout: timeoutCallback,
    clear: function() {
      clearTimeout(timeoutCallback);
    },
  };
}

module.exports = setTimeoutFor;
