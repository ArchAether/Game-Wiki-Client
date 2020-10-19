export interface Item {
    id: number; //Database Primary Key, not in-game id
    name: string;
    description: string;
    category: string;
    mapLocations: number;
    acquisition: string;
}