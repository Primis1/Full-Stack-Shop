export class Father {
  protected async protectionMethod<T>(prismaMethod: T) {
    try {
      const res = await prismaMethod;
      return res;
    } catch (e) {
      return console.log(e)
    }
  }
}
