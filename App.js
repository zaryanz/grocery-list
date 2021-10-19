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
  Icon,
} from '@ui-kitten/components';

export default App = () => {
  const [data, setData] = useState(['Milk', 'Bottled Water']);
  const randomList = [
    'Tomato sauce',
    'strawberries',
    'raspberries',
    'broccoli',
    'mustard sauce',
    'waffles',
    'tofu',
    'cheese',
    'ham',
  ];
  const [value, setValue] = useState('');
  const [query, setQuery] = useState('');

  const filterPosts = (query, data) => {
    if (!query) {
      return data;
    }

    return data.filter(post => {
      const postName = post.toLowerCase();
      query = query.toLowerCase();
      return postName.includes(query);
    });
  };

  const addToList = val => {
    const dataCp = [...data];
    dataCp.push(val);
    setData(dataCp);
    setValue('');
  };

  const addRandomToList = () => {
    const randomElement =
      randomList[Math.floor(Math.random() * randomList.length)];
    addToList(randomElement);
  };

  const filteredPosts = filterPosts(query, data);
  const renderItem = ({item, index}) => <ListItem title={item} key={index} />;
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Text style={styles.text} category="h4">
        Grocery List
      </Text>
      <View style={styles.mainContainer}>
        <Input
          style={styles.search}
          placeholder="Search..."
          value={query}
          onChangeText={nextValue => setQuery(nextValue)}
        />
        <List
          style={styles.container}
          data={filteredPosts}
          renderItem={renderItem}
          ItemSeparatorComponent={Divider}
        />
      </View>
      <View style={styles.addContainer}>
        <Input
          placeholder="Enter a product name"
          value={value}
          onChangeText={nextValue => setValue(nextValue)}
        />
        <Button style={styles.button} onPress={() => addToList(value)}>
          Add
        </Button>
        <Button style={styles.button} onPress={addRandomToList}>
          Add Random
        </Button>
      </View>
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10,
  },
  text: {
    margin: 2,
    alignSelf: 'center',
  },
  addContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
    flexDirection: 'column',
  },
  search: {
    marginVertical: 5,
  },
  button: {
    marginTop: 6,
  },
});
