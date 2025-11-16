import { Image, View } from "react-native";
import Banner from '../../../assets/netflixGif.gif'
import { styles } from "./style";

export function LoadingScreen() {

    return(
        <View style={styles.container}>

        <Image source={Banner} style={styles.logo} resizeMode="contain"/>
        
        </View>
    )
}