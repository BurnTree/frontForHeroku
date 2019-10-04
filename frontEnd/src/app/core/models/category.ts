export class Category {
  public idcategory: number;
  public name: string;
  public photo: string;
  public toStrin(): string {
    return 'id: ' + this.idcategory + 'name: ' + this.name;
  }
}
