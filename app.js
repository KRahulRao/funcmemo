 exports.functCache = {
   cache:{},
   id:0,
  add:function(funcObj){
    if(!functObj.id){
        funcObj.id = functCache.id++;
        functCache.cache[funcObj.id]=funcObj;
        console.log("Function added successfully")
    }else
      console.log("Function couldnt be added properly")
  }
  getFunc:function(srchFn){
    for(var i=0;i<=functCache.cache.length;i++){
      if(srchFn==functCache.cache[i]){
        return srchFn;
        break;
      }
      console.log("Function found and returned");
    }
  }
 updateFunc:function(updatedFn){
   for(var i=0;i<=functCache.cache.length;i++){
     if(updatedFn==functCache.cache[i]){
       functCache.cache[i]=updatedFn;
       break;
     }
     console.log("Function updated successfully");
   }
 }
 };
