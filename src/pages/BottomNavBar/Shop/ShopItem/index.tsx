// import React, { useState, useEffect } from "react";
// import { StyleSheet, Image, ImageSourcePropType } from "react-native";
// import {
//   ExtendedView,
//   ExtendedText,
//   ExtendedItemsText,
//   ExtendedRating,
//   ExtendedTouchableOpacity,
// } from "../../../../components/atoms";
// import { CustomButton, CustomHeader } from "../../../../components/molecules";
// import ItemSlideShow from "../../../../../src/components/organisams/ItemSlideShow";
// import { BasicLayout } from "../../../../layout";
// import { ShoppingCartIcon } from "../../../../../svgs/index";
// import { useNavigation } from "@react-navigation/native";
// import Routes from "../../../../routes";
// import api from "../../../../interceptor";

// interface ShopItemsData {
//   imageUrl: ImageSourcePropType;
//   itemName: string;
//   description: string;
//   nutritionFacts: string;
//   calories: string;
//   price: string;
// }

// const ShopItemPage: React.FC = () => {
//   const [selectedItemIndex, setSelectedItemIndex] = useState(0);
//   const [shopItemsData, setShopItemsData] = useState<ShopItemsData[]>([]);
//   const [itemImages, setItemImages] = useState<{ uri: string }[]>([]);
//   const navigation: any = useNavigation();
//   let [counter, setCounter] = useState(0);

//   useEffect(() => {
//     const fetchProductData = async () => {
//       try {
//         const response = await api.post(`/product/get?maxNumber=10`, {
//           onSales: true,
//         });

//         console.log("Response received:", response.data);

//         const products = response.data.message;
//         const productTitles = products.map((product: any) => product.title);

//         const productDetailsPromises = productTitles.map((title: string) =>
//           api.post(`/product/${title}`)
//         );
//         const productDetailsResponses = await Promise.all(
//           productDetailsPromises
//         );

//         const images: { uri: string }[] = [];
//         const fetchedData = productDetailsResponses.map((res: any) => {
//           const product = res.data.message;
//           images.push({ uri: product.defaultImage });
//           return {
//             imageUrl: { uri: product.defaultImage },
//             itemName: product.title,
//             description: product.description,
//             nutritionFacts: product.nutritionFacts,
//             calories: product.calories,
//             price: product.price.toString(),
//           };
//         });

//         setShopItemsData(fetchedData);
//         setItemImages(images);
//       } catch (error) {
//         console.error("Error fetching product data:", error);
//       }
//     };

//     fetchProductData();
//   }, []);

//   function incrementCount() {
//     setCounter(counter + 1);
//   }

//   function decrementCount() {
//     if (counter > 0) {
//       setCounter(counter - 1);
//     }
//   }

//   const handleItemChange = (index: number) => {
//     setSelectedItemIndex(index);
//   };

//   return (
//     <ExtendedView style={styles.pageContainer}>
//       <ExtendedView style={styles.header}>
//         <CustomHeader
//           leftSource={require("../../../../../assets/arrow.png")}
//           title="Shop Items"
//           rightSource={require("../../../../../assets/shoppingCartImg.png")}
//           titleStyle={styles.title}
//           onArrowPress={() => navigation.goBack()}
//         />
//       </ExtendedView>
//       <ExtendedView style={styles.contentContainer}>
//         <BasicLayout>
//           <ExtendedView style={styles.itemsSwiper}>
//             <ItemSlideShow
//               itemsData={shopItemsData}
//               onIndexChanged={handleItemChange}
//             />
//           </ExtendedView>

//           {shopItemsData.length > 0 && (
//             <ExtendedView style={styles.mapItemsData}>
//               <ExtendedView style={styles.flexStyle}>
//                 <ExtendedView>
//                   <ExtendedItemsText
//                     style={styles.titleStyle}
//                     itemName={shopItemsData[selectedItemIndex].itemName}
//                   ></ExtendedItemsText>
//                 </ExtendedView>

//                 <ExtendedView style={styles.flexBox}>
//                   <ExtendedView style={styles.ratingIconBackground}>
//                     <ExtendedRating />
//                   </ExtendedView>

//                   <ExtendedView style={styles.rightImgContainer}>
//                     <ExtendedTouchableOpacity onPress={decrementCount}>
//                       <Image
//                         source={require("../../../../../assets/minus.png")}
//                       />
//                     </ExtendedTouchableOpacity>
//                     <ExtendedText>{counter}</ExtendedText>
//                     <ExtendedTouchableOpacity onPress={incrementCount}>
//                       <Image
//                         source={require("../../../../../assets/add.png")}
//                       />
//                     </ExtendedTouchableOpacity>
//                   </ExtendedView>
//                 </ExtendedView>
//               </ExtendedView>
//               <ExtendedView style={styles.flexStyle}>
//                 <ExtendedView>
//                   <ExtendedText style={styles.textStyle}>
//                     Description
//                   </ExtendedText>
//                 </ExtendedView>
//                 <ExtendedView>
//                   <ExtendedItemsText
//                     style={styles.descText}
//                     description={shopItemsData[selectedItemIndex].description}
//                   ></ExtendedItemsText>
//                 </ExtendedView>
//               </ExtendedView>

//               <ExtendedView style={styles.flexStyle}>
//                 <ExtendedView>
//                   <ExtendedText style={styles.textStyle}>
//                     Nutrition facts
//                   </ExtendedText>
//                 </ExtendedView>
//                 <ExtendedView>
//                   <ExtendedItemsText
//                     style={styles.descText}
//                     nutritionFacts={
//                       shopItemsData[selectedItemIndex].nutritionFacts
//                     }
//                   ></ExtendedItemsText>
//                   <ExtendedText style={styles.descText}>
//                     Amount per serving
//                   </ExtendedText>
//                 </ExtendedView>
//               </ExtendedView>

//               <ExtendedView style={styles.flexStyle}>
//                 <ExtendedView style={styles.spacing}>
//                   <ExtendedText style={styles.calTextStyle}>
//                     Calories
//                   </ExtendedText>
//                   <ExtendedItemsText
//                     style={styles.calValue}
//                     calories={shopItemsData[selectedItemIndex].calories}
//                   ></ExtendedItemsText>
//                 </ExtendedView>

//                 <ExtendedView style={styles.horizontalLine}></ExtendedView>

//                 <ExtendedView>
//                   <ExtendedText style={styles.rightAlign}>
//                     % Daily Value*
//                   </ExtendedText>
//                 </ExtendedView>
//               </ExtendedView>
//             </ExtendedView>
//           )}
//         </BasicLayout>
//       </ExtendedView>

//       <ExtendedView style={styles.footerStyle}>
//         <ExtendedView style={styles.priceFlex}>
//           <ExtendedText style={styles.totalTextStyle}>Price</ExtendedText>
//           <ExtendedText style={styles.priceStyle}>
//             $
//             {shopItemsData.length > 0
//               ? shopItemsData[selectedItemIndex].price
//               : "0"}
//           </ExtendedText>
//         </ExtendedView>
//         <ExtendedView>
//           <CustomButton
//             title="Add to cart"
//             lefticon={<ShoppingCartIcon />}
//             style={styles.checkoutBtn}
//             onPress={() => navigation.navigate(Routes.CartItemPage)}
//           />
//         </ExtendedView>
//       </ExtendedView>
//     </ExtendedView>
//   );
// };

// export default ShopItemPage;

// const styles = StyleSheet.create({
//   pageContainer: {
//     flex: 1,
//     height: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: "6%",
//     backgroundColor: "#fff",
//   },
//   header: {
//     marginTop: "2%",
//     marginBottom: "3%",
//     width: "100%",
//     height: "8%",
//     flex: 0,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "700",
//     width: 180,
//     textAlign: "center",
//     color: "#181C32",
//   },
//   contentContainer: {
//     flex: 1,
//     marginHorizontal: "9%",
//   },
//   itemsSwiper: {
//     flex: 1,
//     marginTop: "3%",
//     marginBottom: "8%",
//   },
//   mapItemsData: {
//     width: "100%",
//     alignSelf: "center",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   footerStyle: {
//     flex: 0,
//     flexDirection: "row",
//     alignSelf: "center",
//     alignItems: "center",
//     justifyContent: "space-between",
//     height: 100,
//     width: "100%",
//     borderRadius: 45,
//     borderBottomLeftRadius: 29,
//     borderBottomRightRadius: 29,
//     paddingHorizontal: "8%",
//     backgroundColor: "#F9F9FF",
//   },
//   priceFlex: {
//     flexDirection: "column",
//   },
//   checkoutBtn: {
//     width: 166,
//     height: 50,
//   },
//   totalTextStyle: {
//     fontSize: 14,
//     fontWeight: "700",
//     color: "#C4C4C4",
//   },
//   priceStyle: {
//     fontSize: 22,
//     fontWeight: "700",
//     color: "#3F4254",
//   },
//   flexStyle: {
//     flex: 1,
//     width: "100%",
//     justifyContent: "center",
//     textAlign: "center",
//     height: "100%",
//   },
//   titleStyle: {
//     fontSize: 20,
//     fontWeight: "900",
//     color: "#111",
//   },
//   flexBox: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   ratingIconBackground: {
//     width: 102,
//     height: 40,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 40,
//     backgroundColor: "#E7E3FF",
//   },
//   rightImgContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   textStyle: {
//     fontSize: 14,
//     fontWeight: "700",
//     color: "#3F4254",
//   },
//   descText: {
//     fontSize: 14,
//     fontWeight: "500",
//     color: "#7E8299",
//   },
//   calTextStyle: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#7E8299",
//   },
//   calValue: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#181C32",
//   },
//   horizontalLine: {
//     borderBottomWidth: 2,
//     borderBottomColor: "#464E5F",
//     width: 86,
//     height: 0,
//     marginTop: "6%",
//   },
//   spacing: {
//     paddingRight: "40%",
//   },
//   rightAlign: {
//     fontSize: 14,
//     fontWeight: "600",
//     color: "#181C32",
//     textAlign: "right",
//   },
// });

import React, { useState, useEffect } from "react";
import { StyleSheet, Image, ImageSourcePropType } from "react-native";
import {
  ExtendedView,
  ExtendedText,
  ExtendedItemsText,
  ExtendedRating,
  ExtendedTouchableOpacity,
} from "../../../../components/atoms";
import { CustomButton, CustomHeader } from "../../../../components/molecules";
import ItemSlideShow from "../../../../../src/components/organisams/ItemSlideShow";
import { BasicLayout } from "../../../../layout";
import { ShoppingCartIcon } from "../../../../../svgs/index";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../../../routes";
import api from "../../../../interceptor";

interface ShopItemsData {
  imageUrl: ImageSourcePropType;
  itemName: string;
  description: string;
  servingsPerContainer?: string;
  servingSize?: string;
  amountsPerServing?: string;
  price: string;
  avgRating?: number;
}

const ShopItemPage: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [shopItemsData, setShopItemsData] = useState<ShopItemsData[]>([]);
  const [itemImages, setItemImages] = useState<{ uri: string }[]>([]);
  const navigation: any = useNavigation();
  let [counter, setCounter] = useState(1);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await api.post(`/product/get?maxNumber=10`, {
          onSales: true,
        });

        console.log("Response received:", response.data);

        const products = response.data.message;
        const productTitles = products.map((product: any) => product.title);

        const productDetailsPromises = productTitles.map((title: string) =>
          api.get(`/product/${title}`)
        );
        const productDetailsResponses = await Promise.all(
          productDetailsPromises
        );

        const images: { uri: string }[] = [];
        const fetchedData = productDetailsResponses.map((res: any) => {
          const product = res.data.message;
          const imageUrl =
            product.images.length > 0
              ? `https://medical-e-commerce-backend.vercel.app/img/${product.images[0]}`
              : null;

          if (imageUrl) {
            images.push({ uri: imageUrl });
          }

          return {
            imageUrl: imageUrl ? { uri: imageUrl } : null,
            itemName: product.title,
            description: product.description,
            servingsPerContainer: product.servingsPerContainer || "N/A",
            servingSize: product.servingSize || "N/A",
            amountsPerServing:
              product.amountsPerServing.find(
                (element: any) => element?.item == "Calories"
              )?.value || "N/A",
            price: product.price.toString(),
            avgRating: product.avgRating || 0,
          };
        });

        console.log("Fetched Data:", fetchedData);
        console.log(
          "Image URLs:",
          fetchedData.map((data) => data.imageUrl)
        );

        setShopItemsData(fetchedData);

        setItemImages(images);
        console.log("Images URLs:", itemImages);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  function incrementCount() {
    setCounter(counter + 1);
  }

  function decrementCount() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  const handleItemChange = (index: number) => {
    setSelectedItemIndex(index);
  };

  return (
    <ExtendedView style={styles.pageContainer}>
      <ExtendedView style={styles.header}>
        <CustomHeader
          leftSource={require("../../../../../assets/arrow.png")}
          title="Shop Items"
          rightSource={require("../../../../../assets/shoppingCartImg.png")}
          titleStyle={styles.title}
          onArrowPress={() => navigation.goBack()}
        />
      </ExtendedView>
      <ExtendedView style={styles.contentContainer}>
        <BasicLayout>
          <ExtendedView style={styles.itemsSwiper}>
            <ItemSlideShow
              itemsData={shopItemsData}
              onIndexChanged={handleItemChange}
            />
          </ExtendedView>

          {shopItemsData.length > 0 && (
            <ExtendedView style={styles.mapItemsData}>
              <ExtendedView style={styles.flexStyle}>
                <ExtendedView>
                  <ExtendedItemsText
                    style={styles.titleStyle}
                    itemName={shopItemsData[selectedItemIndex].itemName}
                  ></ExtendedItemsText>
                </ExtendedView>

                <ExtendedView style={styles.flexBox}>
                  <ExtendedView style={styles.ratingIconBackground}>
                    <ExtendedRating
                      avgRating={shopItemsData[selectedItemIndex].avgRating}
                    />
                  </ExtendedView>

                  <ExtendedView style={styles.rightImgContainer}>
                    <ExtendedTouchableOpacity onPress={decrementCount}>
                      <Image
                        source={require("../../../../../assets/minus.png")}
                      />
                    </ExtendedTouchableOpacity>
                    <ExtendedText>{counter}</ExtendedText>
                    <ExtendedTouchableOpacity onPress={incrementCount}>
                      <Image
                        source={require("../../../../../assets/add.png")}
                      />
                    </ExtendedTouchableOpacity>
                  </ExtendedView>
                </ExtendedView>
              </ExtendedView>
              <ExtendedView style={styles.flexStyle}>
                <ExtendedView>
                  <ExtendedText style={styles.textStyle}>
                    Description
                  </ExtendedText>
                </ExtendedView>
                <ExtendedView>
                  <ExtendedItemsText
                    style={styles.descText}
                    description={shopItemsData[selectedItemIndex].description}
                  ></ExtendedItemsText>
                </ExtendedView>
              </ExtendedView>

              <ExtendedView style={styles.flexStyle}>
                <ExtendedView>
                  <ExtendedText style={styles.textStyle}>
                    Nutrition facts
                  </ExtendedText>
                </ExtendedView>
                <ExtendedView>
                  <ExtendedItemsText
                    style={styles.descText}
                    servingsPerContainer={
                      shopItemsData[selectedItemIndex].servingsPerContainer
                    }
                  >
                    About
                  </ExtendedItemsText>
                  <ExtendedText style={styles.descText}>
                    Amount per serving
                  </ExtendedText>
                </ExtendedView>
              </ExtendedView>

              <ExtendedView style={styles.flexStyle}>
                <ExtendedView style={styles.spacing}>
                  <ExtendedText style={styles.calTextStyle}>
                    Calories
                  </ExtendedText>
                  <ExtendedItemsText
                    style={styles.calValue}
                    amountsPerServing={
                      shopItemsData[selectedItemIndex].amountsPerServing
                    }
                  ></ExtendedItemsText>
                </ExtendedView>

                <ExtendedView style={styles.horizontalLine}></ExtendedView>

                <ExtendedView>
                  <ExtendedText style={styles.rightAlign}>
                    % Daily Value*
                  </ExtendedText>
                </ExtendedView>
              </ExtendedView>
            </ExtendedView>
          )}
        </BasicLayout>
      </ExtendedView>

      <ExtendedView style={styles.footerStyle}>
        <ExtendedView style={styles.priceFlex}>
          <ExtendedText style={styles.totalTextStyle}>Price</ExtendedText>
          <ExtendedText style={styles.priceStyle}>
            $
            {shopItemsData.length > 0
              ? shopItemsData[selectedItemIndex].price
              : "0"}
          </ExtendedText>
        </ExtendedView>
        <ExtendedView>
          <CustomButton
            title="Add to cart"
            lefticon={<ShoppingCartIcon />}
            style={styles.checkoutBtn}
            onPress={() => navigation.navigate(Routes.CartItemPage)}
          />
        </ExtendedView>
      </ExtendedView>
    </ExtendedView>
  );
};

export default ShopItemPage;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "6%",
    backgroundColor: "#fff",
  },
  header: {
    marginTop: "2%",
    marginBottom: "3%",
    width: "100%",
    height: "8%",
    flex: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    width: 180,
    textAlign: "center",
    color: "#181C32",
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: "9%",
  },
  itemsSwiper: {
    flex: 1,
    marginTop: "3%",
    marginBottom: "8%",
  },
  mapItemsData: {
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  footerStyle: {
    flex: 0,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
    width: "100%",
    borderRadius: 45,
    borderBottomLeftRadius: 29,
    borderBottomRightRadius: 29,
    paddingHorizontal: "8%",
    backgroundColor: "#F9F9FF",
  },
  priceFlex: {
    flexDirection: "column",
  },
  checkoutBtn: {
    width: 166,
    height: 50,
  },
  totalTextStyle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#C4C4C4",
  },
  priceStyle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#3F4254",
  },
  flexStyle: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
  },
  flexBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 35,
  },
  ratingIconBackground: {
    backgroundColor: "#F5F8FA",
    padding: 10,
    borderRadius: 10,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
  },
  rightImgContainer: {
    width: 121,
    height: 47,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#F5F8FA",
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#181C32",
    paddingBottom: 15,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#181C32",
    paddingBottom: 8,
  },
  descText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#B5B5C3",
  },
  calTextStyle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#181C32",
  },
  calValue: {
    fontSize: 14,
    fontWeight: "400",
    color: "#B5B5C3",
  },
  horizontalLine: {
    height: 1,
    width: "100%",
    backgroundColor: "#E4E6EF",
  },
  rightAlign: {
    textAlign: "right",
  },
  spacing: {
    paddingBottom: 8,
  },
});
