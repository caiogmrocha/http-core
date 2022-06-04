function isJSON(string) {
  try {
    return !!JSON.parse(string);
  } catch (error) {
    return false;
  }
}

module.exports = isJSON;