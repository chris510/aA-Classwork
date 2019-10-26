import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: Math.floor(Math.random() * 100),
      title: "",
      body: "",
      // receiveTodo: this.props.receiveTodo()
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // uniqueId(){
  //   // return new Date().getTime();
  //   return Math.floor(Math.random() * 100);
  // }

  updateTitle(e) {
    this.setState({ title: e.target.value});
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState({
      id: Math.floor(Math.random() * 100),
      title: "",
      body: "",
    });
    // Promise.resolve()
    //   .then(() => this.props.receiveTodo(this.state))
    //   .then(() => {
    //     this.setState({
    //       id: Math.floor(Math.random() * 100),
    //       // title: '',
    //       // body: ''
    //     });
    //   });
  }

  render(){
    return (
     <form onSubmit={this.handleSubmit}>
       <h3>Add Task</h3>
       <label>Title
         <br/>
         <input 
          onChange={this.updateTitle} 
          type="text" 
          value={this.state.title}/>
       </label>
       <br/>
       <label>Body
         <br/>
        <textarea 
          onChange={this.updateBody} 
          type="text" 
          value={this.state.body} cols="30" rows="10">  
        </textarea>
       </label>
       <br/>
       <input type="submit" value= "Add Task"/>
     </form>
    )
  }
}

export default TodoForm; 