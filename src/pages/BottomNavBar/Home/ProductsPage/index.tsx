import { StyleSheet } from "react-native";
import { ExtendedView, ExtendedText } from "../../../../components/atoms";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomHeader, CustomInput } from "../../../../components/molecules";
import { CustomItemsCard } from "../../../../components/organisams";
import { itemsCardData } from "../../../../data/itemsCardData";
import Search from "../../../../../svgs/Search";
import React from "react";

const ProductsPage = () => {
  return (
    <SafeAreaView>
      <ExtendedView>
        <ExtendedView>
          <CustomHeader
            leftSource={require("./assets/arrow.png")}
            title="Vegitables"
            rightSource={require("./assets/menu.png")}
          />
        </ExtendedView>

        <ExtendedView>
          <CustomInput
            placeholder="Search by items name"
            keyboardType="default"
            lefticon={<Search />}
          ></CustomInput>
        </ExtendedView>

        <ExtendedView>
          <ExtendedView>
            <CustomItemsCard cardData={itemsCardData} />
          </ExtendedView>
        </ExtendedView>
      </ExtendedView>
    </SafeAreaView>
  );
};

export default ProductsPage;
