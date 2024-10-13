
export type BranchInforType = {
  name: string;
  description: string[];
  trademark: string
  url? : string;
  province : string;
  ward: string;
  best_comforts: string[];
  location: string;
  surrounding_area: {name : string, distance : string}[];
  images? :  string[];
  branch_id : string;
}
 