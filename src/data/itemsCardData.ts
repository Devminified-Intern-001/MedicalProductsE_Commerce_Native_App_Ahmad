import { ImageSourcePropType } from "react-native";

export interface ItemsCartData {
  title: string;
  source: ImageSourcePropType;
  itemDescrip: string;
  itemPrice: number;
  itemQt: string;
  backgroundColor?: string;
  defaultImage: ImageSourcePropType;
  shortTitle?: string;
  description: string;
  price: number;
  unit: string;
}

export const itemsCardData: ItemsCartData[] = [
  {
    title: "Carrot",
    source: require("../../assets/Carrots.png") as ImageSourcePropType,
    itemDescrip: "Very fresh and new product.",
    itemPrice: 50,
    itemQt: "1",
    backgroundColor: "#FBD54E4A",
    defaultImage: require("../../assets/Carrots.png") as ImageSourcePropType,
    description: "Very fresh and new product.",
    price: 50,
    unit: "1",
  },
  {
    title: "Tomato",
    source: require("../../assets/tomato.png") as ImageSourcePropType,
    itemDescrip: "Very fresh and new product.",
    itemPrice: 50,
    itemQt: "1",
    backgroundColor: "#34A85326",
    defaultImage: require("../../assets/tomato.png") as ImageSourcePropType,
    description: "Very fresh and new product.",
    price: 50,
    unit: "1",
  },
  {
    title: "Cabbage",
    source: require("../../assets/cabbage.png") as ImageSourcePropType,
    itemDescrip: "Very fresh and new product.",
    itemPrice: 50,
    itemQt: "1",
    backgroundColor: "#DB00FF1A",
    defaultImage: require("../../assets/cabbage.png") as ImageSourcePropType,
    description: "Very fresh and new product.",
    price: 50,
    unit: "1",
  },
  {
    title: "Turnip",
    source: require("../../assets/turnip.png") as ImageSourcePropType,
    itemDescrip: "Very fresh and new product.",
    itemPrice: 50,
    itemQt: "1",
    backgroundColor: "#FBD54E4A",
    defaultImage: require("../../assets/turnip.png") as ImageSourcePropType,
    description: "Very fresh and new product.",
    price: 50,
    unit: "1",
  },
  {
    title: "Turnip",
    source: require("../../assets/turnip.png") as ImageSourcePropType,
    itemDescrip: "Very fresh and new product.",
    itemPrice: 50,
    itemQt: "1",
    backgroundColor: "#FBD54E4A",
    defaultImage: require("../../assets/turnip.png") as ImageSourcePropType,
    description: "Very fresh and new product.",
    price: 50,
    unit: "1",
  },
  {
    title: "Tomato",
    source: require("../../assets/tomato.png") as ImageSourcePropType,
    itemDescrip: "Very fresh and new product.",
    itemPrice: 50,
    itemQt: "1",
    backgroundColor: "#EB433526",
    defaultImage: require("../../assets/tomato.png") as ImageSourcePropType,
    description: "Very fresh and new product.",
    price: 50,
    unit: "1",
  },
];
