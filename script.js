function solution(str, ending){
  // TODO: complete
const regex = new RegExp(ending + "$");
  return regex.test(str);
}
