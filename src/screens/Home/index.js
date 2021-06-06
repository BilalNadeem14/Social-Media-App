import React from 'react'
import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import Button from '../../components/Button';
import styles from './styles'
import images, { assets } from '../../assets/images'
import vh from '../../utils/units/vh'
import { icons } from '../../assets/images'


class Home extends React.Component {
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

    _renderHeaderButton = (type) => (
        <TouchableOpacity style={styles.headerButtonStyles}>
            <Image resizeMode='contain' source={images.assets.icons[type]} style={styles.iconImageStyles} />
        </TouchableOpacity>
    )


    _renderHeaderContent = () => <View style={styles.header_container}>

        <View style={styles.titleContainer}>
            <Text style={styles.headerTitleStyles}>
                Feed
        </Text>

            {this.state.searchBoxVisible && <View style={styles.searchBarContainer}>
                <TextInput placeholder="Search Friends" style={{ color: 'black', textAlign: 'left', justifyContent: 'center' }} />
            </View>}

            <View style={{ justifyContent: 'space-between', width: "25%", flexDirection: 'row' }}>
                {this._renderHeaderButton('search')}
                {this._renderHeaderButton('email')}
            </View>


        </View>


    </View>


    _renderListHeader = () =>
        <View style={styles.headerBackground}>
            <View style={styles.header_styles}>
                <View resizeMode='cover' style={styles.back} >
                    {this._renderHeaderContent()}
                </View>
            </View>
        </View>

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.mainContianer}
                >
                    {this._renderListHeader()}

                    <FlatList
                        data={[1, 2, 3, 4, 5]}
                        // ListHeaderComponent={this._renderListHeaderSeperator()}
                        contentContainerStyle={styles.listStyles}
                        renderItem={this._renderListItems}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

export default Home