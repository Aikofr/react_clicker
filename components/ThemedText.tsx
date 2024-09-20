import { StyleSheet, Text, TextProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor"

type ThemedTextProps = TextProps & {
    lightColor?: string; //Permet de spécifié des couleurs perso pour chacun des modes
    darkColor?: string; //Laisser {}
    variant?: 'default' | 'title';
    //variant?: keyof typeof styles (moin claire mais moin restrictif.)
}

export function ThemedText({
    style,
    lightColor,
    darkColor,
    variant = 'default',
    ...rest
  }: ThemedTextProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  
    return (
      <Text
        style={[
          { color },
          variant === 'default' ? styles.default : undefined,
          variant === 'title' ? styles.title : undefined,
          style,
        ]}
        {...rest}
      />
    );
  }

const styles = StyleSheet.create({
    default: {
        fontSize: 10,
        lineHeight: 16,
    },
    title:{
        fontSize: 15,
        lineHeight: 20,
    }
})
