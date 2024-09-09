// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function seal(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }
  