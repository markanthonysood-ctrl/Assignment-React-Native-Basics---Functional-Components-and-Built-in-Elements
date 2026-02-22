import { FlatList, Text, View } from 'react-native';
import SearchBar from "../components/SearchBar";

const Menu = [
    { id: '1', food: 'Fried Chicken', price: '₱100'},
    { id: '2', food: 'BBQ Chicken', price: '₱150'},
    { id: '3', food: 'Spicy Chiken Wings', price: '₱200'}
]

const Orders = () => {
    return(
        <View>
            <SearchBar/>
            <View>
                <Text style={{textAlign: 'center', fontSize: 45, marginTop: 3, marginBottom: 20, fontWeight: 'bold'}}>Orders Page</Text>

                <FlatList
                    data={Menu}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={{flexDirection: 'row', justifyContent: 'center', padding: 10, marginVertical: 5, width: '80%', alignSelf: 'center', borderWidth: 1, borderColor: '#ccc', borderRadius: 10, backgroundColor: '#f9f9f9'}}>
                            <Text style={{fontSize: 15}}>{item.food}</Text>
                            <Text style={{fontSize: 14, fontWeight: 'bold'}}>{item.price}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

export default Orders;