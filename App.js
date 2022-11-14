import {View, Text, StyleSheet} from 'react-native';
import Ibutton from './Ibutton'
import {useState, useEffect} from 'react';

const App = () => {
  const [render,rendercon]=useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [nextValue, setNextValue] = useState('0');
  const [op, setOp] = useState(null);
  const [result,setresult]=useState("")
  // const [Final,setFinal]=useState(false)
   

  // useEffect(() => {}, [op, nextValue, prevValue]);

  // const CalculatorOperations = {
  //   '/': (firstValue, secondValue) => firstValue / secondValue,
  //   '*': (firstValue, secondValue) => firstValue * secondValue,
  //   '+': (firstValue, secondValue) => firstValue + secondValue,
  //   '-': (firstValue, secondValue) => firstValue - secondValue,
  //   '**': (firstValue, secondValue) => firstValue ** secondValue,
  //   '=': (firstValue, secondValue) => secondValue,
  // };

  const performOperation = (operator) => {
    // let temp = CalculatorOperations[op](
    //   parseFloat(prevValue),
    //   parseFloat(nextValue),
      
    // );
    // console.log("hii");

    let temp = 0;
     switch (operator)
         {
          case "+":
            temp = parseFloat(prevValue) +
            parseFloat(nextValue)
               break;
          case "-":
            temp = parseFloat(prevValue) -
            parseFloat(nextValue)
                break;
          case "*":
            temp = parseFloat(prevValue) *
            parseFloat(nextValue)
                  break;
          case "/":
            temp = parseFloat(prevValue) /
            parseFloat(nextValue)
                    break;
         case '**':
          temp = parseFloat(prevValue) **
          parseFloat(nextValue)
                      break;
         }
  
      
         
  
    setOp(null);
    setNextValue(String(temp));
    setPrevValue(null);
    setresult(result + temp)
 };

  const handleNum = number => {
    setNextValue(nextValue === '0' ? String(number) : nextValue + number);
    rendercon(render === '0' ? String(number) : render + number );
  };

  const insertDot = (value) => {
    if (value === '.') {
      setNextValue(nextValue + '.');
      rendercon(render + ".")
    }
  };
  const clear=()=>{
    let string = render.toString() ;
    let deletestring = string.substring(0, string.length - 1);
    // alert(deletestring)
    let length = string.length;
    rendercon(deletestring);
    setNextValue(deletestring);

    // prevValue==='null'? setNextValue(parseInt(deletestring)) : setPrevValue(parseFloat(deletestring));
    
     
     
    
  };
  const percentage = () => {
    setNextValue(parseFloat(nextValue) / 100);
    if (prevValue && nextValue === '') {
      setPrevValue(parseFloat(prevValue) / 100);
      rendercon(render + "%")
    }
  };
  const changeSign = () => {
    setNextValue(parseFloat(nextValue) * -1);
  };
  const clearData = () => {
    setNextValue('0');
    setPrevValue(0);
    rendercon('0');
    setresult('');
  };

  const handleOperation = (value) => {
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
      // alert(value);
    }  else if (value === 'AC') {
      clearData();
    }  else if (value === '.') {
      insertDot('.');
    } else if (value === '%') {
      percentage();
    } else if (value === 'C'){
      clear();
    } else {
      if(value!= '='){
        rendercon(render + value)
         
      }
     
      // switch (value)
      //    {
      //     case "+":
      //          rendercon(render + "+")
      //          break;
      //     case "-":
      //           rendercon(render + "-")
      //           break;
      //     case "*":
      //             rendercon(render + "X")
      //             break;
      //     case "/":
      //               rendercon(render + "/")
      //               break;
      //    case '**':
      //                 rendercon(render + "**")
      //                 break;
      //    }
      if (op === null) {
        setOp(value);
        setPrevValue(nextValue);
        setNextValue('');
        
        
      }
      if (op) {
        setOp(value);
          
         
      }
      if (prevValue && op && nextValue) {
        performOperation(op);
      }
    }
  };

  return (
    
      <View style={Styles.DisplayContainer}>
        <View>
          <Text style={Styles.Last}>{render}</Text>
          {/* <Text style={Styles.TextInput}>{prevValue}</Text> */}
          
          <Text style={Styles.Resvalue}>{nextValue}</Text>
        </View>
      
      <View style={Styles.ButtonContainer}>
        <View style={Styles.Lines}>
          <Ibutton text={'AC'} onPress={() => handleOperation('AC')} />
          <Ibutton text={'C'} onPress={() => handleOperation('C')} />
          <Ibutton text={'%'} onPress={() => handleOperation('%')} />
          <Ibutton text={'*'} onPress={() => handleOperation('*')} />
        </View>
        <View style={Styles.Lines}>
          <Ibutton text={'7'} onPress={() => handleOperation(7)} />
          <Ibutton text={'8'} onPress={() => handleOperation(8)} />
          <Ibutton text={'9'} onPress={() => handleOperation(9)} />
          <Ibutton text={'/'} onPress={() => handleOperation('/')} />
        </View>
        <View style={Styles.Lines}>
          <Ibutton text={'4'} onPress={() => handleOperation(4)} />
          <Ibutton text={'5'} onPress={() => handleOperation(5)} />
          <Ibutton text={'6'} onPress={() => handleOperation(6)} />
          <Ibutton text={'+'} onPress={() => handleOperation('+')} />
        </View>
        <View style={Styles.Lines}>
          <Ibutton text={'1'} onPress={() => handleOperation(1)} />
          <Ibutton text={'2'} onPress={() => handleOperation(2)} />
          <Ibutton  text={'3'} onPress={() => handleOperation(3)} />
          <Ibutton text={'-'} onPress={() => handleOperation('-')} />
        </View>
        <View style={Styles.Lines}>
          <Ibutton text={'**'} onPress={() => handleOperation("**")} />
          <Ibutton text={'0'} onPress={() => handleOperation(0)} />
          <Ibutton text={'.'} onPress={() => handleOperation('.')} />
          <Ibutton text={'='} onPress={() => handleOperation('=')} />
        </View>
      </View>
      </View>
    
  );
};
const Styles = StyleSheet.create({
  DisplayContainer: {
    backgroundColor: '#ACF35F',
    // height: 210,
    flex:1
  
  
  },
  ButtonContainer: {
    // backgroundColor: '#ACF35F',
    // // height: 450,,
    marginTop:100,
    // borderRadius:20
    
  },
  ButtonDesign: {
    fontSize: 50,
  },
  Firstline: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    justifyContent: 'space-between',
  },

  Lines: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
  Resvalue: {
    fontSize: 30,
    marginTop: 20,
    borderRadius: 5,
    textAlign: 'right',
    color:'black',
    paddingRight:20
  },
  TextInput: {
    fontSize: 30,
    marginTop: 45,
    borderRadius: 5,
    textAlign: 'right',
    
  },
  Last: {
    fontSize: 30,
    marginTop: 100,
    borderRadius: 10,
    textAlign: 'right',
    color:'black',
    paddingRight:20
  },
});
export default App;
