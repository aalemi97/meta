import React from 'react';
import {Text, View, SectionList, StyleSheet, Pressable} from 'react-native';

const greenColor = '#495E57';
const yellowColor = '#F4CE14';
const whiteColor = '#EDEFEE';
const introText =
  'Little Lemon is a charming neighborhood bistro\
   that serves simple food and classic cocktails\
    in a lively but casual environment.\
     We would love to hear more about your experience with us!';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      {name: 'Hummus', price: '$5.00'},
      {name: 'Moutabal', price: '$5.00'},
      {name: 'Falafel', price: '$7.50'},
      {name: 'Marinated Olives', price: '$5.00'},
      {name: 'Kofta', price: '$5.00'},
      {name: 'Eggplant Salad', price: '$8.50'},
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      {name: 'Lentil Burger', price: '$10.00'},
      {name: 'Smoked Salmon', price: '$14.00'},
      {name: 'Kofta Burger', price: '$11.00'},
      {name: 'Turkish Kebab', price: '$15.50'},
    ],
  },
  {
    title: 'Sides',
    data: [
      {name: 'Fries', price: '$3.00', id: '11K'},
      {name: 'Buttered Rice', price: '$3.00'},
      {name: 'Bread Sticks', price: '$3.00'},
      {name: 'Pita Pocket', price: '$3.00'},
      {name: 'Lentil Soup', price: '$3.75'},
      {name: 'Greek Salad', price: '$6.00'},
      {name: 'Rice Pilaf', price: '$4.00'},
    ],
  },
  {
    title: 'Desserts',
    data: [
      {name: 'Baklava', price: '$3.00'},
      {name: 'Tartufo', price: '$3.00'},
      {name: 'Tiramisu', price: '$5.00'},
      {name: 'Panna Cotta', price: '$5.00'},
    ],
  },
];

const Header = ({showMenu, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{showMenu ? 'Home' : 'View Menu'}</Text>
    </Pressable>
  );
};

const Item = ({item}) => {
  return (
    <View style={styles.itemView}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={{...styles.itemText, fontSize: 15}}>{item.price}</Text>
    </View>
  );
};

export function MenuItems() {
  const [showMenu, setShowMenu] = React.useState(false);
  const renderItem = ({item}) => {
    return <Item item={item} />;
  };
  const renderHeader = ({section: {title}}) => {
    return <Text style={styles.sectionHeader}>{title} </Text>;
  };
  return (
    <View style={styles.container}>
      {!showMenu && <Text style={styles.introText}>{introText}</Text>}
      <Header showMenu={showMenu} onPress={() => setShowMenu(!showMenu)} />
      {showMenu && (
        <SectionList
          indicatorStyle="white"
          style={styles.list}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={renderHeader}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greenColor,
  },
  introText: {
    textAlign: 'justify',
    fontSize: 20,
    color: whiteColor,
    padding: 20,
  },
  button: {
    margin: 20,
    height: 45,
    backgroundColor: whiteColor,
    borderRadius: 10,
  },
  buttonText: {
    padding: 5,
    fontSize: 30,
    color: greenColor,
    textAlign: 'center',
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 20,
    color: `${yellowColor}`,
    marginTop: 10,
    marginBottom: 20,
  },
  list: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingHorizontal: 20,
    backgroundColor: `${greenColor}`,
  },
  sectionHeader: {
    backgroundColor: '#fbdabb',
    color: '#333333',
    fontSize: 34,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});
