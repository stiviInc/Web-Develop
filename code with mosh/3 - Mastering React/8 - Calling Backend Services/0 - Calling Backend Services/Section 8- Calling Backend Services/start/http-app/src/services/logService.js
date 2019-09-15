import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://09a2c7346e1b49989e8053f74af1869e@sentry.io/1539911",
    release: "learningBackenServices@1.0.0"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
