import React from 'react'
import { FlatList, Image, LayoutAnimation, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import vh from '../../utils/units/vh'
import vw from '../../utils/units/vw'
import {assets} from '../../assets/images'
import {icons} from '../../assets/images'


export default class extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchBoxVisible: false
        }
    }



    _friendReqeustListHeader = () => <Text style={[styles.headerTitleStyles, { fontSize: 2.4 * vh, margin: 1 * vh, color: 'gray', marginLeft: 5 * vw, }]}>Pending</Text>


    _friendRequestList = () => <View>
        {/* {this._renderListHeader()} */}
        <FlatList data={[1, 5]} ListHeaderComponent={this._friendReqeustListHeader()} contentContainerStyle={styles.listStyles} renderItem={this._renderPendingFreindsListItems} />
        <Text style={[styles.headerTitleStyles, {
            fontSize: 2.4 * vh, margin: 1 * vh, color: 'gray', marginLeft: 5 * vw,
        }]}>My Friends List</Text>
    </View>

    _renderListItemSeperator = () => <View style={styles.listSeperator} />


    _renderListHeader = () =>
        <View style={styles.headerBackground}>
            <View style={styles.header_styles}>
                <View resizeMode='cover' style={styles.back} >
                    {this._renderHeaderContent()}
                </View>
            </View>
        </View>


    _renderPendingFreindsListItems = ({ item, index }) => <View style={styles.listItemStyles}>
        <View style={styles.listItemTitleContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {this._renderListAvatarContent()}
                <View>
                    <Text style={[styles.headerTitleStyles, { color: 'black', fontSize: 1.8 * vh }]}>
                        Bella Thorne
            </Text>

                </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 3 * vw, alignItems: 'center', width: '47%' }}>
                {this._renderListButton('accept')}
                {this._renderListButton('reject')}
            </View>

        </View>

        {this._renderListItemSeperator()}

    </View>


    _renderListButton = (type) => <TouchableOpacity style={{ borderRadius: 2 * vh, backgroundColor: type == 'accept' ? 'blue' : 'red', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 3 * vw, paddingVertical: 0.6 * vh }}>
        <Text style={[styles.headerTitleStyles, { color: '#ffffff', fontSize: 1.9 * vh }]}>
            {type == 'accept' ? "Accept" : 'Reject'}
        </Text>
    </TouchableOpacity>



    _renderListItems = ({ item, index }) => <View style={styles.listItemStyles}>
        <View style={styles.listItemTitleContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {this._renderListAvatarContent()}
                <View>
                    <Text style={[styles.headerTitleStyles, { color: 'black', fontSize: 1.8 * vh }]}>
                        Bella Thorne
                    </Text>
                    <Text style={[styles.headerTitleStyles, { color: 'gray', fontSize: 1.5 * vh, fontWeight: '100' }]}>
                        My Name is my name
                    </Text>
                </View>

            </View>

        </View>

        {this._renderListItemSeperator()}

    </View>

    _renderListAvatarContent = () => <View style={[styles.avatarWrapperContainer, { position: 'relative', top: 0, left: 0, height: 9 * vh, width: 9 * vh }]}>
        <View style={[styles.avatarContainer, { height: 7 * vh, width: 7 * vh, borderRadius: (7 * vh) / 2, borderColor: 'yellow', borderWidth: 0.2 * vh }]}>
            <Image resizeMode='cover' source={assets.sample_images.profile_header} style={[styles.avatarImage, { height: 6 * vh, width: 6 * vh, borderRadius: (6 * vh) / 2 }]} />
        </View>

    </View>


    _renderAvatarContent = () => <View style={styles.avatarWrapperContainer}>
        <View style={styles.avatarContainer}>
            <Image resizeMode='cover' source={assets.sample_images.profile_header} style={styles.avatarImage} />
        </View>

    </View>

    _renderHeaderButton = () => <TouchableOpacity onPress={() => {
        LayoutAnimation.configureNext({
            duration: 600,
            create: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.scaleX
            },
            update: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity
            },
            delete: {
                duration: 500,
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity
            },
        })
        this.setState({ searchBoxVisible: !this.state.searchBoxVisible })
    }} style={styles.headerButtonStyles}>
        <Image resizeMode='contain' source={icons.searchGray} style={styles.iconImageStyles} />
    </TouchableOpacity>

    _renderHeaderContent = () => <View style={styles.header_container}>

        <View style={styles.titleContainer}>
            <Text style={styles.headerTitleStyles}>
                Friends
        </Text>

            {this.state.searchBoxVisible && <View style={styles.searchBarContainer}>
                <TextInput placeholder="Search Friends" style={{ color: 'black', textAlign: 'left', justifyContent: 'center' }} />
            </View>}


            {this._renderHeaderButton()}


        </View>


    </View>

    render() {
        return (
            <View style={styles.mainContianer}>
                {this._renderListHeader()}
                <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]} ListHeaderComponent={this._friendRequestList()} contentContainerStyle={styles.listStyles} renderItem={this._renderListItems} />
            </View>
        )
    }
}