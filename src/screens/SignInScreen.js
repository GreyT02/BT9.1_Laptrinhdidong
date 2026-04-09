import React, { useContext, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import CustomTextInput from '../components/CustomTextInput';
import IconButton from '../components/IconButton';

export default function SignInScreen({ navigation }) {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Sign In</Text>

        <CustomTextInput
          label="Email ID"
          placeholder="Enter your email here"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <CustomTextInput
          label="Password"
          placeholder="Enter your password here"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </Pressable>

        <Pressable style={styles.primaryButton} onPress={signIn}>
          <Text style={styles.primaryText}>Sign In</Text>
        </Pressable>

        <Text style={styles.separator}>Or sign in with</Text>

        <View style={styles.socialRow}>
          <IconButton title="Google" icon="🟢" onPress={signIn} />
          <View style={{ width: 10 }} />
          <IconButton title="Facebook" icon="🔵" backgroundColor="#4267B2" color="#fff" onPress={signIn} />
        </View>

        <Text style={styles.footerText}>
          Not yet a member?{' '}
          <Text style={styles.linkText} onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    color: '#111827',
    marginBottom: 24,
  },
  forgotText: {
    color: '#f59e0b',
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 18,
  },
  primaryButton: {
    backgroundColor: '#f59e0b',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  primaryText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  separator: {
    textAlign: 'center',
    color: '#6b7280',
    marginBottom: 14,
    fontSize: 13,
  },
  socialRow: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  footerText: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: 13,
  },
  linkText: {
    color: '#f59e0b',
    fontWeight: '700',
  },
});
