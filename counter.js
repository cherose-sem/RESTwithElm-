let val = 0;

module.exports = {
  getCounter: function () {

    val++;
    return val;

  },
  setCounter: function(newVal) {
    val = newVal;
    return newVal;
  }
};
