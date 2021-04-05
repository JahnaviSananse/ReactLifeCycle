import React, {Component} from 'react';
import {Button, Text} from 'react-native';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'From Previous State',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({name: 'To Current State'});
    }, 5000);
  }
  componentDidUpdate(previousState) {
    if (previousState.name !== this.state.name) {
      alert(previousState.name);
      alert('Yes the state is changed');
    }
  }
  render() {
    return <Text style={{fontSize: 30}}>Render Method Called.... </Text>;
  }
}
