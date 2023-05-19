const { countryList } = require("../services/dropdown");

module.exports = {
  countryList: async (req, res) => {
    try {
      let countryData = await countryList();
      res.status(200).send(countryData);
    } catch (error) {
      res.status(200).send(500);
    }
  },
};
