import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ImageSourcePropType,
  ActivityIndicator,
} from "react-native";
import { ExtendedView, ExtendedText } from "../../atoms";
import { ItemCard } from "../../molecules";
import { SafeAreaView } from "react-native-safe-area-context";
import Routes from "../../../routes";
import { useNavigation } from "@react-navigation/native";
import api from "../../../interceptor";

interface ItemsCartData {
  title: string;
  source: ImageSourcePropType;
  itemDescrip: string;
  itemPrice: number;
  itemQt: string;
  backgroundColor?: string;
  defaultImage: string;
  shortTitle?: string;
  description: string;
  price: number;
  unit: string;
}

interface CategoriesCardRowProps {
  style?: object;
  cardData?: ItemsCartData[];
}

const CustomItemsCard = ({ cardData }: CategoriesCardRowProps) => {
  const [items, setItems] = useState<ItemsCartData[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation: any = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      if (cardData && cardData.length > 0) {
        setLoading(true);

        try {
          const fetchImagesPromises = cardData.map(async (item) => {
            try {
              const imageResponse = await api.get(
                `/img/${encodeURIComponent(item.defaultImage)}`
              );
              return {
                title: item.shortTitle || item.title,
                source: {
                  uri: imageResponse.request.responseURL,
                } as ImageSourcePropType,
                itemDescrip: item.description,
                itemPrice: item.price,
                itemQt: `${item.unit}`,
                backgroundColor: "#FBD54E4A",
                defaultImage: item.defaultImage,
                description: item.description,
                price: item.price,
                unit: item.unit,
              };
            } catch (imageError) {
              console.error(
                "Failed to fetch image for item:",
                item,
                imageError
              );
              return {
                title: item.shortTitle || item.title,
                source: { uri: "" } as ImageSourcePropType,
                itemDescrip: item.description,
                itemPrice: item.price,
                itemQt: `${item.unit}`,
                backgroundColor: "#FBD54E4A",
                defaultImage: item.defaultImage,
                description: item.description,
                price: item.price,
                unit: item.unit,
              };
            }
          });

          const data = await Promise.all(fetchImagesPromises);
          setItems(data);
        } catch (error) {
          console.error("Data fetching failed:", error);
          setErrorMessage("Failed to fetch data from server");
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(true);

        try {
          const response = await api.post("/product/get", { maxNumber: 6 });
          console.log("Server response:", response.data);

          if (response.data.done) {
            const fetchImagesPromises = response.data.message.map(
              async (item: any) => {
                try {
                  const imageResponse = await api.get(
                    `/img/${encodeURIComponent(item.defaultImage)}`
                  );
                  return {
                    title: item.shortTitle || item.title,
                    source: {
                      uri: imageResponse.request.responseURL,
                    } as ImageSourcePropType,
                    itemDescrip: item.description,
                    itemPrice: item.price,
                    itemQt: `${item.unit}`,
                    backgroundColor: "#FBD54E4A",
                    // defaultImage: item.defaultImage,
                    // description: item.description,
                    // price: item.price,
                    // unit: item.unit,
                  };
                } catch (imageError) {
                  console.error(
                    "Failed to fetch image for item:",
                    item,
                    imageError
                  );
                  return {
                    title: item.shortTitle || item.title,
                    source: { uri: "" } as ImageSourcePropType,
                    itemDescrip: item.description,
                    itemPrice: item.price,
                    itemQt: `${item.unit}`,
                    backgroundColor: "#FBD54E4A",
                    // defaultImage: item.defaultImage,
                    // description: item.description,
                    // price: item.price,
                    // unit: item.unit,
                  };
                }
              }
            );

            const data = await Promise.all(fetchImagesPromises);
            setItems(data);
          } else {
            setErrorMessage(response.data.message);
            // setItems(itemsCardData);
          }
        } catch (error) {
          console.error("Data fetching failed:", error);
          setErrorMessage("Failed to fetch data from server");
          // setItems(itemsCardData);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [cardData]);

  return (
    <SafeAreaView>
      <ExtendedView style={styles.row}>
        {loading ? (
          <ExtendedView style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#FBD54E" />
            <ExtendedText>Loading...</ExtendedText>
          </ExtendedView>
        ) : errorMessage ? (
          <ExtendedText style={styles.errorText}>{errorMessage}</ExtendedText>
        ) : (
          items.map((data, index) => (
            <ItemCard
              key={index}
              title={data.title}
              source={data.source}
              itemDescrip={data.itemDescrip}
              itemPrice={data.itemPrice}
              itemQt={data.itemQt}
              backgroundColor={data.backgroundColor}
              cardLayoutStyle={styles.cardLayout}
              flexStyle={styles.cardContainer}
              imageStyle={styles.image}
              imgCoverStyle={styles.imgCover}
              itemTitle={styles.itemTitle}
              description={styles.description}
              priceDetail={styles.priceDetail}
              onPress={() => navigation.navigate(Routes.ShopItems)}
            />
          ))
        )}
      </ExtendedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    bottom: "8%",
    height: "100%",
  },
  cardLayout: {
    minHeight: "25%",
    minWidth: "36%",
    maxWidth: "36%",
    paddingBottom: "6%",
    marginVertical: "8%",
  },
  cardContainer: {},
  image: {
    height: 44,
    width: 44,
    resizeMode: "cover",
  },
  imgCover: {
    width: 102,
    height: 80,
  },
  itemTitle: {
    marginLeft: "9%",
    fontSize: 14,
    bottom: 6,
  },
  description: {
    marginLeft: "9%",
    fontSize: 10,
    bottom: 6,
  },
  priceDetail: {
    bottom: 22,
    width: 102,
    alignSelf: "center",
    justifyContent: "space-between",
  },
  errorText: {
    color: "red",
    marginTop: "8%",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100%",
  },
});

export default CustomItemsCard;
