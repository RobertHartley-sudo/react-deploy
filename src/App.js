import React, { Component } from 'react';
import './App.css';
import Notes from './Notes/Notes';
import Checkbox from './Checkbox/Checkbox';
import Select from 'react-select';
import Tuning from './Tuning/Tuning';

var scaleOrChord;


var globalChangeChord = {value: 'C.jpg'};

const OPTIONS = ["A", "B", "C", "D", "E"];

const chordOptions = [
  { value: 'C.jpg', label: 'C Major' },
  { value: 'Db.jpg', label: 'Db Major' }, 
  { value: 'D.jpg', label: 'D Major' },  
  { value: 'Eb.jpg', label: 'Eb Major' },
  { value: 'E.jpg', label: 'E Major' },    
  { value: 'F.jpg', label: 'F Major' },  
  { value: 'Gb.jpg', label: 'Gb Major' },  
  { value: 'G.jpg', label: 'G Major' },  
  { value: 'Ab.jpg', label: 'Ab Major' },  
  { value: 'A.jpg', label: 'A Major' },
  { value: 'Bb.jpg', label: 'Bb Major' },  
  { value: 'B.jpg', label: 'B Major' }
];

const tuningOptions = [
  { value: 'Standard', label: 'Standard' },
  { value: 'Drop D', label: 'Drop D' }, 
  { value: 'DADGAD', label: 'DADGAD' }
];



class App extends Component {
  state =  { 

    guitarString: [
        [   
        {
        image: 'handtinywhite.jpg',
        value: 'E.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'F.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Gb.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'G.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Ab.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'A.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Bb.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'B.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'C.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Db.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'D.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Eb.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'E.jpg'
        }
      ],
      [   
        {
        image: 'handtinywhite.jpg',
        value: 'A.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Bb.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'B.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'C.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Db.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'D.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Eb.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'E.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'F.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Gb.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'G.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Ab.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'A.jpg'
        }
      ],
      [   
          {
          image: 'handtinywhite.jpg',
          value: 'D.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Eb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'E.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'F.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Gb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'G.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Ab.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'A.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Bb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'B.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'C.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Db.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'D.jpg'
          }
        ],
        [   
          {
          image: 'handtinywhite.jpg',
          value: 'G.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Ab.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'A.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Bb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'B.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'C.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Db.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'D.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Eb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'E.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'F.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Gb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'G.jpg'
          }
        ],
        [   
          {
          image: 'handtinywhite.jpg',
          value: 'B.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'C.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Db.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'D.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Eb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'E.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'F.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Gb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'G.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Ab.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'A.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Bb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'B.jpg'
          }
        ],
        [
        {
          image: 'handtinywhite.jpg',
          value: 'E.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'F.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'Gb.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'G.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'Ab.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'A.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'Bb.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'B.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'C.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'Db.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'D.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'Eb.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'E.jpg'
        }
      ]
    ],
      

      checkboxes: OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: false
        }),
        {}
      ),

    selectedOption: null
    }  //for the state


      

      

afterChangeTuning = (selectedOption, scaleOrChord) => {

  if (scaleOrChord === 'chord') {
    this.handleChangeChords(selectedOption);
  } else {
    this.handleChangeScales(selectedOption);
  }

}

handleChangeScales = (selectedOption) => {

  globalChangeChord.value = selectedOption.value;
  var cooldude = document.getElementById("chordChanger");
  
// document.getElementById("chordChanger");

//  document.getElementById("chordChanger").value = null;

//  this.setState({ selectedOption });
  
  let whichKey = selectedOption.value;
  let rootFret = 0;


  this.setState ( {
    guitarString: [
          [   
          {
          image: 'handtinywhite.jpg',
          value: this.state.guitarString[0][0].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][1].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][2].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][3].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][4].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][5].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][6].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][7].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][8].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][9].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][10].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][11].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][12].value
          }
        ],
        [   
          {
          image: 'handtinywhite.jpg',
          value: this.state.guitarString[1][0].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][1].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][2].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][3].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][4].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][5].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][6].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][7].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][8].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][9].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][10].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][11].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][12].value
          }
        ],
        [   
          {
          image: 'handtinywhite.jpg',
          value: this.state.guitarString[2][0].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][1].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][2].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][3].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][4].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][5].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][6].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][7].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][8].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][9].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][10].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][11].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][12].value
          }
        ],
        [   //third
          {
          image: 'handtinywhite.jpg',
          value: this.state.guitarString[3][0].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][1].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][2].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][3].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][4].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][5].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][6].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][7].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][8].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][9].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][10].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][11].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][12].value
          }
        ],
        [   
          {
          image: 'handtinywhite.jpg',
          value: this.state.guitarString[4][0].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][1].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][2].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][3].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][4].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][5].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][6].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][7].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][8].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][9].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][10].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][11].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][12].value
          }
        ],
        [   
          {
          image: 'handtinywhite.jpg',
          value: this.state.guitarString[5][0].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][1].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][2].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][3].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][4].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][5].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][6].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][7].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][8].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][9].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][10].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][11].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][12].value
          }
        ]
      ]
      })

      var updateEachString = (whichString, rootFret, scaleToPass) => {


// if rootFret + majorScale[i] > 12 then majorScale[i] = (majorScale[i] - 12)
        for (let m = 0; m < 7; m++) {
          if (rootFret + scaleToPass[m] > 12) { 
            console.log("it's too big");
            scaleToPass[m] = scaleToPass[m] - 12;};
  

          this.setState (prevState => {
            const newItems = [...prevState.guitarString];
            if (rootFret + scaleToPass[m] === 12) {  // if we are updating the open string use a diffferent graphic
              newItems[whichString][rootFret + scaleToPass[m]].image = newItems[whichString][rootFret + scaleToPass[m]].value;            
              newItems[whichString][0].image = 'noString'.concat(newItems[whichString][rootFret + scaleToPass[m]].value);            
            } else { // if we are updating any other string (fretted string)
            newItems[whichString][rootFret + scaleToPass[m]].image = newItems[whichString][rootFret + scaleToPass[m]].value;
            }
            return {guitarString: newItems};      
          })

        }


      
       
      }  //end of updateEachString
      

      
      for (let j = 0; j < 6; j++) {  // loops through each string
        for (let i = 0; i < 13; i++) { // determines which fret the root note is on for each string
          if (this.state.guitarString[j][i].value===whichKey) { rootFret = i;}
          } 
          const majorScale = [0, 2, 4, 5, 7, 9, 11];



          updateEachString(j, rootFret, majorScale);
      
      }


  scaleOrChord = 'scale';

} //end of  handleChangeScales





coolTest = (selectedOption) => {

  let whichSpecialChord = {value: 'C.jpg'};

if (selectedOption.value === 'Standard') {
  this.handleChangeChords(whichSpecialChord); } else {
  this.handleChangeTuning(selectedOption);
  }
  
}





handleChangeChords = (selectedOption) => {


  globalChangeChord.value = selectedOption.value;

  var cooldude = document.getElementById("scaleChanger");



  let whichKey = selectedOption.value;
  let rootFret = 0;


  this.setState ( {
    guitarString: [
          [   
          {
          image: 'handtinywhite.jpg',
          value: this.state.guitarString[0][0].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][1].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][2].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][3].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][4].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][5].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][6].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][7].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][8].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][9].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][10].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][11].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[0][12].value
          }
        ],
        [   
          {
          image: 'handtinywhite.jpg',
          value: this.state.guitarString[1][0].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][1].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][2].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][3].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][4].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][5].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][6].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][7].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][8].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][9].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][10].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][11].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[1][12].value
          }
        ],
        [   
          {
          image: 'handtinywhite.jpg',
          value: this.state.guitarString[2][0].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][1].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][2].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][3].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][4].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][5].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][6].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][7].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][8].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][9].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][10].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][11].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[2][12].value
          }
        ],
        [   //third
          {
          image: 'handtinywhite.jpg',
          value: this.state.guitarString[3][0].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][1].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][2].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][3].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][4].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][5].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][6].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][7].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][8].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][9].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][10].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][11].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[3][12].value
          }
        ],
        [   
          {
          image: 'handtinywhite.jpg',
          value: this.state.guitarString[4][0].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][1].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][2].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][3].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][4].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][5].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][6].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][7].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][8].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][9].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][10].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][11].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[4][12].value
          }
        ],
        [   
          {
          image: 'handtinywhite.jpg',
          value: this.state.guitarString[5][0].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][1].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][2].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][3].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][4].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][5].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][6].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][7].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][8].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][9].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][10].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][11].value
          },
          {
          image: 'justline.jpg',
          value: this.state.guitarString[5][12].value
          }
        ]
      ]
      })
      
  
var updateEachString = (whichString, rootFret) => {


  switch (rootFret) {
    case 0:  // Fallthrough
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      this.setState (prevState => {
        const newItems = [...prevState.guitarString];
        newItems[whichString][rootFret].image = newItems[whichString][rootFret].value;
        return {guitarString: newItems};      
      })
      this.setState (prevState => {
        const newItems = [...prevState.guitarString];
        newItems[whichString][rootFret + 4].image = newItems[whichString][rootFret + 4].value;
        return {guitarString: newItems};      
      })
      this.setState (prevState => {
        const newItems = [...prevState.guitarString];
        newItems[whichString][rootFret + 7].image = newItems[whichString][rootFret + 7].value;
        return {guitarString: newItems};      
      })
      if (rootFret + 7 === 12) {
        this.setState (prevState => {
        const newItems = [...prevState.guitarString];
        newItems[whichString][0].image = 'noString'.concat(newItems[whichString][12].value);
        return {guitarString: newItems};      
        })
      }
    break;
    case 6: // Fallthrough
    case 7:
    case 8:
    this.setState (prevState => {
        const newItems = [...prevState.guitarString];
        newItems[whichString][rootFret].image = newItems[whichString][rootFret].value;
        return {guitarString: newItems};      
      })
    this.setState (prevState => {
      const newItems = [...prevState.guitarString];
      newItems[whichString][rootFret + 4].image = newItems[whichString][rootFret + 4].value;
      return {guitarString: newItems};      
    })
    this.setState (prevState => {
      const newItems = [...prevState.guitarString];
      newItems[whichString][rootFret - 5].image = newItems[whichString][rootFret - 5].value;
      return {guitarString: newItems};      
    })
    if (rootFret + 4 === 12) {
      this.setState (prevState => {
      const newItems = [...prevState.guitarString];
      newItems[whichString][0].image = 'noString'.concat(newItems[whichString][12].value);
      return {guitarString: newItems};      
      })
    }
    break;
    case 9: // Fallthrough
    case 10:
    case 11:
    case 12:  
    this.setState (prevState => {
      const newItems = [...prevState.guitarString];
      newItems[whichString][rootFret].image = newItems[whichString][rootFret].value;
      return {guitarString: newItems};      
    })
    this.setState (prevState => {
      const newItems = [...prevState.guitarString];
      newItems[whichString][rootFret - 8].image = newItems[whichString][rootFret - 8].value;
      return {guitarString: newItems};      
    })
    this.setState (prevState => {
      const newItems = [...prevState.guitarString];
      newItems[whichString][rootFret - 5].image = newItems[whichString][rootFret - 5].value;
      return {guitarString: newItems};      
    })
    if (rootFret === 12) {
      this.setState (prevState => {
      const newItems = [...prevState.guitarString];
      newItems[whichString][0].image = 'noString'.concat(newItems[whichString][12].value);
      return {guitarString: newItems};      
    })
    }
    break;
    default:
    console.log('default' + rootFret);
  }

 
  }  //end of updateEachString



for (let j = 0; j < 6; j++) {  // loops through each string
  for (let i = 0; i < 13; i++) { // determines which fret the root note is on for each string
    if (this.state.guitarString[j][i].value===whichKey) { rootFret = i;}
    } 

    updateEachString(j, rootFret);

}

scaleOrChord = 'chord';


} //end of handleChangeChords





  // below is for the checkboxes
  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);  


  lowerHighEString = () => {
 
    this.setState ( {
      guitarString: [
            [   
            {
            image: this.state.guitarString[0][0].image,
            value: this.state.guitarString[0][0].value
            },
            {
            image: this.state.guitarString[0][1].image,
            value: this.state.guitarString[0][1].value
            },
            {
            image: this.state.guitarString[0][2].image,
            value: this.state.guitarString[0][2].value
            },
            {
            image: this.state.guitarString[0][3].image,
            value: this.state.guitarString[0][3].value
            },
            {
            image: this.state.guitarString[0][4].image,
            value: this.state.guitarString[0][4].value
            },
            {
            image: this.state.guitarString[0][5].image,
            value: this.state.guitarString[0][5].value
            },
            {
            image: this.state.guitarString[0][6].image,
            value: this.state.guitarString[0][6].value
            },
            {
            image: this.state.guitarString[0][7].image,
            value: this.state.guitarString[0][7].value
            },
            {
            image: this.state.guitarString[0][8].image,
            value: this.state.guitarString[0][8].value
            },
            {
            image: this.state.guitarString[0][9].image,
            value: this.state.guitarString[0][9].value
            },
            {
            image: this.state.guitarString[0][10].image,
            value: this.state.guitarString[0][10].value
            },
            {
            image: this.state.guitarString[0][11].image,
            value: this.state.guitarString[0][11].value
            },
            {
            image: this.state.guitarString[0][12].image,
            value: this.state.guitarString[0][12].value
            }
          ],
          [   
            {
            image: this.state.guitarString[1][0].image,
            value: this.state.guitarString[1][0].value
            },
            {
            image: this.state.guitarString[1][1].image,
            value: this.state.guitarString[1][1].value
            },
            {
            image: this.state.guitarString[1][2].image,
            value: this.state.guitarString[1][2].value
            },
            {
            image: this.state.guitarString[1][3].image,
            value: this.state.guitarString[1][3].value
            },
            {
            image: this.state.guitarString[1][4].image,
            value: this.state.guitarString[1][4].value
            },
            {
            image: this.state.guitarString[1][5].image,
            value: this.state.guitarString[1][5].value
            },
            {
            image: this.state.guitarString[1][6].image,
            value: this.state.guitarString[1][6].value
            },
            {
            image: this.state.guitarString[1][7].image,
            value: this.state.guitarString[1][7].value
            },
            {
            image: this.state.guitarString[1][8].image,
            value: this.state.guitarString[1][8].value
            },
            {
            image: this.state.guitarString[1][9].image,
            value: this.state.guitarString[1][9].value
            },
            {
            image: this.state.guitarString[1][10].image,
            value: this.state.guitarString[1][10].value
            },
            {
            image: this.state.guitarString[1][11].image,
            value: this.state.guitarString[1][11].value
            },
            {
            image: this.state.guitarString[1][12].image,
            value: this.state.guitarString[1][12].value
            }
          ],
          [   
            {
            image: this.state.guitarString[2][0].image,
            value: this.state.guitarString[2][0].value
            },
            {
            image: this.state.guitarString[2][1].image,
            value: this.state.guitarString[2][1].value
            },
            {
            image: this.state.guitarString[2][2].image,
            value: this.state.guitarString[2][2].value
            },
            {
            image: this.state.guitarString[2][3].image,
            value: this.state.guitarString[2][3].value
            },
            {
            image: this.state.guitarString[2][4].image,
            value: this.state.guitarString[2][4].value
            },
            {
            image: this.state.guitarString[2][5].image,
            value: this.state.guitarString[2][5].value
            },
            {
            image: this.state.guitarString[2][6].image,
            value: this.state.guitarString[2][6].value
            },
            {
            image: this.state.guitarString[2][7].image,
            value: this.state.guitarString[2][7].value
            },
            {
            image: this.state.guitarString[2][8].image,
            value: this.state.guitarString[2][8].value
            },
            {
            image: this.state.guitarString[2][9].image,
            value: this.state.guitarString[2][9].value
            },
            {
            image: this.state.guitarString[2][10].image,
            value: this.state.guitarString[2][10].value
            },
            {
            image: this.state.guitarString[2][11].image,
            value: this.state.guitarString[2][11].value
            },
            {
            image: this.state.guitarString[2][12].image,
            value: this.state.guitarString[2][12].value
            }
          ],
          [   //third
            {
            image: this.state.guitarString[3][0].image,
            value: this.state.guitarString[3][0].value
            },
            {
            image: this.state.guitarString[3][1].image,
            value: this.state.guitarString[3][1].value
            },
            {
            image: this.state.guitarString[3][2].image,
            value: this.state.guitarString[3][2].value
            },
            {
            image: this.state.guitarString[3][3].image,
            value: this.state.guitarString[3][3].value
            },
            {
            image: this.state.guitarString[3][4].image,
            value: this.state.guitarString[3][4].value
            },
            {
            image: this.state.guitarString[3][5].image,
            value: this.state.guitarString[3][5].value
            },
            {
            image: this.state.guitarString[3][6].image,
            value: this.state.guitarString[3][6].value
            },
            {
            image: this.state.guitarString[3][7].image,
            value: this.state.guitarString[3][7].value
            },
            {
            image: this.state.guitarString[3][8].image,
            value: this.state.guitarString[3][8].value
            },
            {
            image: this.state.guitarString[3][9].image,
            value: this.state.guitarString[3][9].value
            },
            {
            image: this.state.guitarString[3][10].image,
            value: this.state.guitarString[3][10].value
            },
            {
            image: this.state.guitarString[3][11].image,
            value: this.state.guitarString[3][11].value
            },
            {
            image: this.state.guitarString[3][12].image,
            value: this.state.guitarString[3][12].value
            }
          ],
          [   
            {
            image: this.state.guitarString[4][0].image,
            value: this.state.guitarString[4][0].value
            },
            {
            image: this.state.guitarString[4][1].image,
            value: this.state.guitarString[4][1].value
            },
            {
            image: this.state.guitarString[4][2].image,
            value: this.state.guitarString[4][2].value
            },
            {
            image: this.state.guitarString[4][3].image,
            value: this.state.guitarString[4][3].value
            },
            {
            image: this.state.guitarString[4][4].image,
            value: this.state.guitarString[4][4].value
            },
            {
            image: this.state.guitarString[4][5].image,
            value: this.state.guitarString[4][5].value
            },
            {
            image: this.state.guitarString[4][6].image,
            value: this.state.guitarString[4][6].value
            },
            {
            image: this.state.guitarString[4][7].image,
            value: this.state.guitarString[4][7].value
            },
            {
            image: this.state.guitarString[4][8].image,
            value: this.state.guitarString[4][8].value
            },
            {
            image: this.state.guitarString[4][9].image,
            value: this.state.guitarString[4][9].value
            },
            {
            image: this.state.guitarString[4][10].image,
            value: this.state.guitarString[4][10].value
            },
            {
            image: this.state.guitarString[4][11].image,
            value: this.state.guitarString[4][11].value
            },
            {
            image: this.state.guitarString[4][12].image,
            value: this.state.guitarString[4][12].value
            }
          ],
          [   
            {
            image: 'noString'.concat(this.state.guitarString[5][11].image),
            value: this.state.guitarString[5][11].value
            },
            {
            image: this.state.guitarString[5][12].image,
            value: this.state.guitarString[5][12].value
            },
            {
            image: this.state.guitarString[5][1].image,
            value: this.state.guitarString[5][1].value
            },
            {
            image: this.state.guitarString[5][2].image,
            value: this.state.guitarString[5][2].value
            },
            {
            image: this.state.guitarString[5][3].image,
            value: this.state.guitarString[5][3].value
            },
            {
            image: this.state.guitarString[5][4].image,
            value: this.state.guitarString[5][4].value
            },
            {
            image: this.state.guitarString[5][5].image,
            value: this.state.guitarString[5][5].value
            },
            {
            image: this.state.guitarString[5][6].image,
            value: this.state.guitarString[5][6].value
            },
            {
            image: this.state.guitarString[5][7].image,
            value: this.state.guitarString[5][7].value
            },
            {
            image: this.state.guitarString[5][8].image,
            value: this.state.guitarString[5][8].value
            },
            {
            image: this.state.guitarString[5][9].image,
            value: this.state.guitarString[5][9].value
            },
            {
            image: this.state.guitarString[5][10].image,
            value: this.state.guitarString[5][10].value
            },
            {
            image: this.state.guitarString[5][11].image,
            value: this.state.guitarString[5][11].value
            }
          ]
        ]
        })
  
  }  // end of lowerHighEString








  

handleChangeTuning = (selectedOption) => {



if (selectedOption.value === 'Drop D') {

  this.setState ( {
    guitarString: [
      [   
        {
          image: 'handtinywhite.jpg',
          value: 'D.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Eb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'E.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'F.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Gb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'G.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Ab.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'A.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Bb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'B.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'C.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Db.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'D.jpg'
          }
      ],
      [   
        {
        image: 'handtinywhite.jpg',
        value: 'A.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Bb.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'B.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'C.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Db.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'D.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Eb.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'E.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'F.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Gb.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'G.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Ab.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'A.jpg'
        }
      ],
      [   
          {
          image: 'handtinywhite.jpg',
          value: 'D.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Eb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'E.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'F.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Gb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'G.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Ab.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'A.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Bb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'B.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'C.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Db.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'D.jpg'
          }
        ],
        [   
          {
          image: 'handtinywhite.jpg',
          value: 'G.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Ab.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'A.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Bb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'B.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'C.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Db.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'D.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Eb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'E.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'F.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Gb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'G.jpg'
          }
        ],
        [   
          {
          image: 'handtinywhite.jpg',
          value: 'B.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'C.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Db.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'D.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Eb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'E.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'F.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Gb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'G.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Ab.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'A.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Bb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'B.jpg'
          }
        ],
        [
        {
          image: 'handtinywhite.jpg',
          value: 'E.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'F.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'Gb.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'G.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'Ab.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'A.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'Bb.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'B.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'C.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'Db.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'D.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'Eb.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'E.jpg'
        }
      ]
    ] }, () => this.afterChangeTuning(globalChangeChord, scaleOrChord))

  } else if (selectedOption.value === 'DADGAD') {

    this.setState ( {
      guitarString: [
        [   
          {
            image: 'handtinywhite.jpg',
            value: 'D.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Eb.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'E.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'F.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Gb.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'G.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Ab.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'A.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Bb.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'B.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'C.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Db.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'D.jpg'
            }
        ],
        [   
          {
          image: 'handtinywhite.jpg',
          value: 'A.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Bb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'B.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'C.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Db.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'D.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Eb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'E.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'F.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Gb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'G.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Ab.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'A.jpg'
          }
        ],
        [   
            {
            image: 'handtinywhite.jpg',
            value: 'D.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Eb.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'E.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'F.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Gb.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'G.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Ab.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'A.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Bb.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'B.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'C.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Db.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'D.jpg'
            }
          ],
          [   
            {
            image: 'handtinywhite.jpg',
            value: 'G.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Ab.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'A.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Bb.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'B.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'C.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Db.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'D.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Eb.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'E.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'F.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Gb.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'G.jpg'
            }
          ],
          [   
            {
            image: 'handtinywhite.jpg',
            value: 'A.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Bb.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'B.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'C.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Db.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'D.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Eb.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'E.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'F.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Gb.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'G.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'Ab.jpg'
            },
            {
            image: 'justline.jpg',
            value: 'A.jpg'
            }
          ],
          [   
              {
              image: 'handtinywhite.jpg',
              value: 'D.jpg'
              },
              {
              image: 'justline.jpg',
              value: 'Eb.jpg'
              },
              {
              image: 'justline.jpg',
              value: 'E.jpg'
              },
              {
              image: 'justline.jpg',
              value: 'F.jpg'
              },
              {
              image: 'justline.jpg',
              value: 'Gb.jpg'
              },
              {
              image: 'justline.jpg',
              value: 'G.jpg'
              },
              {
              image: 'justline.jpg',
              value: 'Ab.jpg'
              },
              {
              image: 'justline.jpg',
              value: 'A.jpg'
              },
              {
              image: 'justline.jpg',
              value: 'Bb.jpg'
              },
              {
              image: 'justline.jpg',
              value: 'B.jpg'
              },
              {
              image: 'justline.jpg',
              value: 'C.jpg'
              },
              {
              image: 'justline.jpg',
              value: 'Db.jpg'
              },
              {
              image: 'justline.jpg',
              value: 'D.jpg'
              }
            ]
          ] }, () => this.afterChangeTuning(globalChangeChord, scaleOrChord))
    
    
} else {  // set to Standard

this.setState ( 
  { 

    guitarString: [
        [   
        {
        image: 'handtinywhite.jpg',
        value: 'E.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'F.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Gb.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'G.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Ab.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'A.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Bb.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'B.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'C.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Db.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'D.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Eb.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'E.jpg'
        }
      ],
      [   
        {
        image: 'handtinywhite.jpg',
        value: 'A.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Bb.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'B.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'C.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Db.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'D.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Eb.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'E.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'F.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Gb.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'G.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'Ab.jpg'
        },
        {
        image: 'justline.jpg',
        value: 'A.jpg'
        }
      ],
      [   
          {
          image: 'handtinywhite.jpg',
          value: 'D.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Eb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'E.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'F.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Gb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'G.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Ab.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'A.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Bb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'B.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'C.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Db.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'D.jpg'
          }
        ],
        [   
          {
          image: 'handtinywhite.jpg',
          value: 'G.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Ab.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'A.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Bb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'B.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'C.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Db.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'D.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Eb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'E.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'F.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Gb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'G.jpg'
          }
        ],
        [   
          {
          image: 'handtinywhite.jpg',
          value: 'B.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'C.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Db.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'D.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Eb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'E.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'F.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Gb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'G.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Ab.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'A.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'Bb.jpg'
          },
          {
          image: 'justline.jpg',
          value: 'B.jpg'
          }
        ],
        [
        {
          image: 'handtinywhite.jpg',
          value: 'E.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'F.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'Gb.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'G.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'Ab.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'A.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'Bb.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'B.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'C.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'Db.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'D.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'Eb.jpg'
        },
        {
          image: 'justline.jpg',
          value: 'E.jpg'
        }
      ]
    ] }, () => this.afterChangeTuning(globalChangeChord, scaleOrChord)

) //end of setState  
  
  

}  //end of else statement




} //end of handleChangeTuning



  render() {
    console.log("waht's going on!!");
 
//    const { selectedOption } = this.state;
    return (

      
      <div className="App">
        <table width='20%' align='right' border='1px'>
        <tr><td><button onClick={this.lowerHighEString}>+</button></td>
            <td><Tuning name={this.state.guitarString[5][0].value.slice(0, -4)}/></td>
            <td><button onClick={this.lowerHighEString}>-</button></td>
            <td><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></td>
            <td left-border='0px'><Notes name={this.state.guitarString[5][0].image}/></td>
            <td><Notes name={this.state.guitarString[5][1].image}/></td>
            <td><Notes name={this.state.guitarString[5][2].image}/></td>
            <td><Notes name={this.state.guitarString[5][3].image}/></td>
            <td><Notes name={this.state.guitarString[5][4].image}/></td>
            <td><Notes name={this.state.guitarString[5][5].image}/></td>            
            <td><Notes name={this.state.guitarString[5][6].image}/></td>            
            <td><Notes name={this.state.guitarString[5][7].image}/></td>            
            <td><Notes name={this.state.guitarString[5][8].image}/></td>            
            <td><Notes name={this.state.guitarString[5][9].image}/></td>            
            <td><Notes name={this.state.guitarString[5][10].image}/></td>            
            <td><Notes name={this.state.guitarString[5][11].image}/></td>          
            <td><Notes name={this.state.guitarString[5][12].image}/></td>            
            </tr>
            <tr><td><button onClick={this.lowereString}>+</button></td>
            <td><Tuning name={this.state.guitarString[4][0].value.slice(0, -4)}/></td>
            <td><button onClick={this.lowereString}>-</button></td>
            <td></td>
            <td><Notes name={this.state.guitarString[4][0].image}/></td>
            <td><Notes name={this.state.guitarString[4][1].image}/></td>
            <td><Notes name={this.state.guitarString[4][2].image}/></td>
            <td><Notes name={this.state.guitarString[4][3].image}/></td>
            <td><Notes name={this.state.guitarString[4][4].image}/></td>
            <td><Notes name={this.state.guitarString[4][5].image}/></td>            
            <td><Notes name={this.state.guitarString[4][6].image}/></td>            
            <td><Notes name={this.state.guitarString[4][7].image}/></td>            
            <td><Notes name={this.state.guitarString[4][8].image}/></td>            
            <td><Notes name={this.state.guitarString[4][9].image}/></td>            
            <td><Notes name={this.state.guitarString[4][10].image}/></td>            
            <td><Notes name={this.state.guitarString[4][11].image}/></td>          
            <td><Notes name={this.state.guitarString[4][12].image}/></td>            
            </tr>
            <tr><td><button onClick={this.lowereString}>+</button></td>
            <td><Tuning name={this.state.guitarString[3][0].value.slice(0, -4)}/></td>
            <td><button onClick={this.lowereString}>-</button></td>
            <td></td>
            <td><Notes name={this.state.guitarString[3][0].image}/></td>
            <td><Notes name={this.state.guitarString[3][1].image}/></td>
            <td><Notes name={this.state.guitarString[3][2].image}/></td>
            <td><Notes name={this.state.guitarString[3][3].image}/></td>
            <td><Notes name={this.state.guitarString[3][4].image}/></td>
            <td><Notes name={this.state.guitarString[3][5].image}/></td>            
            <td><Notes name={this.state.guitarString[3][6].image}/></td>            
            <td><Notes name={this.state.guitarString[3][7].image}/></td>            
            <td><Notes name={this.state.guitarString[3][8].image}/></td>            
            <td><Notes name={this.state.guitarString[3][9].image}/></td>            
            <td><Notes name={this.state.guitarString[3][10].image}/></td>            
            <td><Notes name={this.state.guitarString[3][11].image}/></td>          
            <td><Notes name={this.state.guitarString[3][12].image}/></td>            
            </tr>
            <tr><td><button onClick={this.lowereString}>+</button></td>
            <td><Tuning name={this.state.guitarString[2][0].value.slice(0, -4)}/></td>
            <td><button onClick={this.lowereString}>-</button></td>
            <td></td>
            <td><Notes name={this.state.guitarString[2][0].image}/></td>
            <td><Notes name={this.state.guitarString[2][1].image}/></td>
            <td><Notes name={this.state.guitarString[2][2].image}/></td>
            <td><Notes name={this.state.guitarString[2][3].image}/></td>
            <td><Notes name={this.state.guitarString[2][4].image}/></td>
            <td><Notes name={this.state.guitarString[2][5].image}/></td>            
            <td><Notes name={this.state.guitarString[2][6].image}/></td>            
            <td><Notes name={this.state.guitarString[2][7].image}/></td>            
            <td><Notes name={this.state.guitarString[2][8].image}/></td>            
            <td><Notes name={this.state.guitarString[2][9].image}/></td>            
            <td><Notes name={this.state.guitarString[2][10].image}/></td>            
            <td><Notes name={this.state.guitarString[2][11].image}/></td>          
            <td><Notes name={this.state.guitarString[2][12].image}/></td>            
            </tr>
            <tr><td><button onClick={this.lowereString}>+</button></td>
            <td><Tuning name={this.state.guitarString[1][0].value.slice(0, -4)}/></td>
            <td><button onClick={this.lowereString}>-</button></td>
            <td></td>
            <td><Notes name={this.state.guitarString[1][0].image}/></td>
            <td><Notes name={this.state.guitarString[1][1].image}/></td>
            <td><Notes name={this.state.guitarString[1][2].image}/></td>
            <td><Notes name={this.state.guitarString[1][3].image}/></td>
            <td><Notes name={this.state.guitarString[1][4].image}/></td>
            <td><Notes name={this.state.guitarString[1][5].image}/></td>            
            <td><Notes name={this.state.guitarString[1][6].image}/></td>            
            <td><Notes name={this.state.guitarString[1][7].image}/></td>            
            <td><Notes name={this.state.guitarString[1][8].image}/></td>            
            <td><Notes name={this.state.guitarString[1][9].image}/></td>            
            <td><Notes name={this.state.guitarString[1][10].image}/></td>            
            <td><Notes name={this.state.guitarString[1][11].image}/></td>          
            <td><Notes name={this.state.guitarString[1][12].image}/></td>            
            </tr>
            <tr><td><button onClick={this.lowereString}>+</button></td>
            <td><Tuning name={this.state.guitarString[0][0].value.slice(0, -4)}/></td>
            <td><button onClick={this.lowereString}>-</button></td>
            <td></td>
            <td><Notes name={this.state.guitarString[0][0].image}/></td>
            <td><Notes name={this.state.guitarString[0][1].image}/></td>
            <td><Notes name={this.state.guitarString[0][2].image}/></td>
            <td><Notes name={this.state.guitarString[0][3].image}/></td>
            <td><Notes name={this.state.guitarString[0][4].image}/></td>
            <td><Notes name={this.state.guitarString[0][5].image}/></td>            
            <td><Notes name={this.state.guitarString[0][6].image}/></td>            
            <td><Notes name={this.state.guitarString[0][7].image}/></td>            
            <td><Notes name={this.state.guitarString[0][8].image}/></td>            
            <td><Notes name={this.state.guitarString[0][9].image}/></td>            
            <td><Notes name={this.state.guitarString[0][10].image}/></td>            
            <td><Notes name={this.state.guitarString[0][11].image}/></td>          
            <td><Notes name={this.state.guitarString[0][12].image}/></td>            
            </tr>
</table> 

      <p align='left'><b>Scales</b></p>
      <Select id='scaleChanger' options = {chordOptions} 
      onChange={this.handleChangeScales}
      autoFocus={true}
      />   

      <p align='left'><b>Chords</b></p>

      <Select id="chordChanger" options = {chordOptions} 
      onChange={this.handleChangeChords}
      autoFocus={true}
      />      


<div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <div className="form-group mt-2">
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.selectAll}
                >
                  Select All
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>


        <button onClick={this.lowerHighEString}>Lower High E String</button>    
        <button onClick={this.showChord}>show me</button>    


        <Select id='tuningChanger' options = {tuningOptions} 
      onChange={this.handleChangeTuning}
      autoFocus={true}
      />      

      <Select options = {tuningOptions} 
      onChange={this.coolTest}
      autoFocus={true}
      />      


<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
      </div>
    );
  };
}

export default App;

