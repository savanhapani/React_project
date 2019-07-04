import * as React from 'react';
import { CardBox, CardCont } from './CardStyle';



class Card extends React.Component{
    constructor(){
        super();
        this.state = {
            algo: ["Collection" , "Heap" , "If Algos" , "Sets" , "Sorting" , "String Sort" , "Struct" , "Value Modifier" ,"Util" , "Transform" , "Template" ]   
        }
    }
    render() {
         return(
             <div className="card-div">
                 {
            
            this.state.algo.map((data,key) =>{
            return(
              <CardBox key={key}>
                  <div className='front'>
                      {data}
                  </div>
                  <div className='back'>
                  We might suggest that one is more efficient or that one simply works faster or uses less memory. As we study algorithms, we can learn analysis techniques that allow us to compare and contrast solutions based solely on their own characteristics, not the characteristics of the program or computer used to implement them.
                  </div>
              </CardBox>
            
            
              )
              
        })
    }
    </div>
         );
    }
}

export default Card;