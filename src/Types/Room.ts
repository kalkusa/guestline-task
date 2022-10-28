import { Facility } from "./Facility";
import { Image } from "./Image";
import { Occupancy } from "./Occupancy";

export type Room = {
    bedConfiguration: string;
    disabledAccess: boolean;
    facilities: Facility[];
    id: string;
    images: Image[];
    longDescription: string;
    name: string;
    ocuppancy: Occupancy;
    
}