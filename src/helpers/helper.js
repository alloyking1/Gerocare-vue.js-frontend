
export default class Helper {

  textPrefix(text, length, suffix=null){
    if(text < length){
      return text.slice(0, length)+suffix
    }else{
      return text
    } 
  }       
}