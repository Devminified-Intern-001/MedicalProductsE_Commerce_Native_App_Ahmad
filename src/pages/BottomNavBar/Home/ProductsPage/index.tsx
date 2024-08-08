import { StyleSheet, Modal, TouchableWithoutFeedback } from "react-native";
import {
  ExtendedTouchableOpacity,
  ExtendedView,
} from "../../../../components/atoms";
import { CustomHeader, CustomInput } from "../../../../components/molecules";
import {
  CustomItemsCard,
  ItemsFilter,
} from "../../../../components/organisams";
import Search from "../../../../../svgs/Search";
import React, { useState } from "react";
import { BasicLayout } from "../../../../layout";
import { useNavigation } from "@react-navigation/native";

const ProductsPage = () => {
  const navigation: any = useNavigation();
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const closeFilter = () => {
    if (isFilterVisible) {
      setIsFilterVisible(false);
    }
  };

  const handleApplyFilter = (filterData: any[]) => {
    setFilteredProducts(filterData);
    closeFilter();
  };

  return (
    <BasicLayout>
      <TouchableWithoutFeedback onPress={closeFilter}>
        <ExtendedView style={styles.container}>
          <ExtendedView style={styles.header}>
            <CustomHeader
              leftSource={require("../../../../../assets/arrow.png")}
              title="Vegitables"
              rightSource={require("../../../../../assets/menu.png")}
              onPress={toggleFilterVisibility}
              onArrowPress={() =>
                navigation.navigate("BottomNavigationTab", {
                  screen: "Home",
                })
              }
            />
          </ExtendedView>
          <ExtendedView style={styles.searchFiled}>
            <CustomInput
              placeholder="Search by items name"
              keyboardType="default"
              lefticon={<Search />}
            ></CustomInput>
          </ExtendedView>
          <ExtendedView>
            <ExtendedView style={styles.cardsLayout}>
              <CustomItemsCard cardData={filteredProducts} />
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
                <ItemsFilter
                  closeFilter={closeFilter}
                  onApplyFilter={handleApplyFilter}
                />
              </ExtendedView>
            </TouchableWithoutFeedback>
          </Modal>
        </ExtendedView>
      </TouchableWithoutFeedback>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: "4%",
  },
  searchFiled: {
    alignItems: "center",
    marginTop: "4%",
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
