import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

type Props = {
    placeholder?: string;
    label: string;
    hasMultipleRows?: boolean;
    isSecure?: boolean;
}

const Input: React.FC<Props> = ({
    label,
    placeholder = '',
    isSecure = false,
    hasMultipleRows = false,
}) => {
    return (
        <View>
            <Text style={styles.text}>{label}</Text>
            <TextInput placeholder={placeholder} multiline={hasMultipleRows} secureTextEntry={isSecure} />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#f3427f',
        marginBottom: 0,
        fontSize: 16,
    }
});

export default Input;