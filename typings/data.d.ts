import { Comport, Province, RoomBedType, TradeMark, Ward } from "./enum";

interface Branch {
    branch_id: string;
    name: string;
    description: string[];
    trademark: TradeMark;
    province: Province;
    ward: Ward;
    url: string;
    best_comforts: Comport[];
    location: string;
    images: string[];
    rooms: Room[];
    surrounding_area: SurroundingArea[];
}

interface Room {
    room_id: string;
    branch_id: string;
    price_per_night: number;
    price_per_month: number;
    name: string;
    description: string[];
    comforts: string[];
    bed_type: RoomBedType;
    booking_turn: number;
    stock: number;
    acreage: number;
    available_from?: Date;
    available_to?: Date;
    max_adults: number;
    max_children: number;
    max_babies: number;
    images: string[];
}

interface SurroundingArea {
    name: string;
    distance: string;
    branch_id: string;
}
