export class Father {
  protected async handleSql<T>(response: T): Promise<T> {
    if (!response) {
      throw new Error("Prisma request went wrong!!!");
    }
    return response;
  }

  protected async protectionMethod<T>(prismaMethod: T) {
    try {
      const res = await prismaMethod;
      return await this.handleSql<T>(res);
    } catch (error) {
      return this.handleSql(error);
    }
  }
}