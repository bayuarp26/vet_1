import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Searchbar} from 'react-native-paper';
import Picture from '../asset/image4.png';
import {ScrollView} from 'react-native-gesture-handler';

const searchbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#1A3150', height: 80}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            marginRight: 5,
            marginTop: 35,
            marginStart: 5,
            fontSize: 12,
          }}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontSize: 20,
            color: 'white',
            marginHorizontal: 25,
            bottom: 26,
            marginLeft: 40,
            marginStart: 30,
            fontStyle: 'normal',
          }}>
          {' '}
          Sebelumnya
        </Text>
      </View>
      <View style={styles.container1}>
        <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
          <Icon name="search" size={14} color="white" />
          <TextInput
            style={styles.input}
            placeholder="Cari Klinik Terdekat"
            placeholderTextColor="#CACACA"
          />
        </View>
        <ScrollView>
          <View style={styles.container2}>
            <Image source={Picture} style={styles.picture} />
            <Text
              style={{
                fontSize: 15,
                color: '#875C25',
                marginStart: 5,
                marginTop: 5,
              }}>
              Batam{' '}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                right: 48,
                marginTop: 22,
                fontWeight: 'bold',
              }}>
              Klinik Hewan{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#1A3150',
                right: 170,
                marginTop: 45,
                fontWeight: 'bold',
              }}>
              Buka: 09.00 - 20.00{' '}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#FDCB5A',
                color: '#000',
                marginTop: 35,
                borderRadius: 5,
                position: 'absolute',
                right: 20,
                width: 170,
                height: 35,
                alignItems: 'center',
                justifyContent: 'center',
                top: 40,
              }}>
              <Text
                onPress={() => navigation.navigate('Dashboard')}
                style={{
                  color: '#000',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}>
                Submit
              </Text>
            </TouchableOpacity>
            <View style={styles.container2}>
              <Image source={Picture} style={styles.picture} />
              <Text
                style={{
                  fontSize: 15,
                  color: '#875C25',
                  marginStart: 5,
                  marginTop: 5,
                }}>
                Batam{' '}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000',
                  right: 48,
                  marginTop: 22,
                  fontWeight: 'bold',
                }}>
                Klinik Hewan{' '}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#1A3150',
                  right: 170,
                  marginTop: 45,
                  fontWeight: 'bold',
                }}>
                Buka: 09.00 - 20.00{' '}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FDCB5A',
                  color: '#000',
                  marginTop: 35,
                  borderRadius: 5,
                  position: 'absolute',
                  right: 20,
                  width: 170,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 40,
                }}>
                <Text
                  onPress={() => navigation.navigate('Dashboard')}
                  style={{
                    color: '#000',
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginHorizontal: 20,
                    marginVertical: 10,
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container2}>
            <Image source={Picture} style={styles.picture} />
            <Text
              style={{
                fontSize: 15,
                color: '#875C25',
                marginStart: 5,
                marginTop: 5,
              }}>
              Batam{' '}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                right: 48,
                marginTop: 22,
                fontWeight: 'bold',
              }}>
              Klinik Hewan{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#1A3150',
                right: 170,
                marginTop: 45,
                fontWeight: 'bold',
              }}>
              Buka: 09.00 - 20.00{' '}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#FDCB5A',
                color: '#000',
                marginTop: 35,
                borderRadius: 5,
                position: 'absolute',
                right: 20,
                width: 170,
                height: 35,
                alignItems: 'center',
                justifyContent: 'center',
                top: 40,
              }}>
              <Text
                onPress={() => navigation.navigate('Dashboard')}
                style={{
                  color: '#000',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}>
                Submit
              </Text>
            </TouchableOpacity>
            <View style={styles.container2}>
              <Image source={Picture} style={styles.picture} />
              <Text
                style={{
                  fontSize: 15,
                  color: '#875C25',
                  marginStart: 5,
                  marginTop: 5,
                }}>
                Batam{' '}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000',
                  right: 48,
                  marginTop: 22,
                  fontWeight: 'bold',
                }}>
                Klinik Hewan{' '}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#1A3150',
                  right: 170,
                  marginTop: 45,
                  fontWeight: 'bold',
                }}>
                Buka: 09.00 - 20.00{' '}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FDCB5A',
                  color: '#000',
                  marginTop: 35,
                  borderRadius: 5,
                  position: 'absolute',
                  right: 20,
                  width: 170,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 40,
                }}>
                <Text
                  onPress={() => navigation.navigate('Dashboard')}
                  style={{
                    color: '#000',
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginHorizontal: 20,
                    marginVertical: 10,
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container2}>
            <Image source={Picture} style={styles.picture} />
            <Text
              style={{
                fontSize: 15,
                color: '#875C25',
                marginStart: 5,
                marginTop: 5,
              }}>
              Batam{' '}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                right: 48,
                marginTop: 22,
                fontWeight: 'bold',
              }}>
              Klinik Hewan{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#1A3150',
                right: 170,
                marginTop: 45,
                fontWeight: 'bold',
              }}>
              Buka: 09.00 - 20.00{' '}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#FDCB5A',
                color: '#000',
                marginTop: 35,
                borderRadius: 5,
                position: 'absolute',
                right: 20,
                width: 170,
                height: 35,
                alignItems: 'center',
                justifyContent: 'center',
                top: 40,
              }}>
              <Text
                onPress={() => navigation.navigate('Dashboard')}
                style={{
                  color: '#000',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}>
                Submit
              </Text>
            </TouchableOpacity>
            <View style={styles.container2}>
              <Image source={Picture} style={styles.picture} />
              <Text
                style={{
                  fontSize: 15,
                  color: '#875C25',
                  marginStart: 5,
                  marginTop: 5,
                }}>
                Batam{' '}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000',
                  right: 48,
                  marginTop: 22,
                  fontWeight: 'bold',
                }}>
                Klinik Hewan{' '}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#1A3150',
                  right: 170,
                  marginTop: 45,
                  fontWeight: 'bold',
                }}>
                Buka: 09.00 - 20.00{' '}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FDCB5A',
                  color: '#000',
                  marginTop: 35,
                  borderRadius: 5,
                  position: 'absolute',
                  right: 20,
                  width: 170,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 40,
                }}>
                <Text
                  onPress={() => navigation.navigate('Dashboard')}
                  style={{
                    color: '#000',
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginHorizontal: 20,
                    marginVertical: 10,
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container2}>
            <Image source={Picture} style={styles.picture} />
            <Text
              style={{
                fontSize: 15,
                color: '#875C25',
                marginStart: 5,
                marginTop: 5,
              }}>
              Batam{' '}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                right: 48,
                marginTop: 22,
                fontWeight: 'bold',
              }}>
              Klinik Hewan{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#1A3150',
                right: 170,
                marginTop: 45,
                fontWeight: 'bold',
              }}>
              Buka: 09.00 - 20.00{' '}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#FDCB5A',
                color: '#000',
                marginTop: 35,
                borderRadius: 5,
                position: 'absolute',
                right: 20,
                width: 170,
                height: 35,
                alignItems: 'center',
                justifyContent: 'center',
                top: 40,
              }}>
              <Text
                onPress={() => navigation.navigate('Dashboard')}
                style={{
                  color: '#000',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}>
                Submit
              </Text>
            </TouchableOpacity>
            <View style={styles.container2}>
              <Image source={Picture} style={styles.picture} />
              <Text
                style={{
                  fontSize: 15,
                  color: '#875C25',
                  marginStart: 5,
                  marginTop: 5,
                }}>
                Batam{' '}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000',
                  right: 48,
                  marginTop: 22,
                  fontWeight: 'bold',
                }}>
                Klinik Hewan{' '}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#1A3150',
                  right: 170,
                  marginTop: 45,
                  fontWeight: 'bold',
                }}>
                Buka: 09.00 - 20.00{' '}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FDCB5A',
                  color: '#000',
                  marginTop: 35,
                  borderRadius: 5,
                  position: 'absolute',
                  right: 20,
                  width: 170,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 40,
                }}>
                <Text
                  onPress={() => navigation.navigate('Dashboard')}
                  style={{
                    color: '#000',
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginHorizontal: 20,
                    marginVertical: 10,
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container2}>
            <Image source={Picture} style={styles.picture} />
            <Text
              style={{
                fontSize: 15,
                color: '#875C25',
                marginStart: 5,
                marginTop: 5,
              }}>
              Batam{' '}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                right: 48,
                marginTop: 22,
                fontWeight: 'bold',
              }}>
              Klinik Hewan{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#1A3150',
                right: 170,
                marginTop: 45,
                fontWeight: 'bold',
              }}>
              Buka: 09.00 - 20.00{' '}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#FDCB5A',
                color: '#000',
                marginTop: 35,
                borderRadius: 5,
                position: 'absolute',
                right: 20,
                width: 170,
                height: 35,
                alignItems: 'center',
                justifyContent: 'center',
                top: 40,
              }}>
              <Text
                onPress={() => navigation.navigate('Dashboard')}
                style={{
                  color: '#000',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}>
                Submit
              </Text>
            </TouchableOpacity>
            <View style={styles.container2}>
              <Image source={Picture} style={styles.picture} />
              <Text
                style={{
                  fontSize: 15,
                  color: '#875C25',
                  marginStart: 5,
                  marginTop: 5,
                }}>
                Batam{' '}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000',
                  right: 48,
                  marginTop: 22,
                  fontWeight: 'bold',
                }}>
                Klinik Hewan{' '}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#1A3150',
                  right: 170,
                  marginTop: 45,
                  fontWeight: 'bold',
                }}>
                Buka: 09.00 - 20.00{' '}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FDCB5A',
                  color: '#000',
                  marginTop: 35,
                  borderRadius: 5,
                  position: 'absolute',
                  right: 20,
                  width: 170,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 40,
                }}>
                <Text
                  onPress={() => navigation.navigate('Dashboard')}
                  style={{
                    color: '#000',
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginHorizontal: 20,
                    marginVertical: 10,
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container2}>
            <Image source={Picture} style={styles.picture} />
            <Text
              style={{
                fontSize: 15,
                color: '#875C25',
                marginStart: 5,
                marginTop: 5,
              }}>
              Batam{' '}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                right: 48,
                marginTop: 22,
                fontWeight: 'bold',
              }}>
              Klinik Hewan{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#1A3150',
                right: 170,
                marginTop: 45,
                fontWeight: 'bold',
              }}>
              Buka: 09.00 - 20.00{' '}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#FDCB5A',
                color: '#000',
                marginTop: 35,
                borderRadius: 5,
                position: 'absolute',
                right: 20,
                width: 170,
                height: 35,
                alignItems: 'center',
                justifyContent: 'center',
                top: 40,
              }}>
              <Text
                onPress={() => navigation.navigate('Dashboard')}
                style={{
                  color: '#000',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}>
                Submit
              </Text>
            </TouchableOpacity>
            <View style={styles.container2}>
              <Image source={Picture} style={styles.picture} />
              <Text
                style={{
                  fontSize: 15,
                  color: '#875C25',
                  marginStart: 5,
                  marginTop: 5,
                }}>
                Batam{' '}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000',
                  right: 48,
                  marginTop: 22,
                  fontWeight: 'bold',
                }}>
                Klinik Hewan{' '}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#1A3150',
                  right: 170,
                  marginTop: 45,
                  fontWeight: 'bold',
                }}>
                Buka: 09.00 - 20.00{' '}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FDCB5A',
                  color: '#000',
                  marginTop: 35,
                  borderRadius: 5,
                  position: 'absolute',
                  right: 20,
                  width: 170,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 40,
                }}>
                <Text
                  onPress={() => navigation.navigate('Dashboard')}
                  style={{
                    color: '#000',
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginHorizontal: 20,
                    marginVertical: 10,
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container2}>
            <Image source={Picture} style={styles.picture} />
            <Text
              style={{
                fontSize: 15,
                color: '#875C25',
                marginStart: 5,
                marginTop: 5,
              }}>
              Batam{' '}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                right: 48,
                marginTop: 22,
                fontWeight: 'bold',
              }}>
              Klinik Hewan{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#1A3150',
                right: 170,
                marginTop: 45,
                fontWeight: 'bold',
              }}>
              Buka: 09.00 - 20.00{' '}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#FDCB5A',
                color: '#000',
                marginTop: 35,
                borderRadius: 5,
                position: 'absolute',
                right: 20,
                width: 170,
                height: 35,
                alignItems: 'center',
                justifyContent: 'center',
                top: 40,
              }}>
              <Text
                onPress={() => navigation.navigate('Dashboard')}
                style={{
                  color: '#000',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}>
                Submit
              </Text>
            </TouchableOpacity>
            <View style={styles.container2}>
              <Image source={Picture} style={styles.picture} />
              <Text
                style={{
                  fontSize: 15,
                  color: '#875C25',
                  marginStart: 5,
                  marginTop: 5,
                }}>
                Batam{' '}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000',
                  right: 48,
                  marginTop: 22,
                  fontWeight: 'bold',
                }}>
                Klinik Hewan{' '}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#1A3150',
                  right: 170,
                  marginTop: 45,
                  fontWeight: 'bold',
                }}>
                Buka: 09.00 - 20.00{' '}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FDCB5A',
                  color: '#000',
                  marginTop: 35,
                  borderRadius: 5,
                  position: 'absolute',
                  right: 20,
                  width: 170,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 40,
                }}>
                <Text
                  onPress={() => navigation.navigate('Dashboard')}
                  style={{
                    color: '#000',
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginHorizontal: 20,
                    marginVertical: 10,
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container2}>
            <Image source={Picture} style={styles.picture} />
            <Text
              style={{
                fontSize: 15,
                color: '#875C25',
                marginStart: 5,
                marginTop: 5,
              }}>
              Batam{' '}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                right: 48,
                marginTop: 22,
                fontWeight: 'bold',
              }}>
              Klinik Hewan{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#1A3150',
                right: 170,
                marginTop: 45,
                fontWeight: 'bold',
              }}>
              Buka: 09.00 - 20.00{' '}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#FDCB5A',
                color: '#000',
                marginTop: 35,
                borderRadius: 5,
                position: 'absolute',
                right: 20,
                width: 170,
                height: 35,
                alignItems: 'center',
                justifyContent: 'center',
                top: 40,
              }}>
              <Text
                onPress={() => navigation.navigate('Dashboard')}
                style={{
                  color: '#000',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}>
                Submit
              </Text>
            </TouchableOpacity>
            <View style={styles.container2}>
              <Image source={Picture} style={styles.picture} />
              <Text
                style={{
                  fontSize: 15,
                  color: '#875C25',
                  marginStart: 5,
                  marginTop: 5,
                }}>
                Batam{' '}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000',
                  right: 48,
                  marginTop: 22,
                  fontWeight: 'bold',
                }}>
                Klinik Hewan{' '}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#1A3150',
                  right: 170,
                  marginTop: 45,
                  fontWeight: 'bold',
                }}>
                Buka: 09.00 - 20.00{' '}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FDCB5A',
                  color: '#000',
                  marginTop: 35,
                  borderRadius: 5,
                  position: 'absolute',
                  right: 20,
                  width: 170,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 40,
                }}>
                <Text
                  onPress={() => navigation.navigate('Dashboard')}
                  style={{
                    color: '#000',
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginHorizontal: 20,
                    marginVertical: 10,
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A3150',
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 5,
  },
  input: {
    width: 328,
    height: 40,
    borderRadius: 3,
    fontFamily: 'roboto',
    fontSize: 12,
    color: '#000',
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  container2: {
    flexDirection: 'row',
    top: 20,
    marginBottom: 6,
    marginStart: 20,
    marginEnd: 10,
    borderColor: '#F9F8F8',
    borderRadius: 1,
    borderWidth: 1,
    rounded: 50,
    BoxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  picture: {
    width: 124,
    height: 123,
    resizeMode: 'cover',
  },
});
export default searchbar;
