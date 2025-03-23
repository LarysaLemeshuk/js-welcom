const monitor = {
  sizes: {
    height: {
      value: 30,
      scale: 'cm // 1',
    },
    width: {
      value: 50,
      scale: 'cm // 2',
    },
  },
  brightness: 750,
  refresh: {
    value: 144,
    scale: 'Grc',
  },
  color: 'black',
  resolution: '4K',
};

// const height = monitor.sizes.height.value;

//const { resolution, color: monitorColor } = monitor;

//console.log(resolution);
//console.log(color);

// Задача: витянути value для ширини та висоти монітору

const {
  sizes: {
    height: { value: heightValue },
    width: { value: widthValue },
  },
} = monitor;

// console.log(heightValue);
// console.log(widthValue);

const {
  sizes: {
    height: { scale: heightScale },
    width: { scale: widthScale },
  },
} = monitor;

console.log(heightScale);
console.log(widthScale);

const { color, brightness, resolution, ...restOfMonitor } = monitor;
