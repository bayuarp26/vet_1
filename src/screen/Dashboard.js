import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import Swiper from 'react-native-swiper';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.cirle} source={require('../asset/Ellipse1.png')} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 40,
            marginLeft: 12,
          }}>
          <Image
            style={{
              width: 35,
              height: 15,
            }}
            source={require('../asset/Vector1.png')}
          />
          <Text
            style={{
              fontSize: 16,
              color: '#FDCB5A',
              paddingHorizontal: 7,
              letterSpacing: 3,
            }}>
            VET
          </Text>
          <Icon style={{left: 198}} name="email" color={'#ffff'} size={26} />
          <TouchableOpacity
            style={{
              width: 26,
              height: 26,
              borderRadius: 26 / 2,
              backgroundColor: '#FDCB5A',
              justifyContent: 'center',
              alignItems: 'center',
              left: 205,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#000000',
              }}>
              N
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapper}>
          <Swiper
            showsButtons={false}
            autoplay={true}
            dotColor={'#C2CDDB'}
            activeDotColor={'#FDCB5A'}>
            <Image
              source={require('../../src/asset/image4.png')}
              style={styles.slide}
            />
            <Image
              source={require('../../src/asset/image4.png')}
              resizeMode="stretch"
              style={styles.slide}
            />
            <Image
              source={require('../../src/asset/image4.png')}
              resizeMode="stretch"
              style={styles.slide}
            />
            <Image
              source={require('../../src/asset/image4.png')}
              resizeMode="stretch"
              style={styles.slide}
            />
          </Swiper>
        </View>
      </View>

      <View
        style={{
          width: 300,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          alignSelf: 'center',
        }}>
        <TouchableOpacity>
          <Image
            style={styles.status}
            source={require('../asset/Ellipse9.png')}
          />
          <Text style={styles.statText}>Kucing</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.status}
            source={require('../asset/Ellipse9.png')}
          />
          <Text style={styles.statText}>Anjing</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.status}
            source={require('../asset/Ellipse9.png')}
          />
          <Text style={styles.statText}>Hamster</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.status}
            source={require('../asset/Ellipse9.png')}
          />
          <Text style={styles.statText}>Kelinci</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 25,
        }}>
        <Text style={styles.statText2}>Konsultasi Klinik</Text>
        <TouchableOpacity>
          <Text style={styles.statText1}>Lihat Lainnya {'>>'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          margin: 20,
          marginBottom: -20,
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 150,
            top: 60,
            // margin:20,
            height: 250,
            marginTop: 10,
          }}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.Textbutton}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.Textbutton}>Batam</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.Textbutton}>Jakarta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.Textbutton}>Bandung</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.Textbutton}>Padang</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ScrollView>
        <View style={[styles.card, {marginTop: -60}]}>
          <Image
            style={styles.gambar}
            source={require('../asset/image4.png')}
          />
          <View>
            <Text
              style={{
                paddingTop: 18,
                paddingLeft: 15,
                fontSize: 15,
                color: '#875C25',
              }}>
              Batam
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000000',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Klinik Kehewanan
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Buka: 09.00-20.00
            </Text>
            <TouchableOpacity
              style={{
                marginTop: 6,
                marginLeft: 9,
                width: 180,
                height: 30,
                backgroundColor: '#FDCB5A',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 15,
                }}>
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.gambar}
            source={require('../asset/image4.png')}
          />
          <View>
            <Text
              style={{
                paddingTop: 18,
                paddingLeft: 15,
                fontSize: 15,
                color: '#875C25',
              }}>
              Batam
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000000',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Klinik Kehewanan
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Buka: 09.00-20.00
            </Text>
            <TouchableOpacity
              style={{
                marginTop: 6,
                marginLeft: 9,
                width: 180,
                height: 30,
                backgroundColor: '#FDCB5A',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 15,
                }}>
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.gambar}
            source={require('../asset/image4.png')}
          />
          <View>
            <Text
              style={{
                paddingTop: 18,
                paddingLeft: 15,
                fontSize: 15,
                color: '#875C25',
              }}>
              Batam
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000000',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Klinik Kehewanan
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Buka: 09.00-20.00
            </Text>
            <TouchableOpacity
              style={{
                marginTop: 6,
                marginLeft: 9,
                width: 180,
                height: 30,
                backgroundColor: '#FDCB5A',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 15,
                }}>
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.gambar}
            source={require('../asset/image4.png')}
          />
          <View>
            <Text
              style={{
                paddingTop: 18,
                paddingLeft: 15,
                fontSize: 15,
                color: '#875C25',
              }}>
              Batam
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000000',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Klinik Kehewanan
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Buka: 09.00-20.00
            </Text>
            <TouchableOpacity
              style={{
                marginTop: 6,
                marginLeft: 9,
                width: 180,
                height: 30,
                backgroundColor: '#FDCB5A',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 15,
                }}>
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.gambar}
            source={require('../asset/image4.png')}
          />
          <View>
            <Text
              style={{
                paddingTop: 18,
                paddingLeft: 15,
                fontSize: 15,
                color: '#875C25',
              }}>
              Batam
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000000',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Klinik Kehewanan
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Buka: 09.00-20.00
            </Text>
            <TouchableOpacity
              style={{
                marginTop: 6,
                marginLeft: 9,
                width: 180,
                height: 30,
                backgroundColor: '#FDCB5A',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 15,
                }}>
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.gambar}
            source={require('../asset/image4.png')}
          />
          <View>
            <Text
              style={{
                paddingTop: 18,
                paddingLeft: 15,
                fontSize: 15,
                color: '#875C25',
              }}>
              Batam
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000000',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Klinik Kehewanan
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Buka: 09.00-20.00
            </Text>
            <TouchableOpacity
              style={{
                marginTop: 6,
                marginLeft: 9,
                width: 180,
                height: 30,
                backgroundColor: '#FDCB5A',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 15,
                }}>
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  cirle: {
    width: 400,
    height: 180,
    top: -40,
    alignSelf: 'center',
    position: 'absolute',
  },
  button: {
    width: 120,
    height: 38,
    borderWidth: 1,
    borderColor: '#FDCB5A',
    borderRadius: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    width: 120,
    height: 38,
    backgroundColor: '#FDCB5A',
    borderRadius: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Textbutton: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    margin: 'auto',
    marginHorizontal: 5,
  },
  status: {
    top: 80,
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
    marginTop: -80,
  },
  card: {
    flexDirection: 'row',
    marginTop: 20,
    width: 328,
    top: 80,
    height: 130,
    backgroundColor: '#FFFFFF',
    shadowColor: 'black',
    elevation: 2,
    borderRadius: 5,
    alignSelf: 'center',
  },
  gambar: {
    width: 130,
    height: 130,
  },
  statText: {
    fontSize: 15,
    color: '#1A3150',
    fontWeight: 'bold',
    textAlign: 'center',
    top: 90,
    marginTop: -20,
  },
  statText1: {
    fontSize: 15,
    color: '#1A3150',
    color: '#1A3150',
    textAlign: 'center',
    top: 130,
    marginTop: -80,
  },
  statText2: {
    fontSize: 20,
    color: '#1A3150',
    fontWeight: 'bold',
    textAlign: 'center',
    top: 70,
    marginTop: -20,
  },

  Swiper: {
    width: 40,
    height: 80,
    top: -40,
    alignSelf: 'center',
    position: 'relative',
    marginTop: 100,
  },
  wiper: {
    width: 400,
    height: 180,
    top: -40,
    marginTop: 150,
    marginBottom: -600,
    alignSelf: 'center',
    position: 'relative',
  },
  wrapper: {
    height: 280,
  },
  slide: {
    position: 'absolute',
    height: 130,
    width: 300,
    top: 100,
    left: 50,
    borderRadius: 5,
  },
});

export default Dashboard;
