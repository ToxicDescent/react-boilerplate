import React, { Component } from 'react';
import styles from './Counter.css';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    const count = this.state.count;

    return (
      <div className={styles.body}>
        <div className={styles.header}>Counter Example</div>
        Current Count: {count}
        <div className={styles.buttonArea}>
          <button
            className={styles.button}
            onClick={() => { this.setState({ count: count + 1 }); }}>
            Add 1
          </button>
          <button
            className={styles.button}
            onClick={() => { this.setState({ count: count + 2 }); }}>
            Add 2
          </button>
          <button
            className={styles.button}
            onClick={() => { this.setState({ count: count + 4 }); }}>
            Add 4
          </button>
        </div>
      </div>
    );
  }
}
