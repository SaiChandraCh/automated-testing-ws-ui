import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

class Jobs extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
        {id: '403j', title: 'Task 403', priority: 'High', type: 'Improvement', complete: '100'}, 
        {id: '532j', title: 'Task 532', priority: 'Medium', type: 'Improvement', complete: '30'}, 
        {id: '240j', title: 'Task 240', priority: 'High', type: 'Story', complete: '66'},
        ]
        }
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
        // this.setState({data : data});
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
          <td><input type="button" value="Save" className="btn btn-success" onClick={() => 
                            this.saveRow(id,document.getElementById("title_"+id).value,
                                        document.getElementById("priority_"+id).value,
                                        document.getElementById("type_"+id).value,
                                        document.getElementById("complete_"+id).value)}/>
          </td>
        </tr>
      );
          const rows = this.state.data.map( (rowData) => <Row {...rowData } />);
      
          return (
            <div className={this.props.className}>
            <h1>List of Jobs</h1>
            <Table responsive className="jobs-table">
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
export default Jobs;