import { AppRegistry, YellowBox } from "react-native";
import App from "./src/App";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]); // ignore Warning message

AppRegistry.registerComponent("MyReactNativeProject", () => App);
