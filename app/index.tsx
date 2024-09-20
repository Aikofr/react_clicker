import { StyleSheet } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function Index() {
  return (
      <SafeAreaView style={style.safeArea}>
        <ThemedView style={style.container}>
          <ThemedText>Your background color is </ThemedText>
        </ThemedView>
      </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})