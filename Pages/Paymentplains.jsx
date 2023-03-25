 
import { Button, StyleSheet, Image , TextInput ,  Text, View, Dimensions, ScrollView  } from 'react-native';
export default function App() {
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log("Window Width" + windowWidth);
console.log("Window height"+ windowHeight ); 

  return (
    <View      style={styles.container}    >

      {/* First */}
    <View   style={[styles.Box1, {width : windowWidth , height :windowHeight /5 }]}  >

    <TextInput
        style={styles.input}
        placeholder="Search Here"
        keyboardType="ascii-capable"
      />



<View style={styles.TextWord}     >

<Text    style={styles.Word}     >  Invoice</Text>
</View>



    </View>



{/* Second */}

<View  style={[styles.Box2, {width : windowWidth -70 , height :windowHeight /1.8 } , styles.shadowProp]}  >


<ScrollView  showsVerticalScrollIndicator={false} >



<View    style={styles.firstSeprater}   >
<TextInput
        style={styles.input2}
        placeholder="Search Customer"
        keyboardType="ascii-capable"
      />

<View   style={styles.iconDiv}    > 

<Image
        style={styles.stretch}
        source={{uri:'https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg'}}

      />


<View    style={styles.nameContant}>


<Text    style={styles.name} >Arabian Metal Product</Text>
<Text    style={styles} >PO,Box NO 1566,Daman </Text>
<Text    style={styles.Id} >Kingdom of Saudia Arabia  </Text>
<Text    style={styles.plan} >View Payment Plans   </Text>

</View>
<View    style={styles.nameContant}>


</View>
{/* <Text    style={styles.Duration} >Employee Since 2022</Text> */}


</View>


</View>
<View    style={styles.firstSeprater}   >

<View   style={styles.iconDiv}    > 

<Image
        style={styles.stretch}
        source={{uri:'https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg'}}

      />


<View    style={styles.nameContant}>


<Text    style={styles.name} >Arabian Metal Product</Text>
<Text    style={styles} >PO,Box NO 1566,Daman </Text>
<Text    style={styles.Id} >Kingdom of Saudia Arabia  </Text>
<Text    style={styles.plan} >View Payment Plans   </Text>

</View>
<View    style={styles.nameContant}>


</View>
{/* <Text    style={styles.Duration} >Employee Since 2022</Text> */}


</View>


</View>
<View    style={styles.firstSeprater}   >

<View   style={styles.iconDiv}    > 

<Image
        style={styles.stretch}
        source={{uri:'https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg'}}

      />


<View    style={styles.nameContant}>


<Text    style={styles.name} >Arabian Metal Product</Text>
<Text    style={styles} >PO,Box NO 1566,Daman </Text>
<Text    style={styles.Id} >Kingdom of Saudia Arabia  </Text>
<Text    style={styles.plan} >View Payment Plans   </Text>

</View>
<View    style={styles.nameContant}>


</View>
{/* <Text    style={styles.Duration} >Employee Since 2022</Text> */}


</View>


</View>
<View    style={styles.firstSeprater}   >

<View   style={styles.iconDiv}    > 

<Image
        style={styles.stretch}
        source={{uri:'https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg'}}

      />


<View    style={styles.nameContant}>


<Text    style={styles.name} >Arabian Metal Product</Text>
<Text    style={styles} >PO,Box NO 1566,Daman </Text>
<Text    style={styles.Id} >Kingdom of Saudia Arabia  </Text>
<Text    style={styles.plan} >View Payment Plans   </Text>

</View>
<View    style={styles.nameContant}>


</View>
{/* <Text    style={styles.Duration} >Employee Since 2022</Text> */}


</View>


</View>
<View    style={styles.firstSeprater}   >

<View   style={styles.iconDiv}    > 

<Image
        style={styles.stretch}
        source={{uri:'https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg'}}

      />


<View    style={styles.nameContant}>


<Text    style={styles.name} >Arabian Metal Product</Text>
<Text    style={styles} >PO,Box NO 1566,Daman </Text>
<Text    style={styles.Id} >Kingdom of Saudia Arabia  </Text>
<Text    style={styles.plan} >View Payment Plans   </Text>

</View>
<View    style={styles.nameContant}>


</View>
{/* <Text    style={styles.Duration} >Employee Since 2022</Text> */}


</View>


</View>



  













{/*   */}





</ScrollView>
</View>




{/* Third */}
<View   style={[styles.Box3, {width : windowWidth     , height :windowHeight /11  } ]}  >




  <View    style={styles.InnerDiv}      >
    
    
    
    
       </View>
    </View>


 


    </View>
  );
}

const styles = StyleSheet.create({


  plan:{
color :"#00308F"
  }, 

  name:{
    fontWeight : "bold", 
marginRight : 25 ,
  }, 

  outerFlex:{
display : "flex", 
justifyContent : "flex-end", 
flexDirection : "row", 
alignItems : "center", 
  }, 
  ImagesFlex:{
    marginLeft :12 , 
display : "flex", 
flexDirection : "row"
  }, 
  buttoncv:{
backgroundColor : "red",
padding : 5 ,
color : "white", 
borderRadius : 5 ,   
  }, 
  buttoncv2
  
  :{
backgroundColor : "#61b33b",
padding : 5 ,
color : "white", 
borderRadius : 5 ,   
  }, 
  firstSeprater:{
    paddingTop : 12, 
    borderColor : "black", 
    borderBottomWidth : 1 ,
    width : "100%",
  }, 
  secondint:{
display : "flex", 
     
    justifyContent : "space-between", 
    alignItems : "center", 
flexDirection : "row", 
  }, 
  employeeName:{
fontWeight : "bold", 
fontSize : 15 , 
  }, 
  Id5:{
    color : "#12AD2B", 
  }, 
  Id:{
    color : "orange"
  },
  Id2:{
    color : "red"
  }

  ,
  stretch:{
    width: 60,
    height: 60,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 75, 

 marginRight :7

  }, 
  stretch2:{
    width: 20,
    height: 20,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 75, 

 marginRight :7

  }, 
  nameContant:{
  

 
display : "flex",
 flexDirection : "column",
  }, 
  iconDiv:{
display : "flex",
flexDirection : "row",
width : "100%", 
paddingLeft : 15 ,
marginBottom : 12, 
paddingTop : 20 ,
justifyContent : "flex-start" 

  }, 
  Number:{
fontSize : 14 ,
  }, 


BoldText:{
fontWeight  :"700"
}, 


  OuterText:{
    marginBottom : 20 
  }
,

  InnerMain:{
// display : "flex", 
// alignSelf :"flex-end", 
position : "absolute", 
bottom : 30  , 
paddingLeft : 20, 
} , 


MainchartBox:{
  display : "flex", 
  justifyContent : "space-between", 
 
  width : "100%", 
    position : "absolute", 
top : 30 
  },


  InnerText:{
  
alignSelf : "flex-end", 

  },      
  chartBox:{
position : "relative", 
flexDirection : "row", 
justifyContent : "space-between",
// width : "100%" 
  }, 

  Word:{
    marginTop : 10 , 
    marginLeft : 20, 
    fontSize : 24,
    color : "white"
  }
,

shadowProp: {
  borderTopEndRadius : 12, 
    borderTopStartRadius : 12,
    borderBottomEndRadius :12, 
    borderBottomStartRadius : 12,
},



InnerText:{
color :"orange"
}, 

  TextWord:{
alignSelf : "flex-start", 
color : "white"
  }, 
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width  :290 , 
    backgroundColor :"white", 
    borderRadius : 20, 
  },
  input2:
  {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width  :"100%" , 
    borderColor : "gray", 
    backgroundColor :"white", 
    borderRadius : 10, 
  }, 
  container:{
    
    flex : 1, 
    justifyContent  : "space-between",
    alignItems : "center"
  }, 
  BoxText:{
color : "white"
  }, 
  firstRowofSquare:{
flexDirection : "row", 
marginBottom : 40,  

  }, 

  Box2:{ 
    elevation : 3 , 
     borderTopEndRadius : 12 , 
     borderTopStartRadius :   12 ,
     borderBottomEndRadius : 12 , 
     borderBottomStartRadius :   12 ,
     marginTop : 50 ,
     borderColor : "black", 
     // borderWidth : 4,   
     padding : 12 ,
       flexDirection :"column",  
 
   },  
  Box1:{
    marginTop :24 , 
    // flex : 1, 
    justifyContent  :"center", 
    alignItems :"center", 
    borderBottomEndRadius : 12 , 
borderBottomStartRadius :   12 ,
    backgroundColor : "#005A9C", 
  }, 
  Box3:{
    alignSelf  : "flex-end", 
    borderTopEndRadius : 12 , 
    borderTopStartRadius :   12 ,
 
    backgroundColor: "#005A9C",   
  }, 
  square: {
    width: 100,
    marginRight : 40,
    flex  : 1, 
    justifyContent :"center", 
    alignItems : "center", 
    height: 100,
    // 
    backgroundColor: "#005A9C",
    borderRadius : 15,
  },
});
