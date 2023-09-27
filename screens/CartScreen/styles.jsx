
import { StyleSheet } from "react-native";
import { COLORS, FONTWEIGHT, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: COLORS.lightGrey
    },
    back: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginLeft: 10,
        marginTop: 20,
        alignItems:'center',
        width: 50,
        borderRadius: 50,
        backgroundColor:'#000',
        color:'white'
    },
    container: {
        flex: 1,
        padding: 6,
      },
      cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 8,
        backgroundColor:'#E4E6EA',
        padding: 10,
        borderRadius: 16
      },
      column: {
        flex: 1,
        bacgroundColor: "white",
        paddingRight: 8,
      },
      productImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
      },
      productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      productCategory: {
        color: '#888',
      },
      productQuantity: {
        marginTop: 4,
      },
      quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      quantityButton: {
        width: 25,
        height: 25,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
      },
      quantityButtonText: {
        color: COLORS.primary,
        fontSize: 20,
      },
      
      productQuantity: {
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 10
      },
      productPrice: {
        marginTop: 4,
        fontWeight: 'bold',
      },
      removeButton: {
        width: 50,
        backgroundColor: COLORS.primary,
        paddingHorizontal: 12,
        borderRadius: 50,
        paddingVertical: 8,
        justifyContent:'end'
        // borderRadius: 4,
      },
      removeButtonText: {
        color: COLORS.white,
      },
      removeButtonContainer: {
        flex: 1,
        bacgroundColor: "white",
        paddingRight: 8,
        alignItems: 'flex-end', 
      },
      totalContainer: {
        backgroundColor: 'white', 
        padding: 10,
        borderRadius: 5,
        paddingHorizontal: 30,
        paddingVertical: 15
      },
      totalText: {
        color: 'black', 
        fontWeight: 'bold', 
        fontSize: 16, 
      },
      totalAndBuyNowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20, 
      },
      
      buyNowButton: {
        // width: 70,
        backgroundColor: COLORS.primary,
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 10,
        alignItems: 'center',
      },
      buyNowButtonText: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',
      },
    
});
export default styles;