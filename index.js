// Таймер



const timer = {
  start() {
    const startTime = new Date('Aug 24, 2021');

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const time = getTimeComponents(deltaTime);
      updateTimer(time);

      // console.log(`${days}:${hours}:${mins}:${secs}`);
    }, 1000);
  },
};

timer.start();

function pad(value) {
  return String(value).padStart(2, '0');
};

function getTimeComponents(time) {
  /*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
};

function updateTimer({ days, hours, mins, secs }) {
  selectorForTimer.textContent = `${days}:${hours}:${mins}:${secs}`;
};

const selectorForTimer = document.querySelector('#timer-1');
