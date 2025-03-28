import {View, Text, SafeAreaView} from 'react-native'
import React from 'react'

const Content = ({ children } : {children: any}) => {
    return (
        <SafeAreaView
            style={{
                paddingHorizontal: 5,
                paddingVertical: 3
        }}>
            {children}
        </SafeAreaView>
    )
}
export default Content
