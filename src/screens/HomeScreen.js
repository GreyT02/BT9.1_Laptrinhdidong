import React from 'react';
import { FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import FoodCard from '../components/FoodCard';
import SectionHeader from '../components/SectionHeader';
import { categories, popularItems, saleItems } from '../data/mockData';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Text style={styles.screenTitle}>Explorer</Text>

        <View style={styles.searchRow}>
          <TextInput style={styles.searchInput} placeholder="Search for meals or area" />
          <Pressable style={styles.searchButton}>
            <Text>🔍</Text>
          </Pressable>
        </View>

        <SectionHeader title="Top Categories" rightText="Filter" />
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => <CategoryCard item={item} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 8 }}
        />

        <View style={{ height: 18 }} />

        <SectionHeader title="Popular Items" />
        <FlatList
          data={popularItems}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => (
            <FoodCard item={item} onPress={() => navigation.navigate('FoodDetail', { food: item })} />
          )}
          showsHorizontalScrollIndicator={false}
        />

        <View style={{ height: 18 }} />

        <SectionHeader title="Sale-off Items" />
        <FlatList
          data={saleItems}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => (
            <FoodCard item={item} onPress={() => navigation.navigate('FoodDetail', { food: item })} />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  content: {
    padding: 16,
    paddingBottom: 30,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 16,
  },
  searchRow: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  searchButton: {
    marginLeft: 10,
    width: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
});
