var input = '';
var readable = process.stdin;
readable.resume();
readable.setEncoding( 'utf-8' );
readable.on( 'data', function( chunk ) {
  input += chunk;
});

readable.on( 'end', function() {
  var data = input.split( "\n" );
  var word = data[0];
  var q = parseInt( data[1] );
  var output = [];
  for( var i=0; i<q; i++ ) {
    var cmd = data[2+i].split( ' ' );
    var s = parseInt( cmd[1] );
    var e = parseInt( cmd[2] )+1;    
    if( "print" == cmd[0] ) {
      output.push( word.substring( s, e ) );
    } else if( "reverse" == cmd[0] ) {
      var br = word.substring( s, e );
      word = word.substring( 0, s )+br.split( '' ).reverse().join( '' )+word.substring( e );
    } else if( "replace" == cmd[0] ) {
      word = word.substring( 0, s )+cmd[3]+word.substring( e );
    }
  }
  console.log( output.join( '\n' ) );
});