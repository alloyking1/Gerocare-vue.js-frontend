export default {
  textPrefix(text, length, suffix = null) {
    if (text.length > length) {
      return text.substring(0, length) + suffix;
    } else {
      return text;
    }
  },

  numberFormat(amount){
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(amount)
  }
};
