const Capitalize = (str, from = "-", to = "") => {
  str = str.split(from);
  if (str) {
    for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
  }
  return str.join(to);
};

module.exports = {
  Capitalize
};
