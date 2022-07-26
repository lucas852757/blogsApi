/** source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#aula-241-orm-interface-da-aplicacao-com-o-banco-de-dados */
const errors = {
  ValidationError: 400,
  NotFoundError: 400,
  AlreadyRegisteredError: 409,
};

// Aula 241
/**
 * @type {import('express').ErrorRequestHandler}
 */
const middlewareOfError = async (err, req, res, _next) => {
 const status = await errors[err.name];
  if (!status) return res.sendStatus(500);
  return res.status(status).json({ message: err.message });
};

module.exports = middlewareOfError;