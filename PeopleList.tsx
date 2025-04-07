import React, { useState } from "react"; 
import { View, Text, TouchableOpacity, FlatList, TextInput, StyleSheet,Image } from "react-native"; 
import { useTheme } from "../Context/ThemeContext";
 import { Ionicons } from "@expo/vector-icons";
// import Avatar from "../components/Avatar";

import Frnd1 from "../assets/Image/Frnd1.png";
import Frnd2 from "../assets/Image/Frnd2.png";
import Frnd3 from "../assets/Image/Frnd3.png";
import Frnd4 from "../assets/Image/Frnd4.png";

const sections = ["Friends", "Verified", "Everyone"]; 
const friends = [ { id: "1", name: "John Doe", subName: "Software Engineer", image: Frnd1 },
 { id: "2", name: "Captain Crunch", subName: "Product Manager", image: Frnd2 } ,
{ id: "3", name: "Jane Doe", subName: "Product Manager", image: Frnd3},
{ id: "4", name: "Jane Doe", subName: "Product Manager", image: Frnd4}
];

export default function PeopleList() { const { colors, spacing, typography } = useTheme(); 
const [selected, setSelected] = useState("Friends");

return ( <View style={[styles.container,{ backgroundColor: colors.background,padding: spacing.padding }]}>
<View style={{ marginBottom: 20 }}>
<Text style={[typography.heading,{ color: colors.text },{ marginTop: 50 }]}>People</Text>
</View>

<View style={styles.tabBar}>
{sections.map((section) => (<TouchableOpacity key={section} onPress={() => setSelected(section)} style={selected===section? [styles.selectedTab,{ backgroundColor: colors.selectedTabBg },{
width: 120.33333587646484,
height: 32,
borderRadius: 16,
gap: 4,
paddingTop: 6,
paddingRight: 16,
paddingLeft: 16
}]:{}}>
<Text style={selected===section? [typography.selectedTab,{ color: colors.selectedTabText }]:[typography.tab,{ color: colors.inactiveIcon }]}> {section} </Text>
</TouchableOpacity>))} </View>

<View style={[styles.horizontalLine,{ backgroundColor: colors.border }]} />


<FlatList
data={selected==="Friends"? friends:[]}
keyExtractor={(item) => item.id}
renderItem={({ item }) => (
<View style={[styles.card,{ borderBottomColor: colors.border }]}>
<Image source={item.image} style={styles.avatar} />

<View style={styles.textContainer}>
<Text style={[typography.cardText,{ color: colors.text }]}>{item.name}</Text>
<Text style={[typography.cardSubText]}>{item.subName}</Text>
</View>
<Ionicons name="chevron-forward" size={18} color={colors.text} style={{
top: 8,
left: 10,
}} />
</View>
)} />
<View style={[styles.searchContainer,{ borderColor: colors.border }]}>
<Ionicons name="search" size={20} color={colors.text} style={styles.searchIcon} />
<TextInput
placeholder="Search People"
placeholderTextColor={colors.border}
style={typography.searchText} />
</View>
</View>
); 
}
const styles = StyleSheet.create({
 container: { flex: 1 }, 

tabBar: { flexDirection: "row",boxShadow:  "#000000",paddingVertical: 10,backdropFilter:10,backgroundColor:"#FFFFFF1A", justifyContent: "space-between",
borderRadius: 16,borderWidth: 2,height: 52,marginBottom:20,
},

searchContainer:{flexDirection:"row",alignItems:"center",borderWidth:2,borderRadius:24,paddingHorizontal:10,marginTop:15,width: 361,height: 48,left: 16,backgroundColor:"#FFFFFF1A"},

card: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 15, borderBottomWidth: 1 },

searchIcon:{marginRight:10,marginLeft:10,top:4,width: 30.5,height: 30.5},

avatar:{width:50,height:50,borderRadius:50,marginRight:10},
textContainer: { flex: 1, marginLeft: 10 },

horizontalLine:{width: 500,height: 2,left: -16,marginBottom:20}
 
});

