var input = '';
var readable = process.stdin;
readable.resume();
readable.setEncoding( 'utf-8' );
readable.on( 'data', function( chunk ) {
  input += chunk;
});

readable.on( 'end', function() {
  var cards = { S:[] , H:[], C:[], D:[] };
  var shcd = [ 'S', 'H', 'C', 'D' ];
  var chash = { "S":'S', "H":'H', "C":'C', "D":'D'}
  for( var key in cards ) {
    for( var i=1; i<=13; i++ ) {
      cards[key].push( i );
    }
  }
  var data = input.split( '\n' );
 
  for( var i=1; i<data.length; i++ ) {
    var p = data[i].split( ' ' );
    var res = cards[ chash[p[0]] ].indexOf( Number( p[1] ) );
    if( -1 != res ) {
        cards[ chash[p[0]] ].splice( res, 1 );
    }
  }
  for( var i=0; i<4; i++ ) {
    for( var j = 0; j<cards[ shcd[i] ].length; j++ ) {
      console.log( shcd[i]+" "+cards[ shcd[i] ][j] );
    }
  }
});
 