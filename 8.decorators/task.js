function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];
  return function (...args) {
    const hash = args.join(",");

    let cacheItem = cache.find((val) => val.hash === hash);
    if (cacheItem) {
      console.log("Из кэша: " + cacheItem.result);
      return "Из кэша: " + cacheItem.result;
    }
    let result = func.call(this, ...args);
    cache.push({ hash, result });
    if (cache.length > 5) cache.shift();
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  };
}

function debounceDecoratorNew(func, ms) {
  // Ваш код
  let isStop = false;
  let timeout;
  return function (...args) {
    clearTimeout(timeout);

    if (isStop == false) {
      func.call(this, ...args);
      isStop = true;
    }

    timeout = setTimeout(() => {
      isStop = false;
    }, ms);
  };
}

function debounceDecorator2(func, ms) {
  // Ваш код
  let isStop = false;
  let timeout;
  function wrapper(...args) {
    clearTimeout(timeout);

    if (isStop == false) {
      func.call(this, ...args);
      isStop = true;
    }

    timeout = setTimeout(() => {
      isStop = false;
      wrapper.count++;
    }, ms);
  }
  wrapper.count = 0;

  return wrapper;
}

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(upgradedSendSignal);
setTimeout(upgradedSendSignal, 300);
setTimeout(upgradedSendSignal, 900);
setTimeout(upgradedSendSignal, 1200);
setTimeout(upgradedSendSignal, 2300);
setTimeout(upgradedSendSignal, 4400);
setTimeout(upgradedSendSignal, 4500);
