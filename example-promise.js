function getTempCallBack(location, callback){
    callback(undefined, 78);
    callback('City not found');
}

getTempCallBack("Philadelphia", function(err, temp){
    if (err) {
        console.log("err: " + err);
    } else {
        console.log(temp);
    }
});

function getTempPromise(location) {
    return new Promise(function(resolve, reject){
        if (location === 'Philadelphia'){
            resolve(79);
        } else {
            reject("City not found");
        }
    });
}

getTempPromise("Philadelphias").then(function(temp){
    console.log("Temp: " + temp);
}, function(err){
    console.log("Err: " + err);
});
