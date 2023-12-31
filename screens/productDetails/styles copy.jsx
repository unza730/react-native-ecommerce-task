import { StyleSheet } from "react-native";
import { COLORS, FONTWEIGHT, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: COLORS.lightGrey
    },
    back: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginLeft: 10,
        marginTop: 30,
        alignItems: 'center',
        width: 50,
        borderRadius: 50,
        backgroundColor: '#000',
        color: 'white'
    },
    imageBackground: {
        width: '100%',
        height: SIZES.height - 400,
    },
    imageOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameAndQuantity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    name: {
        fontSize: SIZES.h2,
        fontWeight: FONTWEIGHT.bold
    },
    quantityContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.grey,
        paddingVertical: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    quantity: {
        textAlign: 'center',
        fontWeight: FONTWEIGHT.bold,
        minWidth: 20
    },
    quantityIcon: {
        backgroundColor: COLORS.white2,
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.1
    },
    description: {
        marginHorizontal: 15,
       marginTop: 10,
        color: COLORS.accent
    },
    bottomRow: {
        flexDirection: 'row',
        marginHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        paddingBottom: 70
    },
    priceContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    price: {
        color: COLORS.primary,
        fontWeight: FONTWEIGHT.bold,
        fontSize: SIZES.h4
    },
    basketContainer: {
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    addToBasket: {
        color: COLORS.white,
        fontSize: SIZES.h4,
        fontWeight: FONTWEIGHT.bold
    },
    basketIcon: {
        backgroundColor: COLORS.white,
        marginLeft: 10,
        borderRadius: 50,
        padding: 5
    }
});
export default styles;