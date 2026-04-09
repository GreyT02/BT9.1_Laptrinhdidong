import React, { useContext } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function ProfileScreen({ navigation }) {
  const { signOut } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarOuter}>
          <View style={styles.avatarInner}>
            <Text style={styles.avatarText}>HN</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.name}>Hung Nguyen</Text>
        <Text style={styles.role}>Mobile developer</Text>
        <Text style={styles.desc}>I have above 5 years of experience in native mobile apps development, now I am learning React Native.</Text>

        <Pressable style={styles.editButton} onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.editText}>Edit Profile</Text>
        </Pressable>

        <Pressable style={styles.signOutButton} onPress={signOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f4f6' },
  header: {
    height: 180,
    backgroundColor: '#22b5f0',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  avatarOuter: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -50,
  },
  avatarInner: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#9ca3af',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
  },
  infoBox: {
    marginTop: 70,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  name: { fontSize: 26, fontWeight: '800', color: '#111827' },
  role: { fontSize: 15, color: '#0ea5e9', marginTop: 6, fontWeight: '600' },
  desc: { marginTop: 12, fontSize: 14, color: '#6b7280', textAlign: 'center', lineHeight: 21 },
  editButton: {
    marginTop: 18,
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  editText: { color: '#111827', fontWeight: '700' },
  signOutButton: {
    marginTop: 14,
    backgroundColor: '#f59e0b',
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 10,
  },
  signOutText: { color: '#fff', fontWeight: '700' },
});
