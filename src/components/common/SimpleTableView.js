import React from 'react';
import { FlatList } from 'react-native';
import { SimpleCell } from './SimpleCell';

class SimpleTableView extends React.PureComponent {

  _keyExtractor = (item) => item.id;

  _renderItem = ({item}) => {
    return (
      <SimpleCell 
        key={item.id}
        item={item}
        backgroundColor='#fff' 
        textColor='#333'
        textMarginLeft={50}
        height={50}
        fontSize={30}
        hasSwitch={item.hasSwitch}
        onSwitchToggled={this.props.onSwitchToggled}
        switchToggled={item.toggled}
      >
        {item.title}
      </SimpleCell>
    );
  }

  render() {
    return (
      <View style={[styles.containerStyle, this.props.style]}>
        <FlatList
          data={this.props.data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }

}

export { SimpleTableView };
