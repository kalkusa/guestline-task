import { Hotel } from "./Hotel";
import { RatePlan } from "./RatePlan";
import { Room } from "./Room";

export type SearchResult = { hotel: Hotel; rooms: Room[]; ratePlans: RatePlan[] }
