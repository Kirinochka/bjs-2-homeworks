const parseCount = (val) => {
  const x = Number.parseInt(val, 10);
  if (isNaN(x)) {
    throw new Error("Невалидное значение");
  } else {
    return x;
  }
};

const validateCount = (val) => {
  try {
    return parseCount(val);
  } catch (error) {
    return error;
  }
};
class Triangle {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    if (x + y < z || x + z < y || z + y < x) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return this.x + this.y + this.z;
  };

  getArea() {
    const p = 0.5 * (this.x + this.y + this.z);
    const area = Math.sqrt(p * (p - this.x) * (p - this.y) * (p - this.z));
    return +area.toFixed(3);
  };
}

const getTriangle = (x, y, z) => {
  try {
    return new Triangle(x, y, z);
  } catch (error) {
    return {
      getArea: () => {
        return "Ошибка! Треугольник не существует";
      },
      getPerimeter: () => {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
};
