import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SectionHeader({ title, rightText = 'View all' }) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.link}>{rightText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  link: {
    fontSize: 12,
    color: '#f59e0b',
    fontWeight: '600',
  },
});
