module.exports = (err, _req, res, _next) => {
  console.log(err);
  res.status(err.statusCode || 500).json({ message: err.message });
};