import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

var details=[
  {
    image:'../pics/images.jpeg',
    myname:'Jessica Koel',
    msg:'Hey ,Joel  I heare to help you out please...',
    time:'11:25',
    emojie:'⭐'
  },
  {
    image:'../pics/medium.webp',
    myname:'Hendry ',
    msg:'Hey ,Joel  I heare to help you out please...',
    time:'11:25',
    emojie:'⭐'
  },
  {
    image:'../pics/two.jpeg',
    myname:'Jack ram',
    msg:'Hey ,Joel  I heare to help you out please...',
    time:'11:25',
    emojie:'⭐'
  },
  {
    image:'../pics/three.webp',
    myname:'Sawg Rahul',
    msg:'Hey ,Joel  I heare to help you out please...',
    time:'11:25',
    emojie:'⭐'
  },
  {
    image:'../pics/four.jpeg',
    myname:'Sam nahi',
    msg:'Hey ,Joel  I heare to help you out please...',
    time:'11:25',
    emojie:'⭐'
  },
  {
    image:'../pics/six.jpg',
    myname:'Angelena',
    msg:'Hey ,Joel  I heare to help you out please...',
    time:'11:25',
    emojie:'⭐'
  },

]
var arr=['value']

function Inbox(props){
  return(
    
    <div style={{ margin:'20px',padding:'5px',paddingLeft:'15px', display: "flex", gap: "20px", alignItems: "center", border:'1px solid black',borderRadius:'15px', position:'relative'}}>
      
      <img src={props.image} alt='error' style={{borderRadius:'50%',width:'80px'}}></img>
      <div style={{justifyContent:'space-around'}}>
      <h3 style={{ fontWeight: "bolder" }}>{props.myname}</h3>
       <p >{props.msg}</p>
      </div>
      
      <div style={{position:'absolute',right:'25px'}}>
      <p>{props.time}</p>
      <p>{props.emojie}</p>
      </div>
    </div>
  )
}
function Searchbox(props){
  return(
    <div>
       <input type='text' placeholder='search' style={{margin:'20px',padding:'15px',paddingLeft:'15px', alignItems: "center", border:'1px solid black',borderRadius:'15px',width:'85%'}}></input>
    </div>
  )
}
root.render(
  <div>
    
    {
      arr.map(function(item){
        return <Searchbox></Searchbox>
      }
    )
    }


{
      details.map(function(item)
    {
      return <Inbox 
      image={item.image}
      myname={item.myname} 
      msg={item.msg} 
      time={item.time} 
      emojie={item.emojie}  >

      </Inbox>
    })
    }
  </div>
)