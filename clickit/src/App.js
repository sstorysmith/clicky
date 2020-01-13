import React, { Component } from "react";
import TileCard from "./components/TileCard";
import GameBoard from "./components/GameBoard";
import Title from "./components/Title";                                               
import tiles from "./components/TileCard/tiles.json";
//--------------------------------------
  function shuffleImage () {  
    var j= (Math.floor(Math.random() * (10)));
    console.log("shuffle  random index =" + j) ;
    this.tile.image=image[j];    
  };

  //--------------------------------------
  function setGame(){    
    topscore=0;
    score = 0;
   
    // prompt iI index for images

     

     
      // prompt iT index for tiles
    
    //   // do while there are tiles to fill
    //   do {
    //        console.log( "do while t=  "  + t + "  maxT=" + maxT + "   i =" + i);
    //         // tiles to fill with images 
    //       for(t=0; (t <= (maxT-1)) && (i <= (maxI-1)); t++); {
    //         console.log( "FOR t=  "  + t + "  maxT=" + maxT + "   i =" + i);
    //         i=t;
            
    //         tiles[t].image = images[i]; 
    //         console.log("after tiles" + tiles);     
            
    //          //images need to be reset,  more tiles left, 
    //       if ((i=maxI) && (t <= maxT-1)) {
    //         i=0;
    //         console.log("reset i ="  + i);           }
    //         }
    //      }        
    //     while (t < maxT);
  }
  //--------------------------------------
  function playGame () {
   
    // neverbefore clicked
    if (this.clicked ==false) {
      score ++;
      clicked = true;
    }
  
    else {
      // already clicked
      topscore = score;
      score = 0;
      shuffleImages;
    }
    this.setState({tiles});  
  
    }
   //--------------------------------------
    class App extends Component {
      // Setting this.state.tiles to the tiles json array
      state = {
        tiles
      }; 
      //????????????????????????????????? error below AND formatting keys and why before map?
      this.setState({tiles});  
    }

     


  // Map over this.state.friends and render a TileCard component for each tile object
  //??????????????????????????
  render() {
    return (
      <GameBoard>
        <Title>Clicky Game</Title>
        {this.state.tiles.map(tiles => (
          <TileCard
          id={tile.id}
          key={tile.id}
          image={tile.image}
          />         
        ))}
      </GameBoard>
    );
  }


export default App;


