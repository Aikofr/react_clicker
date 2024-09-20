import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function Index() {
  return (
    <SafeAreaView>
        <ThemedView>
          <ThemedText>Your background color is </ThemedText>
        </ThemedView>
    </SafeAreaView>
  );
}