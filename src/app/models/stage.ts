export interface Location {
    id?:number;
    name:string;
    date:number | null;
    description:string;
    lat: string;
    lon: string;
    type: string;
}

export interface Stage {
    id?:number;
    name:string;
    date:number | null;
    description:string;
    locations: Location[] | null
}