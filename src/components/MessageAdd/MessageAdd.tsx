import React from 'react';
import './MessageAdd.css'

interface MessageAddProps {

}

export const MessageAdd: React.FC<MessageAddProps> = () => {

   return <div className="messageAdd">

       <img src="/images/data/yoshis.png" alt="" className="yoshis"/>
       <div className="message">
           <div className="messageFrame">

           AGREGA UN COMBO
           </div>
       </div>
   </div>;
}