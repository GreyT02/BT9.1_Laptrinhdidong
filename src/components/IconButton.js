import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function IconButton({ title, icon, backgroundColor = '#fff', color = '#111827', onPress }) {
  return (
    <Pressable onPress={onPress} style={[styles.button, { backgroundColor }]}>
      <Text style={[styles.text, { color }]}>{icon} {title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  text: {
    fontSize: 13,
    fontWeight: '700',
  },
});
