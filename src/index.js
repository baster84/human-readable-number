module.exports = function toReadable (number) {
  const numbers = [
    'zero', 'one', 'two', 'three', 'four', 
    'five', 'six', 'seven', 'eight', 'nine', 
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'    
  ];
  const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let result = '';
  let ratio = Math.trunc(number / 100);
  if (ratio > 0 && ratio < 10) {
    result = `${numbers[ratio]} hundred `;
    number = number % 100;
  }
  
  ratio = Math.trunc(number / 10);
  if (ratio > 0 && number >= 20) {
    result += `${dozens[ratio-2]} `;
    number = number % 10;
  }
  
  if (result === '' || number > 0){
    result += `${numbers[number]}`;
  }

  return result.trim();
}
