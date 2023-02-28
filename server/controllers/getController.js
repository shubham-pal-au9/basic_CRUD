const getData = (req, res) => {
  res.json({
    message: "This is first one",
  });
};

const getValue = (req, res) => {
  res.json({
    message: "This is second one",
  });
};

module.exports = {
  getData,
  getValue,
};
