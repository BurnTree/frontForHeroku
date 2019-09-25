export class Category {
  public idcategory: number;
  public name: string;
  public toString(): string {
    return 'id: ' + this.idcategory + 'name: ' + this.name;
  }
}
