// Generated from Sparql.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4');


// This class defines a complete listener for a parse tree produced by SparqlParser.
function SparqlListener() {
	antlr4.tree.ParseTreeListener.call(this);
	this.errors = [];
	return this;
}

SparqlListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);

SparqlListener.prototype.constructor = SparqlListener;
SparqlListener.prototype.visitErrorNode = function(ctx){
  this.errors.push(ctx);
};

// Enter a parse tree produced by SparqlParser#query.
SparqlListener.prototype.enterQuery = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#query.
SparqlListener.prototype.exitQuery = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#prologue.
SparqlListener.prototype.enterPrologue = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#prologue.
SparqlListener.prototype.exitPrologue = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#baseDecl.
SparqlListener.prototype.enterBaseDecl = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#baseDecl.
SparqlListener.prototype.exitBaseDecl = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#prefixDecl.
SparqlListener.prototype.enterPrefixDecl = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#prefixDecl.
SparqlListener.prototype.exitPrefixDecl = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#selectQuery.
SparqlListener.prototype.enterSelectQuery = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#selectQuery.
SparqlListener.prototype.exitSelectQuery = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#constructQuery.
SparqlListener.prototype.enterConstructQuery = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#constructQuery.
SparqlListener.prototype.exitConstructQuery = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#describeQuery.
SparqlListener.prototype.enterDescribeQuery = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#describeQuery.
SparqlListener.prototype.exitDescribeQuery = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#askQuery.
SparqlListener.prototype.enterAskQuery = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#askQuery.
SparqlListener.prototype.exitAskQuery = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#datasetClause.
SparqlListener.prototype.enterDatasetClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#datasetClause.
SparqlListener.prototype.exitDatasetClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#defaultGraphClause.
SparqlListener.prototype.enterDefaultGraphClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#defaultGraphClause.
SparqlListener.prototype.exitDefaultGraphClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#anzoDatasetClause.
SparqlListener.prototype.enterAnzoDatasetClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#anzoDatasetClause.
SparqlListener.prototype.exitAnzoDatasetClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#namedGraphClause.
SparqlListener.prototype.enterNamedGraphClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#namedGraphClause.
SparqlListener.prototype.exitNamedGraphClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#sourceSelector.
SparqlListener.prototype.enterSourceSelector = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#sourceSelector.
SparqlListener.prototype.exitSourceSelector = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#whereClause.
SparqlListener.prototype.enterWhereClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#whereClause.
SparqlListener.prototype.exitWhereClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#solutionModifier.
SparqlListener.prototype.enterSolutionModifier = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#solutionModifier.
SparqlListener.prototype.exitSolutionModifier = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#limitOffsetClauses.
SparqlListener.prototype.enterLimitOffsetClauses = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#limitOffsetClauses.
SparqlListener.prototype.exitLimitOffsetClauses = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#orderClause.
SparqlListener.prototype.enterOrderClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#orderClause.
SparqlListener.prototype.exitOrderClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#orderCondition.
SparqlListener.prototype.enterOrderCondition = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#orderCondition.
SparqlListener.prototype.exitOrderCondition = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#limitClause.
SparqlListener.prototype.enterLimitClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#limitClause.
SparqlListener.prototype.exitLimitClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#offsetClause.
SparqlListener.prototype.enterOffsetClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#offsetClause.
SparqlListener.prototype.exitOffsetClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#groupGraphPattern.
SparqlListener.prototype.enterGroupGraphPattern = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#groupGraphPattern.
SparqlListener.prototype.exitGroupGraphPattern = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#triplesBlock.
SparqlListener.prototype.enterTriplesBlock = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#triplesBlock.
SparqlListener.prototype.exitTriplesBlock = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#graphPatternNotTriples.
SparqlListener.prototype.enterGraphPatternNotTriples = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#graphPatternNotTriples.
SparqlListener.prototype.exitGraphPatternNotTriples = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#optionalGraphPattern.
SparqlListener.prototype.enterOptionalGraphPattern = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#optionalGraphPattern.
SparqlListener.prototype.exitOptionalGraphPattern = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#graphGraphPattern.
SparqlListener.prototype.enterGraphGraphPattern = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#graphGraphPattern.
SparqlListener.prototype.exitGraphGraphPattern = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#groupOrUnionGraphPattern.
SparqlListener.prototype.enterGroupOrUnionGraphPattern = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#groupOrUnionGraphPattern.
SparqlListener.prototype.exitGroupOrUnionGraphPattern = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#filter.
SparqlListener.prototype.enterFilter = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#filter.
SparqlListener.prototype.exitFilter = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#constraint.
SparqlListener.prototype.enterConstraint = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#constraint.
SparqlListener.prototype.exitConstraint = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#functionCall.
SparqlListener.prototype.enterFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#functionCall.
SparqlListener.prototype.exitFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#argList.
SparqlListener.prototype.enterArgList = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#argList.
SparqlListener.prototype.exitArgList = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#constructTemplate.
SparqlListener.prototype.enterConstructTemplate = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#constructTemplate.
SparqlListener.prototype.exitConstructTemplate = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#constructTriples.
SparqlListener.prototype.enterConstructTriples = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#constructTriples.
SparqlListener.prototype.exitConstructTriples = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#triplesSameSubject.
SparqlListener.prototype.enterTriplesSameSubject = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#triplesSameSubject.
SparqlListener.prototype.exitTriplesSameSubject = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#propertyListNotEmpty.
SparqlListener.prototype.enterPropertyListNotEmpty = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#propertyListNotEmpty.
SparqlListener.prototype.exitPropertyListNotEmpty = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#propertyList.
SparqlListener.prototype.enterPropertyList = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#propertyList.
SparqlListener.prototype.exitPropertyList = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#objectList.
SparqlListener.prototype.enterObjectList = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#objectList.
SparqlListener.prototype.exitObjectList = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#object.
SparqlListener.prototype.enterObject = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#object.
SparqlListener.prototype.exitObject = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#verb.
SparqlListener.prototype.enterVerb = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#verb.
SparqlListener.prototype.exitVerb = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#triplesNode.
SparqlListener.prototype.enterTriplesNode = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#triplesNode.
SparqlListener.prototype.exitTriplesNode = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#blankNodePropertyList.
SparqlListener.prototype.enterBlankNodePropertyList = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#blankNodePropertyList.
SparqlListener.prototype.exitBlankNodePropertyList = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#collection.
SparqlListener.prototype.enterCollection = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#collection.
SparqlListener.prototype.exitCollection = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#graphNode.
SparqlListener.prototype.enterGraphNode = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#graphNode.
SparqlListener.prototype.exitGraphNode = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#varOrTerm.
SparqlListener.prototype.enterVarOrTerm = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#varOrTerm.
SparqlListener.prototype.exitVarOrTerm = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#varOrIRIref.
SparqlListener.prototype.enterVarOrIRIref = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#varOrIRIref.
SparqlListener.prototype.exitVarOrIRIref = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#var.
SparqlListener.prototype.enterVar = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#var.
SparqlListener.prototype.exitVar = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#graphTerm.
SparqlListener.prototype.enterGraphTerm = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#graphTerm.
SparqlListener.prototype.exitGraphTerm = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#expression.
SparqlListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#expression.
SparqlListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#conditionalOrExpression.
SparqlListener.prototype.enterConditionalOrExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#conditionalOrExpression.
SparqlListener.prototype.exitConditionalOrExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#conditionalAndExpression.
SparqlListener.prototype.enterConditionalAndExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#conditionalAndExpression.
SparqlListener.prototype.exitConditionalAndExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#valueLogical.
SparqlListener.prototype.enterValueLogical = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#valueLogical.
SparqlListener.prototype.exitValueLogical = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#relationalExpression.
SparqlListener.prototype.enterRelationalExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#relationalExpression.
SparqlListener.prototype.exitRelationalExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#numericExpression.
SparqlListener.prototype.enterNumericExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#numericExpression.
SparqlListener.prototype.exitNumericExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#additiveExpression.
SparqlListener.prototype.enterAdditiveExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#additiveExpression.
SparqlListener.prototype.exitAdditiveExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#multiplicativeExpression.
SparqlListener.prototype.enterMultiplicativeExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#multiplicativeExpression.
SparqlListener.prototype.exitMultiplicativeExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#unaryExpression.
SparqlListener.prototype.enterUnaryExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#unaryExpression.
SparqlListener.prototype.exitUnaryExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#primaryExpression.
SparqlListener.prototype.enterPrimaryExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#primaryExpression.
SparqlListener.prototype.exitPrimaryExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#brackettedExpression.
SparqlListener.prototype.enterBrackettedExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#brackettedExpression.
SparqlListener.prototype.exitBrackettedExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#builtInCall.
SparqlListener.prototype.enterBuiltInCall = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#builtInCall.
SparqlListener.prototype.exitBuiltInCall = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#regexExpression.
SparqlListener.prototype.enterRegexExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#regexExpression.
SparqlListener.prototype.exitRegexExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#iriRefOrFunction.
SparqlListener.prototype.enterIriRefOrFunction = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#iriRefOrFunction.
SparqlListener.prototype.exitIriRefOrFunction = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#rdfLiteral.
SparqlListener.prototype.enterRdfLiteral = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#rdfLiteral.
SparqlListener.prototype.exitRdfLiteral = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#numericLiteral.
SparqlListener.prototype.enterNumericLiteral = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#numericLiteral.
SparqlListener.prototype.exitNumericLiteral = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#numericLiteralUnsigned.
SparqlListener.prototype.enterNumericLiteralUnsigned = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#numericLiteralUnsigned.
SparqlListener.prototype.exitNumericLiteralUnsigned = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#numericLiteralPositive.
SparqlListener.prototype.enterNumericLiteralPositive = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#numericLiteralPositive.
SparqlListener.prototype.exitNumericLiteralPositive = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#numericLiteralNegative.
SparqlListener.prototype.enterNumericLiteralNegative = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#numericLiteralNegative.
SparqlListener.prototype.exitNumericLiteralNegative = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#booleanLiteral.
SparqlListener.prototype.enterBooleanLiteral = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#booleanLiteral.
SparqlListener.prototype.exitBooleanLiteral = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#string.
SparqlListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#string.
SparqlListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#iriRef.
SparqlListener.prototype.enterIriRef = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#iriRef.
SparqlListener.prototype.exitIriRef = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#prefixedName.
SparqlListener.prototype.enterPrefixedName = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#prefixedName.
SparqlListener.prototype.exitPrefixedName = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#blankNode.
SparqlListener.prototype.enterBlankNode = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#blankNode.
SparqlListener.prototype.exitBlankNode = function(ctx) {
};



exports.SparqlListener = SparqlListener;
