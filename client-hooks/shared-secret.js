'use strict';

const sharedSecret = process.env.SHARED_SECRET;

module.exports = function (app) {
  app.use('/api/client', (req, res, next) => {
    if (req.header('authorization') === sharedSecret) {
      next();
    } else {
      res.sendStatus(401);
    }
  });
  return app;
};