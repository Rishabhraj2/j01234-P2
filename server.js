const http=required("http");
const port= 8081;
http.createserver((req,res)=>{
    res.writeHead(200,{"Content-type ": "text/html"});
    res.write("<h2>hey server started :-) </h2>");
    res.end();
})
.listen(port,()=>{
    console.log(`NodeJs server Started Runing on port: ${port}`);
});