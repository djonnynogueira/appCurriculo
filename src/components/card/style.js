import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    card_container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
      },
      card: {
        width: '60%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#939393',
        padding: 3,
        fontWeight: 'bold'
      },
      card_header: {
        fontWeight:'bold'
      },
      card_content: {
        marginTop: 1
      },
})

export default style