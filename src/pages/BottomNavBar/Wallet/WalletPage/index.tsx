import { StyleSheet, Image } from "react-native";
import {
  CustomButton,
  CustomProfileHeader,
} from "../../../../components/molecules";
import { ExtendedView, ExtendedText } from "../../../../components/atoms";
import { CustomDetailsCard } from "../../../../components/molecules";
import { BasicLayout } from "../../../../layout";
import BellIcon from "../../../../../svgs/BellIcon";

const WalletPage = () => {
  return (
    <BasicLayout>
      <ExtendedView>
        <ExtendedView>
          <CustomProfileHeader
            topTitle="Hi,James!"
            bottomTitle="Check your wallet status"
            rightSource={<BellIcon />}
          />
        </ExtendedView>

        <ExtendedView>
          <CustomButton title="Cards" />
          <CustomButton title="Accounts" />
        </ExtendedView>

        <ExtendedView>
          <CustomDetailsCard
            leftSource={require("../../../../../assets/tickImg.png")}
            titleText="Add your bank card"
            detailsText="It’s easy for when you are making a payment"
          />
        </ExtendedView>

        <ExtendedView>
          <Image source={require("../../../../../assets/Cards.png")} />
        </ExtendedView>
      </ExtendedView>

      <ExtendedView>
        <CustomButton title="Add card" />
      </ExtendedView>
    </BasicLayout>
  );
};
export default WalletPage;

const styles = StyleSheet.create({});
