import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
    return (
        <View
            style={{
                backgroundColor: COLORS.primary,
                padding: SIZES.font,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Image
                    source={assets.logo}
                    resizeMode="contain"
                    style={{
                        width: 90,
                        height: 25,
                    }}
                />
                <View style={{ width: 45, height: 45 }}>
                    <Image
                        source={assets.person01}
                        resizeMode="contain"
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                    <Image
                        source={assets.badge}
                        resizeMode="contain"
                        style={{
                            position: "absolute",
                            width: 20,
                            height: 20,
                            bottom: 0,
                            right: 0,
                        }}
                    />
                </View>
            </View>

            <View
                style={{
                    marginVertical: SIZES.font,
                }}
            >
                <Text
                    style={{
                        fontFamily: FONTS.regular,
                        fontSize: SIZES.small,
                        color: COLORS.white,
                    }}
                >
                    Hello, Victoria 👋
                </Text>
                <Text
                    style={{
                        fontFamily: FONTS.bold,
                        fontSize: SIZES.large,
                        color: COLORS.white,
                        marginTop: SIZES.base / 2,
                    }}
                >
                    Let's find a masterpiece
                </Text>
            </View>

            <View style={{ marginTop: SIZES.font }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        width: "100%",
                        backgroundColor: COLORS.gray,
                        padding: SIZES.small - 2,
                        borderRadius: SIZES.font,
                    }}
                >
                    <Image
                        source={assets.search}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            marginRight: SIZES.base,
                        }}
                    />
                    <TextInput
                        placeholder="Search NFTs"
                        cursorColor={COLORS.white}
                        style={{
                            flex: 1,
                            paddingLeft: SIZES.small - 2,
                            color: COLORS.white,
                        }}
                        onChangeText={onSearch}
                    />
                </View>
            </View>
        </View>
    );
};

export default HomeHeader;
