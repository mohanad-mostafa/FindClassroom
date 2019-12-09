import React, { Component } from 'react'
import PropTypes, { string, number } from 'prop-types';
import { Link } from 'react-router-dom';
import axios from "axios";
export default class Room extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
            rooms:[],
            rooms11:[],
            rooms12:[],
            room1:"",
            room2:"",
            room3:"",
            room4:"",
            room5:"",
            room6:"",
            room7:"",
            room8:"",
            room9:"",
            room10:"",
           
            slot1:"",
            slot2:"",
            slot3:"",
            slot4:"",
            slot5:"",
            slot6:"",
            slot7:"",
            slot8:"",
            slot9:"",
            slot10:"",



            name1: "",
            name2: "",
            name3: "",
            name4: "",
            name5: "",
            name6: "",
            name7: "",
            name8: "",
            name9: "",
            name10: "",
           
        
        }
      }

      componentDidMount(){
        axios.get(`http://localhost:5000/rooms`)
        .then(res => {
          console.log(res);
          this.setState({rooms:res.data.room, 
            room1:res.data.room[0].name,
             room2:res.data.room[1].name,
              room3:res.data.room[2].name, 
              room4:res.data.room[3].name,
               room5:res.data.room[4].name, 
               room6:res.data.room[5].name, 
               room7:res.data.room[6].name, 
               room8:res.data.room[7].name, 
               room9:res.data.room[8].name, 
               room10:res.data.room[8].name,
               
              slot1:res.data.room[0].slot,
              slot2:res.data.room[1].slot,
              slot3:res.data.room[2].slot,
              slot4:res.data.room[3].slot,
              slot5:res.data.room[4].slot,
              slot6:res.data.room[5].slot,
              slot7:res.data.room[6].slot,
              slot8:res.data.room[7].slot,
              slot9:res.data.room[8].slot,
              slot10:res.data.room[9].slot,  
            })
        })
      }

   
    render() {
        return (
            <div>
            <h1>Rooms</h1>
           
          <ul>
    {this.state.rooms.map(room => <li>{room.name} <ul> free slot:  {room.slot}   reserved for {room.email}</ul></li>            
            )}
          </ul>

            </div>
        )
    }

  

}
