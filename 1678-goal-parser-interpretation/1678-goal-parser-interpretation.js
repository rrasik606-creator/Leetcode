/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  const result=command.replaceAll("()","o").replaceAll("(al)","al") 
  return result
};