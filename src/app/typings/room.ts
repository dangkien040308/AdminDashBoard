export type RoomInfor = {
  branch : string,
  bed_type : string,
  name : string,
  acreage : string,
  comports : string[],
  status : string,
  stock : string,
  price_per_day : string,
  price_per_month : string,
  description : string[],
  available_from : string | number,
  available_to : string | number,
  max_adults : string,
  max_children : string,
  max_babies : string,
}

export type RoomStatus = 'availabe' | 'full'

export type RoomComport = {
  free_laundry_room? : boolean,
  HCM_center? :  boolean,
  HN_center? : boolean,
  cleaning_services? : boolean,
  suitable_for_1_2_people? : boolean,
  high_speed_wifi? : boolean,
  area_from_20m2_32m2? : boolean,
  city_view? : boolean,
  river_view? : boolean,
  balcony? : boolean,
  desk_working? : boolean,
  utility_kitchen? : boolean,
  microwave_open? : boolean,
  private_bathroom? : boolean,
  minibar_refrigerator? : boolean,
  security_247? : boolean,
  gym? : boolean,
  comfortable_room? : boolean,
  breakfast_buffet? : boolean,
  pool? : boolean,
  civilized_community? : boolean,
  free_laundry? : boolean,
  television? : boolean,
  beauty_scene? : boolean,
  airport_support? : boolean
}

export type RoomManagement = {
  roomId : string,
  branch : string,
  branch_id : string,
  person_per_room : string,
  price_per_day : string,
  price_per_month : string,
  name : string,
  description : string[],
  status : RoomStatus | string,
  acreage : string,
  available_from : string,
  available_to : string,
  max_adults : string,
  max_children : string,
  max_babies : string,
  bed_type : string,
  stock : string,
  comports : string[],
  images : File[] | string[]
}

type RoomComportItem = 'pool' | 'free_laundry' | 'HCM_center' | 'HN_center' | 'free_laundry_room' | 'suitable_for_1_2_people' | 'high_speed_wifi' | 'area_from_20m2_32m2' | 'city_view' | 'river_view' | 'balcony' | 'desk_working' | 'utility_kitchen' | 'microwave_open' | 'private_bathroom' | 'minibar_refrigerator' | 'security_247' | 'gym' | 'comfortable_room' | 'breakfast_buffet' | 'civilized_community' | 'free_laundry' | 'television' | 'beauty_scene' | 'airport_support'
export type RoomComportArray = RoomComportItem[]