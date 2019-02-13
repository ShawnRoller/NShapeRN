import React from 'react';
import { FlatList } from 'react-native';
import { SimpleCell } from './SimpleCell';

class SimpleTableView extends React.PureComponent {

  _keyExtractor = (item) => item.id;

  _renderItem = ({item}) => {

    const textMarginLeft = this.props.titleMarginLeft ? this.props.titleMarginLeft : 50;
    const height = this.props.cellHeight ? this.props.cellHeight : 50;
    const fontSize = this.props.fontSize ? this.props.fontSize : 30;

    return (
      <SimpleCell 
        key={item.id}
        item={item}
        backgroundColor='#fff' 
        textColor='#333'
        textMarginLeft={titleMarginLeft}
        height={height}
        fontSize={fontSize}
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
