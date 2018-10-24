import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jobs from './Jobs.js';
import Agents from './Agents.js';
import {Button,Collapse,Well} from 'react-bootstrap';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showAgents: false,
      showJobs: false
    };
  }

  handleClick = (value) => {
    if(value === "Agent"){
      this.setState({ showAgents: !this.state.showAgents })
    }else{
      this.setState({ showJobs: !this.state.showJobs })
    }
    
  }

  render() {
    
    return (
      <div className='container-fluid'>

        <div>        
          <Button onClick={() =>this.handleClick("Agent")}>
            Agents
          </Button>
        </div>
        <div>        
          <Collapse in={this.state.showAgents}>
            <div>
              <Well>
                <Agents />
              </Well>
            </div>
          </Collapse>
          <Button onClick={() =>this.handleClick("Job")}>
            Jobs
          </Button>
        </div>
        <div>        
          <Collapse in={this.state.showJobs}>
            <div>
              <Well>
                <Jobs />
              </Well>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default App;
