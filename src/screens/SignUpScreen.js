import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function SignUpScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Sign Up Screen</Text>
        <Text style={styles.text}>Màn hình này được tạo sẵn để phát triển tiếp theo yêu cầu của slide.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9fafb', padding: 20 },
  box: { backgroundColor: '#fff', padding: 24, borderRadius: 16, width: '100%' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12, color: '#111827' },
  text: { fontSize: 15, color: '#4b5563', lineHeight: 22 },
});
