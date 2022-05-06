import React from "react";
import Card from './Card';


const CardList = ({robots}) => {
  // if(true){
  //   throw new Error("no");
  // }
  return (
    <div>
      {
        robots.map((user, i) =>{ //same as foreach
          return (<Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>);
        })
      }
    </div>
  );
}   


export default CardList;