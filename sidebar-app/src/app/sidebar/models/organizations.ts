export interface InitialOrgUsers extends User {}

export interface TranformedOrgUsers {
   name: string;
   items: Item[] & User[];
}

interface Item {
    name: string;
    items: User[]
}

interface User {
    id: string;
    name: string;
}