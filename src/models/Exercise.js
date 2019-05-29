import React from 'react';

class Exercise {
  constructor(name, duration, order) {
    this.name = name;
    this.duration = duration;
    this.order = order;
    this.completed = false;
  }
}

export default Exercise;
