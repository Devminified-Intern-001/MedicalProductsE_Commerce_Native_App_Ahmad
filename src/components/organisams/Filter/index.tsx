import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  ExtendedView,
  ExtendedSwitch,
  ExtendedSlider,
  ExtendedCheckBox,
  ExtendedText,
} from "../../atoms";
import { CustomFlexText } from "../../molecules";
import DropDownArrow from "../../../../svgs/DropDownArrow";
import api from "../../../interceptor";

const ItemsFilter = ({ closeFilter, onApplyFilter }) => {
  const [selectedDiet, setSelectedDiet] = useState<string[]>([]);
  const [onSales, setOnSales] = useState(false);
  const [newArrivals, setNewArrivals] = useState(false);
  const [maxPrice, setMaxPrice] = useState<number>(100);
  const [errorMessage, setErrorMessage] = useState("");
  const dietOptions = ["Sugar Free", "Low Fat", "Fat-Free", "Vegan"];

  const resetFilters = () => {
    setSelectedDiet([]);
    setOnSales(false);
    setNewArrivals(false);
    setMaxPrice(100);
  };

  const applyFilters = async () => {
    try {
      const response = await api.post("/product/get", {
        onSales,
        newArrivals,
        maxPrice: Math.floor(maxPrice),
        dietNeeds: selectedDiet,
      });
      console.log("Server response:", response.data);
      if (response.data.done) {
        console.log("Filter Applied:", response.data.done);
        setErrorMessage(null);
        onApplyFilter(response.data.message);
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error("Some error occur:", error);
      setErrorMessage("Failed to fetch the data from server");
    }
  };

  const toggleDiet = (diet: string) => {
    if (selectedDiet.includes(diet)) {
      setSelectedDiet(selectedDiet.filter((d) => d !== diet));
    } else {
      setSelectedDiet([...selectedDiet, diet]);
    }
  };

  return (
    <ExtendedView style={styles.container}>
      <ExtendedView style={styles.formContainer}>
        <ExtendedView>
          <CustomFlexText
            title="Filter"
            textValue="Clear All"
            flexContainer={styles.flexContent}
            onTitlePress={applyFilters}
            onTextValuePress={resetFilters}
          />
        </ExtendedView>

        <ExtendedView style={styles.horizontalLine}></ExtendedView>

        <ExtendedView style={styles.switchContainer}>
          <ExtendedView>
            <CustomFlexText
              title="On Sales"
              titleStyle={styles.titleLightText}
              textValue={
                <ExtendedSwitch value={onSales} onValueChange={setOnSales} />
              }
              flexContainer={styles.flexContent}
            />
          </ExtendedView>

          <ExtendedView style={styles.spacing}>
            <CustomFlexText
              title="New Arrivals"
              titleStyle={styles.titleLightText}
              textValue={
                <ExtendedSwitch
                  value={newArrivals}
                  onValueChange={setNewArrivals}
                />
              }
              flexContainer={styles.flexContent}
            />
          </ExtendedView>
        </ExtendedView>

        <ExtendedView style={styles.horizontalLine}></ExtendedView>

        <ExtendedView style={styles.sliderContainer}>
          <ExtendedView>
            <CustomFlexText
              title="Price Range"
              titleStyle={styles.titleText}
              textValue={<DropDownArrow />}
              flexContainer={styles.flexContent}
            />
          </ExtendedView>

          <ExtendedView style={styles.sliderStyle}>
            <ExtendedSlider
              minimumValue={0}
              maximumValue={150}
              value={Math.round(maxPrice)}
              onValueChange={(value) => {
                setMaxPrice(value);
              }}
            />
          </ExtendedView>
        </ExtendedView>

        <ExtendedView style={styles.horizontalLine}></ExtendedView>

        <ExtendedView>
          <CustomFlexText
            title="Dietary Needs"
            titleStyle={styles.titleText}
            textValue={<DropDownArrow />}
            flexContainer={styles.flexContent}
          />
        </ExtendedView>

        <ExtendedView style={styles.checkBoxContainer}>
          {dietOptions.map((diet) => (
            <ExtendedCheckBox
              key={diet}
              title={diet}
              checked={selectedDiet.includes(diet)}
              onPress={() => toggleDiet(diet)}
              containerStyle={styles.checkBox}
            />
          ))}
        </ExtendedView>
        {errorMessage ? (
          <ExtendedText style={styles.errorText}>{errorMessage}</ExtendedText>
        ) : null}
      </ExtendedView>
    </ExtendedView>
  );
};

export default ItemsFilter;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#0000003B",
  },
  formContainer: {
    width: "84%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    paddingVertical: "6%",
    backgroundColor: "#FFFFFF",
  },
  flexContent: {
    width: 240,
    height: 30,
    alignItems: "center",
  },
  horizontalLine: {
    backgroundColor: "#00000024",
    height: 1,
    marginBottom: "8%",
    width: "80%",
  },
  titleLightText: {
    fontSize: 16,
    fontWeight: "400",
  },
  switchContainer: {
    width: "84%",
    alignItems: "center",
    justifyContent: "center",
    height: "14%",
  },
  spacing: {
    marginBottom: "4%",
  },
  sliderContainer: {
    width: "84%",
  },
  sliderStyle: {
    marginHorizontal: "2%",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "700",
  },
  checkBoxContainer: {
    width: "80%",
    alignItems: "flex-start",
  },
  checkBox: {
    width: "80%",
    backgroundColor: "transparent",
    borderWidth: 0,
    marginRight: 10,
    right: 18,
    height: 30,
  },
  errorText: {
    color: "red",
    marginTop: "8%",
  },
  rangeInput: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
  },
});
