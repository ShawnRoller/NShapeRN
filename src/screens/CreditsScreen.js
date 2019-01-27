import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { SimpleCell } from '../components/common/';

const credits = [
  { id: '1', title: 'Title1', subtitle: 'Subtitle1' },
  { id: '2', title: 'Title2', subtitle: 'Subtitle2' },
  { id: '3', title: 'Title3', subtitle: 'Subtitle3' },
  { id: '4', title: 'Title4', subtitle: 'Subtitle4' },
]

class CreditsScreen extends React.PureComponent {

  

  static navigationOptions = {
    title: 'Credits',
  }

  _keyExtractor = (item) => item.id;

  _renderItem = ({item}) => {
    return (
      <SimpleCell 
        key={item.id}
        item={hasSwitch=false}
        backgroundColor='#fff' 
        textColor='#333'
        textMarginLeft={50}
        height={50}
        fontSize={30}
      >
        {item.title}
    </SimpleCell>
    )
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <FlatList
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          data={credits}
        />
      </View>
    );
  }

}

const styles = {
  containerStyle: {
    flex: 1,
  }
}

export default CreditsScreen;
