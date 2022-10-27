import { Facility } from "./Facility";
import { Position } from "./Position";
import { Image } from "./Image"

export type Hotel = {
    id: number;
    name: string;
    description: string;
    address1: string;
    address2: string;
    postcode: string;
    town: string;
    country: string;
    countryCode: string;
    starRating: number;
    facilities: Facility[];
    telephone: string;
    email: string;
    images: Image[];
    checkInHours: string;
    checkInMinutes: string;
    checkOutHours: string;
    checkOutMinutes: string;
    position: Position;
}