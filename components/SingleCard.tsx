import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Dimensions,
} from "react-native";

interface SingleCardProps {
  source: ImageSourcePropType;
}

const SingleCard: React.FC<SingleCardProps> = ({ source }) => {
  return <Image source={source} style={style.card} />;
};

const style = StyleSheet.create({
  card: {
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").height / 3,
  },
});

export default SingleCard;
