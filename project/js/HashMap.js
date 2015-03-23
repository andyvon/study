function HashMap()
 {
     /** Map ��С **/
     var size = 0;
     /** ���� **/
     var entry = new Object();
     
     /** �� **/
     this.put = function (key , value)
     {
         if(!this.containsKey(key))
         {
             size ++ ;
         }
         entry[key] = value;
     }
     
     /** ȡ **/
     this.get = function (key)
     {
         if( this.containsKey(key) )
         {
             return entry[key];
         }
         else
         {
             return null;
         }
     }
     
     /** ɾ�� **/
     this.remove = function ( key )
     {
         if( delete entry[key] )
         {
             size --;
         }
     }
     
     /** �Ƿ���� Key **/
     this.containsKey = function ( key )
     {
         return (key in entry);
     }
     
     /** �Ƿ���� Value **/
     this.containsValue = function ( value )
     {
         for(var prop in entry)
         {
             if(entry[prop] == value)
             {
                 return true;
             }
         }
         return false;
     }
     
     /** ���� Value **/
     this.values = function ()
     {
         var values = new Array(size);
         for(var prop in entry)
         {
             values.push(entry[prop]);
         }
         return values;
     }
     
     /** ���� Key **/
     this.keys = function ()
     {
         var keys = new Array(size);
         for(var prop in entry)
         {
             keys.push(prop);
         }
         return keys;
     }
     
     /** Map Size **/
     this.size = function ()
     {
         return size;
     }
 }