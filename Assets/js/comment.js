



// varaible declaration 
let maincomment=document.querySelector(".main-comment");
//headers configuration for the api fetching
document.addEventListener('DOMContentLoaded',()=>{
  console.log()
    localStorage.setItem('myuniquetockenid',JSON.stringify('6378ab2114ae5ad2dae333a1'));
});
let key1=localStorage.setItem.myuniquetockenid;
// making object to make the data easy to access
 let obj2={};
let send1Req=()=>{



let token=JSON.parse(localStorage.getItem('myuniquetockenid'));

const url="https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10";

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
     obj2=data;
     let innerlist="";
    //  let i=0;
     
 

})
.catch(err=>{
   console.log(err.massege);
   console.log(" the catch is running")
});


// fething for the user list

}
send1Req();
// fething for the user list
