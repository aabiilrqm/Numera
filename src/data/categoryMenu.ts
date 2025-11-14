import {
  Search,
  Ham,
  SquarePen,
  Trash2,
  CupSoda,
  Citrus,
  Cookie,
  Plus,
} from "lucide-react";
import { JSX } from "react";

type categoryMenu = {
  logo: React.ComponentType<any>,
  label: string, 
  editLogo: React.ComponentType<any>, 
  deleteLogo: React.ComponentType<any>
}

export const category: categoryMenu[]  = [
  {
    logo: Ham,
    label: "Main Course",
    editLogo:  SquarePen   ,
    deleteLogo:  Trash2   ,
  },
  {
    logo:  CupSoda  ,
    label: "Drink",
    editLogo:  SquarePen   ,
    deleteLogo:  Trash2   ,
  },
  {
    logo:  Citrus  ,
    label: "Appetizer",
    editLogo:  SquarePen   ,
    deleteLogo:  Trash2   ,
  },
  {
    logo:  Cookie  ,
    label: "Dessert",
    editLogo:  SquarePen   ,
    deleteLogo:  Trash2   ,
  },
];