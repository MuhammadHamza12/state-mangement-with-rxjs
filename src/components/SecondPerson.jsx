import React from 'react'
import { useState } from 'react'
import chatStore from '../store/chat';
import { useLayoutEffect } from 'react';


export default function SecondPerson(props) {
  const [message,setMessage] = useState('');
  const [chatState, setChatState] = useState(chatStore.initialState);


  useLayoutEffect(()=>{
     chatStore.subscribe(setChatState);
     chatStore.init();
  },[])
  
  const renderMessages = (email, data) => {
    // let datalength = data.length;
    return (
      data && data.map((item, index) => <li style={{ zIndex: 'unset' }} className="list-group-item" key={index} >
        {email === item.email ? <li style={{ backgroundColor:'#343A40',borderColor:'#343A40' ,zIndex: 'unset', borderTopRightRadius: 20, borderBottomLeftRadius: 20 }} className="list-group-item active" key={index} >{item.message}</li> : <li className="list-group-item" key={index} >
        <span 
        style={{ zIndex: 'unset', borderRadius: '50%' ,fontSize:20 , padding:10,position:'relative' , right:10 , color:'#ffffff', backgroundColor:`#2F4F4F` }}
        class="badge badge-secondary">
{item.email.charAt(0).toUpperCase()}        
        </span>
          
          {item.message}</li>
        }
        {index === data.length - 1 ? <React.Fragment> <br />  </React.Fragment> : ''}
        {
          index === data.length - 1 && 
          props.stateData && props.stateData.loader ? <div class="spinner-border text-info" role="status">
            <span class="sr-only">Loading...</span>
          </div> : ''
        }
      </li>


      )
    )
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    const messageObject = {
      email: 'muhammadbilalhaneef@gmail.com',
      message: message.trim(),

    };
    chatStore.sendMessage(messageObject);
    setMessage('');

  }
  return (
    <div>
        <form
         onSubmit={handleSubmit}
         style={{display:'flex',justifyContent:'center'}}
         >
          
         <div style={{width:'50%'}} >
         <input required type="text"                className="form-control"
             onChange={
                (e) => setMessage(e.target.value)
              } 
            value={message} 
            name="msg" aria-describedby="helpId" placeholder="Type a message. . . " />
           </div>
           <div>
           <button 
            className='disable'
            disabled={message === '' ? true : false}
            type="submit" style={{borderRadius:0}} class="btn btn-primary">{
               //  this.props.stateData.msg === '' ? <i style={{ marginLeft: 5 }} class="far fa-thumbs-up"></i> : 'Send'
              }
           Send  
             </button>
           </div>  
        </form>
        <h4 className='text-center' >
          {'MuhammadBilalHaneef@gmail.com'}
        </h4>
      <div style={{display:'flex',justifyContent:'flex-end',margin:10}} >

      <button onClick={()=>chatStore.clearChat()} type="button" class="btn btn-danger">Clear all</button>
      </div>
            
      {
        
        renderMessages('MuhammadBilalHaneef@gmail',chatState.data) 
      }
    </div>
  )
}
