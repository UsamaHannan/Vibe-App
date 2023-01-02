console.log("hellow");

// varaible declaration 
let mainuser=document.querySelector(".main-user");
//headers configuration for the api fetching
document.addEventListener('DOMContentLoaded',()=>{
  console.log()
    localStorage.setItem('myuniquetockenid',JSON.stringify('637c701fd2b18a57066cdce1'));
});
 let key2=localStorage.setItem.myuniquetockenid;
// making object to make the data easy to access
 let obj3={};
 let send2Req=()=>{
  
  
  //  console.log("enter in eve");
    let token=JSON.parse(localStorage.getItem('myuniquetockenid'));

    const url="https://dummyapi.io/data/v1/user?limit=10";
 
    let h=new Headers();

    h.append('Athentication',`Bearer ${token}`);
    
   let req= new Request(url,{
       method:'GET',
       mode:'cors',
       headers:{'app-id':'637c701fd2b18a57066cdce1'}
   
   
      
    });

  console.log(` this is request ${req}`)


// <div class="profile likes activeuserprofile" >
//   
//   </div>
//  fetch(req).then((resp=>resp.json())
  // data fetcching for user list
 fetch(req).then((response)=>{
    console.log("data fetched")
    return response.json();
 })
 .then((data)=>{
     obj3=data;
     let innerlist="";
    //  let i=0;
     
    obj3.data.map((values)=>{
      console.log(values.firstName + values.lastName);
      innerlist+=`   <div class="message">
      <div class="profile-photo">
          <img src="${values.picture}">
          <div class="status-circle"></div>
      </div>
      <div class="message-body">
          <h5>${values.firstName}  ${values.lastName}</h5>
          <p class="text-bold">2 new messages</p>
      </div>
  </div>
    `

    });
    
  



     
    mainuser.innerHTML=innerlist;

 })
 .catch(err=>{
    console.log(err.massege);
    console.log(" the catch is running")
 });

 
// fething for the user list

}
send2Req();
// fething for the user list