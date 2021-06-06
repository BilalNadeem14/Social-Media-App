import React from 'react'
import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import Button from '../../components/Button';
import styles from './styles'
import {assets} from '../../assets/images'
import vh from '../../utils/units/vh'


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            userImage: '',

            search: '',
            response: []
        };
    }

_renderListHeaderSeperator = () => (
    <View //style={styles.ListHeader}
    >
        <View style={styles.headerBackground}>
            <View style={styles.header_styles}>
                <ImageBackground resizeMode='cover' source={assets.sample_images.profile_header} style={styles.back} >
                    {this._renderHeaderContent()}
                </ImageBackground>
            </View>
            {this._renderAvatarContent()}
            </View>
        <View style={styles.listSeperator} />
    </View>
)


_renderListItems = ({ item, index }) => <View style={styles.listItemStyles}>
    <View style={styles.listItemTitleContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {this._renderListAvatarContent()}
            <View>
                <Text style={[styles.headerTitleStyles, { color: 'black', fontSize: 1.8 * vh }]}>
                    Bella Thorne
                </Text>
                <Text style={[styles.headerTitleStyles, { color: 'black', fontSize: 1.5 * vh, fontWeight: '100' }]}>
                    20 mins
                </Text>
            </View>

        </View>
        <Image resizeMode='cover' source={assets.icons.heart_filled} style={[{ height: 3 * vh, width: 3 * vh, }]} />

    </View>
    <Image resizeMode='cover' source={assets.sample_images.profile_header} style={styles.postImage} />

</View>

_renderListAvatarContent = () => (
    <View style={[styles.avatarWrapperContainer, { position: 'relative', top: 0, left: 0, height: 9 * vh, width: 9 * vh }]}>
        <View style={[styles.avatarContainer, { height: 7 * vh, width: 7 * vh, borderRadius: (7 * vh) / 2, borderColor: 'yellow', borderWidth: 0.2 * vh }]}>
            <Image resizeMode='cover' source={assets.sample_images.profile_header} style={[styles.avatarImage, { height: 6 * vh, width: 6 * vh, borderRadius: (6 * vh) / 2 }]} />
        </View>
    </View>

)

_renderAvatarContent = () => (
    <View style={styles.avatarWrapperContainer}>
        <View style={styles.avatarContainer}>
            <Image resizeMode='cover' source={assets.sample_images.profile_header} style={styles.avatarImage} />
        </View>
    </View>
)

_renderHeaderButton = (iconType) => (
    <TouchableOpacity style={styles.headerButtonStyles}>
        <Image resizeMode='contain' source={assets.icons[iconType]} style={styles.iconImageStyles} />
    </TouchableOpacity>
)

_renderHeaderContent = () => (
    <View style={styles.headerMainContainer}>
        <View style={styles.header_container}>

            <View style={styles.titleContainer}>
                <Text style={styles.headerTitleStyles}>
                    Bella Thorne
                </Text>
                <View style={styles.headerBottomContainer}>
                    {this._renderHeaderButton('settings')}
                    {this._renderHeaderButton('email')}

                </View>
            </View>
        </View>
        <View style={{
            alignItems: 'flex-end',
            // borderWidth: 2,
            marginBottom: 2*vh
        }}>
            {/* <Text style={styles.headerTitleStyles}>
                Bella Thorne
            </Text> */}
            <View style={styles.headerBottomEndContainer}>
                {/* {this._renderHeaderButton('settings')}
                {this._renderHeaderButton('email')} */}
                <Button 
                    style={styles.btn}
                    title="16K Following"
                />
                <Button 
                    style={[styles.btn, {backgroundColor: theme.colors.gray}]}
                    title="16K Following"
                />
            </View>
        </View>
    </View>
)

render() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainContianer}
            >
                

                <FlatList 
                    data={[1, 2, 3, 4, 5]} 
                    ListHeaderComponent={this._renderListHeaderSeperator()} 
                    contentContainerStyle={styles.listStyles} 
                    renderItem={this._renderListItems} 
                />
            </View>
        </SafeAreaView>
    )
}
}

export default Profile