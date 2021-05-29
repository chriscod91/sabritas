import React, { Component } from 'react';

class QuantityPicker extends Component {
    state = { 
        name:"chris codina",
        quantity: 1,
     };
    render() { 
        return ( 
            <div className="qp-page">
                <button onClick={this.increaseQuantity} className="btn btn-sm btn-primary">+</button>
                <label>{this.state.quantity}</label>
                <button onClick={this.decreaseQuantity}className="btn btn-sm btn-primary">-</button>
               <h4>{this.state.name}</h4>
               
            </div>
         );
    }

   
    increaseQuantity = () => {
        console.log("button clicked");
        console.log(this.state.name);
       // let current = this.state.quantity + 1;
        // or current += 1;
         
        this.setState({ quantity:  this.state.quantity + 1 }); //valid way of changing the state
        
    };

    decreaseQuantity = () => {
        let newVal = this.state.qunatity - 1;
        //if newVal is not lower than 1 you can change val
        //if newVal is equal to or greater than one allow change

        //decreaseQuantity = () => {
           //(one solution) if (this.state.quantity > 1) {
             // this.setState({ quantity: this.state.quantity - 1 });
            //}
         // };
        
        if(newVal > 0)
        this.setState({ quantity:  newVal });
    };
}
 
export default QuantityPicker;
