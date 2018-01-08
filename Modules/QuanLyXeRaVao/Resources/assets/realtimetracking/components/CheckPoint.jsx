import React from 'react';
import Stores from '../stores/Stores';

export default class CheckPoint extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      amount:0
    }
  }

  componentWillMount(){
    var _self = this;
    Stores.on(`session_step_in_checkpoint_${_self.props.id}`,function(){
      _self.setState({
        amount:_self.state.amount +1
      });
    });

    Stores.on(`session_step_out_checkpoint_${_self.props.id}`,function(){
      _self.setState({
        amount:_self.state.amount - 1
      });
    });
  }

  render(){
    return(
      <th key={this.props.id}>{this.props.name} ({this.state.amount} xe đang kiểm tra)</th>
    )
  }
}
