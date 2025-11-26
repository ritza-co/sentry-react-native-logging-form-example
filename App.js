import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default Sentry.wrap(function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = () => {
    console.log('Form submission started');
    setStatus(null);

    if (!name || !email || !message) {
      console.warn('Validation failed: Missing required fields', { name, email, message });
      setStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    if (!email.includes('@')) {
      console.warn('Validation failed: Invalid email format', { email });
      setStatus({ type: 'error', message: 'Please enter a valid email' });
      return;
    }

    const formData = { name, email, message, timestamp: new Date().toISOString() };
    console.log('Form submitted successfully', formData);

    setStatus({ type: 'success', message: `Thank you ${name}! Your message has been submitted.` });

    setName('');
    setEmail('');
    setMessage('');

    console.log('Form reset complete');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Form</Text>

      <View style={styles.form}>
        {status && (
          <View style={[styles.statusBox, status.type === 'error' ? styles.errorBox : styles.successBox]}>
            <Text style={styles.statusText}>{status.message}</Text>
          </View>
        )}

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Message</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={message}
          onChangeText={setMessage}
          placeholder="Enter your message"
          multiline
          numberOfLines={4}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  form: {
    gap: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  statusBox: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  errorBox: {
    backgroundColor: '#fee',
    borderColor: '#c00',
    borderWidth: 1,
  },
  successBox: {
    backgroundColor: '#efe',
    borderColor: '#0a0',
    borderWidth: 1,
  },
  statusText: {
    fontSize: 14,
  },
});