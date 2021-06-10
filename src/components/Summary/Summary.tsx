import React from 'react';
import { ComboProps } from '../Combo/Combo';
import './Summary.css';

interface SummaryProps {
    combos: ComboProps[];
}

export const Summary: React.FC<SummaryProps> = ({combos}) => {

    var totalPrice:number = 0;

    

    combos.forEach(elem => totalPrice+=elem.comboTotal);
    
    

   return <div>
       <p className="total" >TOTAL: ${totalPrice}</p>
   </div>;
}