// Таймер
const refs = {
  timerElement: document.querySelector('#timer-1'),
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  minutes: document.querySelector('[data-value="mins"]'),
  seconds: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timerId = null;
    this.start();
  }

  
  start() {
    this.startTime = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      const time = this.getTimeComponents(deltaTime);
      // this.updateTimer(time);

      
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
  
  getTimeComponents(time) {
  
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${mins}`;
    refs.seconds.textContent = `${secs}`;
  }

  // updateTimer(time) {
  //   refs.timerElement.textContent = `${days}:${hours}:${mins}:${secs}`;
    
  // }

};



new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 24, 2021'),
});


