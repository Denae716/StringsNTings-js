class StringsAndTings {
    
    camelCase(str){
        let output = ""
        for(let i = 0; i < str.length; i ++){
          if( i === 0 || str[i-1] === " "){
            output += str[i].toUpperCase()
          }
          else {
            output += str[i]
          }
        }
        return output;
      }
  
      //@return string in reverse order
      reverseString(str){
        let output = ""
        for (let i = str.length -1; i >= 0; i--){
          output += str[i]
        }
          return output;
      }
  
    //@return string with identical contents, with each word individually in reverse order
      reverseWords(str){
        let output = ""
        let words = str.split(" ")
        for(let i = 0; i <words.length; i ++){
          if (i ===words.length -1){
          output += this.reverseString(words[i])  
         } else{
          output += this.reverseString(words[i])+ " "}   
        }
        return output;
      }
  
      // @return string with identical contents, in reverse order, with first character capitalized
      reverseThenCamelCase(str){
        let output = this.reverseString(str)
        output = this.camelCase(output)
          return output;
      }
  
      // @return string with identical contents excluding first and last character
      removeFirstAndLastCharacter(str){
        let output = "";
        for (let i = 0; i < str.length; i++){ 
          if(i !== 0 && i !== str.length - 1){ 
             output += str[i]
  
          }
  
        }
         
          return output;
      }
  
      // @return string with identical characters, each with opposite casing
      invertCasing(str){
        let output = ""
        for(let i = 0; i < str.length; i ++){
          if(str[i] === str[i].toUpperCase()){
            output += str[i].toLowerCase()
          }
          else (str[i] === str[i].toLowerCase()){
            output += str[i].toUpperCase()
          }
        }
          return output;
      }
  }

module.exports = StringsAndTings;