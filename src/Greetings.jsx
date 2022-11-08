export function Greetings(props) {
  console.log(props);
  
  if(props.age > 100){
    return <div> You are old </div>
  }else{
    return <div> You are young </div>
  }
  
}
