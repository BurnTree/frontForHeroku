export class Item {
  id: number;
  name: string;
  punkt: number;
  podpunkt: number;
}
export class Punkt {
  name: string;
  url: string;
}
export class PodPunkt{
  name: string;
  url: string;
}
export enum enumPunkt {
  STREET = 1,
  NOTSTREET = 2,
  ENYTHING = 3
}

export enum enumPodPunkt {
  ESKO = 1,
  CEP = 2,
  NOTTODAY = 3
}
