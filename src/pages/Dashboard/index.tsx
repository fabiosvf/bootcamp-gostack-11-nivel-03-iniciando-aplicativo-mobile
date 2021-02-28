import React from 'react';
import { View, Text, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 28, color: '#fff' }}>{user.name}</Text>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
