import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DefaultPage from '../../components/DefaultPage'
import RockPaperScissorsLizardSpock from '../../components/other/RockPaperScissorsLizardSpock'
import BottomBar from '../../components/other/BottomBar'

const SceneGameHome = () => (
    <DefaultPage>
        <View style={styles.contentBox}>
            <Text>Game Home</Text>

            <RockPaperScissorsLizardSpock />
        </View>

        <BottomBar />
    </DefaultPage>
)

const styles = StyleSheet.create({
    contentBox: {
        flex: 1,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default SceneGameHome
