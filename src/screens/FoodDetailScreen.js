import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function FoodDetailScreen({ route }) {
  const food = route.params?.food;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageBox}>
        <Text style={styles.emoji}>{food?.emoji || '🍽️'}</Text>
      </View>
      <Text style={styles.name}>{food?.name || 'Food Item'}</Text>
      <Text style={styles.subtitle}>{food?.subtitle || 'Description'}</Text>
      <Text style={styles.price}>{food?.price || '$0'}</Text>
      <Text style={styles.description}>
        Đây là màn hình chức năng được đặt trong MainStackNavigator theo đúng yêu cầu tái cấu trúc app flow.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  imageBox: {
    height: 220,
    borderRadius: 22,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  emoji: { fontSize: 80 },
  name: { fontSize: 28, fontWeight: '800', color: '#111827' },
  subtitle: { fontSize: 16, color: '#6b7280', marginTop: 8 },
  price: { fontSize: 20, color: '#f59e0b', fontWeight: '800', marginTop: 10 },
  description: { marginTop: 20, fontSize: 15, color: '#4b5563', lineHeight: 24 },
});
