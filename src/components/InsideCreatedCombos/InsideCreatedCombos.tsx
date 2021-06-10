import React from 'react';
import { productNintendo } from '../../containers/App/App';
import { NintendoSwitchProduct } from '../../components/NintendoSwitchProduct/NintendoSwitchProduct';
import './InsideCreatedCombos.css'

interface InsideCreatedCombosProps {
    products: productNintendo[];
    client: string;
    id: number;
    comboTotal: number;
}

export const InsideCreatedCombos: React.FC<InsideCreatedCombosProps> = ({products, client, id, comboTotal}) => {

   return <div className="insideCreatedCombosContainer">
       <h2 className="comboCount">Combo:  {client}</h2>
       <div className="insideCreatedCombosContainer2">
            {products.map(({type, image, name, price, count, id}) => {
                return <NintendoSwitchProduct
                id={id}
                key={id}
                type={type}
                name={name}
                price={price*count!}
                image={image}
                numberOfProducts={count}
                createdCombos={true}
            
                
            />;
            })}
       </div>
      
   </div>;
}