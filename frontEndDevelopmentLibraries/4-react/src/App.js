import './App.css';
import React from 'react';
import PropTypes from 'prop-types';

function App() {
  const JSX = (
    <div>
      {/*This is a comment*/}
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );

  const MyComponent = function() {
    return (
      <div>Hello world!</div>
    )
  }


  const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };

  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          <ChildComponent />
        </div>
      );
    }
  };


  const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };

  const Fruits = () => {
    return (
      <div>
        <TypesOfFruit />
      </div>
    );
  };

  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          <Fruits />
        </div>
      );
    }
  };


  const CurrentDate = (props) => {
    return (
      <div>
        <p>The current date is: {props.date}</p>
      </div>
    );
  };

  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          <CurrentDate date={Date()} />
        </div>
      );
    }
  };


  const List = (props) => {
    return <p>{props.tasks.join(", ")}</p>
  };

  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          <List tasks={["walk dog", "workout"]}/>
          <h2>Tomorrow</h2>
          <List tasks={["walk dog", "workout", "clean room"]}/>
        </div>
      );
    }
  };


  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }

  Items.defaultProps = {
    quantity: 0
  }

  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items quantity={10}/>
    }
  };


  class App extends React.Component {
    constructor(props) {
      super(props);

    }
    render() {
      return (
          <div>
              <Welcome name={'everyone'}/>
          </div>
      );
    }
  };

  class Welcome extends React.Component {
    constructor(props) {
      super(props);

    }
    render() {
      return (
          <div>
            <p>Hello, <strong>{this.props.name}</strong>!</p>
          </div>
      );
    }
  };


  class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };

  const Camper = props => <p>{props.name}</p>;

  Camper.defaultProps = { name : 'CamperBot' };

  Camper.propTypes = { name : PropTypes.string.isRequired };


  class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName : 'Mars'
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.firstName}</h1>
        </div>
      );
    }
  };


  class RenderState extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      const name = this.state.name;
      return (
        <div>
          <h1>{name}</h1>
        </div>
      );
    }
  };


  class SetState extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        name: 'React Rocks!'
      })
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };


  class BindThisToClassMethod extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "Hello"
      };
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
      this.setState({
        text: "You clicked!"
      });
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.text}</h1>
        </div>
      );
    }
  };


  class ToggleState extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        visibility: false
      };
      this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility() {
      this.setState(state => {
        if (state.visibility === true) {
           return { visibility: false };
        } else {
          return { visibility: true };
        }
      });
    }

    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  }


  class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
    }
    increment() {
      this.setState(state => ({
        count: state.count + 1
      }));
    }
    decrement() {
      this.setState(state => ({
        count: state.count - 1
      }));
    }
    reset() {
      this.setState(state => ({
        count: 0
      }));
    }

    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };


  return (
    <div>
      {JSX}
      <MyComponent /> 

      <ParentComponent />

      <TypesOfFood />

      <Calendar />

      <ToDo />

      <ShoppingCart />

      <App />

      <CampSite />

      <StatefulComponent />

      <RenderState />

      <SetState />

      <BindThisToClassMethod />

      <ToggleState />

      <Counter />
    </div>
  );
}

export default App;
