interface RoomInfor {
    bed_type: string;
    name: string;
    acreage: string;
    comports: string[];
    stock: string;
    price_per_night: string;
    price_per_month: string;
    description: string[];
    available_from: string | number;
    available_to: string | number;
    max_adults: string;
    max_children: string;
    max_babies: string;
}

interface RoomManagement {
    room_id: string;
    branch: string;
    branch_id: string;
    price_per_day: string;
    price_per_month: string;
    name: string;
    description: string[];
    acreage: string;
    available_from: string;
    available_to: string;
    max_adults: string;
    max_children: string;
    max_babies: string;
    bed_type: string;
    stock: string;
    comports: string[];
    images: File[] | string[];
}
