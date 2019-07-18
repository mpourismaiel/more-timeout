const setTimeoutFor = require('.');

const test = (title, value, expect) => {
  if (value === expect) {
    console.log(`${title} -- PASSED`);
    return;
  }

  console.log(
    `${title} -- FAILED\n    Received:\t${value}\n    Expected:\t${expect}`,
  );
  console.trace();
  process.exit(1);
};

(function() {
  let calledTimes = 0;
  setTimeoutFor(() => calledTimes++, 20, 1);
  setTimeout(() => test('Should be called once', calledTimes, 1), 100);
})();

(function() {
  let calledTimes = 0;
  setTimeoutFor(() => calledTimes++, 20, 5);
  setTimeout(() => test('Should be called 5 times', calledTimes, 5), 500);
})();

(function() {
  let calledTimes = 0;
  setTimeoutFor(() => calledTimes++, 20, 0);
  setTimeout(() => test('Should not be called', calledTimes, 0), 200);
})();
