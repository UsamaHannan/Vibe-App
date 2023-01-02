



// varaible declaration 
let maintopic=document.querySelector(".main-topic");
//headers configuration for the api fetching
document.addEventListener('DOMContentLoaded',()=>{
  console.log()
    localStorage.setItem('myuniquetockenid',JSON.stringify('6378ab2114ae5ad2dae333a1'));
});
 let key=localStorage.setItem.myuniquetockenid;
// making object to make the data easy to access
 let obj={};
 let sendReq=()=>{



let token=JSON.parse(localStorage.getItem('myuniquetockenid'));

const url="https://dummyapi.io/data/v1/tag/water/post?limit=10";

let h=new Headers();

h.append('Athentication',`Bearer ${token}`);

let req= new Request(url,{
   method:'GET',
   mode:'cors',
   headers:{'app-id':'637c701fd2b18a57066cdce1'}


  
});

console.log(` this is request ${req}`)


fetch(req).then((response)=>{
    console.log("data fetched")
    return response.json();
 })
 .then((data)=>{
     obj=data;
     let innerlist="";
    //  let i=0;
     
    obj.data.map((values)=>{
    
     innerlist+=` 
     <div class="feeds">
     <div class="feed">
         <div class="head">
             <div class="user">

               <div class="d-flex bg-white rounded-4" id="users1">
                 <div style="margin-top: 5px;">
                   <img
                   style="width: 50px; height:50px;"
                     class="m-1 rounded-circle border-0 nav-image"
                     src="${values.owner.picture}"
                     alt=""
                   />
                 </div>
                 <div style="margin-left: 5px;">
                   <h1 class="fs-6 fw-bold mt-3 mb-0">${values.owner.firstName}  ${values.owner.lastName}</h1>
                   <p class="  text-muted">Dubai, 15 minutes ago</p>
                 </div>
                

               </div>


             </div>

             
         </div>

         <div class="photo" >
             <img src="${values.image}" alt="">
         </div>

         <div class="action-buttons" style="margin: 10px 10px 10px 5px;">
         <div class="interaction-buttons">
             <span><i class="fas fa-thumbs-up" &nbsp;></i> Like</span>&nbsp;
             <span><i class="fas fa-comment-dots" &nbsp;></i>Comment</span>&nbsp;
             <span><i class="fas fa-share-alt" &nbsp;&nbsp;&nbsp;></i>Share</span>
             </div>
           
         </div>

       

         <div class="caption" style="margin: 0px 0px 0px 5px;">
             <p><b>Lana Rose</b> like this post. <span class="harsh-tag">${values.tags}</span>
             </p>
         </div>

         <div class="panel-footer">
           <input type="email" class="form-control" placeholder="Write a comment...">
       </div>
       <div class="d-flex m-4 bg-white rounded-4">
         <div style="margin-top: 5px;">
           <img
           style="width: 50px; height:50px;"
             class="m-1 rounded-circle border-0 nav-image"
             src="${obj2.data[0].owner.picture}"
             alt=""
           />
         </div>
         <div style="margin-left: 5px;">
           
           <h1 class="fs-6 fw-bold mt-3 mb-0">${obj2.data[0].owner.firstName}  ${obj2.data[0].owner.lastName}</h1>
           <p class="  text-muted">${obj2.data[0].message}</p>
         </div>
         
        

       </div>
       <div class="d-flex m-4 bg-white rounded-4">
       <div style="margin-top: 5px;">
         <img
         style="width: 50px; height:50px;"
           class="m-1 rounded-circle border-0 nav-image"
           src="${obj2.data[1].owner.picture}"
           alt=""
         />
       </div>
       <div style="margin-left: 5px;">
         
         <h1 class="fs-6 fw-bold mt-3 mb-0">${obj2.data[1].owner.firstName}  ${obj2.data[1].owner.lastName}</h1>
         <p class="  text-muted" style="margin-bottom: 20px;" >${obj2.data[1].message}</p>
       </div>
       
      

     </div>
     </div>
   </div>
    
`

    });





    maintopic.innerHTML=innerlist;

})
.catch(err=>{
   console.log(err.massege);
   console.log(" the catch is running")
});


// fething for the user list

}
sendReq();
// fething for the user list
