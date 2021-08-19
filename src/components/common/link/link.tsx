import React from 'react';
import { Linking, TouchableOpacity } from 'react-native';

type Props = {
    link: string;
}

const Link: React.FC<Props> = ({
    children,
    link,
}) => {

    const handleClick = () => {
        Linking.canOpenURL(link).then(supported => {
            if (supported) {
                Linking.openURL(link);
            } else {
                console.log("Don't know how to open URI: " + link);
            }
        });
    };

    return (
        <TouchableOpacity onPress={handleClick}>{children}</TouchableOpacity>
    );
};

export { Link };