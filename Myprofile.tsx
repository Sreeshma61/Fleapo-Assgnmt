import React from 'react';
import {ScrollView,View,Text,Image,StyleSheet,FlatList,TouchableOpacity,} from 'react-native';
import { useTheme } from '../Context/ThemeContext';
import Card from '../components/Card';
import Avatar from '../components/Avatar';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Card1 from '../assets/Image/Card1.png';
import Card2 from '../assets/Image/Card2.png';
import Card3 from '../assets/Image/Card3.png';
import Card4 from '../assets/Image/Card4.png';
import Recent1 from '../assets/Image/Recent1.png';
import Recent2 from '../assets/Image/Recent2.png';
import Recent3 from '../assets/Image/Recent3.png';
import LineGraph from '../components/Graph';

const Myprofile = () => {
  const { colors, spacing, typography } = useTheme();
  const cardDetails = [
    { id: '1', name: "Cobi's", image: Card1, rating: '9.1' },
    { id: '2', name: 'Don Angie', image: Card2, rating: '9.1' },
    { id: '3', name: 'Honor Bar', image: Card3, rating: '9.2' },
    { id: '4', name: 'Don Angie', image: Card4, rating: '8.1' },
    { id: '5', name: 'Don Angie', image: Card1, rating: '9.5' },
    { id: '6', name: 'Honor Bar', image: Card4, rating: '5.1' },
    { id: '7', name: 'Don Angie', image: Card3, rating: '6.1' },
    { id: '8', name: 'Don Angie', image: Card2, rating: '9.1' },
  ];

  const recentList = [
    {
      id: '1',name: 'Anajak Thai Cuisine',location: 'Sherman Oaks',image: Recent1,rating: '9.1',},
    {
      id: '2',name: 'Night+Market Weho',location: 'West Hollywood',image: Recent2,rating: '9.1',},
    {
      id: '3', name: 'Thai Boom', location: 'Thai Boom',image: Recent3, rating: '9.1', },
  ];
  const listDetails = [
    {
      id: '1', name: 'Best thai in LA',location: 'Exactly what it says dummy',restaurants: '5 restaurants',likes: 'no likes',icon: '🐔',},
    {
      id: '2', name: 'Favorite date spot', location: 'You already know I Love me', restaurants: '3 restaurants', likes: '12 likes', icon: '💖',},
    {
      id: '3', name: 'Tendies', location: 'If we make it to one of these spots', restaurants: '2 restaurants', likes: '27 likes', icon: '🐔',},
  ];
  const followHitlist = [
    {
      id: '1', icon: <FontAwesome name="user-circle-o" size={20} color="white" />,title: 'Following',count: '3',},
    {
      id: '2', icon: <MaterialIcons name="bookmark-border" size={20} color="white" />, title: 'Hitlist', count: '3', },
  ];
  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}>
      {/* 1. Map Section */}
      <View style={styles.mapSection}>
        <Image
          source={require('../assets/Image/Background.png')}
          style={styles.mapImage}
        />
        <LinearGradient colors={['transparent', '#1C1C1E']}  style={styles.gradientOverlay}/>
        
       <Ionicons name="location" size={30} color="red"style={{ width: 42, position: 'absolute', top: 50,left: 20,height: 32, }} />
        <Ionicons name="location" size={30} color="red"style={{ width: 42, position: 'absolute', top: 50,right: 20,height: 32, }} />
        <Ionicons name="location" size={30} color="red"style={{ width: 42, position: 'absolute', bottom: 60,left: 60,height: 32, }} />
        <Ionicons name="location" size={30} color="red"style={{ width: 42, position: 'absolute', bottom: 100,right: 60,height: 32, }} />
        <Ionicons name="location" size={30} color="red"style={{ width: 42, position: 'absolute', top: 100,left: 60,height: 32, }} />
        <Text
          style={[
            typography.body,
            { color: 'white' },
            { position: 'absolute', top: 100, right: 100, fontSize: 20 },
          ]}>
          Los Angeles
        </Text>
        <View style={styles.mapOverlay}></View>
      </View>

      {/* 2. Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileLeft}>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={[
                typography.subheading,
                { color: colors.border, marginRight: 8 },
              ]}>
              KumarGauravof
            </Text>
            <MaterialIcons
              name="lens"
              size={12}
              style={{ width: 16, height: 16 }}
              color="red"
            />
          </View>
          <Text style={[typography.heading, { color:colors.white }]}>
            Kumar Gaurav
          </Text>

          <Text style={[typography.caption, { color: colors.border }]}>
            Los Angeles
          </Text>
          <View style={styles.row}>
            <Ionicons name="heart-outline" color="white" size={14} />
            <Text style={[typography.button, { color:colors.white }]}>Follow</Text>
          </View>
        </View>

        <Image
          source={require('../assets/Image/Profile.png')}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.separator} />

      {/* 3. Top 8 */}
      <View style={styles.section}>
        <Text
          style={[
            typography.activitiesHead,
            { color: colors.white , fontWeight: 'bold' },
          ]}>
          {' '}
          Gaurav's Top 8
        </Text>
        <View style={styles.cardGrid}>
          {cardDetails.map((item, index) => (
            <View style={styles.cardSet}>
              <View key={item.id} style={styles.squareCard}>
                <Image source={item.image} style={styles.squareImage} />
                <View
                  style={{
                    width: 32,
                    height: 32,
                    position: 'absolute',
                    backgroundColor: 'red',
                    top: 25,
                    left: 24.75,
                    borderRadius: 16,
                    borderWidth: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.badgeText}> {item.rating}</Text>
                </View>
              </View>
              <Text
                style={[
                  typography.activitiesHead,
                  { color:colors.white , width: 81.25, height: 19 },
                ]}>
                {item.name}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.separator} />

      <View
        style={{
          height: 437,
          gap: 16,
        }}>
        <Text
          style={[
            typography.activitiesHead,
            { color: colors.white , fontWeight: 'bold' },
          ]}>
          Recent Activity
        </Text>
        <FlatList
          data={recentList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.card, { borderBottomColor: colors.border }]}>
              <Image source={item.image} style={styles.recentImage} />

              <View style={styles.textContainer}>
                <Text
                  style={[typography.activitiesHead, { color: colors.text }]}>
                  {item.name}
                </Text>
                <Text style={[typography.cardSubText]}>{item.location}</Text>
              </View>
              <View
                style={{
                  width: 32,
                  height: 32,

                  backgroundColor: 'red',

                  borderRadius: 16,
                  borderWidth: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.badgeText}> {item.rating}</Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={18}
                color={colors.text}
                style={{
                  top: 8,
                  left: 10,
                }}
              />
            </View>
          )}
        />
        <TouchableOpacity style={styles.seeMore}>
          <Text
            style={[
              typography.activitiesHead,
              { color:colors.white , fontWeight: 'bold' },
            ]}>
            {' '}
            See more
          </Text>
        </TouchableOpacity>
        <LineGraph />
      </View>

      {/* 4. Recent Activity */}

      <View style={styles.separator} />
      <View
        style={{
          height: 438,
          gap: 16,
        }}>
        <Text
          style={[
            typography.activitiesHead,
            { color:colors.white , fontWeight: 'bold' },
          ]}>
          Lists
        </Text>
        <FlatList
          data={listDetails}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.card, { borderBottomColor: colors.border }]}>
              <View
                style={{
                  width: 48,
                  height: 48,

                  backgroundColor: '#FF9D9D',

                  borderRadius: 24,
                  borderWidth: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{ width: 22, height: 22 }}>{item.icon}</Text>
              </View>

              <View style={styles.textContainer}>
                <Text
                  style={[typography.activitiesHead, { color: colors.text }]}>
                  {item.name}
                </Text>
                <Text style={[typography.cardSubText]}>{item.location}</Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                    paddingTop: 20,
                  }}>
                  <Text style={[typography.cardSubText]}>
                    {item.restaurants} .
                  </Text>
                  <Ionicons name="heart-outline" color="white" size={14} />
                  <Text style={[typography.cardSubText]}>{item.likes}</Text>
                </View>
              </View>

              <Ionicons
                name="chevron-forward"
                size={18}
                color={colors.text}
                style={{
                  top: 8,
                  left: 10,
                }}
              />
            </View>
          )}
        />
        <TouchableOpacity style={styles.seeMore}>
          <Text
            style={[
              typography.activitiesHead,
              { color:colors.white , fontWeight: 'bold' },
            ]}>
            {' '}
            See more
          </Text>
        </TouchableOpacity>
      </View>

      {/* 4. Recent Activity */}

      <View style={styles.separator} />

      {/* 6. Following / Hitlist */}
      <View
        style={{
          width: 361,
          height: 112,
        }}>
        <FlatList
          data={followHitlist}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.card, { borderBottomColor: colors.border }]}>
              <Text style={{ width: 21, height: 21 }}>{item.icon}</Text>

              <View style={styles.textContainer}>
                <Text
                  style={[typography.activitiesHead, { color: colors.text }]}>
                  {item.title}
                </Text>
              </View>
              <Text style={[typography.activitiesHead, { color: colors.text }]}>
                {item.count}
              </Text>
              <Ionicons
                name="chevron-forward"
                size={18}
                color={colors.text}
                style={{
                  left: 15,
                }}
              />
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  mapSection: {
    height: 300,
    position: 'relative',
    width: 393,
  },
  mapImage: {
    width: 800,
    height: 300,
    top: -11,
    left: -143,
  },
  gradientOverlay: {
    position: 'absolute',
    left: -143,
    height: 300,
    width: 900,
  },
  mapOverlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileSection: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: 361,
    height: 144,
    gap: 16,
  },
  profileLeft: {
    flex: 1,
  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 3,
    borderColor: 'black',
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    width: 102,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    gap: 8,

    paddingLeft: 16,
    backgroundColor: '#FFFFFF1A',
  },
  section: {
    marginVertical: 16,
    // width: 361,
    height: 263.5,
    gap: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#444',
    marginVertical: 12,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
  },
  cardSet: {
    width: 81.25,
    height: 108.25,
  },
  squareCard: {
    alignItems: 'center',
    marginVertical: 8,
    width: 81.25,
    height: 81.25,
  },
  squareImage: {
    width: 81,
    height: 81,
    borderRadius: 12,
    marginBottom: 14,
    position: 'relative',
  },
  recentImage: {
    width: 48,
    height: 48,
    borderWidth: 2,
    borderRadius: 8,
  },
  badgeText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    width: 28,
    height: 12,
  },
  seeMore: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 16,
    paddingHorizontal: 10,
    width: 361,
    height: 32,
    backgroundColor: '#FFFFFF1A',
    gap: 8,
    paddingRight: 16,
    paddingLeft: 16,
    borderColor: 'Black',
    paddingTop: 5,
  },
  textContainer: { flex: 1, marginLeft: 10 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
  },
});

export default Myprofile;
