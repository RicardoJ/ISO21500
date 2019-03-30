const utils = require('util');
const { isPromise, isAsyncFunction } = utils.types;

const self = (module.exports = {
  asyncHandler: fn => (req, res, next) => {
    const errorCatcher = err => self.errorHandler(err, req, res, next);

    if (isPromise(fn) || isAsyncFunction(fn))
      return fn(req, res, next).catch(errorCatcher);

    return Promise.resolve(fn(req, res, next)).catch(errorCatcher);
  },

  errorHandler: (error, req, res, next) => {
    const { response, request } = error;

    if (response) {
      // The server responded with a status code different than 2xx
      res.status(response.status).send(response.data);
    } else if (request) {
      // The request was made but no response was received
      res.status(500).send({ status: 500, message: 'Something went wrong' });
    } else {
      // Something wrong happened in setting up the request
      next(error);
    }
  }
});
