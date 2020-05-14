import React from 'react'
import { withRouter } from 'react-router-dom'
import '../../style/style.css';
import { useState } from 'react';
import chatStore from '../../store/chat';
import { useEffect } from 'react';
function Layout(props) {
  const [chatState,setChatState]=useState(chatStore.initialState);
  const location = window.location.href.split('/')[3];

  useEffect(()=>{
    chatStore.subscribe(setChatState);
    chatStore.init();
  },[])

  const messageNotification = chatState.dataCount > 0
    && (<span className="badge badge-danger">{chatState.dataCount}</span>);

  return (
    <div>
<br/>
    <div style={{display:'flex',justifyContent:'space-evenly'}} >

    <div>
    
    <button
    
    className='btn btn-warning'
    style={{color:'#ffff',borderRadius:'20%'}}
     onClick={()=> props.history.push('/')
     } >
       First Person
       &nbsp;
       {location !== '' && location.length > 1 && messageNotification}
       </button>
    </div>
    <div>

    <button
    style={{color:'#ffff', borderRadius:'20%'}}
    className={'btn btn-secondary'}
     onClick={()=> props.history.push('/second')}
    >Second Person
     &nbsp;
     {location !== 'second' && messageNotification}
    </button>
    </div>
    </div>
<br/>
    
    {props.children}
    </div>
  )
}
export default withRouter(Layout);