var antlr4 = require('antlr4');
var SparqlLexer = require('./SparqlLexer.js').SparqlLexer;
var SparqlParser = require('./SparqlParser.js').SparqlParser;
var SparqlListener = require('./SparqlListener.js').SparqlListener;



var fs;
try {
    fs = require('fs');
} catch(e) {

}




function buildParseTree(data){
    var sparql = parseSparql(data);
    var listener = new SparqlListener(data, sparql);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, sparql.query);
    return sparql;
}

function parseSparql(data) {
  var chars = new antlr4.InputStream(data);
  var lexer = new SparqlLexer(chars);
  var tokens  = new antlr4.CommonTokenStream(lexer);
  var parser = new SparqlParser(tokens);
  parser.buildParseTrees = true;
  var errors = [];
  var e_listener = {
    syntaxError: function(parser, offendingToken, line, column, msg, err){
      errors.push({
        offendingToken: offendingToken,
        line: line,
        column: column,
        msg: msg,
        err: err
      });
    },
    reportAttemptingFullContext: function(){
      console.error('reportAttemptingFullContext')
      console.error(arguments)
    },
    reportContextSensitivity: function(){
      console.error('reportContextSensitivity')
      console.error(arguments)
    },
    reportAmbiguity: function(){
      console.error('reportAmbiguity')
      console.error(arguments)
    }

  };
  lexer.addErrorListener(e_listener);
  parser.addErrorListener(e_listener)
  ;
  return {
    query: parser.query(),
    parseErrors: errors
  }

}

function syntaxCheck(fn, cb){
    fs.readFile(fn, 'utf-8', function(err, content){
      if(err) cb(err);
      cb(null, buildParseTree(content));
    });
}

syntaxCheck('some.sparql', function(err, result){
  console.log(result);
})

module.exports = {
  syntaxCheck: syntaxCheck
}
