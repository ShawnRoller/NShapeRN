import React from 'react';
import { FlatList, View } from 'react-native';
import { SimpleTableView } from '../components/common/';

const credits = [
  { id: '1', title: 'Shane Rocker', subtitle: 'Development' },
  { id: '2', title: 'Lindsey Roller', subtitle: 'Inspiration' },
  { id: '3', title: 'Jason Worrix', subtitle: 'Design' },
  { id: '4', title: 'Brony Fox', subtitle: 'QA' },
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
        item={{...item, hasSwitch: false}}
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
        <SimpleTableView data={credits} onPressItem={() => {}} />
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
