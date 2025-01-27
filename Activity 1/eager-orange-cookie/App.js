import React from 'react';
import { StyleSheet, TextInput, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('NAME:');
  const [age, onChangeAge] = React.useState('AGE:');
  const [address, onChangeAddress] = React.useState('ADDRESS:');
  const [school, onChangeSchool] = React.useState('SCHOOL:');
  const [course, onChangeCourse] = React.useState('COURSE:');
  const [email, onChangeEmail] = React.useState('EMAIL:');
  const [contactNo, onChangeContactNo] = React.useState('CONTACT NO:');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAge}
            value={age}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={address}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeSchool}
            value={school}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeCourse}
            value={course}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeContactNo}
            value={contactNo}
            keyboardType="phone-pad"
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;