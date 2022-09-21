const controllerWrapper = (callBack) => async (req, res, next) => {
  try {
    return await callBack(req, res, next);
  } catch (err) {
    if (!err.statusCode) {
      // err.message = 'Internal Server Error'; 
      err.statusCode = 500;
    }
    return next(err);
  }
};

module.exports = controllerWrapper;