import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import img from './asset/headphones.jpg';
import data from './asset/data.json';
const App = () => {
  // const [category, setCategory] = useState('Fruits');
  const [list, setList] = useState(data);
  const [cart, set] = useState([]);

  const method = category => {
    let newData = data.filter(item => {
      return item.category == category;
    });
    setList(newData);
  };
  const addToCart = item => {
    // console.log(item.id);
    let dd = cart;
    dd.push(item);
    set(dd);
  };
  // useEffect(() => {
  //   console.log(list);
  //   method();
  // }, []);
  const log = () => {
    console.log(cart);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 25, color: 'white'}}>Products</Text>
        <TextInput
          style={{
            color: 'white',
            borderWidth: 2,
            borderColor: 'white',
            width: 60,
            height: 40,
          }}
          onChangeText={text => method(text)}
          placeholder="Fruits"
          // keyboardType=""
        />
        <View styles={styles.button}>
          <TouchableOpacity onPress={() => console.log(cart)}>
            <Text style={{fontSize: 20, color: 'white'}}>View Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.list}>
        <FlatList
          style={{padding: 10}}
          data={list}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <View style={styles.imageContainer}>
                <Image
                  style={{height: 150, width: 150}}
                  source={{
                    uri: item.image,
                  }}
                />
              </View>

              <View style={styles.detailsContainer}>
                <Text style={styles.font2}>{item.name}</Text>
                {item.available == 1 ? (
                  <Text style={styles.stock}>IN STOCK!!</Text>
                ) : (
                  <Text style={styles.stock}>OUT OF STOCK!!</Text>
                )}

                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.font2}>Rs :</Text>
                  <Text style={styles.font2}>{item.price}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.font2}>Vendor : </Text>
                  <Text style={styles.font2}>{item.vendor}</Text>
                </View>
                <TouchableOpacity onPress={() => addToCart(item)}>
                  <View style={styles.button}>
                    <Text style={styles.font}>Add To Cart</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 60,
    flexDirection: 'row',
    // paddingHorizontal: 8,
    paddingVertical: 15,
    // height: 50,
  },
  container: {
    alignItems: 'stretch',
    justifyContent: 'center',
    // flexWrap: 'wrap',
    // padding: 10,

    flexDirection: 'column',
    // flex: 1,
  },
  list: {
    // marginTop: 15,
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 10,

    justifyContent: 'space-around',
    // alignItems: ',
    width: 350,

    marginTop: 10,
    // height: 130,
  },
  imageContainer: {
    borderWidth: 1,
    borderRadius: 10,
  },
  detailsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  button: {
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 5,
    padding: 10,
    borderColor: 'black',
  },
  font: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
  font2: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
  stock: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
});
export default App;
