import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default function Avatar({ source }: { source: string }) {
  return (
    <View style={styles.avatarContainer}>
      <Image source={{ uri: source }} style={styles.avatar} />{' '}
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  avatar: { width: '100%', height: '100%' },
});
