import React, { Component } from 'react';
import './App.css';

function About(props) {
    return (
        <div id="about" className="container gradient p-5">
            <h1>About Us</h1>
            <h5 class="text-info"> Our menu is prepared simply with the freshest and best ingredients available.  Afternoon Tea is served daily and includes your choice of tea and dessert and includes a fresh baked English Currant Scone, shortbread cookies and sonoma basil spread sandwich.  There is an extensive menu of gourmet pizzas that pair perfectly with our interesting yet approachable wine list.  Since day one, Hooked Cafe has been a leader is sustainable dining, original recipes, and using only the freshest ingredients.  We compost our food and paper waste and recycle everything we can.</h5>
        </div>
    );
}

function Menu(props) {

    //Can we do a for loop?! :)
    //Yep. Several ways:

    //Beginner
    // var dishes = [
    //     <li key="0" className="list-group-item">chicken</li>,
    //     <li key="1" className="list-group-item">mac & cheese</li>
    // ]

    //Intermediate
    var dishObjects = [
        {name:"Cappucino"},
        {name:"Latte"},
        {name:"Mocha Latte"},
        {name:"Expresso"},
        {name:"Flat White"},
        {name:"Machiato"}
    ];
    var dishes = [];
    for(var index in dishObjects) {
        var dish = dishObjects[index];
        dishes.push(<li key={index} className="list-group-item">{dish.name}</li>);
    }

    // //Expert - ES5
    // var dishes = props.dishes.map(function(dish, index){
    //     return <li key={index} className="list-group-item">{dish.name}</li>
    // });

    // //Expert - ES6 :)
    // const dishes = props.dishes.map((dish, index) =>
    //     <li key={index} className="list-group-item">{dish.name}</li>
    // );

    return (
        <div id="menu" className="container gradient p-5">
            <h1>Menu</h1>
            <ul className="list-group">{dishes}</ul>
        </div>
    );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteName: 'Hooked Cafe',
      // dishes: [
      //     {name:"Tea"},
      //     {name:"Coffee"}
      // ]
    };
  }



  render() {
    return (
        <div>
            <div className="container gradient mt-5 p-5">
                <div className="row">
                    <h1>{this.state.websiteName}</h1>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <About />
                    </div>
                    <div className="col-6">
                        <Menu dishes={this.state.dishes} />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
