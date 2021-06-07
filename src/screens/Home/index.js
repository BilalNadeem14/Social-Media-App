import React from 'react'
import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View, ScrollView, TextInput, Platform } from 'react-native'
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


    renderNewPostComponent = () => <><View style={styles.newPostContainer}>
        <Image source={assets.sample_images.profile_header} resizeMode='cover' style={{ height: 5.5 * vh, borderRadius: (5.5 * vh) / 2, width: 5.5 * vh }} />
        <View style={styles.searchBarContainer}>
            <TextInput placeholder="What do you think?" style={{ color: 'black', textAlign: 'left', justifyContent: 'center' }} />
        </View>
        {this.renderHeaderButton('burst')}

    </View>
        <View style={styles.listSeperator} />

    </>

    renderListHeaderSeperator = () => (
        <View //style={styles.ListHeader}
        >
            <View style={styles.headerBackground}>
                <View style={styles.header_styles}>
                    <ImageBackground resizeMode='cover' source={assets.sample_images.profile_header} style={styles.back} >
                        {this.renderHeaderContent()}
                    </ImageBackground>
                </View>
                {this.renderAvatarContent()}
            </View>
            <View style={styles.listSeperator} />
        </View>
    )


    renderListItems = ({ item, index }) => <View style={styles.listItemStyles}>
        <View style={styles.listItemTitleContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {this.renderListAvatarContent()}
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

    renderListAvatarContent = () => (
        <View style={[styles.avatarWrapperContainer, { position: 'relative', top: 0, left: 0, height: 9 * vh, width: 9 * vh }]}>
            <View style={[styles.avatarContainer, { height: 7 * vh, width: 7 * vh, borderRadius: (7 * vh) / 2, borderColor: 'yellow', borderWidth: 0.2 * vh }]}>
                <Image resizeMode='cover' source={assets.sample_images.profile_header} style={[styles.avatarImage, { height: 6 * vh, width: 6 * vh, borderRadius: (6 * vh) / 2 }]} />
            </View>
        </View>

    )

    renderAvatarContent = () => (
        <View style={styles.avatarWrapperContainer}>
            <View style={styles.avatarContainer}>
                <Image resizeMode='cover' source={assets.sample_images.profile_header} style={styles.avatarImage} />
            </View>
        </View>
    )

    renderHeaderButton = (type) => (
        <TouchableOpacity style={styles.headerButtonStyles}>
            <Image resizeMode='contain' source={images.assets.icons[type]} style={styles.iconImageStyles} />
        </TouchableOpacity>
    )


    renderHeaderContent = () => <View style={styles.header_container}>

        <View style={styles.titleContainer}>
            <Text style={styles.headerTitleStyles}>
                Feed
        </Text>

            {this.state.searchBoxVisible && <View style={styles.searchBarContainer}>
                <TextInput placeholder="Search Friends" style={{ color: 'black', textAlign: 'left', justifyContent: 'center' }} />
            </View>}

            <View style={{ justifyContent: 'space-between', width: "25%", flexDirection: 'row' }}>
                {this.renderHeaderButton('search')}
                {this.renderHeaderButton('email')}
            </View>


        </View>


    </View>


    renderListHeader = () =>
        <View style={styles.headerBackground}>
            <View style={styles.header_styles}>
                <View resizeMode='cover' style={styles.back} >
                    {this.renderHeaderContent()}
                </View>
            </View>
        </View>

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.mainContianer}
                >
                    {this.renderListHeader()}

                    <FlatList
                        data={[1, 2, 3, 4, 5]}
                        ListHeaderComponent={this.renderNewPostComponent()}
                        contentContainerStyle={styles.listStyles}
                        renderItem={this.renderListItems}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

export default Home