// Refactor the spinner1 code to be more concise.

const spinner = function(characters) {

  for (let [index, char] of characters.entries()) {
    setTimeout(() => {
      process.stdout.write(char);
    }, index * 200);
  }
};
const spin = ['\r| ','\r/ ','\r- ','\r\\ ','\r| ','\r/ ','\r- ','\r\\ ','\r| '];
spinner(spin);