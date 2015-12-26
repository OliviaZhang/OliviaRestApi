module.exports = {
    saveToDb: function(obj) {
        obj.save(function(err) {
    		if (err) throw err;
    		console.log("Saved successfully!");
    	});
    }
}
