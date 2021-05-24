import React, { Component } from 'react';
import './App.css';
import Another from './Another/Another';

class App extends Component {
  state = {
    menu:[
      {url: 'https://hips.hearstapps.com/vidthumb/images/190130-chicken-shwarma-horizontal-1551285400.png', name: 'Chicken Shawarma', price: 50},
      {url:'https://img.freepik.com/free-photo/sev-puri_57665-3601.jpg?size=626&ext=jpg', name: 'Spicy Fuchka' , price: 35},
      {url:'https://pinchofyum.com/wp-content/uploads/Tofu-Burgers-Square.jpg', name: 'Burger' , price:150},
      {url:'https://recipe-graphics.grocerywebsite.com/0_GraphicsRecipes/5607_4k.jpg', name: 'Chicken wings', price:250}
    ]
  };

  orderNow(index){
    if(index === 0){
      console.log(`Your order is ${this.state.menu[0].name}. Price ${this.state.menu[0].price}`);
      alert(`You ordered for ${this.state.menu[0].name}`)
    }else if(index === 1){
      console.log(
        `Order received ${this.state.menu[1].name}. Price ${this.state.menu[1].price}`
      );
      alert(`You ordered for ${this.state.menu[1].name}`)
    }
    else if(index === 2){  
      console.log(
        `Order received ${this.state.menu[2].name}. Price ${this.state.menu[2].price}`
      );

      alert(`You ordered for ${this.state.menu[2].name}`);

    }
    else if(index === 3){
      console.log(
        `Order received ${this.state.menu[3].name}. Price ${this.state.menu[3].price}`
      );

      alert(`You ordered for ${this.state.menu[3].name}`);
    }
  }

  discount = () => {
    this.setState({
      menu:[
        {url: 'https://hips.hearstapps.com/vidthumb/images/190130-chicken-shwarma-horizontal-1551285400.png', name: 'Chicken Shawarma', price: 50},
        {url:'https://img.freepik.com/free-photo/sev-puri_57665-3601.jpg?size=626&ext=jpg', name: 'Spicy Fuchka' , price: 35},
        {url:'https://pinchofyum.com/wp-content/uploads/Tofu-Burgers-Square.jpg', name: 'Burger' , price:70},
        {url:'https://recipe-graphics.grocerywebsite.com/0_GraphicsRecipes/5607_4k.jpg', name: 'Chicken wings', price:250}
      ]
    })
    console.log('hi');
  }

  
  
  render() {
    const style = {
      backgroundColor: 'blue',
      width: '300px',
      height: '250px',
      border: '1px solid black',
      boxShadow: '2px 2px 2px red',
      margin: '1rem 0 0 2rem',
      display: 'inline-block'
    };
    const buttonStyle= {
      fontSize: '20px',
      backgroundColor: '#906652',
      color: 'pink',
      boxShadow: '1px 1px 1px yellow'
    }

    return (
      <div className="App">
        <h3>CHATPATA</h3>
            <div style={style}>
                <Another url={this.state.menu[0].url} name={this.state.menu[0].name}
                price={this.state.menu[0].price}/>
                <button style={buttonStyle} 
                onClick = {() => this.orderNow(0)}>Order now!</button>
            </div>
            <div style={style}>
            <Another url={this.state.menu[1].url} name={this.state.menu[1].name}
            price={this.state.menu[1].price}/> 
            
            <button style={buttonStyle} 
                onClick = {() => this.orderNow(1)}>Order now!</button>
            </div>
            <div style={style}>
              <Another url={this.state.menu[2].url} name={this.state.menu[2].name}
              price={this.state.menu[2].price}/>
              
             <button style={buttonStyle} 
                onClick = {() => this.orderNow(2)}>Order now!</button>
                <button className="discount" onClick={this.discount}>Discount Available</button>
            </div>
            <div style={style}>
              <Another url={this.state.menu[3].url} name={this.state.menu[3].name}
              price={this.state.menu[3].price}/>
              <button style={buttonStyle} 
                onClick = {() => this.orderNow(3)}>Order now!</button>
            </div>


      </div>
    );
  }
}

export default App;
