import React from 'react';
import { Button as ReactButton, View } from 'react-native';

type Props = {
    label: string;
    onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props> = ({
    label,
    onClick,
}) => {
    return (
        <View>
            <ReactButton title={label} onPress={onClick} color={'#f3427f'} />
        </View>
    );
};

export { Button };