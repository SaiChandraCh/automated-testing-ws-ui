import React, { Component } from 'react';
import './Agents.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

class Agents extends Component{
  constructor(props){
    super(props);
    this.textInput = React.createRef();
    this.state = {
      data: [
        {id: 403, title: 'Task 403', priority: 'High', type: 'Improvement', complete: 100}, 
        {id: 532, title: 'Task 532', priority: 'Medium', type: 'Improvement', complete: 30}, 
        {id: 240, title: 'Task 240', priority: 'High', type: 'Story', complete: 66}]
        }
      }

      addAgent =() =>{
        var product = {
          id: "",
          title: "",
          priority: "",
          type: "",
          complete: ""
        }
        this.state.data.push(product);
        this.setState({data : this.state.data});
      }

      removeRow =(id) =>{
        if(window.confirm('Delete the item?')){
          this.setState({data: this.state.data.filter((row) => row.id !== id)});
        } 
      }

      editRow =(id) =>{
        document.getElementById(id).removeAttribute("disabled");
        document.getElementById("title_"+id).removeAttribute("disabled");
        document.getElementById("priority_"+id).removeAttribute("disabled");
        document.getElementById("type_"+id).removeAttribute("disabled");
        document.getElementById("complete_"+id).removeAttribute("disabled");
      }

      saveRow =(id,title,priority,type,complete) =>{
        document.getElementById(id).setAttribute("disabled",true);
        document.getElementById("title_"+id).setAttribute("disabled",true);
        document.getElementById("priority_"+id).setAttribute("disabled",true);
        document.getElementById("type_"+id).setAttribute("disabled",true);
        document.getElementById("complete_"+id).setAttribute("disabled",true);
        var data = this.state.data;
        data.forEach(element => {
          if(element.id === id){
            element.title = title;
            element.priority = priority;
            element.type = type;
            element.complete = complete;
          }
        });
      }
      
       render(){
        const Row = ({id, title, priority, type, complete}) => (
            <tr>
            <td><input type="text" defaultValue={id} id={id} placeholder={id} disabled /></td>
            <td><input type="text" defaultValue={title} id={"title_"+id} placeholder={title} disabled /></td>
            <td><input type="text" defaultValue={priority} id={"priority_"+id} placeholder={priority} disabled /></td>
            <td><input type="text" defaultValue={type} id={"type_"+id} placeholder={type} disabled /></td>    
            <td><input type="text" defaultValue={complete} id={"complete_"+id} placeholder={complete} disabled /></td>
            <td><input type="button" value="Delete" className="btn btn-danger" onClick={() => this.removeRow(id)} /></td>
            <td><input type="button" value="Edit" className="btn btn-info" onClick={() => this.editRow(id)} /></td>
            <td><input type="button" value="Save" className="btn btn-success" 
              onClick={() => this.saveRow(id,document.getElementById("title_"+id).value,
                                          document.getElementById("priority_"+id).value,
                                          document.getElementById("type_"+id).value,
                                          document.getElementById("complete_"+id).value)}/>
            </td>
          </tr>
        );
            const rows = this.state.data.map( (rowData) => <Row {...rowData } />);
            const addAgent = <input type="button" className="btn btn-primary" value="+add Agent" onClick={()=> this.addAgent(this)}/>
            return (
              <div className={this.props.className}>
              {addAgent}
              <h1>List of Agents</h1>
              <Table responsive className="agents-table">
              <thead>
                <tr>
                  <th>id</th>
                  <th>title</th>
                  <th>priority</th>
                  <th>type</th>
                  <th>complete</th>
                </tr>
              </thead>
                <tbody>
                  {rows}
                </tbody>
                </Table>
              </div>
            );
    }
}
export default Agents;