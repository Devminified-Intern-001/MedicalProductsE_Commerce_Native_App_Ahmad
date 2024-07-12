import { StyleSheet, Modal, TouchableWithoutFeedback } from "react-native";
import { ExtendedView } from "../../../../components/atoms";
import { CustomHeader, CustomInput } from "../../../../components/molecules";
import {
  CustomItemsCard,
  ItemsFilter,
} from "../../../../components/organisams";
import { itemsCardData } from "../../../../data/itemsCardData";
import Search from "../../../../../svgs/Search";
import React, { useState } from "react";
import { BasicLayout } from "../../../../layout";

const ProductsPage = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const closeFilter = () => {
    if (isFilterVisible) {
      setIsFilterVisible(false);
    }
  };

  return (
    <BasicLayout>
      <TouchableWithoutFeedback onPress={closeFilter}>
        <ExtendedView>
          <ExtendedView style={styles.header}>
            <CustomHeader
              leftSource={require("../../../../../assets/arrow.png")}
              title="Vegitables"
              rightSource={require("../../../../../assets/menu.png")}
              onPress={toggleFilterVisibility}
            />
          </ExtendedView>
          <ExtendedView style={styles.searchFiled}>
            <CustomInput
              placeholder="Search by items name"
              keyboardType="default"
              lefticon={<Search />}
            ></CustomInput>
          </ExtendedView>
          <ExtendedView style={styles.cardsConatiner}>
            <ExtendedView style={styles.cardsLayout}>
              <CustomItemsCard cardData={itemsCardData} />
            </ExtendedView>
          </ExtendedView>
          <Modal
            visible={isFilterVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={toggleFilterVisibility}
          >
            <TouchableWithoutFeedback onPress={toggleFilterVisibility}>
              <ExtendedView style={styles.modalBackground}>
                <ItemsFilter />
              </ExtendedView>
            </TouchableWithoutFeedback>
          </Modal>
        </ExtendedView>
      </TouchableWithoutFeedback>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: "4%",
  },
  searchFiled: {
    alignItems: "center",
    marginVertical: "4%",
  },
  cardsConatiner: {
    marginBottom: "10%",
  },
  cardsLayout: {
    marginVertical: "4%",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ProductsPage;
