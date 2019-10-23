import React from 'react';
import ReactDOM from 'react-dom';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIdx: 0 };
    this.changeTabs = this.changeTabs.bind(this)
  }

  // nexButton() {
  //   this.setState({title: this.state.title});  
  // }

  changeTabs(e) {
    e.preventDefault();
    const tabsTitle= document.getElementsByClassName('tabs title');
    const tabsContent = document.getElementsByClassName('tabs content');
    tabsTitle.addEventListener("click", () => {
      tabsContent.removeClass('hidden');
    }); 
  }

  render() {
    return(
      <h1>
 
        {this.props.data.map(el => 
          <div class="tabs">
             <span class="tabs title"> 
              {el.title + ' '} 
             </span> 
            <span class="tabs content hidden">
            {el.content}
            </span>  
          </div> 
      )}
      </h1>
    )
  }
}




export default Tabs;

