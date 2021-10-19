import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import * as eva from '@eva-design/eva';
import {
  List,
  ListItem,
  ApplicationProvider,
  Text,
  Divider,
  Input,
  Button,
} from '@ui-kitten/components';

export default App = () => {
  const [data, setData] = useState(['Milk', 'Bottled Water']);
  const [value, setValue] = useState('');

  const addToList = () => {
    const dataCp = [...data];
    dataCp.push(value);
    setData(dataCp);
    setValue('');
  };

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
      <View style={styles.addContainer}>
        <Input
          style={styles.input}
          placeholder="Place your Text"
          value={value}
          onChangeText={nextValue => setValue(nextValue)}
        />
        <Button style={{marginTop: 6}} onPress={addToList}>
          Add
        </Button>
      </View>
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    // maxHeight: 100,
  },
  text: {
    margin: 2,
    alignSelf: 'center',
  },
  addContainer: {
    paddingHorizontal: 15,
    flexDirection: 'column',
  },
});
