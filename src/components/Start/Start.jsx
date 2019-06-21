// Import dependencies
import React from "react";
import { SCButton, SCButtonWrapper, GlobalStyles } from "./styles";
import Cards from "../Cards/Cards";

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: true
    };
  }

  start = (e) => {
    e.stopPropagation();
    this.setState({
      running: !this.state.running
    });

    //this.setState({ running: !this.state.running });
  }
  render() {
    return (
      <>
        <GlobalStyles />
        {this.state.running && (
          <SCButtonWrapper>
            Start?? <SCButton onClick={this.start}/>
          </SCButtonWrapper>
        )}
         {!this.state.running && (
          <Cards running={this.state.running}/>
        )}
      </>
    );
  }
}

export default Start;
