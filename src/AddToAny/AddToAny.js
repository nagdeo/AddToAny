import React, { useState, useEffect } from "react";
import "./AddToAny.css";
import { FaFacebook,FaFacebookMessenger,FaMailBulk,FaLinkedinIn,FaWhatsapp,FaTwitter, FaReddit, FaMailchimp, FaShare, FaShareAlt, FaCross, FaCrosshairs, FaCrop, FaTelegram, FaGetPocket, FaYahoo, FaSkype } from 'react-icons/fa';
 const AddToAny = (props) => {
   const [socialSites,setSocialSites]=useState(
    [
      {name:"whatsapp",selected:true,tag:<FaWhatsapp/>},    
      {name:"twitter",selected:false,tag:<FaTwitter/>},
        {name:"linkedin",selected:false,tag:<FaLinkedinIn/>},
        {name:"facebook",selected:false,tag:<FaFacebook/>},
        {name:"reddit",selected:false,tag:<FaReddit/>},
        {name:"telegram",selected:false,tag:<FaTelegram/>},
        {name:"pocket",selected:false,tag:<FaGetPocket/>},
        {name:"google_gmail",selected:false,tag:<FaMailBulk/>},
        {name:"facebook_messenger",selected:false,tag:<FaFacebookMessenger/>},
        {name:"yahoo_mail",selected:false,tag:<FaYahoo/>},
        {name:"skype",selected:false,tag:<FaSkype/>} 
    ]
     );
     const [shareOrCross,setShareOrCross]=useState("share");
     const [iconsDropdown,setIconsDropdown]=useState(false)
   const fnOpenSocialSites =(e,site)=>{
     if(site.name==="share"){
      let sites=[...socialSites];
      if(sites?.filter((item)=>item.selected===true)?.length>0){
        setShareOrCross("cross")
      }
      
     }else if(site.name==="cross"){
      setShareOrCross("share")
     }
     else{
       window.open('https://www.addtoany.com/add_to/'+site.name+'?linkurl='+ window.location.href +'&amp;linkname='+ encodeURI("webTitle"));
     }
   }
   const fnAddSocialSites=(e,site,index)=>{
    let sites=[...socialSites];
    if(sites[index].selected===true){
      sites[index].selected=false;
    }else{
      sites[index].selected=true;
    }
    if(sites?.filter((item)=>item.selected===true)?.length===0){
      setShareOrCross("share")
    }
    setSocialSites(sites);
   }
   return <div className="add-to-any-main-container">
     
     <div className="main-div">
     <button className="social-btns cross" onClick={()=>setIconsDropdown(!iconsDropdown)}>+</button>
       <div className="add-social-icons">
       {iconsDropdown &&
        <div className="box-shadow">
         {socialSites?.map((site,i)=>(
          <button  className={`social-btns ${site.selected?"disable":""}`} onClick={(e)=>fnAddSocialSites(e,site,i)} key={i.toString()}>{site.tag}</button>
         ))}
        </div>
       }
      
       </div>
     
     <div className="share-btn ">
     {shareOrCross==="share"?
     <div className={` ${socialSites?.filter((item)=>item.selected===true)?.length===0?" tooltip":""}`}>
            <button className={`social-btns ${socialSites?.filter((item)=>item.selected===true)?.length===0?"disable ":""}`} onClick={(e)=>fnOpenSocialSites(e,{name:"share"})}><FaShareAlt /></button>
     </div>
      :<button  className="social-btns cross" onClick={(e)=>fnOpenSocialSites(e,{name:"cross"})}>X</button>}
      {socialSites?.map((site,i)=>(
          shareOrCross==="cross"  && 
          <button className={`social-btns ${site.selected?"d-block":"d-none"}`} onClick={(e)=>fnOpenSocialSites(e,site)} key={i.toString()}>{site.tag}</button>
      ))}
     </div>
     
     </div>
     
   </div>
}
export default AddToAny;