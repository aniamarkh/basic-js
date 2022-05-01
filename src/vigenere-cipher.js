const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }


  encrypt(str, key) {

    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    let strArr = str.toUpperCase().split('');
    let keyArr = key.padEnd(str.length, key).toUpperCase().split('');

    let result = [];
    let keyIndex = 0;

    for (let i = 0; i < strArr.length; i++) {

      let charStr = strArr[i].charCodeAt(0);
      let charKey = keyArr[keyIndex].charCodeAt(0);


      if (charStr >= 65 && charStr <= 90) {
        result.push(String.fromCharCode((charStr + charKey) % 26 + 65));
        keyIndex += 1;
      } else {
        result.push(strArr[i]);
      }
    }

    return (this.type ? result.join('') : result.reverse().join(''));
  }


  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    let strArr = str.toUpperCase().split('');
    let keyArr = key.padEnd(str.length, key).toUpperCase().split('');

    let result = [];
    let keyIndex = 0;

    for (let i = 0; i < strArr.length; i++) {

      let charStr = strArr[i].charCodeAt(0);
      let charKey = keyArr[keyIndex].charCodeAt(0);

      if (charStr >= 65 && charStr <= 90) {
        result.push(String.fromCharCode((charStr - charKey + 26) % 26 + 65));
        keyIndex += 1;
      } else {
        result.push(strArr[i]);
      }
    }

    return (this.type ? result.join('') : result.reverse().join(''));
  }
}

module.exports = {
  VigenereCipheringMachine
};
