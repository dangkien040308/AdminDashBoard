
export type BranchInforType = {
  name: string;
  description: string[];
  trademark: {
    name : string,
    id : string
  };
  url? : string;
  province : string;
  ward: string;
  best_comforts: string[];
  location: string;
  surrounding_area?: string[];
  images? :  string[];
}
 