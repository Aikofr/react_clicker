// Doc : https://docs.expo.dev/guides/color-schemes/

import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors"

export function useThemeColor(
    props: {light?: string; dark?: string}, //Permet de spécifier une couleur perso, laisser {} pour avoir la couleur par défaut
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark //Permet d'aller target une ref précise dans Colors[dark ou light] (du genre background, text..)
) {
    const theme = useColorScheme() ?? 'light';
    const colorFromProps = props[theme];    //Est ce qu'on a passé une couleur perso ?

    if (colorFromProps) {
        return colorFromProps;              //Oui je la prends
    } else {
        return Colors[theme][colorName]     //Non, je prends une couleur par défaut en fonction du thème.
    }
}