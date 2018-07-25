const currentDirectory = function(dirname, level) {
    const regex_theme_url = new RegExp("(.[^\\/]+){"+ (level + 1) +"}.$");
    const theme_url = regex_theme_url.exec(dirname)[0];
    console.log('Your current directory "' + theme_url + '" should be similar to the twig variable "{{ theme_url }}". if it is not, play with the variable "directory_down_level" in "webpack.config.js""');
    return theme_url;
};

module.exports = {
    currentDirectory,
};
