 
import { StyleSheet,Image ,  TextInput ,  Text, View, Dimensions  } from 'react-native';
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

<Text    style={styles.Word}     >SOA  </Text>
</View>



    </View>



{/* Second */}
<View  style={[styles.Box2, {width : windowWidth -80 , height :windowHeight /1.8 } , styles.shadowProp]}>













{/*   */}

<View   style={styles.InnerDivsecond}     >
<View>
  <Text style={styles.BolderThings}  >No</Text>
  <Text  style={styles.bottmMargin}  >1</Text>
  <Text  style={styles.bottmMargin}  >2</Text>
  <Text  style={styles.bottmMargin}  >3</Text>
  <Text  style={styles.bottmMargin}  >4</Text>
  <Text  style={styles.bottmMargin}  >5</Text>
</View>
<View>
  <Text style={styles.BolderThings}  >Due Date </Text>
  <Text style={styles.bottmMargin} >21-02-2022</Text>
  <Text style={styles.bottmMargin} >21-02-2022</Text>
  <Text style={styles.bottmMargin} >21-02-2022</Text>
  <Text style={styles.bottmMargin} >21-02-2022</Text>
  <Text style={styles.bottmMargin} >21-02-2022</Text>
  
</View>
<View>
  <Text style={styles.BolderThings}  >Amount  </Text>
  <Text style={styles.bottmMargin}  >25,000</Text>
  <Text style={styles.bottmMargin}  >25,000</Text>
  <Text style={styles.bottmMargin}  >25,000</Text>
  <Text style={styles.bottmMargin}  >25,000</Text>
  <Text style={styles.bottmMargin}  >25,000</Text>
  
</View>
<View>
  <Text style={styles.BolderThings}  >Balance   </Text>
  <Text   style={styles.bottmMargin}>25,000</Text>
  <Text   style={styles.bottmMargin}>25,000</Text>
  <Text   style={styles.bottmMargin}>25,000</Text>
  <Text   style={styles.bottmMargin}>25,000</Text>
  <Text   style={styles.bottmMargin}>25,000</Text>
  
</View>




</View>



<View    style={styles.InnerDivThird}   >

<View     style={styles.InnerDivsecond2} ><Text style={styles.BlueHex}    >Due Date</Text><Text style={styles.BlueHex}    >21,04,22 Riyal</Text></View>
<View     style={styles.InnerDivsecond2} ><Text style={styles.BlueHex}    >Amount </Text><Text style={styles.BlueHex}    >21,04,22 Riyal</Text></View>
<View     style={styles.InnerDivsecond2} ><Text style={styles.BlueHex}    >Balance </Text><Text style={styles.BlueHex}    >21,04,22 Riyal</Text></View>


</View>



<View  style={styles.Buttonone}     >

<Text         style={styles.buttoncv1}   > Forward</Text>
<Text         style={styles.buttoncv2}   > Decline</Text>
  
</View>
<View>
<Text style={styles.buttoncv3}   >  Make Objection   </Text>
</View>


</View>


{/* Third */}
<View   style={[styles.Box3, {width : windowWidth     , height :windowHeight /11  } ]}  >
<Image
style={styles.stretch2}
source={{uri:'https://cdn-icons-png.flaticon.com/512/32/32217.png'}}

/>
<Image
style={styles.stretch2}
source={{uri:'https://cdn-icons-png.flaticon.com/512/685/685887.png'}}

/>
<Image
style={styles.stretch2}
source={{uri:'https://cdn-icons-png.flaticon.com/512/18/18625.png'}}

/>

<Image
style={styles.stretch2}
source={{uri:'https://cdn-icons-png.flaticon.com/512/2838/2838912.png'}}

/>
<Image
style={styles.stretch2}
source={{uri:'https://www.freepnglogos.com/uploads/qr-code-png/qr-code-code-code-scan-scanner-icon-icon-20.png'}}

/>



  <View    style={styles.InnerDiv}      >
    
    
    
    
       </View>
    </View>


 


    </View>
  );
}

const styles = StyleSheet.create({

  stretch2:{
    width: 23,
    height: 23,
  


 marginRight :7

  }, 

  BlueHex:{
    fontWeight : "800",
color : "#0096FF"
  }, 
  Buttonone:{
    display :"flex", 
    flexDirection : "row", 
    width : "100%",
    // marginTop : 10 ,
    // marginBottom : 10 ,
    justifyContent :"space-between",
  }, 
  
  buttoncv1:{
    backgroundColor : "#1434A4",
    padding : 7 ,
    paddingRight : 25 ,
    paddingLeft : 25 ,
    color : "white", 
    borderRadius : 5 ,   
      }, 
  buttoncv2:{
    backgroundColor : "#FFC300",
    padding : 7 ,
    paddingRight : 25 ,
    paddingLeft : 25 ,
    color : "white", 
    borderRadius : 5 ,   
      }, 
  buttoncv3:{
    backgroundColor : "#FF5733",
    padding : 7 ,
    paddingRight :45 ,
    paddingLeft : 45 ,
    color : "white", 
    borderRadius : 5 ,   
      }, 

  InnerDivThird:{

borderColor : "gray", 
borderWidth : 1 ,
padding : 10 ,
borderRadius  :12, 
width : "100%"
  }, 

  BolderThings:{
fontWeight :"bold",
marginBottom : 10
  }, 

  InnerDivsecond:{
    width : "100%", 
    // backgroundColor : "red", 
    display :"flex", 
    flexDirection : "row", 
    justifyContent : "space-between", 

  }, 
  InnerDivsecond2:{
    // backgroundColor : "red", 
display :"flex", 
justifyContent :"space-between",
flexDirection : "row", 

  }, 




  Number:{
fontSize : 14 ,
  }, 


BoldText:{
fontWeight  :"700"
}, 


  OuterText:{
    // marginBottom : 20 
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
  bottmMargin:{
marginBottom : 10
  }, 
  Word:{
    marginTop : 10 , 
    marginLeft : 20, 
    fontSize : 24,
    color : "white"
  }
,
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
      alignItems : "center",
      justifyContent : "space-between"

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
    justifyContent : "space-evenly",
    paddingLeft : 40 ,
    alignItems : "center",
    flexDirection  : "row",
    width : "100%",
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
