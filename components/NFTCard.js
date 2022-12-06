import { useNavigation } from "@react-navigation/native";
import { View, Text, Image } from "react-native";

import { COLORS, SIZES, SHADOW, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton } from "./Button";
import { SubInfo, EthPrice, NFTTitle, ImageCmp, EndDate } from "./SubInfo";

const NFTCard = ({ data }) => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.font,
                marginBottom: SIZES.extraLarge,
                margin: SIZES.base,
                ...SHADOWS.dark,
            }}
        >
            <View style={{ width: "100%" }}>
                <Image
                    source={data.image}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: 300,
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font,
                    }}
                />
                <CircleButton imgUrl={assets.heart} right={10} top={10} />
                <SubInfo />
                <View style={{ width: "100%", padding: SIZES.font }}>
                    <NFTTitle
                        title={data.name}
                        subTitle={data.creator}
                        titleSize={SIZES.large}
                        subTitleSize={SIZES.small}
                    />
                    <View
                        style={{
                            marginTop: SIZES.font,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <EthPrice price={data.price} />
                        <RectButton
                            minWidth={120}
                            fontSize={FONTS.font}
                            handlePress={() =>
                                navigation.navigate("Details", { data })
                            }
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default NFTCard;
