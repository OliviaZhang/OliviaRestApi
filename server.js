var express    	 = require( 'express' );      
var app        	 = express();               
var bodyParser 	 = require( 'body-parser' );
var port 		 = process.env.PORT || 8080;
var mongoose     = require('mongoose');
mongoose.connect('mongodb://olivia:gl9j8724@ds035965.mongolab.com:35965/olivia');

app.use ( bodyParser.json() );
app.use ( bodyParser.urlencoded( { extended: true } ) );

require('./app/routes')(app);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('REST service started on ' + port);