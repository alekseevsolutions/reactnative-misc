import {View, Text} from 'react-native'
import React from 'react'
import {LinearGradient} from "expo-linear-gradient";
import Content from "@/components/Content";

const AppGradient = ({
    children,
    colors
} : {
    children: any;
    colors: [string, string, ...string[]]}
) => {
    return (
        <LinearGradient colors={colors}>
            <Content>{children}</Content>
        </LinearGradient>
    )
}
export default AppGradient
