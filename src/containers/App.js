import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';


class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  onSearchChange = (event) =>{
    this.setState({searchField: event.target.value})
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({robots: user}) )
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return(
      <div className='tc'>
        <h1 className='f2'>Welcome to RoboSearch</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}

export default App;
