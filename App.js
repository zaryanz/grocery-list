import React from 'react';
import {StyleSheet} from 'react-native';
import * as eva from '@eva-design/eva';
import {
  List,
  ListItem,
  ApplicationProvider,
  Text,
  Divider,
} from '@ui-kitten/components';

const data = ['Milk', 'Bottled Water'];

export default App = () => {
  const renderItem = ({item, index}) => <ListItem title={item} key={index} />;

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Text style={styles.text} category="h4">
        Grocery List
      </Text>
      <List
        style={styles.container}
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={Divider}
      />
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 180,
  },
  text: {
    margin: 2,
    alignSelf: 'center',
  },
});
