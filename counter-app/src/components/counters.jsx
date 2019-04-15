import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Render-counters");
    const {onReset, counters, onDelete, onIncrement} = this.props;
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary m-2 btn-sm"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
