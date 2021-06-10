import React from 'react';
import './Count.css';

interface CountProps {
 count: number;
 onDecrease: () => void;
 onIncrease: () => void;
 confirm?:boolean
}

export const Count: React.FC<CountProps> = ({count, onDecrease, onIncrease, confirm}) => {

  
    

   return <div className="countContainer">

       {!confirm && <button className= "countButton" onClick = {onDecrease}>-</button>}
       <p>
        {count}
        </p>
        {!confirm && <button className= "countButton" onClick = {onIncrease}>+</button>}
   </div>;
}
