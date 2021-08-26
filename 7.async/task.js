class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (!id) {
      throw new Error("error text");
    }
    if (this.alarmCollection.some((alarm) => alarm.id === id)) {
      console.error("Будильник с таким id существует");
      return;
    }
    this.alarmCollection.push({ time, id, callback });
  }

  removeClock(id) {
    this.alarmCollection = this.alarmCollection.filter(
      (alarm) => alarm.id !== id
    );
  }

  getCurrentFormattedTime() {
    const today = new Date();
    const hour =
      today.getHours() < 10 ? `0${today.getHours()}` : `${today.getHours()}`;
    const minutes =
      today.getMinutes() < 10
        ? `0${today.getMinutes()}`
        : `${today.getMinutes()}`;
    return `${hour}:${minutes}`;
  }

  start() {
    const checkClock = (alarm) => {
      if (alarm.time === this.getCurrentFormattedTime()) {
        alarm.callback();
      }
    };
    if (!this.timerId) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach((alarm) => checkClock(alarm));
      }, 1000);
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    console.log(
      `Печать всех будильников в количетстве: ${this.alarmCollection.length}`
    );
    this.alarmCollection.forEach((alarm, idx) => {
      console.log(`Будильник №${idx + 1} заведён на ${alarm.time}`);
    });
  }

  clearAlarms() {
    clearInterval(this.timerId);
    this.alarmCollection = [];
  }
}

const clock = new AlarmClock();

const today = new Date();
const hour = today.getHours();
const minutes = today.getMinutes();

clock.addClock(
  clock.getCurrentFormattedTime(),
  () => console.log("пора вставать"),
  1
);
clock.addClock(
  `${hour}:${minutes + 1 < 10 ? "0" + (minutes + 1) : minutes + 1}`,
  () => {
    console.log("ещё пять минуточек");
    clock.removeClock(2);
  },
  2
);
clock.addClock(
  `${hour}:${minutes + 2 < 10 ? "0" + (minutes + 2) : minutes + 2}`,
  () => {
    console.log("уже поздно");
    clock.clearAlarms();
    clock.printAlarms();
  },
  3
);
clock.printAlarms();
clock.start();
