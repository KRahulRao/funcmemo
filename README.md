# funcmemo

 A simple module for storing functions  locally and retriving them to use in an application instead of
 calling functions from the server everytime.
 Currently this is the first version and I  will be adding more versions to improve it.Please share your
 valuable suggestions and help me in improvising.

#Installations-

npm install funcmemo

#For storing funcions-

var app = require('funcmemo');
app.functCache.add("Your function name");

#For retriving  funcions-

var app = require('funcmemo');
app.functCache.getFunc("Your function name");

#For updating funcions-

var app = require('funcmemo');
app.functCache.updateFunc("Your function name");
