petApp.filter('capitalize', function () {
  return function (word) {
    word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.substring(1);
  };
});
