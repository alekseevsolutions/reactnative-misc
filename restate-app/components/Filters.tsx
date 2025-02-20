import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {router, useLocalSearchParams} from "expo-router";
import {types} from "@/constants/data";

export const Filters = () => {
    const params = useLocalSearchParams<{ filter?: string }>();
    const [selectedCategory, setSelectedCategory] = useState(params.filter || 'All')

    const handleCategoryPress = (type: string) => {
        if (selectedCategory === type) {
            setSelectedCategory("");
            router.setParams({ filter: "" });
            return;
        }

        setSelectedCategory(type);
        console.log(type)
        router.setParams({ filter: type });
    };


    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="mt-3 mb-2"
            >
                {types.map((item, index) => (
                    <TouchableOpacity
                        onPress={() => handleCategoryPress(item.type)}
                        key={index}
                        className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${
                            selectedCategory === item.type
                                ? "bg-primary-300"
                                : "bg-primary-100 border border-primary-200"
                        }`}
                    >
                        <Text
                            className={`text-sm ${
                                selectedCategory === item.type
                                    ? "text-white font-rubik-bold mt-0.5"
                                    : "text-black-300 font-rubik"
                            }`}
                        >
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

