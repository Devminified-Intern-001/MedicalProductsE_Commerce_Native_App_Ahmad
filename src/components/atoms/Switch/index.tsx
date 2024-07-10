import React, { useState } from "react";
import { Switch } from "react-native-elements";

type UISwitchProps = React.ComponentProps<typeof Switch>;

const ExtendedSwitch: React.FC<UISwitchProps> = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Switch
      trackColor={{
        false: "rgba(217, 217, 217, 0.46)",
        true: "rgba(251, 213, 78, 1)",
      }}
      thumbColor={isEnabled ? "rgba(0, 0, 0, 1)" : "rgba(217, 217, 217, 0.88)"}
      onValueChange={toggleSwitch}
      value={isEnabled}
      {...props}
    />
  );
};

export default ExtendedSwitch;
