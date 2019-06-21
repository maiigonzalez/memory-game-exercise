// Import dependencies
import React from 'react';
import { GlobalStyles } from './styles';

class Board extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        running: false,
      }
    }
    
  render(){
    return (
      <> 
        <GlobalStyles />
        <Start />
      </>
    )
  }
}
  
export default Board;