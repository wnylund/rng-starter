import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'
import PropTypes from 'prop-types'
import DEVICES from '../../../data/devices'

const Mixer = (props) => {
    const {
        input,
        output,
        orientation,
        status,
    } = props
    const { asset, color } = DEVICES.device_mixer

    return (
        <View style={[
            styles.device,
            { backgroundColor: color },
        ]}
        >
            <Text style={styles.label}>{asset}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    device: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
    },
})

Mixer.propTypes = {}

export default Mixer
