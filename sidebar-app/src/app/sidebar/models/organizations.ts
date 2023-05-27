export interface InitialOrgUsers {
  id: string;
  name: string;
}

export interface TransformedOrgUsers {
  name: string;
  id?: string;
  items?: TransformedOrgUsers[];
}
