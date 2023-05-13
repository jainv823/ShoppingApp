import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen = ({route}: DetailsProps) => {
  const {product} = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Image style={styles.image} source={{uri: product.imageUrl}} />
        </View>
        <View>
          <Text style={styles.name}>{product.name}</Text>
          <View style={[styles.rowContainer, styles.ratingContainer]}>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>{product.rating} ★</Text>
            </View>
            <Text style={styles.ratingCount}>
              ({product.ratingCount.toLocaleString()})
            </Text>
          </View>

          <View style={[styles.rowContainer, styles.priceContainer]}>
            <Text style={styles.originalPrice}>
              ₹{product.originalPrice.toLocaleString()}
            </Text>
            <Text style={styles.discountPrice}>
              ₹{product.discountPrice.toLocaleString()}
            </Text>
            <Text style={styles.offerPercentage}>
              %{product.offerPercentage} off
            </Text>
          </View>
        </View>
        {product.tags.map((tag, index) => (
          <View key={index} style={styles.badge}>
            <Text style={styles.tagBadge}>{tag}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} android_ripple={{color: '#120E43'}}>
          <Text style={styles.btnText}>Add to Cart</Text>
        </Pressable>
        <Pressable style={styles.button} android_ripple={{color: '#120E43'}}>
          <Text style={styles.btnText}>Add to Wishlist</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  image: {
    width: 280,
    height: 370,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  name: {
    margin: 4,
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
  },
  ratingContainer: {
    marginVertical: 12,
  },
  priceContainer: {
    paddingVertical: 12,
    paddingHorizontal: 12,

    marginBottom: 12,

    borderRadius: 6,
    backgroundColor: '#deffeb',
  },
  rating: {
    marginRight: 4,

    borderRadius: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
    backgroundColor: '#008c00',
  },
  ratingText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  ratingCount: {
    fontSize: 14,
    color: '#878787',
  },
  originalPrice: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,

    color: 'rgba(0, 0, 0, 0.5)',
    textDecorationLine: 'line-through',
  },
  discountPrice: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
  },
  offerPercentage: {
    fontSize: 17,
    fontWeight: '600',
    color: '#4bb550',

    marginRight: 8,
  },
  badge: {
    margin: 2,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  tagBadge: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#000',
    color: '#000',
  },
  buttonContainer: {flexDirection: 'row', flexWrap: 'wrap', marginTop: 10},
  button: {
    backgroundColor: '#2827CC',
    height: 40,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3.8,
    elevation: 4,
    borderRadius: 7,
  },
  btnText: {color: '#FFF', fontWeight: '700', fontSize: 17},
});
