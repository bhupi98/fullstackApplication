const { executeQuery } = require("../config/db");

module.exports = {
  countryList: async () => {
    try {
      let countryData = await executeQuery(
        "select * from country_nationality_mobile_code",
        []
      );
      return countryData;
    } catch (error) {}
  },
};
