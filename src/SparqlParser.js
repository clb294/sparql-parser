// Generated from Sparql.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SparqlListener = require('./SparqlListener').SparqlListener;
var grammarFileName = "Sparql.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003Z\u0277\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u00049\t9\u0004",
    ":\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004?\t?\u0004@\t@\u0004",
    "A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0004F\tF\u0004G\tG\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u0094",
    "\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0005\u0003\u0099\n\u0003",
    "\u0003\u0003\u0007\u0003\u009c\n\u0003\f\u0003\u000e\u0003\u009f\u000b",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0005\u0006\u00aa\n\u0006",
    "\u0003\u0006\u0006\u0006\u00ad\n\u0006\r\u0006\u000e\u0006\u00ae\u0003",
    "\u0006\u0005\u0006\u00b2\n\u0006\u0003\u0006\u0007\u0006\u00b5\n\u0006",
    "\f\u0006\u000e\u0006\u00b8\u000b\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u00c0\n\u0007",
    "\f\u0007\u000e\u0007\u00c3\u000b\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0006\b\u00ca\n\b\r\b\u000e\b\u00cb\u0003\b\u0005",
    "\b\u00cf\n\b\u0003\b\u0007\b\u00d2\n\b\f\b\u000e\b\u00d5\u000b\b\u0003",
    "\b\u0005\b\u00d8\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0007\t\u00de\n",
    "\t\f\t\u000e\t\u00e1\u000b\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0005\n\u00e9\n\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0005",
    "\u000f\u00f6\n\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0005\u0010",
    "\u00fb\n\u0010\u0003\u0010\u0005\u0010\u00fe\n\u0010\u0003\u0011\u0003",
    "\u0011\u0005\u0011\u0102\n\u0011\u0003\u0011\u0003\u0011\u0005\u0011",
    "\u0106\n\u0011\u0005\u0011\u0108\n\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0006\u0012\u010d\n\u0012\r\u0012\u000e\u0012\u010e\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u0115\n\u0013\u0005",
    "\u0013\u0117\n\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0005\u0016\u0121\n",
    "\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u0125\n\u0016\u0003\u0016",
    "\u0005\u0016\u0128\n\u0016\u0003\u0016\u0005\u0016\u012b\n\u0016\u0007",
    "\u0016\u012d\n\u0016\f\u0016\u000e\u0016\u0130\u000b\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u0137\n",
    "\u0017\u0005\u0017\u0139\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0005\u0018\u013e\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0007\u001b\u014a\n\u001b\f\u001b\u000e\u001b\u014d\u000b\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0005\u001d\u0155\n\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0007\u001f\u015f",
    "\n\u001f\f\u001f\u000e\u001f\u0162\u000b\u001f\u0003\u001f\u0003\u001f",
    "\u0005\u001f\u0166\n\u001f\u0003 \u0003 \u0005 \u016a\n \u0003 \u0003",
    " \u0003!\u0003!\u0003!\u0005!\u0171\n!\u0005!\u0173\n!\u0003\"\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005\"\u017b\n\"\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0005#\u0183\n#\u0007#\u0185\n#\f#\u000e#\u0188",
    "\u000b#\u0003$\u0005$\u018b\n$\u0003%\u0003%\u0003%\u0007%\u0190\n%",
    "\f%\u000e%\u0193\u000b%\u0003&\u0003&\u0003\'\u0003\'\u0005\'\u0199",
    "\n\'\u0003(\u0003(\u0005(\u019d\n(\u0003)\u0003)\u0003)\u0003)\u0003",
    "*\u0003*\u0006*\u01a5\n*\r*\u000e*\u01a6\u0003*\u0003*\u0003+\u0003",
    "+\u0005+\u01ad\n+\u0003,\u0003,\u0005,\u01b1\n,\u0003-\u0003-\u0005",
    "-\u01b5\n-\u0003.\u0003.\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0005",
    "/\u01bf\n/\u00030\u00030\u00031\u00031\u00031\u00071\u01c6\n1\f1\u000e",
    "1\u01c9\u000b1\u00032\u00032\u00032\u00072\u01ce\n2\f2\u000e2\u01d1",
    "\u000b2\u00033\u00033\u00034\u00034\u00034\u00034\u00034\u00034\u0003",
    "4\u00034\u00034\u00034\u00034\u00034\u00034\u00054\u01e2\n4\u00035\u0003",
    "5\u00036\u00036\u00036\u00036\u00036\u00036\u00036\u00076\u01ed\n6\f",
    "6\u000e6\u01f0\u000b6\u00037\u00037\u00037\u00037\u00037\u00077\u01f7",
    "\n7\f7\u000e7\u01fa\u000b7\u00038\u00038\u00038\u00038\u00038\u0003",
    "8\u00038\u00058\u0203\n8\u00039\u00039\u00039\u00039\u00039\u00039\u0003",
    "9\u00059\u020c\n9\u0003:\u0003:\u0003:\u0003:\u0003;\u0003;\u0003;\u0003",
    ";\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003",
    ";\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003",
    ";\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003",
    ";\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003",
    ";\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003",
    ";\u0003;\u0005;\u0249\n;\u0003<\u0003<\u0003<\u0003<\u0003<\u0003<\u0003",
    "<\u0005<\u0252\n<\u0003<\u0003<\u0003=\u0003=\u0005=\u0258\n=\u0003",
    ">\u0003>\u0003>\u0003>\u0005>\u025e\n>\u0003?\u0003?\u0003?\u0005?\u0263",
    "\n?\u0003@\u0003@\u0003A\u0003A\u0003B\u0003B\u0003C\u0003C\u0003D\u0003",
    "D\u0003E\u0003E\u0005E\u0271\nE\u0003F\u0003F\u0003G\u0003G\u0003G\u0002",
    "\u0002H\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|",
    "~\u0080\u0082\u0084\u0086\u0088\u008a\u008c\u0002\f\u0003\u0002\u0006",
    "\u0007\u0003\u0002\u0012\u0013\u0003\u0002BC\u0003\u0002EG\u0003\u0002",
    "HJ\u0003\u0002KM\u0003\u0002<=\u0003\u0002OP\u0003\u0002?@\u0004\u0002",
    "AAUU\u0293\u0002\u008e\u0003\u0002\u0002\u0002\u0004\u0098\u0003\u0002",
    "\u0002\u0002\u0006\u00a0\u0003\u0002\u0002\u0002\b\u00a3\u0003\u0002",
    "\u0002\u0002\n\u00a7\u0003\u0002\u0002\u0002\f\u00bc\u0003\u0002\u0002",
    "\u0002\u000e\u00c7\u0003\u0002\u0002\u0002\u0010\u00db\u0003\u0002\u0002",
    "\u0002\u0012\u00e4\u0003\u0002\u0002\u0002\u0014\u00ea\u0003\u0002\u0002",
    "\u0002\u0016\u00ec\u0003\u0002\u0002\u0002\u0018\u00ef\u0003\u0002\u0002",
    "\u0002\u001a\u00f2\u0003\u0002\u0002\u0002\u001c\u00f5\u0003\u0002\u0002",
    "\u0002\u001e\u00fa\u0003\u0002\u0002\u0002 \u0107\u0003\u0002\u0002",
    "\u0002\"\u0109\u0003\u0002\u0002\u0002$\u0116\u0003\u0002\u0002\u0002",
    "&\u0118\u0003\u0002\u0002\u0002(\u011b\u0003\u0002\u0002\u0002*\u011e",
    "\u0003\u0002\u0002\u0002,\u0133\u0003\u0002\u0002\u0002.\u013d\u0003",
    "\u0002\u0002\u00020\u013f\u0003\u0002\u0002\u00022\u0142\u0003\u0002",
    "\u0002\u00024\u0146\u0003\u0002\u0002\u00026\u014e\u0003\u0002\u0002",
    "\u00028\u0154\u0003\u0002\u0002\u0002:\u0156\u0003\u0002\u0002\u0002",
    "<\u0165\u0003\u0002\u0002\u0002>\u0167\u0003\u0002\u0002\u0002@\u016d",
    "\u0003\u0002\u0002\u0002B\u017a\u0003\u0002\u0002\u0002D\u017c\u0003",
    "\u0002\u0002\u0002F\u018a\u0003\u0002\u0002\u0002H\u018c\u0003\u0002",
    "\u0002\u0002J\u0194\u0003\u0002\u0002\u0002L\u0198\u0003\u0002\u0002",
    "\u0002N\u019c\u0003\u0002\u0002\u0002P\u019e\u0003\u0002\u0002\u0002",
    "R\u01a2\u0003\u0002\u0002\u0002T\u01ac\u0003\u0002\u0002\u0002V\u01b0",
    "\u0003\u0002\u0002\u0002X\u01b4\u0003\u0002\u0002\u0002Z\u01b6\u0003",
    "\u0002\u0002\u0002\\\u01be\u0003\u0002\u0002\u0002^\u01c0\u0003\u0002",
    "\u0002\u0002`\u01c2\u0003\u0002\u0002\u0002b\u01ca\u0003\u0002\u0002",
    "\u0002d\u01d2\u0003\u0002\u0002\u0002f\u01d4\u0003\u0002\u0002\u0002",
    "h\u01e3\u0003\u0002\u0002\u0002j\u01e5\u0003\u0002\u0002\u0002l\u01f1",
    "\u0003\u0002\u0002\u0002n\u0202\u0003\u0002\u0002\u0002p\u020b\u0003",
    "\u0002\u0002\u0002r\u020d\u0003\u0002\u0002\u0002t\u0248\u0003\u0002",
    "\u0002\u0002v\u024a\u0003\u0002\u0002\u0002x\u0255\u0003\u0002\u0002",
    "\u0002z\u0259\u0003\u0002\u0002\u0002|\u0262\u0003\u0002\u0002\u0002",
    "~\u0264\u0003\u0002\u0002\u0002\u0080\u0266\u0003\u0002\u0002\u0002",
    "\u0082\u0268\u0003\u0002\u0002\u0002\u0084\u026a\u0003\u0002\u0002\u0002",
    "\u0086\u026c\u0003\u0002\u0002\u0002\u0088\u0270\u0003\u0002\u0002\u0002",
    "\u008a\u0272\u0003\u0002\u0002\u0002\u008c\u0274\u0003\u0002\u0002\u0002",
    "\u008e\u0093\u0005\u0004\u0003\u0002\u008f\u0094\u0005\n\u0006\u0002",
    "\u0090\u0094\u0005\f\u0007\u0002\u0091\u0094\u0005\u000e\b\u0002\u0092",
    "\u0094\u0005\u0010\t\u0002\u0093\u008f\u0003\u0002\u0002\u0002\u0093",
    "\u0090\u0003\u0002\u0002\u0002\u0093\u0091\u0003\u0002\u0002\u0002\u0093",
    "\u0092\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095",
    "\u0096\u0007\u0002\u0002\u0003\u0096\u0003\u0003\u0002\u0002\u0002\u0097",
    "\u0099\u0005\u0006\u0004\u0002\u0098\u0097\u0003\u0002\u0002\u0002\u0098",
    "\u0099\u0003\u0002\u0002\u0002\u0099\u009d\u0003\u0002\u0002\u0002\u009a",
    "\u009c\u0005\b\u0005\u0002\u009b\u009a\u0003\u0002\u0002\u0002\u009c",
    "\u009f\u0003\u0002\u0002\u0002\u009d\u009b\u0003\u0002\u0002\u0002\u009d",
    "\u009e\u0003\u0002\u0002\u0002\u009e\u0005\u0003\u0002\u0002\u0002\u009f",
    "\u009d\u0003\u0002\u0002\u0002\u00a0\u00a1\u0007\u0003\u0002\u0002\u00a1",
    "\u00a2\u0007>\u0002\u0002\u00a2\u0007\u0003\u0002\u0002\u0002\u00a3",
    "\u00a4\u0007\u0004\u0002\u0002\u00a4\u00a5\u0007?\u0002\u0002\u00a5",
    "\u00a6\u0007>\u0002\u0002\u00a6\t\u0003\u0002\u0002\u0002\u00a7\u00a9",
    "\u0007\u0005\u0002\u0002\u00a8\u00aa\t\u0002\u0002\u0002\u00a9\u00a8",
    "\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa\u00b1",
    "\u0003\u0002\u0002\u0002\u00ab\u00ad\u0005Z.\u0002\u00ac\u00ab\u0003",
    "\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00ac\u0003",
    "\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002\u0002\u00af\u00b2\u0003",
    "\u0002\u0002\u0002\u00b0\u00b2\u0007\b\u0002\u0002\u00b1\u00ac\u0003",
    "\u0002\u0002\u0002\u00b1\u00b0\u0003\u0002\u0002\u0002\u00b2\u00b6\u0003",
    "\u0002\u0002\u0002\u00b3\u00b5\u0005\u0012\n\u0002\u00b4\u00b3\u0003",
    "\u0002\u0002\u0002\u00b5\u00b8\u0003\u0002\u0002\u0002\u00b6\u00b4\u0003",
    "\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002\u00b7\u00b9\u0003",
    "\u0002\u0002\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b9\u00ba\u0005",
    "\u001c\u000f\u0002\u00ba\u00bb\u0005\u001e\u0010\u0002\u00bb\u000b\u0003",
    "\u0002\u0002\u0002\u00bc\u00bd\u0007\t\u0002\u0002\u00bd\u00c1\u0005",
    "> \u0002\u00be\u00c0\u0005\u0012\n\u0002\u00bf\u00be\u0003\u0002\u0002",
    "\u0002\u00c0\u00c3\u0003\u0002\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002",
    "\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c4\u0003\u0002\u0002",
    "\u0002\u00c3\u00c1\u0003\u0002\u0002\u0002\u00c4\u00c5\u0005\u001c\u000f",
    "\u0002\u00c5\u00c6\u0005\u001e\u0010\u0002\u00c6\r\u0003\u0002\u0002",
    "\u0002\u00c7\u00ce\u0007\n\u0002\u0002\u00c8\u00ca\u0005X-\u0002\u00c9",
    "\u00c8\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002\u0002\u0002\u00cb",
    "\u00c9\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc",
    "\u00cf\u0003\u0002\u0002\u0002\u00cd\u00cf\u0007\b\u0002\u0002\u00ce",
    "\u00c9\u0003\u0002\u0002\u0002\u00ce\u00cd\u0003\u0002\u0002\u0002\u00cf",
    "\u00d3\u0003\u0002\u0002\u0002\u00d0\u00d2\u0005\u0012\n\u0002\u00d1",
    "\u00d0\u0003\u0002\u0002\u0002\u00d2\u00d5\u0003\u0002\u0002\u0002\u00d3",
    "\u00d1\u0003\u0002\u0002\u0002\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4",
    "\u00d7\u0003\u0002\u0002\u0002\u00d5\u00d3\u0003\u0002\u0002\u0002\u00d6",
    "\u00d8\u0005\u001c\u000f\u0002\u00d7\u00d6\u0003\u0002\u0002\u0002\u00d7",
    "\u00d8\u0003\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002\u00d9",
    "\u00da\u0005\u001e\u0010\u0002\u00da\u000f\u0003\u0002\u0002\u0002\u00db",
    "\u00df\u0007\u000b\u0002\u0002\u00dc\u00de\u0005\u0012\n\u0002\u00dd",
    "\u00dc\u0003\u0002\u0002\u0002\u00de\u00e1\u0003\u0002\u0002\u0002\u00df",
    "\u00dd\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0",
    "\u00e2\u0003\u0002\u0002\u0002\u00e1\u00df\u0003\u0002\u0002\u0002\u00e2",
    "\u00e3\u0005\u001c\u000f\u0002\u00e3\u0011\u0003\u0002\u0002\u0002\u00e4",
    "\u00e8\u0007\f\u0002\u0002\u00e5\u00e9\u0005\u0014\u000b\u0002\u00e6",
    "\u00e9\u0005\u0018\r\u0002\u00e7\u00e9\u0005\u0016\f\u0002\u00e8\u00e5",
    "\u0003\u0002\u0002\u0002\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e8\u00e7",
    "\u0003\u0002\u0002\u0002\u00e9\u0013\u0003\u0002\u0002\u0002\u00ea\u00eb",
    "\u0005\u001a\u000e\u0002\u00eb\u0015\u0003\u0002\u0002\u0002\u00ec\u00ed",
    "\u0007\r\u0002\u0002\u00ed\u00ee\u0005\u001a\u000e\u0002\u00ee\u0017",
    "\u0003\u0002\u0002\u0002\u00ef\u00f0\u0007\u000e\u0002\u0002\u00f0\u00f1",
    "\u0005\u001a\u000e\u0002\u00f1\u0019\u0003\u0002\u0002\u0002\u00f2\u00f3",
    "\u0005\u0088E\u0002\u00f3\u001b\u0003\u0002\u0002\u0002\u00f4\u00f6",
    "\u0007\u000f\u0002\u0002\u00f5\u00f4\u0003\u0002\u0002\u0002\u00f5\u00f6",
    "\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7\u00f8",
    "\u0005*\u0016\u0002\u00f8\u001d\u0003\u0002\u0002\u0002\u00f9\u00fb",
    "\u0005\"\u0012\u0002\u00fa\u00f9\u0003\u0002\u0002\u0002\u00fa\u00fb",
    "\u0003\u0002\u0002\u0002\u00fb\u00fd\u0003\u0002\u0002\u0002\u00fc\u00fe",
    "\u0005 \u0011\u0002\u00fd\u00fc\u0003\u0002\u0002\u0002\u00fd\u00fe",
    "\u0003\u0002\u0002\u0002\u00fe\u001f\u0003\u0002\u0002\u0002\u00ff\u0101",
    "\u0005&\u0014\u0002\u0100\u0102\u0005(\u0015\u0002\u0101\u0100\u0003",
    "\u0002\u0002\u0002\u0101\u0102\u0003\u0002\u0002\u0002\u0102\u0108\u0003",
    "\u0002\u0002\u0002\u0103\u0105\u0005(\u0015\u0002\u0104\u0106\u0005",
    "&\u0014\u0002\u0105\u0104\u0003\u0002\u0002\u0002\u0105\u0106\u0003",
    "\u0002\u0002\u0002\u0106\u0108\u0003\u0002\u0002\u0002\u0107\u00ff\u0003",
    "\u0002\u0002\u0002\u0107\u0103\u0003\u0002\u0002\u0002\u0108!\u0003",
    "\u0002\u0002\u0002\u0109\u010a\u0007\u0010\u0002\u0002\u010a\u010c\u0007",
    "\u0011\u0002\u0002\u010b\u010d\u0005$\u0013\u0002\u010c\u010b\u0003",
    "\u0002\u0002\u0002\u010d\u010e\u0003\u0002\u0002\u0002\u010e\u010c\u0003",
    "\u0002\u0002\u0002\u010e\u010f\u0003\u0002\u0002\u0002\u010f#\u0003",
    "\u0002\u0002\u0002\u0110\u0111\t\u0003\u0002\u0002\u0111\u0117\u0005",
    "r:\u0002\u0112\u0115\u00058\u001d\u0002\u0113\u0115\u0005Z.\u0002\u0114",
    "\u0112\u0003\u0002\u0002\u0002\u0114\u0113\u0003\u0002\u0002\u0002\u0115",
    "\u0117\u0003\u0002\u0002\u0002\u0116\u0110\u0003\u0002\u0002\u0002\u0116",
    "\u0114\u0003\u0002\u0002\u0002\u0117%\u0003\u0002\u0002\u0002\u0118",
    "\u0119\u0007\u0014\u0002\u0002\u0119\u011a\u0007E\u0002\u0002\u011a",
    "\'\u0003\u0002\u0002\u0002\u011b\u011c\u0007\u0015\u0002\u0002\u011c",
    "\u011d\u0007E\u0002\u0002\u011d)\u0003\u0002\u0002\u0002\u011e\u0120",
    "\u0007\u0016\u0002\u0002\u011f\u0121\u0005,\u0017\u0002\u0120\u011f",
    "\u0003\u0002\u0002\u0002\u0120\u0121\u0003\u0002\u0002\u0002\u0121\u012e",
    "\u0003\u0002\u0002\u0002\u0122\u0125\u0005.\u0018\u0002\u0123\u0125",
    "\u00056\u001c\u0002\u0124\u0122\u0003\u0002\u0002\u0002\u0124\u0123",
    "\u0003\u0002\u0002\u0002\u0125\u0127\u0003\u0002\u0002\u0002\u0126\u0128",
    "\u0007\u0017\u0002\u0002\u0127\u0126\u0003\u0002\u0002\u0002\u0127\u0128",
    "\u0003\u0002\u0002\u0002\u0128\u012a\u0003\u0002\u0002\u0002\u0129\u012b",
    "\u0005,\u0017\u0002\u012a\u0129\u0003\u0002\u0002\u0002\u012a\u012b",
    "\u0003\u0002\u0002\u0002\u012b\u012d\u0003\u0002\u0002\u0002\u012c\u0124",
    "\u0003\u0002\u0002\u0002\u012d\u0130\u0003\u0002\u0002\u0002\u012e\u012c",
    "\u0003\u0002\u0002\u0002\u012e\u012f\u0003\u0002\u0002\u0002\u012f\u0131",
    "\u0003\u0002\u0002\u0002\u0130\u012e\u0003\u0002\u0002\u0002\u0131\u0132",
    "\u0007\u0018\u0002\u0002\u0132+\u0003\u0002\u0002\u0002\u0133\u0138",
    "\u0005B\"\u0002\u0134\u0136\u0007\u0017\u0002\u0002\u0135\u0137\u0005",
    ",\u0017\u0002\u0136\u0135\u0003\u0002\u0002\u0002\u0136\u0137\u0003",
    "\u0002\u0002\u0002\u0137\u0139\u0003\u0002\u0002\u0002\u0138\u0134\u0003",
    "\u0002\u0002\u0002\u0138\u0139\u0003\u0002\u0002\u0002\u0139-\u0003",
    "\u0002\u0002\u0002\u013a\u013e\u00050\u0019\u0002\u013b\u013e\u0005",
    "4\u001b\u0002\u013c\u013e\u00052\u001a\u0002\u013d\u013a\u0003\u0002",
    "\u0002\u0002\u013d\u013b\u0003\u0002\u0002\u0002\u013d\u013c\u0003\u0002",
    "\u0002\u0002\u013e/\u0003\u0002\u0002\u0002\u013f\u0140\u0007\u0019",
    "\u0002\u0002\u0140\u0141\u0005*\u0016\u0002\u01411\u0003\u0002\u0002",
    "\u0002\u0142\u0143\u0007\u001a\u0002\u0002\u0143\u0144\u0005X-\u0002",
    "\u0144\u0145\u0005*\u0016\u0002\u01453\u0003\u0002\u0002\u0002\u0146",
    "\u014b\u0005*\u0016\u0002\u0147\u0148\u0007\u001b\u0002\u0002\u0148",
    "\u014a\u0005*\u0016\u0002\u0149\u0147\u0003\u0002\u0002\u0002\u014a",
    "\u014d\u0003\u0002\u0002\u0002\u014b\u0149\u0003\u0002\u0002\u0002\u014b",
    "\u014c\u0003\u0002\u0002\u0002\u014c5\u0003\u0002\u0002\u0002\u014d",
    "\u014b\u0003\u0002\u0002\u0002\u014e\u014f\u0007\u001c\u0002\u0002\u014f",
    "\u0150\u00058\u001d\u0002\u01507\u0003\u0002\u0002\u0002\u0151\u0155",
    "\u0005r:\u0002\u0152\u0155\u0005t;\u0002\u0153\u0155\u0005:\u001e\u0002",
    "\u0154\u0151\u0003\u0002\u0002\u0002\u0154\u0152\u0003\u0002\u0002\u0002",
    "\u0154\u0153\u0003\u0002\u0002\u0002\u01559\u0003\u0002\u0002\u0002",
    "\u0156\u0157\u0005\u0088E\u0002\u0157\u0158\u0005<\u001f\u0002\u0158",
    ";\u0003\u0002\u0002\u0002\u0159\u0166\u0007T\u0002\u0002\u015a\u015b",
    "\u0007\u001d\u0002\u0002\u015b\u0160\u0005^0\u0002\u015c\u015d\u0007",
    "\u001e\u0002\u0002\u015d\u015f\u0005^0\u0002\u015e\u015c\u0003\u0002",
    "\u0002\u0002\u015f\u0162\u0003\u0002\u0002\u0002\u0160\u015e\u0003\u0002",
    "\u0002\u0002\u0160\u0161\u0003\u0002\u0002\u0002\u0161\u0163\u0003\u0002",
    "\u0002\u0002\u0162\u0160\u0003\u0002\u0002\u0002\u0163\u0164\u0007\u001f",
    "\u0002\u0002\u0164\u0166\u0003\u0002\u0002\u0002\u0165\u0159\u0003\u0002",
    "\u0002\u0002\u0165\u015a\u0003\u0002\u0002\u0002\u0166=\u0003\u0002",
    "\u0002\u0002\u0167\u0169\u0007\u0016\u0002\u0002\u0168\u016a\u0005@",
    "!\u0002\u0169\u0168\u0003\u0002\u0002\u0002\u0169\u016a\u0003\u0002",
    "\u0002\u0002\u016a\u016b\u0003\u0002\u0002\u0002\u016b\u016c\u0007\u0018",
    "\u0002\u0002\u016c?\u0003\u0002\u0002\u0002\u016d\u0172\u0005B\"\u0002",
    "\u016e\u0170\u0007\u0017\u0002\u0002\u016f\u0171\u0005@!\u0002\u0170",
    "\u016f\u0003\u0002\u0002\u0002\u0170\u0171\u0003\u0002\u0002\u0002\u0171",
    "\u0173\u0003\u0002\u0002\u0002\u0172\u016e\u0003\u0002\u0002\u0002\u0172",
    "\u0173\u0003\u0002\u0002\u0002\u0173A\u0003\u0002\u0002\u0002\u0174",
    "\u0175\u0005V,\u0002\u0175\u0176\u0005D#\u0002\u0176\u017b\u0003\u0002",
    "\u0002\u0002\u0177\u0178\u0005N(\u0002\u0178\u0179\u0005F$\u0002\u0179",
    "\u017b\u0003\u0002\u0002\u0002\u017a\u0174\u0003\u0002\u0002\u0002\u017a",
    "\u0177\u0003\u0002\u0002\u0002\u017bC\u0003\u0002\u0002\u0002\u017c",
    "\u017d\u0005L\'\u0002\u017d\u0186\u0005H%\u0002\u017e\u0182\u0007 \u0002",
    "\u0002\u017f\u0180\u0005L\'\u0002\u0180\u0181\u0005H%\u0002\u0181\u0183",
    "\u0003\u0002\u0002\u0002\u0182\u017f\u0003\u0002\u0002\u0002\u0182\u0183",
    "\u0003\u0002\u0002\u0002\u0183\u0185\u0003\u0002\u0002\u0002\u0184\u017e",
    "\u0003\u0002\u0002\u0002\u0185\u0188\u0003\u0002\u0002\u0002\u0186\u0184",
    "\u0003\u0002\u0002\u0002\u0186\u0187\u0003\u0002\u0002\u0002\u0187E",
    "\u0003\u0002\u0002\u0002\u0188\u0186\u0003\u0002\u0002\u0002\u0189\u018b",
    "\u0005D#\u0002\u018a\u0189\u0003\u0002\u0002\u0002\u018a\u018b\u0003",
    "\u0002\u0002\u0002\u018bG\u0003\u0002\u0002\u0002\u018c\u0191\u0005",
    "J&\u0002\u018d\u018e\u0007\u001e\u0002\u0002\u018e\u0190\u0005J&\u0002",
    "\u018f\u018d\u0003\u0002\u0002\u0002\u0190\u0193\u0003\u0002\u0002\u0002",
    "\u0191\u018f\u0003\u0002\u0002\u0002\u0191\u0192\u0003\u0002\u0002\u0002",
    "\u0192I\u0003\u0002\u0002\u0002\u0193\u0191\u0003\u0002\u0002\u0002",
    "\u0194\u0195\u0005T+\u0002\u0195K\u0003\u0002\u0002\u0002\u0196\u0199",
    "\u0005X-\u0002\u0197\u0199\u0007!\u0002\u0002\u0198\u0196\u0003\u0002",
    "\u0002\u0002\u0198\u0197\u0003\u0002\u0002\u0002\u0199M\u0003\u0002",
    "\u0002\u0002\u019a\u019d\u0005R*\u0002\u019b\u019d\u0005P)\u0002\u019c",
    "\u019a\u0003\u0002\u0002\u0002\u019c\u019b\u0003\u0002\u0002\u0002\u019d",
    "O\u0003\u0002\u0002\u0002\u019e\u019f\u0007\"\u0002\u0002\u019f\u01a0",
    "\u0005D#\u0002\u01a0\u01a1\u0007#\u0002\u0002\u01a1Q\u0003\u0002\u0002",
    "\u0002\u01a2\u01a4\u0007\u001d\u0002\u0002\u01a3\u01a5\u0005T+\u0002",
    "\u01a4\u01a3\u0003\u0002\u0002\u0002\u01a5\u01a6\u0003\u0002\u0002\u0002",
    "\u01a6\u01a4\u0003\u0002\u0002\u0002\u01a6\u01a7\u0003\u0002\u0002\u0002",
    "\u01a7\u01a8\u0003\u0002\u0002\u0002\u01a8\u01a9\u0007\u001f\u0002\u0002",
    "\u01a9S\u0003\u0002\u0002\u0002\u01aa\u01ad\u0005V,\u0002\u01ab\u01ad",
    "\u0005N(\u0002\u01ac\u01aa\u0003\u0002\u0002\u0002\u01ac\u01ab\u0003",
    "\u0002\u0002\u0002\u01adU\u0003\u0002\u0002\u0002\u01ae\u01b1\u0005",
    "Z.\u0002\u01af\u01b1\u0005\\/\u0002\u01b0\u01ae\u0003\u0002\u0002\u0002",
    "\u01b0\u01af\u0003\u0002\u0002\u0002\u01b1W\u0003\u0002\u0002\u0002",
    "\u01b2\u01b5\u0005Z.\u0002\u01b3\u01b5\u0005\u0088E\u0002\u01b4\u01b2",
    "\u0003\u0002\u0002\u0002\u01b4\u01b3\u0003\u0002\u0002\u0002\u01b5Y",
    "\u0003\u0002\u0002\u0002\u01b6\u01b7\t\u0004\u0002\u0002\u01b7[\u0003",
    "\u0002\u0002\u0002\u01b8\u01bf\u0005\u0088E\u0002\u01b9\u01bf\u0005",
    "z>\u0002\u01ba\u01bf\u0005|?\u0002\u01bb\u01bf\u0005\u0084C\u0002\u01bc",
    "\u01bf\u0005\u008cG\u0002\u01bd\u01bf\u0007T\u0002\u0002\u01be\u01b8",
    "\u0003\u0002\u0002\u0002\u01be\u01b9\u0003\u0002\u0002\u0002\u01be\u01ba",
    "\u0003\u0002\u0002\u0002\u01be\u01bb\u0003\u0002\u0002\u0002\u01be\u01bc",
    "\u0003\u0002\u0002\u0002\u01be\u01bd\u0003\u0002\u0002\u0002\u01bf]",
    "\u0003\u0002\u0002\u0002\u01c0\u01c1\u0005`1\u0002\u01c1_\u0003\u0002",
    "\u0002\u0002\u01c2\u01c7\u0005b2\u0002\u01c3\u01c4\u0007$\u0002\u0002",
    "\u01c4\u01c6\u0005b2\u0002\u01c5\u01c3\u0003\u0002\u0002\u0002\u01c6",
    "\u01c9\u0003\u0002\u0002\u0002\u01c7\u01c5\u0003\u0002\u0002\u0002\u01c7",
    "\u01c8\u0003\u0002\u0002\u0002\u01c8a\u0003\u0002\u0002\u0002\u01c9",
    "\u01c7\u0003\u0002\u0002\u0002\u01ca\u01cf\u0005d3\u0002\u01cb\u01cc",
    "\u0007%\u0002\u0002\u01cc\u01ce\u0005d3\u0002\u01cd\u01cb\u0003\u0002",
    "\u0002\u0002\u01ce\u01d1\u0003\u0002\u0002\u0002\u01cf\u01cd\u0003\u0002",
    "\u0002\u0002\u01cf\u01d0\u0003\u0002\u0002\u0002\u01d0c\u0003\u0002",
    "\u0002\u0002\u01d1\u01cf\u0003\u0002\u0002\u0002\u01d2\u01d3\u0005f",
    "4\u0002\u01d3e\u0003\u0002\u0002\u0002\u01d4\u01e1\u0005h5\u0002\u01d5",
    "\u01d6\u0007&\u0002\u0002\u01d6\u01e2\u0005h5\u0002\u01d7\u01d8\u0007",
    "\'\u0002\u0002\u01d8\u01e2\u0005h5\u0002\u01d9\u01da\u0007(\u0002\u0002",
    "\u01da\u01e2\u0005h5\u0002\u01db\u01dc\u0007)\u0002\u0002\u01dc\u01e2",
    "\u0005h5\u0002\u01dd\u01de\u0007*\u0002\u0002\u01de\u01e2\u0005h5\u0002",
    "\u01df\u01e0\u0007+\u0002\u0002\u01e0\u01e2\u0005h5\u0002\u01e1\u01d5",
    "\u0003\u0002\u0002\u0002\u01e1\u01d7\u0003\u0002\u0002\u0002\u01e1\u01d9",
    "\u0003\u0002\u0002\u0002\u01e1\u01db\u0003\u0002\u0002\u0002\u01e1\u01dd",
    "\u0003\u0002\u0002\u0002\u01e1\u01df\u0003\u0002\u0002\u0002\u01e1\u01e2",
    "\u0003\u0002\u0002\u0002\u01e2g\u0003\u0002\u0002\u0002\u01e3\u01e4",
    "\u0005j6\u0002\u01e4i\u0003\u0002\u0002\u0002\u01e5\u01ee\u0005l7\u0002",
    "\u01e6\u01e7\u0007,\u0002\u0002\u01e7\u01ed\u0005l7\u0002\u01e8\u01e9",
    "\u0007-\u0002\u0002\u01e9\u01ed\u0005l7\u0002\u01ea\u01ed\u0005\u0080",
    "A\u0002\u01eb\u01ed\u0005\u0082B\u0002\u01ec\u01e6\u0003\u0002\u0002",
    "\u0002\u01ec\u01e8\u0003\u0002\u0002\u0002\u01ec\u01ea\u0003\u0002\u0002",
    "\u0002\u01ec\u01eb\u0003\u0002\u0002\u0002\u01ed\u01f0\u0003\u0002\u0002",
    "\u0002\u01ee\u01ec\u0003\u0002\u0002\u0002\u01ee\u01ef\u0003\u0002\u0002",
    "\u0002\u01efk\u0003\u0002\u0002\u0002\u01f0\u01ee\u0003\u0002\u0002",
    "\u0002\u01f1\u01f8\u0005n8\u0002\u01f2\u01f3\u0007\b\u0002\u0002\u01f3",
    "\u01f7\u0005n8\u0002\u01f4\u01f5\u0007.\u0002\u0002\u01f5\u01f7\u0005",
    "n8\u0002\u01f6\u01f2\u0003\u0002\u0002\u0002\u01f6\u01f4\u0003\u0002",
    "\u0002\u0002\u01f7\u01fa\u0003\u0002\u0002\u0002\u01f8\u01f6\u0003\u0002",
    "\u0002\u0002\u01f8\u01f9\u0003\u0002\u0002\u0002\u01f9m\u0003\u0002",
    "\u0002\u0002\u01fa\u01f8\u0003\u0002\u0002\u0002\u01fb\u01fc\u0007/",
    "\u0002\u0002\u01fc\u0203\u0005p9\u0002\u01fd\u01fe\u0007,\u0002\u0002",
    "\u01fe\u0203\u0005p9\u0002\u01ff\u0200\u0007-\u0002\u0002\u0200\u0203",
    "\u0005p9\u0002\u0201\u0203\u0005p9\u0002\u0202\u01fb\u0003\u0002\u0002",
    "\u0002\u0202\u01fd\u0003\u0002\u0002\u0002\u0202\u01ff\u0003\u0002\u0002",
    "\u0002\u0202\u0201\u0003\u0002\u0002\u0002\u0203o\u0003\u0002\u0002",
    "\u0002\u0204\u020c\u0005r:\u0002\u0205\u020c\u0005t;\u0002\u0206\u020c",
    "\u0005x=\u0002\u0207\u020c\u0005z>\u0002\u0208\u020c\u0005|?\u0002\u0209",
    "\u020c\u0005\u0084C\u0002\u020a\u020c\u0005Z.\u0002\u020b\u0204\u0003",
    "\u0002\u0002\u0002\u020b\u0205\u0003\u0002\u0002\u0002\u020b\u0206\u0003",
    "\u0002\u0002\u0002\u020b\u0207\u0003\u0002\u0002\u0002\u020b\u0208\u0003",
    "\u0002\u0002\u0002\u020b\u0209\u0003\u0002\u0002\u0002\u020b\u020a\u0003",
    "\u0002\u0002\u0002\u020cq\u0003\u0002\u0002\u0002\u020d\u020e\u0007",
    "\u001d\u0002\u0002\u020e\u020f\u0005^0\u0002\u020f\u0210\u0007\u001f",
    "\u0002\u0002\u0210s\u0003\u0002\u0002\u0002\u0211\u0212\u00070\u0002",
    "\u0002\u0212\u0213\u0007\u001d\u0002\u0002\u0213\u0214\u0005^0\u0002",
    "\u0214\u0215\u0007\u001f\u0002\u0002\u0215\u0249\u0003\u0002\u0002\u0002",
    "\u0216\u0217\u00071\u0002\u0002\u0217\u0218\u0007\u001d\u0002\u0002",
    "\u0218\u0219\u0005^0\u0002\u0219\u021a\u0007\u001f\u0002\u0002\u021a",
    "\u0249\u0003\u0002\u0002\u0002\u021b\u021c\u00072\u0002\u0002\u021c",
    "\u021d\u0007\u001d\u0002\u0002\u021d\u021e\u0005^0\u0002\u021e\u021f",
    "\u0007\u001e\u0002\u0002\u021f\u0220\u0005^0\u0002\u0220\u0221\u0007",
    "\u001f\u0002\u0002\u0221\u0249\u0003\u0002\u0002\u0002\u0222\u0223\u0007",
    "3\u0002\u0002\u0223\u0224\u0007\u001d\u0002\u0002\u0224\u0225\u0005",
    "^0\u0002\u0225\u0226\u0007\u001f\u0002\u0002\u0226\u0249\u0003\u0002",
    "\u0002\u0002\u0227\u0228\u00074\u0002\u0002\u0228\u0229\u0007\u001d",
    "\u0002\u0002\u0229\u022a\u0005Z.\u0002\u022a\u022b\u0007\u001f\u0002",
    "\u0002\u022b\u0249\u0003\u0002\u0002\u0002\u022c\u022d\u00075\u0002",
    "\u0002\u022d\u022e\u0007\u001d\u0002\u0002\u022e\u022f\u0005^0\u0002",
    "\u022f\u0230\u0007\u001e\u0002\u0002\u0230\u0231\u0005^0\u0002\u0231",
    "\u0232\u0007\u001f\u0002\u0002\u0232\u0249\u0003\u0002\u0002\u0002\u0233",
    "\u0234\u00076\u0002\u0002\u0234\u0235\u0007\u001d\u0002\u0002\u0235",
    "\u0236\u0005^0\u0002\u0236\u0237\u0007\u001f\u0002\u0002\u0237\u0249",
    "\u0003\u0002\u0002\u0002\u0238\u0239\u00077\u0002\u0002\u0239\u023a",
    "\u0007\u001d\u0002\u0002\u023a\u023b\u0005^0\u0002\u023b\u023c\u0007",
    "\u001f\u0002\u0002\u023c\u0249\u0003\u0002\u0002\u0002\u023d\u023e\u0007",
    "8\u0002\u0002\u023e\u023f\u0007\u001d\u0002\u0002\u023f\u0240\u0005",
    "^0\u0002\u0240\u0241\u0007\u001f\u0002\u0002\u0241\u0249\u0003\u0002",
    "\u0002\u0002\u0242\u0243\u00079\u0002\u0002\u0243\u0244\u0007\u001d",
    "\u0002\u0002\u0244\u0245\u0005^0\u0002\u0245\u0246\u0007\u001f\u0002",
    "\u0002\u0246\u0249\u0003\u0002\u0002\u0002\u0247\u0249\u0005v<\u0002",
    "\u0248\u0211\u0003\u0002\u0002\u0002\u0248\u0216\u0003\u0002\u0002\u0002",
    "\u0248\u021b\u0003\u0002\u0002\u0002\u0248\u0222\u0003\u0002\u0002\u0002",
    "\u0248\u0227\u0003\u0002\u0002\u0002\u0248\u022c\u0003\u0002\u0002\u0002",
    "\u0248\u0233\u0003\u0002\u0002\u0002\u0248\u0238\u0003\u0002\u0002\u0002",
    "\u0248\u023d\u0003\u0002\u0002\u0002\u0248\u0242\u0003\u0002\u0002\u0002",
    "\u0248\u0247\u0003\u0002\u0002\u0002\u0249u\u0003\u0002\u0002\u0002",
    "\u024a\u024b\u0007:\u0002\u0002\u024b\u024c\u0007\u001d\u0002\u0002",
    "\u024c\u024d\u0005^0\u0002\u024d\u024e\u0007\u001e\u0002\u0002\u024e",
    "\u0251\u0005^0\u0002\u024f\u0250\u0007\u001e\u0002\u0002\u0250\u0252",
    "\u0005^0\u0002\u0251\u024f\u0003\u0002\u0002\u0002\u0251\u0252\u0003",
    "\u0002\u0002\u0002\u0252\u0253\u0003\u0002\u0002\u0002\u0253\u0254\u0007",
    "\u001f\u0002\u0002\u0254w\u0003\u0002\u0002\u0002\u0255\u0257\u0005",
    "\u0088E\u0002\u0256\u0258\u0005<\u001f\u0002\u0257\u0256\u0003\u0002",
    "\u0002\u0002\u0257\u0258\u0003\u0002\u0002\u0002\u0258y\u0003\u0002",
    "\u0002\u0002\u0259\u025d\u0005\u0086D\u0002\u025a\u025e\u0007D\u0002",
    "\u0002\u025b\u025c\u0007;\u0002\u0002\u025c\u025e\u0005\u0088E\u0002",
    "\u025d\u025a\u0003\u0002\u0002\u0002\u025d\u025b\u0003\u0002\u0002\u0002",
    "\u025d\u025e\u0003\u0002\u0002\u0002\u025e{\u0003\u0002\u0002\u0002",
    "\u025f\u0263\u0005~@\u0002\u0260\u0263\u0005\u0080A\u0002\u0261\u0263",
    "\u0005\u0082B\u0002\u0262\u025f\u0003\u0002\u0002\u0002\u0262\u0260",
    "\u0003\u0002\u0002\u0002\u0262\u0261\u0003\u0002\u0002\u0002\u0263}",
    "\u0003\u0002\u0002\u0002\u0264\u0265\t\u0005\u0002\u0002\u0265\u007f",
    "\u0003\u0002\u0002\u0002\u0266\u0267\t\u0006\u0002\u0002\u0267\u0081",
    "\u0003\u0002\u0002\u0002\u0268\u0269\t\u0007\u0002\u0002\u0269\u0083",
    "\u0003\u0002\u0002\u0002\u026a\u026b\t\b\u0002\u0002\u026b\u0085\u0003",
    "\u0002\u0002\u0002\u026c\u026d\t\t\u0002\u0002\u026d\u0087\u0003\u0002",
    "\u0002\u0002\u026e\u0271\u0007>\u0002\u0002\u026f\u0271\u0005\u008a",
    "F\u0002\u0270\u026e\u0003\u0002\u0002\u0002\u0270\u026f\u0003\u0002",
    "\u0002\u0002\u0271\u0089\u0003\u0002\u0002\u0002\u0272\u0273\t\n\u0002",
    "\u0002\u0273\u008b\u0003\u0002\u0002\u0002\u0274\u0275\t\u000b\u0002",
    "\u0002\u0275\u008d\u0003\u0002\u0002\u0002C\u0093\u0098\u009d\u00a9",
    "\u00ae\u00b1\u00b6\u00c1\u00cb\u00ce\u00d3\u00d7\u00df\u00e8\u00f5\u00fa",
    "\u00fd\u0101\u0105\u0107\u010e\u0114\u0116\u0120\u0124\u0127\u012a\u012e",
    "\u0136\u0138\u013d\u014b\u0154\u0160\u0165\u0169\u0170\u0172\u017a\u0182",
    "\u0186\u018a\u0191\u0198\u019c\u01a6\u01ac\u01b0\u01b4\u01be\u01c7\u01cf",
    "\u01e1\u01ec\u01ee\u01f6\u01f8\u0202\u020b\u0248\u0251\u0257\u025d\u0262",
    "\u0270"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'BASE'", "'PREFIX'", "'SELECT'", "'DISTINCT'", 
                     "'REDUCED'", "'*'", "'CONSTRUCT'", "'DESCRIBE'", "'ASK'", 
                     "'FROM'", "'DATASET'", "'NAMED'", "'WHERE'", "'ORDER'", 
                     "'BY'", "'ASC'", "'DESC'", "'LIMIT'", "'OFFSET'", "'{'", 
                     "'.'", "'}'", "'OPTIONAL'", "'GRAPH'", "'UNION'", "'FILTER'", 
                     "'('", "','", "')'", "';'", "'a'", "'['", "']'", "'||'", 
                     "'&&'", "'='", "'!='", "'<'", "'>'", "'<='", "'>='", 
                     "'+'", "'-'", "'/'", "'!'", "'STR'", "'LANG'", "'LANGMATCHES'", 
                     "'DATATYPE'", "'BOUND'", "'sameTerm'", "'isIRI'", "'isURI'", 
                     "'isBLANK'", "'isLITERAL'", "'REGEX'", "'^^'", "'true'", 
                     "'false'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, "IRI_REF", "PNAME_NS", 
                      "PNAME_LN", "BLANK_NODE_LABEL", "VAR1", "VAR2", "LANGTAG", 
                      "INTEGER", "DECIMAL", "DOUBLE", "INTEGER_POSITIVE", 
                      "DECIMAL_POSITIVE", "DOUBLE_POSITIVE", "INTEGER_NEGATIVE", 
                      "DECIMAL_NEGATIVE", "DOUBLE_NEGATIVE", "EXPONENT", 
                      "STRING_LITERAL1", "STRING_LITERAL2", "STRING_LITERAL_LONG1", 
                      "STRING_LITERAL_LONG2", "ECHAR", "NIL", "ANON", "PN_CHARS_U", 
                      "VARNAME", "PN_PREFIX", "PN_LOCAL", "WS" ];

var ruleNames =  [ "query", "prologue", "baseDecl", "prefixDecl", "selectQuery", 
                   "constructQuery", "describeQuery", "askQuery", "datasetClause", 
                   "defaultGraphClause", "anzoDatasetClause", "namedGraphClause", 
                   "sourceSelector", "whereClause", "solutionModifier", 
                   "limitOffsetClauses", "orderClause", "orderCondition", 
                   "limitClause", "offsetClause", "groupGraphPattern", "triplesBlock", 
                   "graphPatternNotTriples", "optionalGraphPattern", "graphGraphPattern", 
                   "groupOrUnionGraphPattern", "filter", "constraint", "functionCall", 
                   "argList", "constructTemplate", "constructTriples", "triplesSameSubject", 
                   "propertyListNotEmpty", "propertyList", "objectList", 
                   "object", "verb", "triplesNode", "blankNodePropertyList", 
                   "collection", "graphNode", "varOrTerm", "varOrIRIref", 
                   "var", "graphTerm", "expression", "conditionalOrExpression", 
                   "conditionalAndExpression", "valueLogical", "relationalExpression", 
                   "numericExpression", "additiveExpression", "multiplicativeExpression", 
                   "unaryExpression", "primaryExpression", "brackettedExpression", 
                   "builtInCall", "regexExpression", "iriRefOrFunction", 
                   "rdfLiteral", "numericLiteral", "numericLiteralUnsigned", 
                   "numericLiteralPositive", "numericLiteralNegative", "booleanLiteral", 
                   "string", "iriRef", "prefixedName", "blankNode" ];

function SparqlParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SparqlParser.prototype = Object.create(antlr4.Parser.prototype);
SparqlParser.prototype.constructor = SparqlParser;

Object.defineProperty(SparqlParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SparqlParser.EOF = antlr4.Token.EOF;
SparqlParser.T__0 = 1;
SparqlParser.T__1 = 2;
SparqlParser.T__2 = 3;
SparqlParser.T__3 = 4;
SparqlParser.T__4 = 5;
SparqlParser.T__5 = 6;
SparqlParser.T__6 = 7;
SparqlParser.T__7 = 8;
SparqlParser.T__8 = 9;
SparqlParser.T__9 = 10;
SparqlParser.T__10 = 11;
SparqlParser.T__11 = 12;
SparqlParser.T__12 = 13;
SparqlParser.T__13 = 14;
SparqlParser.T__14 = 15;
SparqlParser.T__15 = 16;
SparqlParser.T__16 = 17;
SparqlParser.T__17 = 18;
SparqlParser.T__18 = 19;
SparqlParser.T__19 = 20;
SparqlParser.T__20 = 21;
SparqlParser.T__21 = 22;
SparqlParser.T__22 = 23;
SparqlParser.T__23 = 24;
SparqlParser.T__24 = 25;
SparqlParser.T__25 = 26;
SparqlParser.T__26 = 27;
SparqlParser.T__27 = 28;
SparqlParser.T__28 = 29;
SparqlParser.T__29 = 30;
SparqlParser.T__30 = 31;
SparqlParser.T__31 = 32;
SparqlParser.T__32 = 33;
SparqlParser.T__33 = 34;
SparqlParser.T__34 = 35;
SparqlParser.T__35 = 36;
SparqlParser.T__36 = 37;
SparqlParser.T__37 = 38;
SparqlParser.T__38 = 39;
SparqlParser.T__39 = 40;
SparqlParser.T__40 = 41;
SparqlParser.T__41 = 42;
SparqlParser.T__42 = 43;
SparqlParser.T__43 = 44;
SparqlParser.T__44 = 45;
SparqlParser.T__45 = 46;
SparqlParser.T__46 = 47;
SparqlParser.T__47 = 48;
SparqlParser.T__48 = 49;
SparqlParser.T__49 = 50;
SparqlParser.T__50 = 51;
SparqlParser.T__51 = 52;
SparqlParser.T__52 = 53;
SparqlParser.T__53 = 54;
SparqlParser.T__54 = 55;
SparqlParser.T__55 = 56;
SparqlParser.T__56 = 57;
SparqlParser.T__57 = 58;
SparqlParser.T__58 = 59;
SparqlParser.IRI_REF = 60;
SparqlParser.PNAME_NS = 61;
SparqlParser.PNAME_LN = 62;
SparqlParser.BLANK_NODE_LABEL = 63;
SparqlParser.VAR1 = 64;
SparqlParser.VAR2 = 65;
SparqlParser.LANGTAG = 66;
SparqlParser.INTEGER = 67;
SparqlParser.DECIMAL = 68;
SparqlParser.DOUBLE = 69;
SparqlParser.INTEGER_POSITIVE = 70;
SparqlParser.DECIMAL_POSITIVE = 71;
SparqlParser.DOUBLE_POSITIVE = 72;
SparqlParser.INTEGER_NEGATIVE = 73;
SparqlParser.DECIMAL_NEGATIVE = 74;
SparqlParser.DOUBLE_NEGATIVE = 75;
SparqlParser.EXPONENT = 76;
SparqlParser.STRING_LITERAL1 = 77;
SparqlParser.STRING_LITERAL2 = 78;
SparqlParser.STRING_LITERAL_LONG1 = 79;
SparqlParser.STRING_LITERAL_LONG2 = 80;
SparqlParser.ECHAR = 81;
SparqlParser.NIL = 82;
SparqlParser.ANON = 83;
SparqlParser.PN_CHARS_U = 84;
SparqlParser.VARNAME = 85;
SparqlParser.PN_PREFIX = 86;
SparqlParser.PN_LOCAL = 87;
SparqlParser.WS = 88;

SparqlParser.RULE_query = 0;
SparqlParser.RULE_prologue = 1;
SparqlParser.RULE_baseDecl = 2;
SparqlParser.RULE_prefixDecl = 3;
SparqlParser.RULE_selectQuery = 4;
SparqlParser.RULE_constructQuery = 5;
SparqlParser.RULE_describeQuery = 6;
SparqlParser.RULE_askQuery = 7;
SparqlParser.RULE_datasetClause = 8;
SparqlParser.RULE_defaultGraphClause = 9;
SparqlParser.RULE_anzoDatasetClause = 10;
SparqlParser.RULE_namedGraphClause = 11;
SparqlParser.RULE_sourceSelector = 12;
SparqlParser.RULE_whereClause = 13;
SparqlParser.RULE_solutionModifier = 14;
SparqlParser.RULE_limitOffsetClauses = 15;
SparqlParser.RULE_orderClause = 16;
SparqlParser.RULE_orderCondition = 17;
SparqlParser.RULE_limitClause = 18;
SparqlParser.RULE_offsetClause = 19;
SparqlParser.RULE_groupGraphPattern = 20;
SparqlParser.RULE_triplesBlock = 21;
SparqlParser.RULE_graphPatternNotTriples = 22;
SparqlParser.RULE_optionalGraphPattern = 23;
SparqlParser.RULE_graphGraphPattern = 24;
SparqlParser.RULE_groupOrUnionGraphPattern = 25;
SparqlParser.RULE_filter = 26;
SparqlParser.RULE_constraint = 27;
SparqlParser.RULE_functionCall = 28;
SparqlParser.RULE_argList = 29;
SparqlParser.RULE_constructTemplate = 30;
SparqlParser.RULE_constructTriples = 31;
SparqlParser.RULE_triplesSameSubject = 32;
SparqlParser.RULE_propertyListNotEmpty = 33;
SparqlParser.RULE_propertyList = 34;
SparqlParser.RULE_objectList = 35;
SparqlParser.RULE_object = 36;
SparqlParser.RULE_verb = 37;
SparqlParser.RULE_triplesNode = 38;
SparqlParser.RULE_blankNodePropertyList = 39;
SparqlParser.RULE_collection = 40;
SparqlParser.RULE_graphNode = 41;
SparqlParser.RULE_varOrTerm = 42;
SparqlParser.RULE_varOrIRIref = 43;
SparqlParser.RULE_var = 44;
SparqlParser.RULE_graphTerm = 45;
SparqlParser.RULE_expression = 46;
SparqlParser.RULE_conditionalOrExpression = 47;
SparqlParser.RULE_conditionalAndExpression = 48;
SparqlParser.RULE_valueLogical = 49;
SparqlParser.RULE_relationalExpression = 50;
SparqlParser.RULE_numericExpression = 51;
SparqlParser.RULE_additiveExpression = 52;
SparqlParser.RULE_multiplicativeExpression = 53;
SparqlParser.RULE_unaryExpression = 54;
SparqlParser.RULE_primaryExpression = 55;
SparqlParser.RULE_brackettedExpression = 56;
SparqlParser.RULE_builtInCall = 57;
SparqlParser.RULE_regexExpression = 58;
SparqlParser.RULE_iriRefOrFunction = 59;
SparqlParser.RULE_rdfLiteral = 60;
SparqlParser.RULE_numericLiteral = 61;
SparqlParser.RULE_numericLiteralUnsigned = 62;
SparqlParser.RULE_numericLiteralPositive = 63;
SparqlParser.RULE_numericLiteralNegative = 64;
SparqlParser.RULE_booleanLiteral = 65;
SparqlParser.RULE_string = 66;
SparqlParser.RULE_iriRef = 67;
SparqlParser.RULE_prefixedName = 68;
SparqlParser.RULE_blankNode = 69;

function QueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_query;
    return this;
}

QueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QueryContext.prototype.constructor = QueryContext;

QueryContext.prototype.prologue = function() {
    return this.getTypedRuleContext(PrologueContext,0);
};

QueryContext.prototype.EOF = function() {
    return this.getToken(SparqlParser.EOF, 0);
};

QueryContext.prototype.selectQuery = function() {
    return this.getTypedRuleContext(SelectQueryContext,0);
};

QueryContext.prototype.constructQuery = function() {
    return this.getTypedRuleContext(ConstructQueryContext,0);
};

QueryContext.prototype.describeQuery = function() {
    return this.getTypedRuleContext(DescribeQueryContext,0);
};

QueryContext.prototype.askQuery = function() {
    return this.getTypedRuleContext(AskQueryContext,0);
};

QueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterQuery(this);
	}
};

QueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitQuery(this);
	}
};




SparqlParser.QueryContext = QueryContext;

SparqlParser.prototype.query = function() {

    var localctx = new QueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SparqlParser.RULE_query);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.prologue();
        this.state = 145;
        switch(this._input.LA(1)) {
        case SparqlParser.T__2:
            this.state = 141;
            this.selectQuery();
            break;
        case SparqlParser.T__6:
            this.state = 142;
            this.constructQuery();
            break;
        case SparqlParser.T__7:
            this.state = 143;
            this.describeQuery();
            break;
        case SparqlParser.T__8:
            this.state = 144;
            this.askQuery();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 147;
        this.match(SparqlParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrologueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_prologue;
    return this;
}

PrologueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrologueContext.prototype.constructor = PrologueContext;

PrologueContext.prototype.baseDecl = function() {
    return this.getTypedRuleContext(BaseDeclContext,0);
};

PrologueContext.prototype.prefixDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PrefixDeclContext);
    } else {
        return this.getTypedRuleContext(PrefixDeclContext,i);
    }
};

PrologueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterPrologue(this);
	}
};

PrologueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitPrologue(this);
	}
};




SparqlParser.PrologueContext = PrologueContext;

SparqlParser.prototype.prologue = function() {

    var localctx = new PrologueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SparqlParser.RULE_prologue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        _la = this._input.LA(1);
        if(_la===SparqlParser.T__0) {
            this.state = 149;
            this.baseDecl();
        }

        this.state = 155;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SparqlParser.T__1) {
            this.state = 152;
            this.prefixDecl();
            this.state = 157;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BaseDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_baseDecl;
    return this;
}

BaseDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BaseDeclContext.prototype.constructor = BaseDeclContext;

BaseDeclContext.prototype.IRI_REF = function() {
    return this.getToken(SparqlParser.IRI_REF, 0);
};

BaseDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterBaseDecl(this);
	}
};

BaseDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitBaseDecl(this);
	}
};




SparqlParser.BaseDeclContext = BaseDeclContext;

SparqlParser.prototype.baseDecl = function() {

    var localctx = new BaseDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SparqlParser.RULE_baseDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.match(SparqlParser.T__0);
        this.state = 159;
        this.match(SparqlParser.IRI_REF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrefixDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_prefixDecl;
    return this;
}

PrefixDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrefixDeclContext.prototype.constructor = PrefixDeclContext;

PrefixDeclContext.prototype.PNAME_NS = function() {
    return this.getToken(SparqlParser.PNAME_NS, 0);
};

PrefixDeclContext.prototype.IRI_REF = function() {
    return this.getToken(SparqlParser.IRI_REF, 0);
};

PrefixDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterPrefixDecl(this);
	}
};

PrefixDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitPrefixDecl(this);
	}
};




SparqlParser.PrefixDeclContext = PrefixDeclContext;

SparqlParser.prototype.prefixDecl = function() {

    var localctx = new PrefixDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SparqlParser.RULE_prefixDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        this.match(SparqlParser.T__1);
        this.state = 162;
        this.match(SparqlParser.PNAME_NS);
        this.state = 163;
        this.match(SparqlParser.IRI_REF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SelectQueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_selectQuery;
    return this;
}

SelectQueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectQueryContext.prototype.constructor = SelectQueryContext;

SelectQueryContext.prototype.whereClause = function() {
    return this.getTypedRuleContext(WhereClauseContext,0);
};

SelectQueryContext.prototype.solutionModifier = function() {
    return this.getTypedRuleContext(SolutionModifierContext,0);
};

SelectQueryContext.prototype.datasetClause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DatasetClauseContext);
    } else {
        return this.getTypedRuleContext(DatasetClauseContext,i);
    }
};

SelectQueryContext.prototype.var = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarContext);
    } else {
        return this.getTypedRuleContext(VarContext,i);
    }
};

SelectQueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterSelectQuery(this);
	}
};

SelectQueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitSelectQuery(this);
	}
};




SparqlParser.SelectQueryContext = SelectQueryContext;

SparqlParser.prototype.selectQuery = function() {

    var localctx = new SelectQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SparqlParser.RULE_selectQuery);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this.match(SparqlParser.T__2);
        this.state = 167;
        _la = this._input.LA(1);
        if(_la===SparqlParser.T__3 || _la===SparqlParser.T__4) {
            this.state = 166;
            _la = this._input.LA(1);
            if(!(_la===SparqlParser.T__3 || _la===SparqlParser.T__4)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
        }

        this.state = 175;
        switch(this._input.LA(1)) {
        case SparqlParser.VAR1:
        case SparqlParser.VAR2:
            this.state = 170; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 169;
                this.var();
                this.state = 172; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===SparqlParser.VAR1 || _la===SparqlParser.VAR2);
            break;
        case SparqlParser.T__5:
            this.state = 174;
            this.match(SparqlParser.T__5);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 180;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SparqlParser.T__9) {
            this.state = 177;
            this.datasetClause();
            this.state = 182;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 183;
        this.whereClause();
        this.state = 184;
        this.solutionModifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstructQueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_constructQuery;
    return this;
}

ConstructQueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstructQueryContext.prototype.constructor = ConstructQueryContext;

ConstructQueryContext.prototype.constructTemplate = function() {
    return this.getTypedRuleContext(ConstructTemplateContext,0);
};

ConstructQueryContext.prototype.whereClause = function() {
    return this.getTypedRuleContext(WhereClauseContext,0);
};

ConstructQueryContext.prototype.solutionModifier = function() {
    return this.getTypedRuleContext(SolutionModifierContext,0);
};

ConstructQueryContext.prototype.datasetClause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DatasetClauseContext);
    } else {
        return this.getTypedRuleContext(DatasetClauseContext,i);
    }
};

ConstructQueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterConstructQuery(this);
	}
};

ConstructQueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitConstructQuery(this);
	}
};




SparqlParser.ConstructQueryContext = ConstructQueryContext;

SparqlParser.prototype.constructQuery = function() {

    var localctx = new ConstructQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SparqlParser.RULE_constructQuery);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.match(SparqlParser.T__6);
        this.state = 187;
        this.constructTemplate();
        this.state = 191;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SparqlParser.T__9) {
            this.state = 188;
            this.datasetClause();
            this.state = 193;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 194;
        this.whereClause();
        this.state = 195;
        this.solutionModifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DescribeQueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_describeQuery;
    return this;
}

DescribeQueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DescribeQueryContext.prototype.constructor = DescribeQueryContext;

DescribeQueryContext.prototype.solutionModifier = function() {
    return this.getTypedRuleContext(SolutionModifierContext,0);
};

DescribeQueryContext.prototype.datasetClause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DatasetClauseContext);
    } else {
        return this.getTypedRuleContext(DatasetClauseContext,i);
    }
};

DescribeQueryContext.prototype.whereClause = function() {
    return this.getTypedRuleContext(WhereClauseContext,0);
};

DescribeQueryContext.prototype.varOrIRIref = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarOrIRIrefContext);
    } else {
        return this.getTypedRuleContext(VarOrIRIrefContext,i);
    }
};

DescribeQueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterDescribeQuery(this);
	}
};

DescribeQueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitDescribeQuery(this);
	}
};




SparqlParser.DescribeQueryContext = DescribeQueryContext;

SparqlParser.prototype.describeQuery = function() {

    var localctx = new DescribeQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SparqlParser.RULE_describeQuery);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.match(SparqlParser.T__7);
        this.state = 204;
        switch(this._input.LA(1)) {
        case SparqlParser.IRI_REF:
        case SparqlParser.PNAME_NS:
        case SparqlParser.PNAME_LN:
        case SparqlParser.VAR1:
        case SparqlParser.VAR2:
            this.state = 199; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 198;
                this.varOrIRIref();
                this.state = 201; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(((((_la - 60)) & ~0x1f) == 0 && ((1 << (_la - 60)) & ((1 << (SparqlParser.IRI_REF - 60)) | (1 << (SparqlParser.PNAME_NS - 60)) | (1 << (SparqlParser.PNAME_LN - 60)) | (1 << (SparqlParser.VAR1 - 60)) | (1 << (SparqlParser.VAR2 - 60)))) !== 0));
            break;
        case SparqlParser.T__5:
            this.state = 203;
            this.match(SparqlParser.T__5);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 209;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SparqlParser.T__9) {
            this.state = 206;
            this.datasetClause();
            this.state = 211;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 213;
        _la = this._input.LA(1);
        if(_la===SparqlParser.T__12 || _la===SparqlParser.T__19) {
            this.state = 212;
            this.whereClause();
        }

        this.state = 215;
        this.solutionModifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AskQueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_askQuery;
    return this;
}

AskQueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AskQueryContext.prototype.constructor = AskQueryContext;

AskQueryContext.prototype.whereClause = function() {
    return this.getTypedRuleContext(WhereClauseContext,0);
};

AskQueryContext.prototype.datasetClause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DatasetClauseContext);
    } else {
        return this.getTypedRuleContext(DatasetClauseContext,i);
    }
};

AskQueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterAskQuery(this);
	}
};

AskQueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitAskQuery(this);
	}
};




SparqlParser.AskQueryContext = AskQueryContext;

SparqlParser.prototype.askQuery = function() {

    var localctx = new AskQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SparqlParser.RULE_askQuery);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 217;
        this.match(SparqlParser.T__8);
        this.state = 221;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SparqlParser.T__9) {
            this.state = 218;
            this.datasetClause();
            this.state = 223;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 224;
        this.whereClause();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DatasetClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_datasetClause;
    return this;
}

DatasetClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DatasetClauseContext.prototype.constructor = DatasetClauseContext;

DatasetClauseContext.prototype.defaultGraphClause = function() {
    return this.getTypedRuleContext(DefaultGraphClauseContext,0);
};

DatasetClauseContext.prototype.namedGraphClause = function() {
    return this.getTypedRuleContext(NamedGraphClauseContext,0);
};

DatasetClauseContext.prototype.anzoDatasetClause = function() {
    return this.getTypedRuleContext(AnzoDatasetClauseContext,0);
};

DatasetClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterDatasetClause(this);
	}
};

DatasetClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitDatasetClause(this);
	}
};




SparqlParser.DatasetClauseContext = DatasetClauseContext;

SparqlParser.prototype.datasetClause = function() {

    var localctx = new DatasetClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SparqlParser.RULE_datasetClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 226;
        this.match(SparqlParser.T__9);
        this.state = 230;
        switch(this._input.LA(1)) {
        case SparqlParser.IRI_REF:
        case SparqlParser.PNAME_NS:
        case SparqlParser.PNAME_LN:
            this.state = 227;
            this.defaultGraphClause();
            break;
        case SparqlParser.T__11:
            this.state = 228;
            this.namedGraphClause();
            break;
        case SparqlParser.T__10:
            this.state = 229;
            this.anzoDatasetClause();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DefaultGraphClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_defaultGraphClause;
    return this;
}

DefaultGraphClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefaultGraphClauseContext.prototype.constructor = DefaultGraphClauseContext;

DefaultGraphClauseContext.prototype.sourceSelector = function() {
    return this.getTypedRuleContext(SourceSelectorContext,0);
};

DefaultGraphClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterDefaultGraphClause(this);
	}
};

DefaultGraphClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitDefaultGraphClause(this);
	}
};




SparqlParser.DefaultGraphClauseContext = DefaultGraphClauseContext;

SparqlParser.prototype.defaultGraphClause = function() {

    var localctx = new DefaultGraphClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SparqlParser.RULE_defaultGraphClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232;
        this.sourceSelector();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AnzoDatasetClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_anzoDatasetClause;
    return this;
}

AnzoDatasetClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnzoDatasetClauseContext.prototype.constructor = AnzoDatasetClauseContext;

AnzoDatasetClauseContext.prototype.sourceSelector = function() {
    return this.getTypedRuleContext(SourceSelectorContext,0);
};

AnzoDatasetClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterAnzoDatasetClause(this);
	}
};

AnzoDatasetClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitAnzoDatasetClause(this);
	}
};




SparqlParser.AnzoDatasetClauseContext = AnzoDatasetClauseContext;

SparqlParser.prototype.anzoDatasetClause = function() {

    var localctx = new AnzoDatasetClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SparqlParser.RULE_anzoDatasetClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 234;
        this.match(SparqlParser.T__10);
        this.state = 235;
        this.sourceSelector();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamedGraphClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_namedGraphClause;
    return this;
}

NamedGraphClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamedGraphClauseContext.prototype.constructor = NamedGraphClauseContext;

NamedGraphClauseContext.prototype.sourceSelector = function() {
    return this.getTypedRuleContext(SourceSelectorContext,0);
};

NamedGraphClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterNamedGraphClause(this);
	}
};

NamedGraphClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitNamedGraphClause(this);
	}
};




SparqlParser.NamedGraphClauseContext = NamedGraphClauseContext;

SparqlParser.prototype.namedGraphClause = function() {

    var localctx = new NamedGraphClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SparqlParser.RULE_namedGraphClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        this.match(SparqlParser.T__11);
        this.state = 238;
        this.sourceSelector();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SourceSelectorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_sourceSelector;
    return this;
}

SourceSelectorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceSelectorContext.prototype.constructor = SourceSelectorContext;

SourceSelectorContext.prototype.iriRef = function() {
    return this.getTypedRuleContext(IriRefContext,0);
};

SourceSelectorContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterSourceSelector(this);
	}
};

SourceSelectorContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitSourceSelector(this);
	}
};




SparqlParser.SourceSelectorContext = SourceSelectorContext;

SparqlParser.prototype.sourceSelector = function() {

    var localctx = new SourceSelectorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SparqlParser.RULE_sourceSelector);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.iriRef();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhereClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_whereClause;
    return this;
}

WhereClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhereClauseContext.prototype.constructor = WhereClauseContext;

WhereClauseContext.prototype.groupGraphPattern = function() {
    return this.getTypedRuleContext(GroupGraphPatternContext,0);
};

WhereClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterWhereClause(this);
	}
};

WhereClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitWhereClause(this);
	}
};




SparqlParser.WhereClauseContext = WhereClauseContext;

SparqlParser.prototype.whereClause = function() {

    var localctx = new WhereClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SparqlParser.RULE_whereClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        _la = this._input.LA(1);
        if(_la===SparqlParser.T__12) {
            this.state = 242;
            this.match(SparqlParser.T__12);
        }

        this.state = 245;
        this.groupGraphPattern();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SolutionModifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_solutionModifier;
    return this;
}

SolutionModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SolutionModifierContext.prototype.constructor = SolutionModifierContext;

SolutionModifierContext.prototype.orderClause = function() {
    return this.getTypedRuleContext(OrderClauseContext,0);
};

SolutionModifierContext.prototype.limitOffsetClauses = function() {
    return this.getTypedRuleContext(LimitOffsetClausesContext,0);
};

SolutionModifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterSolutionModifier(this);
	}
};

SolutionModifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitSolutionModifier(this);
	}
};




SparqlParser.SolutionModifierContext = SolutionModifierContext;

SparqlParser.prototype.solutionModifier = function() {

    var localctx = new SolutionModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SparqlParser.RULE_solutionModifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 248;
        _la = this._input.LA(1);
        if(_la===SparqlParser.T__13) {
            this.state = 247;
            this.orderClause();
        }

        this.state = 251;
        _la = this._input.LA(1);
        if(_la===SparqlParser.T__17 || _la===SparqlParser.T__18) {
            this.state = 250;
            this.limitOffsetClauses();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LimitOffsetClausesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_limitOffsetClauses;
    return this;
}

LimitOffsetClausesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LimitOffsetClausesContext.prototype.constructor = LimitOffsetClausesContext;

LimitOffsetClausesContext.prototype.limitClause = function() {
    return this.getTypedRuleContext(LimitClauseContext,0);
};

LimitOffsetClausesContext.prototype.offsetClause = function() {
    return this.getTypedRuleContext(OffsetClauseContext,0);
};

LimitOffsetClausesContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterLimitOffsetClauses(this);
	}
};

LimitOffsetClausesContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitLimitOffsetClauses(this);
	}
};




SparqlParser.LimitOffsetClausesContext = LimitOffsetClausesContext;

SparqlParser.prototype.limitOffsetClauses = function() {

    var localctx = new LimitOffsetClausesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SparqlParser.RULE_limitOffsetClauses);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
        switch(this._input.LA(1)) {
        case SparqlParser.T__17:
            this.state = 253;
            this.limitClause();
            this.state = 255;
            _la = this._input.LA(1);
            if(_la===SparqlParser.T__18) {
                this.state = 254;
                this.offsetClause();
            }

            break;
        case SparqlParser.T__18:
            this.state = 257;
            this.offsetClause();
            this.state = 259;
            _la = this._input.LA(1);
            if(_la===SparqlParser.T__17) {
                this.state = 258;
                this.limitClause();
            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OrderClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_orderClause;
    return this;
}

OrderClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrderClauseContext.prototype.constructor = OrderClauseContext;

OrderClauseContext.prototype.orderCondition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OrderConditionContext);
    } else {
        return this.getTypedRuleContext(OrderConditionContext,i);
    }
};

OrderClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterOrderClause(this);
	}
};

OrderClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitOrderClause(this);
	}
};




SparqlParser.OrderClauseContext = OrderClauseContext;

SparqlParser.prototype.orderClause = function() {

    var localctx = new OrderClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SparqlParser.RULE_orderClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        this.match(SparqlParser.T__13);
        this.state = 264;
        this.match(SparqlParser.T__14);
        this.state = 266; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 265;
            this.orderCondition();
            this.state = 268; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SparqlParser.T__15) | (1 << SparqlParser.T__16) | (1 << SparqlParser.T__26))) !== 0) || ((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (SparqlParser.T__45 - 46)) | (1 << (SparqlParser.T__46 - 46)) | (1 << (SparqlParser.T__47 - 46)) | (1 << (SparqlParser.T__48 - 46)) | (1 << (SparqlParser.T__49 - 46)) | (1 << (SparqlParser.T__50 - 46)) | (1 << (SparqlParser.T__51 - 46)) | (1 << (SparqlParser.T__52 - 46)) | (1 << (SparqlParser.T__53 - 46)) | (1 << (SparqlParser.T__54 - 46)) | (1 << (SparqlParser.T__55 - 46)) | (1 << (SparqlParser.IRI_REF - 46)) | (1 << (SparqlParser.PNAME_NS - 46)) | (1 << (SparqlParser.PNAME_LN - 46)) | (1 << (SparqlParser.VAR1 - 46)) | (1 << (SparqlParser.VAR2 - 46)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OrderConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_orderCondition;
    return this;
}

OrderConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrderConditionContext.prototype.constructor = OrderConditionContext;

OrderConditionContext.prototype.brackettedExpression = function() {
    return this.getTypedRuleContext(BrackettedExpressionContext,0);
};

OrderConditionContext.prototype.constraint = function() {
    return this.getTypedRuleContext(ConstraintContext,0);
};

OrderConditionContext.prototype.var = function() {
    return this.getTypedRuleContext(VarContext,0);
};

OrderConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterOrderCondition(this);
	}
};

OrderConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitOrderCondition(this);
	}
};




SparqlParser.OrderConditionContext = OrderConditionContext;

SparqlParser.prototype.orderCondition = function() {

    var localctx = new OrderConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SparqlParser.RULE_orderCondition);
    var _la = 0; // Token type
    try {
        this.state = 276;
        switch(this._input.LA(1)) {
        case SparqlParser.T__15:
        case SparqlParser.T__16:
            this.enterOuterAlt(localctx, 1);
            this.state = 270;
            _la = this._input.LA(1);
            if(!(_la===SparqlParser.T__15 || _la===SparqlParser.T__16)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 271;
            this.brackettedExpression();
            break;
        case SparqlParser.T__26:
        case SparqlParser.T__45:
        case SparqlParser.T__46:
        case SparqlParser.T__47:
        case SparqlParser.T__48:
        case SparqlParser.T__49:
        case SparqlParser.T__50:
        case SparqlParser.T__51:
        case SparqlParser.T__52:
        case SparqlParser.T__53:
        case SparqlParser.T__54:
        case SparqlParser.T__55:
        case SparqlParser.IRI_REF:
        case SparqlParser.PNAME_NS:
        case SparqlParser.PNAME_LN:
        case SparqlParser.VAR1:
        case SparqlParser.VAR2:
            this.enterOuterAlt(localctx, 2);
            this.state = 274;
            switch(this._input.LA(1)) {
            case SparqlParser.T__26:
            case SparqlParser.T__45:
            case SparqlParser.T__46:
            case SparqlParser.T__47:
            case SparqlParser.T__48:
            case SparqlParser.T__49:
            case SparqlParser.T__50:
            case SparqlParser.T__51:
            case SparqlParser.T__52:
            case SparqlParser.T__53:
            case SparqlParser.T__54:
            case SparqlParser.T__55:
            case SparqlParser.IRI_REF:
            case SparqlParser.PNAME_NS:
            case SparqlParser.PNAME_LN:
                this.state = 272;
                this.constraint();
                break;
            case SparqlParser.VAR1:
            case SparqlParser.VAR2:
                this.state = 273;
                this.var();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LimitClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_limitClause;
    return this;
}

LimitClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LimitClauseContext.prototype.constructor = LimitClauseContext;

LimitClauseContext.prototype.INTEGER = function() {
    return this.getToken(SparqlParser.INTEGER, 0);
};

LimitClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterLimitClause(this);
	}
};

LimitClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitLimitClause(this);
	}
};




SparqlParser.LimitClauseContext = LimitClauseContext;

SparqlParser.prototype.limitClause = function() {

    var localctx = new LimitClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SparqlParser.RULE_limitClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 278;
        this.match(SparqlParser.T__17);
        this.state = 279;
        this.match(SparqlParser.INTEGER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OffsetClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_offsetClause;
    return this;
}

OffsetClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OffsetClauseContext.prototype.constructor = OffsetClauseContext;

OffsetClauseContext.prototype.INTEGER = function() {
    return this.getToken(SparqlParser.INTEGER, 0);
};

OffsetClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterOffsetClause(this);
	}
};

OffsetClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitOffsetClause(this);
	}
};




SparqlParser.OffsetClauseContext = OffsetClauseContext;

SparqlParser.prototype.offsetClause = function() {

    var localctx = new OffsetClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SparqlParser.RULE_offsetClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 281;
        this.match(SparqlParser.T__18);
        this.state = 282;
        this.match(SparqlParser.INTEGER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GroupGraphPatternContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_groupGraphPattern;
    return this;
}

GroupGraphPatternContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupGraphPatternContext.prototype.constructor = GroupGraphPatternContext;

GroupGraphPatternContext.prototype.triplesBlock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TriplesBlockContext);
    } else {
        return this.getTypedRuleContext(TriplesBlockContext,i);
    }
};

GroupGraphPatternContext.prototype.graphPatternNotTriples = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(GraphPatternNotTriplesContext);
    } else {
        return this.getTypedRuleContext(GraphPatternNotTriplesContext,i);
    }
};

GroupGraphPatternContext.prototype.filter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FilterContext);
    } else {
        return this.getTypedRuleContext(FilterContext,i);
    }
};

GroupGraphPatternContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterGroupGraphPattern(this);
	}
};

GroupGraphPatternContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitGroupGraphPattern(this);
	}
};




SparqlParser.GroupGraphPatternContext = GroupGraphPatternContext;

SparqlParser.prototype.groupGraphPattern = function() {

    var localctx = new GroupGraphPatternContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SparqlParser.RULE_groupGraphPattern);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
        this.match(SparqlParser.T__19);
        this.state = 286;
        _la = this._input.LA(1);
        if(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (SparqlParser.T__26 - 27)) | (1 << (SparqlParser.T__31 - 27)) | (1 << (SparqlParser.T__57 - 27)))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (SparqlParser.T__58 - 59)) | (1 << (SparqlParser.IRI_REF - 59)) | (1 << (SparqlParser.PNAME_NS - 59)) | (1 << (SparqlParser.PNAME_LN - 59)) | (1 << (SparqlParser.BLANK_NODE_LABEL - 59)) | (1 << (SparqlParser.VAR1 - 59)) | (1 << (SparqlParser.VAR2 - 59)) | (1 << (SparqlParser.INTEGER - 59)) | (1 << (SparqlParser.DECIMAL - 59)) | (1 << (SparqlParser.DOUBLE - 59)) | (1 << (SparqlParser.INTEGER_POSITIVE - 59)) | (1 << (SparqlParser.DECIMAL_POSITIVE - 59)) | (1 << (SparqlParser.DOUBLE_POSITIVE - 59)) | (1 << (SparqlParser.INTEGER_NEGATIVE - 59)) | (1 << (SparqlParser.DECIMAL_NEGATIVE - 59)) | (1 << (SparqlParser.DOUBLE_NEGATIVE - 59)) | (1 << (SparqlParser.STRING_LITERAL1 - 59)) | (1 << (SparqlParser.STRING_LITERAL2 - 59)) | (1 << (SparqlParser.NIL - 59)) | (1 << (SparqlParser.ANON - 59)))) !== 0)) {
            this.state = 285;
            this.triplesBlock();
        }

        this.state = 300;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SparqlParser.T__19) | (1 << SparqlParser.T__22) | (1 << SparqlParser.T__23) | (1 << SparqlParser.T__25))) !== 0)) {
            this.state = 290;
            switch(this._input.LA(1)) {
            case SparqlParser.T__19:
            case SparqlParser.T__22:
            case SparqlParser.T__23:
                this.state = 288;
                this.graphPatternNotTriples();
                break;
            case SparqlParser.T__25:
                this.state = 289;
                this.filter();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 293;
            _la = this._input.LA(1);
            if(_la===SparqlParser.T__20) {
                this.state = 292;
                this.match(SparqlParser.T__20);
            }

            this.state = 296;
            _la = this._input.LA(1);
            if(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (SparqlParser.T__26 - 27)) | (1 << (SparqlParser.T__31 - 27)) | (1 << (SparqlParser.T__57 - 27)))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (SparqlParser.T__58 - 59)) | (1 << (SparqlParser.IRI_REF - 59)) | (1 << (SparqlParser.PNAME_NS - 59)) | (1 << (SparqlParser.PNAME_LN - 59)) | (1 << (SparqlParser.BLANK_NODE_LABEL - 59)) | (1 << (SparqlParser.VAR1 - 59)) | (1 << (SparqlParser.VAR2 - 59)) | (1 << (SparqlParser.INTEGER - 59)) | (1 << (SparqlParser.DECIMAL - 59)) | (1 << (SparqlParser.DOUBLE - 59)) | (1 << (SparqlParser.INTEGER_POSITIVE - 59)) | (1 << (SparqlParser.DECIMAL_POSITIVE - 59)) | (1 << (SparqlParser.DOUBLE_POSITIVE - 59)) | (1 << (SparqlParser.INTEGER_NEGATIVE - 59)) | (1 << (SparqlParser.DECIMAL_NEGATIVE - 59)) | (1 << (SparqlParser.DOUBLE_NEGATIVE - 59)) | (1 << (SparqlParser.STRING_LITERAL1 - 59)) | (1 << (SparqlParser.STRING_LITERAL2 - 59)) | (1 << (SparqlParser.NIL - 59)) | (1 << (SparqlParser.ANON - 59)))) !== 0)) {
                this.state = 295;
                this.triplesBlock();
            }

            this.state = 302;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 303;
        this.match(SparqlParser.T__21);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TriplesBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_triplesBlock;
    return this;
}

TriplesBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TriplesBlockContext.prototype.constructor = TriplesBlockContext;

TriplesBlockContext.prototype.triplesSameSubject = function() {
    return this.getTypedRuleContext(TriplesSameSubjectContext,0);
};

TriplesBlockContext.prototype.triplesBlock = function() {
    return this.getTypedRuleContext(TriplesBlockContext,0);
};

TriplesBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterTriplesBlock(this);
	}
};

TriplesBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitTriplesBlock(this);
	}
};




SparqlParser.TriplesBlockContext = TriplesBlockContext;

SparqlParser.prototype.triplesBlock = function() {

    var localctx = new TriplesBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SparqlParser.RULE_triplesBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 305;
        this.triplesSameSubject();
        this.state = 310;
        _la = this._input.LA(1);
        if(_la===SparqlParser.T__20) {
            this.state = 306;
            this.match(SparqlParser.T__20);
            this.state = 308;
            _la = this._input.LA(1);
            if(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (SparqlParser.T__26 - 27)) | (1 << (SparqlParser.T__31 - 27)) | (1 << (SparqlParser.T__57 - 27)))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (SparqlParser.T__58 - 59)) | (1 << (SparqlParser.IRI_REF - 59)) | (1 << (SparqlParser.PNAME_NS - 59)) | (1 << (SparqlParser.PNAME_LN - 59)) | (1 << (SparqlParser.BLANK_NODE_LABEL - 59)) | (1 << (SparqlParser.VAR1 - 59)) | (1 << (SparqlParser.VAR2 - 59)) | (1 << (SparqlParser.INTEGER - 59)) | (1 << (SparqlParser.DECIMAL - 59)) | (1 << (SparqlParser.DOUBLE - 59)) | (1 << (SparqlParser.INTEGER_POSITIVE - 59)) | (1 << (SparqlParser.DECIMAL_POSITIVE - 59)) | (1 << (SparqlParser.DOUBLE_POSITIVE - 59)) | (1 << (SparqlParser.INTEGER_NEGATIVE - 59)) | (1 << (SparqlParser.DECIMAL_NEGATIVE - 59)) | (1 << (SparqlParser.DOUBLE_NEGATIVE - 59)) | (1 << (SparqlParser.STRING_LITERAL1 - 59)) | (1 << (SparqlParser.STRING_LITERAL2 - 59)) | (1 << (SparqlParser.NIL - 59)) | (1 << (SparqlParser.ANON - 59)))) !== 0)) {
                this.state = 307;
                this.triplesBlock();
            }

        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GraphPatternNotTriplesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_graphPatternNotTriples;
    return this;
}

GraphPatternNotTriplesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GraphPatternNotTriplesContext.prototype.constructor = GraphPatternNotTriplesContext;

GraphPatternNotTriplesContext.prototype.optionalGraphPattern = function() {
    return this.getTypedRuleContext(OptionalGraphPatternContext,0);
};

GraphPatternNotTriplesContext.prototype.groupOrUnionGraphPattern = function() {
    return this.getTypedRuleContext(GroupOrUnionGraphPatternContext,0);
};

GraphPatternNotTriplesContext.prototype.graphGraphPattern = function() {
    return this.getTypedRuleContext(GraphGraphPatternContext,0);
};

GraphPatternNotTriplesContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterGraphPatternNotTriples(this);
	}
};

GraphPatternNotTriplesContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitGraphPatternNotTriples(this);
	}
};




SparqlParser.GraphPatternNotTriplesContext = GraphPatternNotTriplesContext;

SparqlParser.prototype.graphPatternNotTriples = function() {

    var localctx = new GraphPatternNotTriplesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SparqlParser.RULE_graphPatternNotTriples);
    try {
        this.state = 315;
        switch(this._input.LA(1)) {
        case SparqlParser.T__22:
            this.enterOuterAlt(localctx, 1);
            this.state = 312;
            this.optionalGraphPattern();
            break;
        case SparqlParser.T__19:
            this.enterOuterAlt(localctx, 2);
            this.state = 313;
            this.groupOrUnionGraphPattern();
            break;
        case SparqlParser.T__23:
            this.enterOuterAlt(localctx, 3);
            this.state = 314;
            this.graphGraphPattern();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OptionalGraphPatternContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_optionalGraphPattern;
    return this;
}

OptionalGraphPatternContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OptionalGraphPatternContext.prototype.constructor = OptionalGraphPatternContext;

OptionalGraphPatternContext.prototype.groupGraphPattern = function() {
    return this.getTypedRuleContext(GroupGraphPatternContext,0);
};

OptionalGraphPatternContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterOptionalGraphPattern(this);
	}
};

OptionalGraphPatternContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitOptionalGraphPattern(this);
	}
};




SparqlParser.OptionalGraphPatternContext = OptionalGraphPatternContext;

SparqlParser.prototype.optionalGraphPattern = function() {

    var localctx = new OptionalGraphPatternContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SparqlParser.RULE_optionalGraphPattern);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 317;
        this.match(SparqlParser.T__22);
        this.state = 318;
        this.groupGraphPattern();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GraphGraphPatternContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_graphGraphPattern;
    return this;
}

GraphGraphPatternContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GraphGraphPatternContext.prototype.constructor = GraphGraphPatternContext;

GraphGraphPatternContext.prototype.varOrIRIref = function() {
    return this.getTypedRuleContext(VarOrIRIrefContext,0);
};

GraphGraphPatternContext.prototype.groupGraphPattern = function() {
    return this.getTypedRuleContext(GroupGraphPatternContext,0);
};

GraphGraphPatternContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterGraphGraphPattern(this);
	}
};

GraphGraphPatternContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitGraphGraphPattern(this);
	}
};




SparqlParser.GraphGraphPatternContext = GraphGraphPatternContext;

SparqlParser.prototype.graphGraphPattern = function() {

    var localctx = new GraphGraphPatternContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SparqlParser.RULE_graphGraphPattern);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 320;
        this.match(SparqlParser.T__23);
        this.state = 321;
        this.varOrIRIref();
        this.state = 322;
        this.groupGraphPattern();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GroupOrUnionGraphPatternContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_groupOrUnionGraphPattern;
    return this;
}

GroupOrUnionGraphPatternContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupOrUnionGraphPatternContext.prototype.constructor = GroupOrUnionGraphPatternContext;

GroupOrUnionGraphPatternContext.prototype.groupGraphPattern = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(GroupGraphPatternContext);
    } else {
        return this.getTypedRuleContext(GroupGraphPatternContext,i);
    }
};

GroupOrUnionGraphPatternContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterGroupOrUnionGraphPattern(this);
	}
};

GroupOrUnionGraphPatternContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitGroupOrUnionGraphPattern(this);
	}
};




SparqlParser.GroupOrUnionGraphPatternContext = GroupOrUnionGraphPatternContext;

SparqlParser.prototype.groupOrUnionGraphPattern = function() {

    var localctx = new GroupOrUnionGraphPatternContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, SparqlParser.RULE_groupOrUnionGraphPattern);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 324;
        this.groupGraphPattern();
        this.state = 329;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SparqlParser.T__24) {
            this.state = 325;
            this.match(SparqlParser.T__24);
            this.state = 326;
            this.groupGraphPattern();
            this.state = 331;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FilterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_filter;
    return this;
}

FilterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FilterContext.prototype.constructor = FilterContext;

FilterContext.prototype.constraint = function() {
    return this.getTypedRuleContext(ConstraintContext,0);
};

FilterContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterFilter(this);
	}
};

FilterContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitFilter(this);
	}
};




SparqlParser.FilterContext = FilterContext;

SparqlParser.prototype.filter = function() {

    var localctx = new FilterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, SparqlParser.RULE_filter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 332;
        this.match(SparqlParser.T__25);
        this.state = 333;
        this.constraint();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_constraint;
    return this;
}

ConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstraintContext.prototype.constructor = ConstraintContext;

ConstraintContext.prototype.brackettedExpression = function() {
    return this.getTypedRuleContext(BrackettedExpressionContext,0);
};

ConstraintContext.prototype.builtInCall = function() {
    return this.getTypedRuleContext(BuiltInCallContext,0);
};

ConstraintContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

ConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterConstraint(this);
	}
};

ConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitConstraint(this);
	}
};




SparqlParser.ConstraintContext = ConstraintContext;

SparqlParser.prototype.constraint = function() {

    var localctx = new ConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, SparqlParser.RULE_constraint);
    try {
        this.state = 338;
        switch(this._input.LA(1)) {
        case SparqlParser.T__26:
            this.enterOuterAlt(localctx, 1);
            this.state = 335;
            this.brackettedExpression();
            break;
        case SparqlParser.T__45:
        case SparqlParser.T__46:
        case SparqlParser.T__47:
        case SparqlParser.T__48:
        case SparqlParser.T__49:
        case SparqlParser.T__50:
        case SparqlParser.T__51:
        case SparqlParser.T__52:
        case SparqlParser.T__53:
        case SparqlParser.T__54:
        case SparqlParser.T__55:
            this.enterOuterAlt(localctx, 2);
            this.state = 336;
            this.builtInCall();
            break;
        case SparqlParser.IRI_REF:
        case SparqlParser.PNAME_NS:
        case SparqlParser.PNAME_LN:
            this.enterOuterAlt(localctx, 3);
            this.state = 337;
            this.functionCall();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.iriRef = function() {
    return this.getTypedRuleContext(IriRefContext,0);
};

FunctionCallContext.prototype.argList = function() {
    return this.getTypedRuleContext(ArgListContext,0);
};

FunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterFunctionCall(this);
	}
};

FunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitFunctionCall(this);
	}
};




SparqlParser.FunctionCallContext = FunctionCallContext;

SparqlParser.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, SparqlParser.RULE_functionCall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 340;
        this.iriRef();
        this.state = 341;
        this.argList();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_argList;
    return this;
}

ArgListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgListContext.prototype.constructor = ArgListContext;

ArgListContext.prototype.NIL = function() {
    return this.getToken(SparqlParser.NIL, 0);
};

ArgListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ArgListContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterArgList(this);
	}
};

ArgListContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitArgList(this);
	}
};




SparqlParser.ArgListContext = ArgListContext;

SparqlParser.prototype.argList = function() {

    var localctx = new ArgListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, SparqlParser.RULE_argList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 355;
        switch(this._input.LA(1)) {
        case SparqlParser.NIL:
            this.state = 343;
            this.match(SparqlParser.NIL);
            break;
        case SparqlParser.T__26:
            this.state = 344;
            this.match(SparqlParser.T__26);
            this.state = 345;
            this.expression();
            this.state = 350;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SparqlParser.T__27) {
                this.state = 346;
                this.match(SparqlParser.T__27);
                this.state = 347;
                this.expression();
                this.state = 352;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 353;
            this.match(SparqlParser.T__28);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstructTemplateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_constructTemplate;
    return this;
}

ConstructTemplateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstructTemplateContext.prototype.constructor = ConstructTemplateContext;

ConstructTemplateContext.prototype.constructTriples = function() {
    return this.getTypedRuleContext(ConstructTriplesContext,0);
};

ConstructTemplateContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterConstructTemplate(this);
	}
};

ConstructTemplateContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitConstructTemplate(this);
	}
};




SparqlParser.ConstructTemplateContext = ConstructTemplateContext;

SparqlParser.prototype.constructTemplate = function() {

    var localctx = new ConstructTemplateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, SparqlParser.RULE_constructTemplate);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 357;
        this.match(SparqlParser.T__19);
        this.state = 359;
        _la = this._input.LA(1);
        if(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (SparqlParser.T__26 - 27)) | (1 << (SparqlParser.T__31 - 27)) | (1 << (SparqlParser.T__57 - 27)))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (SparqlParser.T__58 - 59)) | (1 << (SparqlParser.IRI_REF - 59)) | (1 << (SparqlParser.PNAME_NS - 59)) | (1 << (SparqlParser.PNAME_LN - 59)) | (1 << (SparqlParser.BLANK_NODE_LABEL - 59)) | (1 << (SparqlParser.VAR1 - 59)) | (1 << (SparqlParser.VAR2 - 59)) | (1 << (SparqlParser.INTEGER - 59)) | (1 << (SparqlParser.DECIMAL - 59)) | (1 << (SparqlParser.DOUBLE - 59)) | (1 << (SparqlParser.INTEGER_POSITIVE - 59)) | (1 << (SparqlParser.DECIMAL_POSITIVE - 59)) | (1 << (SparqlParser.DOUBLE_POSITIVE - 59)) | (1 << (SparqlParser.INTEGER_NEGATIVE - 59)) | (1 << (SparqlParser.DECIMAL_NEGATIVE - 59)) | (1 << (SparqlParser.DOUBLE_NEGATIVE - 59)) | (1 << (SparqlParser.STRING_LITERAL1 - 59)) | (1 << (SparqlParser.STRING_LITERAL2 - 59)) | (1 << (SparqlParser.NIL - 59)) | (1 << (SparqlParser.ANON - 59)))) !== 0)) {
            this.state = 358;
            this.constructTriples();
        }

        this.state = 361;
        this.match(SparqlParser.T__21);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstructTriplesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_constructTriples;
    return this;
}

ConstructTriplesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstructTriplesContext.prototype.constructor = ConstructTriplesContext;

ConstructTriplesContext.prototype.triplesSameSubject = function() {
    return this.getTypedRuleContext(TriplesSameSubjectContext,0);
};

ConstructTriplesContext.prototype.constructTriples = function() {
    return this.getTypedRuleContext(ConstructTriplesContext,0);
};

ConstructTriplesContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterConstructTriples(this);
	}
};

ConstructTriplesContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitConstructTriples(this);
	}
};




SparqlParser.ConstructTriplesContext = ConstructTriplesContext;

SparqlParser.prototype.constructTriples = function() {

    var localctx = new ConstructTriplesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, SparqlParser.RULE_constructTriples);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 363;
        this.triplesSameSubject();
        this.state = 368;
        _la = this._input.LA(1);
        if(_la===SparqlParser.T__20) {
            this.state = 364;
            this.match(SparqlParser.T__20);
            this.state = 366;
            _la = this._input.LA(1);
            if(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (SparqlParser.T__26 - 27)) | (1 << (SparqlParser.T__31 - 27)) | (1 << (SparqlParser.T__57 - 27)))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (SparqlParser.T__58 - 59)) | (1 << (SparqlParser.IRI_REF - 59)) | (1 << (SparqlParser.PNAME_NS - 59)) | (1 << (SparqlParser.PNAME_LN - 59)) | (1 << (SparqlParser.BLANK_NODE_LABEL - 59)) | (1 << (SparqlParser.VAR1 - 59)) | (1 << (SparqlParser.VAR2 - 59)) | (1 << (SparqlParser.INTEGER - 59)) | (1 << (SparqlParser.DECIMAL - 59)) | (1 << (SparqlParser.DOUBLE - 59)) | (1 << (SparqlParser.INTEGER_POSITIVE - 59)) | (1 << (SparqlParser.DECIMAL_POSITIVE - 59)) | (1 << (SparqlParser.DOUBLE_POSITIVE - 59)) | (1 << (SparqlParser.INTEGER_NEGATIVE - 59)) | (1 << (SparqlParser.DECIMAL_NEGATIVE - 59)) | (1 << (SparqlParser.DOUBLE_NEGATIVE - 59)) | (1 << (SparqlParser.STRING_LITERAL1 - 59)) | (1 << (SparqlParser.STRING_LITERAL2 - 59)) | (1 << (SparqlParser.NIL - 59)) | (1 << (SparqlParser.ANON - 59)))) !== 0)) {
                this.state = 365;
                this.constructTriples();
            }

        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TriplesSameSubjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_triplesSameSubject;
    return this;
}

TriplesSameSubjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TriplesSameSubjectContext.prototype.constructor = TriplesSameSubjectContext;

TriplesSameSubjectContext.prototype.varOrTerm = function() {
    return this.getTypedRuleContext(VarOrTermContext,0);
};

TriplesSameSubjectContext.prototype.propertyListNotEmpty = function() {
    return this.getTypedRuleContext(PropertyListNotEmptyContext,0);
};

TriplesSameSubjectContext.prototype.triplesNode = function() {
    return this.getTypedRuleContext(TriplesNodeContext,0);
};

TriplesSameSubjectContext.prototype.propertyList = function() {
    return this.getTypedRuleContext(PropertyListContext,0);
};

TriplesSameSubjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterTriplesSameSubject(this);
	}
};

TriplesSameSubjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitTriplesSameSubject(this);
	}
};




SparqlParser.TriplesSameSubjectContext = TriplesSameSubjectContext;

SparqlParser.prototype.triplesSameSubject = function() {

    var localctx = new TriplesSameSubjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, SparqlParser.RULE_triplesSameSubject);
    try {
        this.state = 376;
        switch(this._input.LA(1)) {
        case SparqlParser.T__57:
        case SparqlParser.T__58:
        case SparqlParser.IRI_REF:
        case SparqlParser.PNAME_NS:
        case SparqlParser.PNAME_LN:
        case SparqlParser.BLANK_NODE_LABEL:
        case SparqlParser.VAR1:
        case SparqlParser.VAR2:
        case SparqlParser.INTEGER:
        case SparqlParser.DECIMAL:
        case SparqlParser.DOUBLE:
        case SparqlParser.INTEGER_POSITIVE:
        case SparqlParser.DECIMAL_POSITIVE:
        case SparqlParser.DOUBLE_POSITIVE:
        case SparqlParser.INTEGER_NEGATIVE:
        case SparqlParser.DECIMAL_NEGATIVE:
        case SparqlParser.DOUBLE_NEGATIVE:
        case SparqlParser.STRING_LITERAL1:
        case SparqlParser.STRING_LITERAL2:
        case SparqlParser.NIL:
        case SparqlParser.ANON:
            this.enterOuterAlt(localctx, 1);
            this.state = 370;
            this.varOrTerm();
            this.state = 371;
            this.propertyListNotEmpty();
            break;
        case SparqlParser.T__26:
        case SparqlParser.T__31:
            this.enterOuterAlt(localctx, 2);
            this.state = 373;
            this.triplesNode();
            this.state = 374;
            this.propertyList();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyListNotEmptyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_propertyListNotEmpty;
    return this;
}

PropertyListNotEmptyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyListNotEmptyContext.prototype.constructor = PropertyListNotEmptyContext;

PropertyListNotEmptyContext.prototype.verb = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VerbContext);
    } else {
        return this.getTypedRuleContext(VerbContext,i);
    }
};

PropertyListNotEmptyContext.prototype.objectList = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObjectListContext);
    } else {
        return this.getTypedRuleContext(ObjectListContext,i);
    }
};

PropertyListNotEmptyContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterPropertyListNotEmpty(this);
	}
};

PropertyListNotEmptyContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitPropertyListNotEmpty(this);
	}
};




SparqlParser.PropertyListNotEmptyContext = PropertyListNotEmptyContext;

SparqlParser.prototype.propertyListNotEmpty = function() {

    var localctx = new PropertyListNotEmptyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, SparqlParser.RULE_propertyListNotEmpty);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 378;
        this.verb();
        this.state = 379;
        this.objectList();
        this.state = 388;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SparqlParser.T__29) {
            this.state = 380;
            this.match(SparqlParser.T__29);
            this.state = 384;
            _la = this._input.LA(1);
            if(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (SparqlParser.T__30 - 31)) | (1 << (SparqlParser.IRI_REF - 31)) | (1 << (SparqlParser.PNAME_NS - 31)) | (1 << (SparqlParser.PNAME_LN - 31)))) !== 0) || _la===SparqlParser.VAR1 || _la===SparqlParser.VAR2) {
                this.state = 381;
                this.verb();
                this.state = 382;
                this.objectList();
            }

            this.state = 390;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_propertyList;
    return this;
}

PropertyListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyListContext.prototype.constructor = PropertyListContext;

PropertyListContext.prototype.propertyListNotEmpty = function() {
    return this.getTypedRuleContext(PropertyListNotEmptyContext,0);
};

PropertyListContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterPropertyList(this);
	}
};

PropertyListContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitPropertyList(this);
	}
};




SparqlParser.PropertyListContext = PropertyListContext;

SparqlParser.prototype.propertyList = function() {

    var localctx = new PropertyListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, SparqlParser.RULE_propertyList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 392;
        _la = this._input.LA(1);
        if(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (SparqlParser.T__30 - 31)) | (1 << (SparqlParser.IRI_REF - 31)) | (1 << (SparqlParser.PNAME_NS - 31)) | (1 << (SparqlParser.PNAME_LN - 31)))) !== 0) || _la===SparqlParser.VAR1 || _la===SparqlParser.VAR2) {
            this.state = 391;
            this.propertyListNotEmpty();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_objectList;
    return this;
}

ObjectListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectListContext.prototype.constructor = ObjectListContext;

ObjectListContext.prototype.object = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObjectContext);
    } else {
        return this.getTypedRuleContext(ObjectContext,i);
    }
};

ObjectListContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterObjectList(this);
	}
};

ObjectListContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitObjectList(this);
	}
};




SparqlParser.ObjectListContext = ObjectListContext;

SparqlParser.prototype.objectList = function() {

    var localctx = new ObjectListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, SparqlParser.RULE_objectList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 394;
        this.object();
        this.state = 399;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SparqlParser.T__27) {
            this.state = 395;
            this.match(SparqlParser.T__27);
            this.state = 396;
            this.object();
            this.state = 401;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_object;
    return this;
}

ObjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectContext.prototype.constructor = ObjectContext;

ObjectContext.prototype.graphNode = function() {
    return this.getTypedRuleContext(GraphNodeContext,0);
};

ObjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterObject(this);
	}
};

ObjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitObject(this);
	}
};




SparqlParser.ObjectContext = ObjectContext;

SparqlParser.prototype.object = function() {

    var localctx = new ObjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, SparqlParser.RULE_object);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 402;
        this.graphNode();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VerbContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_verb;
    return this;
}

VerbContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VerbContext.prototype.constructor = VerbContext;

VerbContext.prototype.varOrIRIref = function() {
    return this.getTypedRuleContext(VarOrIRIrefContext,0);
};

VerbContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterVerb(this);
	}
};

VerbContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitVerb(this);
	}
};




SparqlParser.VerbContext = VerbContext;

SparqlParser.prototype.verb = function() {

    var localctx = new VerbContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, SparqlParser.RULE_verb);
    try {
        this.state = 406;
        switch(this._input.LA(1)) {
        case SparqlParser.IRI_REF:
        case SparqlParser.PNAME_NS:
        case SparqlParser.PNAME_LN:
        case SparqlParser.VAR1:
        case SparqlParser.VAR2:
            this.enterOuterAlt(localctx, 1);
            this.state = 404;
            this.varOrIRIref();
            break;
        case SparqlParser.T__30:
            this.enterOuterAlt(localctx, 2);
            this.state = 405;
            this.match(SparqlParser.T__30);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TriplesNodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_triplesNode;
    return this;
}

TriplesNodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TriplesNodeContext.prototype.constructor = TriplesNodeContext;

TriplesNodeContext.prototype.collection = function() {
    return this.getTypedRuleContext(CollectionContext,0);
};

TriplesNodeContext.prototype.blankNodePropertyList = function() {
    return this.getTypedRuleContext(BlankNodePropertyListContext,0);
};

TriplesNodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterTriplesNode(this);
	}
};

TriplesNodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitTriplesNode(this);
	}
};




SparqlParser.TriplesNodeContext = TriplesNodeContext;

SparqlParser.prototype.triplesNode = function() {

    var localctx = new TriplesNodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, SparqlParser.RULE_triplesNode);
    try {
        this.state = 410;
        switch(this._input.LA(1)) {
        case SparqlParser.T__26:
            this.enterOuterAlt(localctx, 1);
            this.state = 408;
            this.collection();
            break;
        case SparqlParser.T__31:
            this.enterOuterAlt(localctx, 2);
            this.state = 409;
            this.blankNodePropertyList();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlankNodePropertyListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_blankNodePropertyList;
    return this;
}

BlankNodePropertyListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlankNodePropertyListContext.prototype.constructor = BlankNodePropertyListContext;

BlankNodePropertyListContext.prototype.propertyListNotEmpty = function() {
    return this.getTypedRuleContext(PropertyListNotEmptyContext,0);
};

BlankNodePropertyListContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterBlankNodePropertyList(this);
	}
};

BlankNodePropertyListContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitBlankNodePropertyList(this);
	}
};




SparqlParser.BlankNodePropertyListContext = BlankNodePropertyListContext;

SparqlParser.prototype.blankNodePropertyList = function() {

    var localctx = new BlankNodePropertyListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, SparqlParser.RULE_blankNodePropertyList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 412;
        this.match(SparqlParser.T__31);
        this.state = 413;
        this.propertyListNotEmpty();
        this.state = 414;
        this.match(SparqlParser.T__32);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CollectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_collection;
    return this;
}

CollectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CollectionContext.prototype.constructor = CollectionContext;

CollectionContext.prototype.graphNode = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(GraphNodeContext);
    } else {
        return this.getTypedRuleContext(GraphNodeContext,i);
    }
};

CollectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterCollection(this);
	}
};

CollectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitCollection(this);
	}
};




SparqlParser.CollectionContext = CollectionContext;

SparqlParser.prototype.collection = function() {

    var localctx = new CollectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, SparqlParser.RULE_collection);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 416;
        this.match(SparqlParser.T__26);
        this.state = 418; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 417;
            this.graphNode();
            this.state = 420; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (SparqlParser.T__26 - 27)) | (1 << (SparqlParser.T__31 - 27)) | (1 << (SparqlParser.T__57 - 27)))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (SparqlParser.T__58 - 59)) | (1 << (SparqlParser.IRI_REF - 59)) | (1 << (SparqlParser.PNAME_NS - 59)) | (1 << (SparqlParser.PNAME_LN - 59)) | (1 << (SparqlParser.BLANK_NODE_LABEL - 59)) | (1 << (SparqlParser.VAR1 - 59)) | (1 << (SparqlParser.VAR2 - 59)) | (1 << (SparqlParser.INTEGER - 59)) | (1 << (SparqlParser.DECIMAL - 59)) | (1 << (SparqlParser.DOUBLE - 59)) | (1 << (SparqlParser.INTEGER_POSITIVE - 59)) | (1 << (SparqlParser.DECIMAL_POSITIVE - 59)) | (1 << (SparqlParser.DOUBLE_POSITIVE - 59)) | (1 << (SparqlParser.INTEGER_NEGATIVE - 59)) | (1 << (SparqlParser.DECIMAL_NEGATIVE - 59)) | (1 << (SparqlParser.DOUBLE_NEGATIVE - 59)) | (1 << (SparqlParser.STRING_LITERAL1 - 59)) | (1 << (SparqlParser.STRING_LITERAL2 - 59)) | (1 << (SparqlParser.NIL - 59)) | (1 << (SparqlParser.ANON - 59)))) !== 0));
        this.state = 422;
        this.match(SparqlParser.T__28);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GraphNodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_graphNode;
    return this;
}

GraphNodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GraphNodeContext.prototype.constructor = GraphNodeContext;

GraphNodeContext.prototype.varOrTerm = function() {
    return this.getTypedRuleContext(VarOrTermContext,0);
};

GraphNodeContext.prototype.triplesNode = function() {
    return this.getTypedRuleContext(TriplesNodeContext,0);
};

GraphNodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterGraphNode(this);
	}
};

GraphNodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitGraphNode(this);
	}
};




SparqlParser.GraphNodeContext = GraphNodeContext;

SparqlParser.prototype.graphNode = function() {

    var localctx = new GraphNodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, SparqlParser.RULE_graphNode);
    try {
        this.state = 426;
        switch(this._input.LA(1)) {
        case SparqlParser.T__57:
        case SparqlParser.T__58:
        case SparqlParser.IRI_REF:
        case SparqlParser.PNAME_NS:
        case SparqlParser.PNAME_LN:
        case SparqlParser.BLANK_NODE_LABEL:
        case SparqlParser.VAR1:
        case SparqlParser.VAR2:
        case SparqlParser.INTEGER:
        case SparqlParser.DECIMAL:
        case SparqlParser.DOUBLE:
        case SparqlParser.INTEGER_POSITIVE:
        case SparqlParser.DECIMAL_POSITIVE:
        case SparqlParser.DOUBLE_POSITIVE:
        case SparqlParser.INTEGER_NEGATIVE:
        case SparqlParser.DECIMAL_NEGATIVE:
        case SparqlParser.DOUBLE_NEGATIVE:
        case SparqlParser.STRING_LITERAL1:
        case SparqlParser.STRING_LITERAL2:
        case SparqlParser.NIL:
        case SparqlParser.ANON:
            this.enterOuterAlt(localctx, 1);
            this.state = 424;
            this.varOrTerm();
            break;
        case SparqlParser.T__26:
        case SparqlParser.T__31:
            this.enterOuterAlt(localctx, 2);
            this.state = 425;
            this.triplesNode();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarOrTermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_varOrTerm;
    return this;
}

VarOrTermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarOrTermContext.prototype.constructor = VarOrTermContext;

VarOrTermContext.prototype.var = function() {
    return this.getTypedRuleContext(VarContext,0);
};

VarOrTermContext.prototype.graphTerm = function() {
    return this.getTypedRuleContext(GraphTermContext,0);
};

VarOrTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterVarOrTerm(this);
	}
};

VarOrTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitVarOrTerm(this);
	}
};




SparqlParser.VarOrTermContext = VarOrTermContext;

SparqlParser.prototype.varOrTerm = function() {

    var localctx = new VarOrTermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, SparqlParser.RULE_varOrTerm);
    try {
        this.state = 430;
        switch(this._input.LA(1)) {
        case SparqlParser.VAR1:
        case SparqlParser.VAR2:
            this.enterOuterAlt(localctx, 1);
            this.state = 428;
            this.var();
            break;
        case SparqlParser.T__57:
        case SparqlParser.T__58:
        case SparqlParser.IRI_REF:
        case SparqlParser.PNAME_NS:
        case SparqlParser.PNAME_LN:
        case SparqlParser.BLANK_NODE_LABEL:
        case SparqlParser.INTEGER:
        case SparqlParser.DECIMAL:
        case SparqlParser.DOUBLE:
        case SparqlParser.INTEGER_POSITIVE:
        case SparqlParser.DECIMAL_POSITIVE:
        case SparqlParser.DOUBLE_POSITIVE:
        case SparqlParser.INTEGER_NEGATIVE:
        case SparqlParser.DECIMAL_NEGATIVE:
        case SparqlParser.DOUBLE_NEGATIVE:
        case SparqlParser.STRING_LITERAL1:
        case SparqlParser.STRING_LITERAL2:
        case SparqlParser.NIL:
        case SparqlParser.ANON:
            this.enterOuterAlt(localctx, 2);
            this.state = 429;
            this.graphTerm();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarOrIRIrefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_varOrIRIref;
    return this;
}

VarOrIRIrefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarOrIRIrefContext.prototype.constructor = VarOrIRIrefContext;

VarOrIRIrefContext.prototype.var = function() {
    return this.getTypedRuleContext(VarContext,0);
};

VarOrIRIrefContext.prototype.iriRef = function() {
    return this.getTypedRuleContext(IriRefContext,0);
};

VarOrIRIrefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterVarOrIRIref(this);
	}
};

VarOrIRIrefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitVarOrIRIref(this);
	}
};




SparqlParser.VarOrIRIrefContext = VarOrIRIrefContext;

SparqlParser.prototype.varOrIRIref = function() {

    var localctx = new VarOrIRIrefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, SparqlParser.RULE_varOrIRIref);
    try {
        this.state = 434;
        switch(this._input.LA(1)) {
        case SparqlParser.VAR1:
        case SparqlParser.VAR2:
            this.enterOuterAlt(localctx, 1);
            this.state = 432;
            this.var();
            break;
        case SparqlParser.IRI_REF:
        case SparqlParser.PNAME_NS:
        case SparqlParser.PNAME_LN:
            this.enterOuterAlt(localctx, 2);
            this.state = 433;
            this.iriRef();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_var;
    return this;
}

VarContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarContext.prototype.constructor = VarContext;

VarContext.prototype.VAR1 = function() {
    return this.getToken(SparqlParser.VAR1, 0);
};

VarContext.prototype.VAR2 = function() {
    return this.getToken(SparqlParser.VAR2, 0);
};

VarContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterVar(this);
	}
};

VarContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitVar(this);
	}
};




SparqlParser.VarContext = VarContext;

SparqlParser.prototype.var = function() {

    var localctx = new VarContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, SparqlParser.RULE_var);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 436;
        _la = this._input.LA(1);
        if(!(_la===SparqlParser.VAR1 || _la===SparqlParser.VAR2)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GraphTermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_graphTerm;
    return this;
}

GraphTermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GraphTermContext.prototype.constructor = GraphTermContext;

GraphTermContext.prototype.iriRef = function() {
    return this.getTypedRuleContext(IriRefContext,0);
};

GraphTermContext.prototype.rdfLiteral = function() {
    return this.getTypedRuleContext(RdfLiteralContext,0);
};

GraphTermContext.prototype.numericLiteral = function() {
    return this.getTypedRuleContext(NumericLiteralContext,0);
};

GraphTermContext.prototype.booleanLiteral = function() {
    return this.getTypedRuleContext(BooleanLiteralContext,0);
};

GraphTermContext.prototype.blankNode = function() {
    return this.getTypedRuleContext(BlankNodeContext,0);
};

GraphTermContext.prototype.NIL = function() {
    return this.getToken(SparqlParser.NIL, 0);
};

GraphTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterGraphTerm(this);
	}
};

GraphTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitGraphTerm(this);
	}
};




SparqlParser.GraphTermContext = GraphTermContext;

SparqlParser.prototype.graphTerm = function() {

    var localctx = new GraphTermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, SparqlParser.RULE_graphTerm);
    try {
        this.state = 444;
        switch(this._input.LA(1)) {
        case SparqlParser.IRI_REF:
        case SparqlParser.PNAME_NS:
        case SparqlParser.PNAME_LN:
            this.enterOuterAlt(localctx, 1);
            this.state = 438;
            this.iriRef();
            break;
        case SparqlParser.STRING_LITERAL1:
        case SparqlParser.STRING_LITERAL2:
            this.enterOuterAlt(localctx, 2);
            this.state = 439;
            this.rdfLiteral();
            break;
        case SparqlParser.INTEGER:
        case SparqlParser.DECIMAL:
        case SparqlParser.DOUBLE:
        case SparqlParser.INTEGER_POSITIVE:
        case SparqlParser.DECIMAL_POSITIVE:
        case SparqlParser.DOUBLE_POSITIVE:
        case SparqlParser.INTEGER_NEGATIVE:
        case SparqlParser.DECIMAL_NEGATIVE:
        case SparqlParser.DOUBLE_NEGATIVE:
            this.enterOuterAlt(localctx, 3);
            this.state = 440;
            this.numericLiteral();
            break;
        case SparqlParser.T__57:
        case SparqlParser.T__58:
            this.enterOuterAlt(localctx, 4);
            this.state = 441;
            this.booleanLiteral();
            break;
        case SparqlParser.BLANK_NODE_LABEL:
        case SparqlParser.ANON:
            this.enterOuterAlt(localctx, 5);
            this.state = 442;
            this.blankNode();
            break;
        case SparqlParser.NIL:
            this.enterOuterAlt(localctx, 6);
            this.state = 443;
            this.match(SparqlParser.NIL);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.conditionalOrExpression = function() {
    return this.getTypedRuleContext(ConditionalOrExpressionContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitExpression(this);
	}
};




SparqlParser.ExpressionContext = ExpressionContext;

SparqlParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, SparqlParser.RULE_expression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 446;
        this.conditionalOrExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionalOrExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_conditionalOrExpression;
    return this;
}

ConditionalOrExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionalOrExpressionContext.prototype.constructor = ConditionalOrExpressionContext;

ConditionalOrExpressionContext.prototype.conditionalAndExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConditionalAndExpressionContext);
    } else {
        return this.getTypedRuleContext(ConditionalAndExpressionContext,i);
    }
};

ConditionalOrExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterConditionalOrExpression(this);
	}
};

ConditionalOrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitConditionalOrExpression(this);
	}
};




SparqlParser.ConditionalOrExpressionContext = ConditionalOrExpressionContext;

SparqlParser.prototype.conditionalOrExpression = function() {

    var localctx = new ConditionalOrExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, SparqlParser.RULE_conditionalOrExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 448;
        this.conditionalAndExpression();
        this.state = 453;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SparqlParser.T__33) {
            this.state = 449;
            this.match(SparqlParser.T__33);
            this.state = 450;
            this.conditionalAndExpression();
            this.state = 455;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionalAndExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_conditionalAndExpression;
    return this;
}

ConditionalAndExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionalAndExpressionContext.prototype.constructor = ConditionalAndExpressionContext;

ConditionalAndExpressionContext.prototype.valueLogical = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueLogicalContext);
    } else {
        return this.getTypedRuleContext(ValueLogicalContext,i);
    }
};

ConditionalAndExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterConditionalAndExpression(this);
	}
};

ConditionalAndExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitConditionalAndExpression(this);
	}
};




SparqlParser.ConditionalAndExpressionContext = ConditionalAndExpressionContext;

SparqlParser.prototype.conditionalAndExpression = function() {

    var localctx = new ConditionalAndExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, SparqlParser.RULE_conditionalAndExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 456;
        this.valueLogical();
        this.state = 461;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SparqlParser.T__34) {
            this.state = 457;
            this.match(SparqlParser.T__34);
            this.state = 458;
            this.valueLogical();
            this.state = 463;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueLogicalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_valueLogical;
    return this;
}

ValueLogicalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueLogicalContext.prototype.constructor = ValueLogicalContext;

ValueLogicalContext.prototype.relationalExpression = function() {
    return this.getTypedRuleContext(RelationalExpressionContext,0);
};

ValueLogicalContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterValueLogical(this);
	}
};

ValueLogicalContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitValueLogical(this);
	}
};




SparqlParser.ValueLogicalContext = ValueLogicalContext;

SparqlParser.prototype.valueLogical = function() {

    var localctx = new ValueLogicalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, SparqlParser.RULE_valueLogical);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 464;
        this.relationalExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RelationalExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_relationalExpression;
    return this;
}

RelationalExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelationalExpressionContext.prototype.constructor = RelationalExpressionContext;

RelationalExpressionContext.prototype.numericExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumericExpressionContext);
    } else {
        return this.getTypedRuleContext(NumericExpressionContext,i);
    }
};

RelationalExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterRelationalExpression(this);
	}
};

RelationalExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitRelationalExpression(this);
	}
};




SparqlParser.RelationalExpressionContext = RelationalExpressionContext;

SparqlParser.prototype.relationalExpression = function() {

    var localctx = new RelationalExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, SparqlParser.RULE_relationalExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 466;
        this.numericExpression();
        this.state = 479;
        switch (this._input.LA(1)) {
        case SparqlParser.T__35:
        	this.state = 467;
        	this.match(SparqlParser.T__35);
        	this.state = 468;
        	this.numericExpression();
        	break;
        case SparqlParser.T__36:
        	this.state = 469;
        	this.match(SparqlParser.T__36);
        	this.state = 470;
        	this.numericExpression();
        	break;
        case SparqlParser.T__37:
        	this.state = 471;
        	this.match(SparqlParser.T__37);
        	this.state = 472;
        	this.numericExpression();
        	break;
        case SparqlParser.T__38:
        	this.state = 473;
        	this.match(SparqlParser.T__38);
        	this.state = 474;
        	this.numericExpression();
        	break;
        case SparqlParser.T__39:
        	this.state = 475;
        	this.match(SparqlParser.T__39);
        	this.state = 476;
        	this.numericExpression();
        	break;
        case SparqlParser.T__40:
        	this.state = 477;
        	this.match(SparqlParser.T__40);
        	this.state = 478;
        	this.numericExpression();
        	break;
        case SparqlParser.T__27:
        case SparqlParser.T__28:
        case SparqlParser.T__33:
        case SparqlParser.T__34:
        	break;
        default:
        	throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumericExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_numericExpression;
    return this;
}

NumericExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumericExpressionContext.prototype.constructor = NumericExpressionContext;

NumericExpressionContext.prototype.additiveExpression = function() {
    return this.getTypedRuleContext(AdditiveExpressionContext,0);
};

NumericExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterNumericExpression(this);
	}
};

NumericExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitNumericExpression(this);
	}
};




SparqlParser.NumericExpressionContext = NumericExpressionContext;

SparqlParser.prototype.numericExpression = function() {

    var localctx = new NumericExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, SparqlParser.RULE_numericExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 481;
        this.additiveExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AdditiveExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_additiveExpression;
    return this;
}

AdditiveExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AdditiveExpressionContext.prototype.constructor = AdditiveExpressionContext;

AdditiveExpressionContext.prototype.multiplicativeExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MultiplicativeExpressionContext);
    } else {
        return this.getTypedRuleContext(MultiplicativeExpressionContext,i);
    }
};

AdditiveExpressionContext.prototype.numericLiteralPositive = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumericLiteralPositiveContext);
    } else {
        return this.getTypedRuleContext(NumericLiteralPositiveContext,i);
    }
};

AdditiveExpressionContext.prototype.numericLiteralNegative = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumericLiteralNegativeContext);
    } else {
        return this.getTypedRuleContext(NumericLiteralNegativeContext,i);
    }
};

AdditiveExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterAdditiveExpression(this);
	}
};

AdditiveExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitAdditiveExpression(this);
	}
};




SparqlParser.AdditiveExpressionContext = AdditiveExpressionContext;

SparqlParser.prototype.additiveExpression = function() {

    var localctx = new AdditiveExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, SparqlParser.RULE_additiveExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 483;
        this.multiplicativeExpression();
        this.state = 492;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (SparqlParser.T__41 - 42)) | (1 << (SparqlParser.T__42 - 42)) | (1 << (SparqlParser.INTEGER_POSITIVE - 42)) | (1 << (SparqlParser.DECIMAL_POSITIVE - 42)) | (1 << (SparqlParser.DOUBLE_POSITIVE - 42)) | (1 << (SparqlParser.INTEGER_NEGATIVE - 42)))) !== 0) || _la===SparqlParser.DECIMAL_NEGATIVE || _la===SparqlParser.DOUBLE_NEGATIVE) {
            this.state = 490;
            switch(this._input.LA(1)) {
            case SparqlParser.T__41:
                this.state = 484;
                this.match(SparqlParser.T__41);
                this.state = 485;
                this.multiplicativeExpression();
                break;
            case SparqlParser.T__42:
                this.state = 486;
                this.match(SparqlParser.T__42);
                this.state = 487;
                this.multiplicativeExpression();
                break;
            case SparqlParser.INTEGER_POSITIVE:
            case SparqlParser.DECIMAL_POSITIVE:
            case SparqlParser.DOUBLE_POSITIVE:
                this.state = 488;
                this.numericLiteralPositive();
                break;
            case SparqlParser.INTEGER_NEGATIVE:
            case SparqlParser.DECIMAL_NEGATIVE:
            case SparqlParser.DOUBLE_NEGATIVE:
                this.state = 489;
                this.numericLiteralNegative();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 494;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MultiplicativeExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_multiplicativeExpression;
    return this;
}

MultiplicativeExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplicativeExpressionContext.prototype.constructor = MultiplicativeExpressionContext;

MultiplicativeExpressionContext.prototype.unaryExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UnaryExpressionContext);
    } else {
        return this.getTypedRuleContext(UnaryExpressionContext,i);
    }
};

MultiplicativeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterMultiplicativeExpression(this);
	}
};

MultiplicativeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitMultiplicativeExpression(this);
	}
};




SparqlParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext;

SparqlParser.prototype.multiplicativeExpression = function() {

    var localctx = new MultiplicativeExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, SparqlParser.RULE_multiplicativeExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 495;
        this.unaryExpression();
        this.state = 502;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SparqlParser.T__5 || _la===SparqlParser.T__43) {
            this.state = 500;
            switch(this._input.LA(1)) {
            case SparqlParser.T__5:
                this.state = 496;
                this.match(SparqlParser.T__5);
                this.state = 497;
                this.unaryExpression();
                break;
            case SparqlParser.T__43:
                this.state = 498;
                this.match(SparqlParser.T__43);
                this.state = 499;
                this.unaryExpression();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 504;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UnaryExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_unaryExpression;
    return this;
}

UnaryExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnaryExpressionContext.prototype.constructor = UnaryExpressionContext;

UnaryExpressionContext.prototype.primaryExpression = function() {
    return this.getTypedRuleContext(PrimaryExpressionContext,0);
};

UnaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterUnaryExpression(this);
	}
};

UnaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitUnaryExpression(this);
	}
};




SparqlParser.UnaryExpressionContext = UnaryExpressionContext;

SparqlParser.prototype.unaryExpression = function() {

    var localctx = new UnaryExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, SparqlParser.RULE_unaryExpression);
    try {
        this.state = 512;
        switch(this._input.LA(1)) {
        case SparqlParser.T__44:
            this.enterOuterAlt(localctx, 1);
            this.state = 505;
            this.match(SparqlParser.T__44);
            this.state = 506;
            this.primaryExpression();
            break;
        case SparqlParser.T__41:
            this.enterOuterAlt(localctx, 2);
            this.state = 507;
            this.match(SparqlParser.T__41);
            this.state = 508;
            this.primaryExpression();
            break;
        case SparqlParser.T__42:
            this.enterOuterAlt(localctx, 3);
            this.state = 509;
            this.match(SparqlParser.T__42);
            this.state = 510;
            this.primaryExpression();
            break;
        case SparqlParser.T__26:
        case SparqlParser.T__45:
        case SparqlParser.T__46:
        case SparqlParser.T__47:
        case SparqlParser.T__48:
        case SparqlParser.T__49:
        case SparqlParser.T__50:
        case SparqlParser.T__51:
        case SparqlParser.T__52:
        case SparqlParser.T__53:
        case SparqlParser.T__54:
        case SparqlParser.T__55:
        case SparqlParser.T__57:
        case SparqlParser.T__58:
        case SparqlParser.IRI_REF:
        case SparqlParser.PNAME_NS:
        case SparqlParser.PNAME_LN:
        case SparqlParser.VAR1:
        case SparqlParser.VAR2:
        case SparqlParser.INTEGER:
        case SparqlParser.DECIMAL:
        case SparqlParser.DOUBLE:
        case SparqlParser.INTEGER_POSITIVE:
        case SparqlParser.DECIMAL_POSITIVE:
        case SparqlParser.DOUBLE_POSITIVE:
        case SparqlParser.INTEGER_NEGATIVE:
        case SparqlParser.DECIMAL_NEGATIVE:
        case SparqlParser.DOUBLE_NEGATIVE:
        case SparqlParser.STRING_LITERAL1:
        case SparqlParser.STRING_LITERAL2:
            this.enterOuterAlt(localctx, 4);
            this.state = 511;
            this.primaryExpression();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrimaryExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_primaryExpression;
    return this;
}

PrimaryExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryExpressionContext.prototype.constructor = PrimaryExpressionContext;

PrimaryExpressionContext.prototype.brackettedExpression = function() {
    return this.getTypedRuleContext(BrackettedExpressionContext,0);
};

PrimaryExpressionContext.prototype.builtInCall = function() {
    return this.getTypedRuleContext(BuiltInCallContext,0);
};

PrimaryExpressionContext.prototype.iriRefOrFunction = function() {
    return this.getTypedRuleContext(IriRefOrFunctionContext,0);
};

PrimaryExpressionContext.prototype.rdfLiteral = function() {
    return this.getTypedRuleContext(RdfLiteralContext,0);
};

PrimaryExpressionContext.prototype.numericLiteral = function() {
    return this.getTypedRuleContext(NumericLiteralContext,0);
};

PrimaryExpressionContext.prototype.booleanLiteral = function() {
    return this.getTypedRuleContext(BooleanLiteralContext,0);
};

PrimaryExpressionContext.prototype.var = function() {
    return this.getTypedRuleContext(VarContext,0);
};

PrimaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterPrimaryExpression(this);
	}
};

PrimaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitPrimaryExpression(this);
	}
};




SparqlParser.PrimaryExpressionContext = PrimaryExpressionContext;

SparqlParser.prototype.primaryExpression = function() {

    var localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, SparqlParser.RULE_primaryExpression);
    try {
        this.state = 521;
        switch(this._input.LA(1)) {
        case SparqlParser.T__26:
            this.enterOuterAlt(localctx, 1);
            this.state = 514;
            this.brackettedExpression();
            break;
        case SparqlParser.T__45:
        case SparqlParser.T__46:
        case SparqlParser.T__47:
        case SparqlParser.T__48:
        case SparqlParser.T__49:
        case SparqlParser.T__50:
        case SparqlParser.T__51:
        case SparqlParser.T__52:
        case SparqlParser.T__53:
        case SparqlParser.T__54:
        case SparqlParser.T__55:
            this.enterOuterAlt(localctx, 2);
            this.state = 515;
            this.builtInCall();
            break;
        case SparqlParser.IRI_REF:
        case SparqlParser.PNAME_NS:
        case SparqlParser.PNAME_LN:
            this.enterOuterAlt(localctx, 3);
            this.state = 516;
            this.iriRefOrFunction();
            break;
        case SparqlParser.STRING_LITERAL1:
        case SparqlParser.STRING_LITERAL2:
            this.enterOuterAlt(localctx, 4);
            this.state = 517;
            this.rdfLiteral();
            break;
        case SparqlParser.INTEGER:
        case SparqlParser.DECIMAL:
        case SparqlParser.DOUBLE:
        case SparqlParser.INTEGER_POSITIVE:
        case SparqlParser.DECIMAL_POSITIVE:
        case SparqlParser.DOUBLE_POSITIVE:
        case SparqlParser.INTEGER_NEGATIVE:
        case SparqlParser.DECIMAL_NEGATIVE:
        case SparqlParser.DOUBLE_NEGATIVE:
            this.enterOuterAlt(localctx, 5);
            this.state = 518;
            this.numericLiteral();
            break;
        case SparqlParser.T__57:
        case SparqlParser.T__58:
            this.enterOuterAlt(localctx, 6);
            this.state = 519;
            this.booleanLiteral();
            break;
        case SparqlParser.VAR1:
        case SparqlParser.VAR2:
            this.enterOuterAlt(localctx, 7);
            this.state = 520;
            this.var();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BrackettedExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_brackettedExpression;
    return this;
}

BrackettedExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BrackettedExpressionContext.prototype.constructor = BrackettedExpressionContext;

BrackettedExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

BrackettedExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterBrackettedExpression(this);
	}
};

BrackettedExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitBrackettedExpression(this);
	}
};




SparqlParser.BrackettedExpressionContext = BrackettedExpressionContext;

SparqlParser.prototype.brackettedExpression = function() {

    var localctx = new BrackettedExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, SparqlParser.RULE_brackettedExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 523;
        this.match(SparqlParser.T__26);
        this.state = 524;
        this.expression();
        this.state = 525;
        this.match(SparqlParser.T__28);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BuiltInCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_builtInCall;
    return this;
}

BuiltInCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BuiltInCallContext.prototype.constructor = BuiltInCallContext;

BuiltInCallContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

BuiltInCallContext.prototype.var = function() {
    return this.getTypedRuleContext(VarContext,0);
};

BuiltInCallContext.prototype.regexExpression = function() {
    return this.getTypedRuleContext(RegexExpressionContext,0);
};

BuiltInCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterBuiltInCall(this);
	}
};

BuiltInCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitBuiltInCall(this);
	}
};




SparqlParser.BuiltInCallContext = BuiltInCallContext;

SparqlParser.prototype.builtInCall = function() {

    var localctx = new BuiltInCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, SparqlParser.RULE_builtInCall);
    try {
        this.state = 582;
        switch(this._input.LA(1)) {
        case SparqlParser.T__45:
            this.enterOuterAlt(localctx, 1);
            this.state = 527;
            this.match(SparqlParser.T__45);
            this.state = 528;
            this.match(SparqlParser.T__26);
            this.state = 529;
            this.expression();
            this.state = 530;
            this.match(SparqlParser.T__28);
            break;
        case SparqlParser.T__46:
            this.enterOuterAlt(localctx, 2);
            this.state = 532;
            this.match(SparqlParser.T__46);
            this.state = 533;
            this.match(SparqlParser.T__26);
            this.state = 534;
            this.expression();
            this.state = 535;
            this.match(SparqlParser.T__28);
            break;
        case SparqlParser.T__47:
            this.enterOuterAlt(localctx, 3);
            this.state = 537;
            this.match(SparqlParser.T__47);
            this.state = 538;
            this.match(SparqlParser.T__26);
            this.state = 539;
            this.expression();
            this.state = 540;
            this.match(SparqlParser.T__27);
            this.state = 541;
            this.expression();
            this.state = 542;
            this.match(SparqlParser.T__28);
            break;
        case SparqlParser.T__48:
            this.enterOuterAlt(localctx, 4);
            this.state = 544;
            this.match(SparqlParser.T__48);
            this.state = 545;
            this.match(SparqlParser.T__26);
            this.state = 546;
            this.expression();
            this.state = 547;
            this.match(SparqlParser.T__28);
            break;
        case SparqlParser.T__49:
            this.enterOuterAlt(localctx, 5);
            this.state = 549;
            this.match(SparqlParser.T__49);
            this.state = 550;
            this.match(SparqlParser.T__26);
            this.state = 551;
            this.var();
            this.state = 552;
            this.match(SparqlParser.T__28);
            break;
        case SparqlParser.T__50:
            this.enterOuterAlt(localctx, 6);
            this.state = 554;
            this.match(SparqlParser.T__50);
            this.state = 555;
            this.match(SparqlParser.T__26);
            this.state = 556;
            this.expression();
            this.state = 557;
            this.match(SparqlParser.T__27);
            this.state = 558;
            this.expression();
            this.state = 559;
            this.match(SparqlParser.T__28);
            break;
        case SparqlParser.T__51:
            this.enterOuterAlt(localctx, 7);
            this.state = 561;
            this.match(SparqlParser.T__51);
            this.state = 562;
            this.match(SparqlParser.T__26);
            this.state = 563;
            this.expression();
            this.state = 564;
            this.match(SparqlParser.T__28);
            break;
        case SparqlParser.T__52:
            this.enterOuterAlt(localctx, 8);
            this.state = 566;
            this.match(SparqlParser.T__52);
            this.state = 567;
            this.match(SparqlParser.T__26);
            this.state = 568;
            this.expression();
            this.state = 569;
            this.match(SparqlParser.T__28);
            break;
        case SparqlParser.T__53:
            this.enterOuterAlt(localctx, 9);
            this.state = 571;
            this.match(SparqlParser.T__53);
            this.state = 572;
            this.match(SparqlParser.T__26);
            this.state = 573;
            this.expression();
            this.state = 574;
            this.match(SparqlParser.T__28);
            break;
        case SparqlParser.T__54:
            this.enterOuterAlt(localctx, 10);
            this.state = 576;
            this.match(SparqlParser.T__54);
            this.state = 577;
            this.match(SparqlParser.T__26);
            this.state = 578;
            this.expression();
            this.state = 579;
            this.match(SparqlParser.T__28);
            break;
        case SparqlParser.T__55:
            this.enterOuterAlt(localctx, 11);
            this.state = 581;
            this.regexExpression();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RegexExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_regexExpression;
    return this;
}

RegexExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RegexExpressionContext.prototype.constructor = RegexExpressionContext;

RegexExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

RegexExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterRegexExpression(this);
	}
};

RegexExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitRegexExpression(this);
	}
};




SparqlParser.RegexExpressionContext = RegexExpressionContext;

SparqlParser.prototype.regexExpression = function() {

    var localctx = new RegexExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, SparqlParser.RULE_regexExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 584;
        this.match(SparqlParser.T__55);
        this.state = 585;
        this.match(SparqlParser.T__26);
        this.state = 586;
        this.expression();
        this.state = 587;
        this.match(SparqlParser.T__27);
        this.state = 588;
        this.expression();
        this.state = 591;
        _la = this._input.LA(1);
        if(_la===SparqlParser.T__27) {
            this.state = 589;
            this.match(SparqlParser.T__27);
            this.state = 590;
            this.expression();
        }

        this.state = 593;
        this.match(SparqlParser.T__28);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IriRefOrFunctionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_iriRefOrFunction;
    return this;
}

IriRefOrFunctionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IriRefOrFunctionContext.prototype.constructor = IriRefOrFunctionContext;

IriRefOrFunctionContext.prototype.iriRef = function() {
    return this.getTypedRuleContext(IriRefContext,0);
};

IriRefOrFunctionContext.prototype.argList = function() {
    return this.getTypedRuleContext(ArgListContext,0);
};

IriRefOrFunctionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterIriRefOrFunction(this);
	}
};

IriRefOrFunctionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitIriRefOrFunction(this);
	}
};




SparqlParser.IriRefOrFunctionContext = IriRefOrFunctionContext;

SparqlParser.prototype.iriRefOrFunction = function() {

    var localctx = new IriRefOrFunctionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 118, SparqlParser.RULE_iriRefOrFunction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 595;
        this.iriRef();
        this.state = 597;
        _la = this._input.LA(1);
        if(_la===SparqlParser.T__26 || _la===SparqlParser.NIL) {
            this.state = 596;
            this.argList();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RdfLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_rdfLiteral;
    return this;
}

RdfLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RdfLiteralContext.prototype.constructor = RdfLiteralContext;

RdfLiteralContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

RdfLiteralContext.prototype.LANGTAG = function() {
    return this.getToken(SparqlParser.LANGTAG, 0);
};

RdfLiteralContext.prototype.iriRef = function() {
    return this.getTypedRuleContext(IriRefContext,0);
};

RdfLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterRdfLiteral(this);
	}
};

RdfLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitRdfLiteral(this);
	}
};




SparqlParser.RdfLiteralContext = RdfLiteralContext;

SparqlParser.prototype.rdfLiteral = function() {

    var localctx = new RdfLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 120, SparqlParser.RULE_rdfLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 599;
        this.string();
        this.state = 603;
        switch (this._input.LA(1)) {
        case SparqlParser.LANGTAG:
        	this.state = 600;
        	this.match(SparqlParser.LANGTAG);
        	break;
        case SparqlParser.T__56:
        	this.state = 601;
        	this.match(SparqlParser.T__56);
        	this.state = 602;
        	this.iriRef();
        	break;
        case SparqlParser.T__5:
        case SparqlParser.T__19:
        case SparqlParser.T__20:
        case SparqlParser.T__21:
        case SparqlParser.T__22:
        case SparqlParser.T__23:
        case SparqlParser.T__25:
        case SparqlParser.T__26:
        case SparqlParser.T__27:
        case SparqlParser.T__28:
        case SparqlParser.T__29:
        case SparqlParser.T__30:
        case SparqlParser.T__31:
        case SparqlParser.T__32:
        case SparqlParser.T__33:
        case SparqlParser.T__34:
        case SparqlParser.T__35:
        case SparqlParser.T__36:
        case SparqlParser.T__37:
        case SparqlParser.T__38:
        case SparqlParser.T__39:
        case SparqlParser.T__40:
        case SparqlParser.T__41:
        case SparqlParser.T__42:
        case SparqlParser.T__43:
        case SparqlParser.T__57:
        case SparqlParser.T__58:
        case SparqlParser.IRI_REF:
        case SparqlParser.PNAME_NS:
        case SparqlParser.PNAME_LN:
        case SparqlParser.BLANK_NODE_LABEL:
        case SparqlParser.VAR1:
        case SparqlParser.VAR2:
        case SparqlParser.INTEGER:
        case SparqlParser.DECIMAL:
        case SparqlParser.DOUBLE:
        case SparqlParser.INTEGER_POSITIVE:
        case SparqlParser.DECIMAL_POSITIVE:
        case SparqlParser.DOUBLE_POSITIVE:
        case SparqlParser.INTEGER_NEGATIVE:
        case SparqlParser.DECIMAL_NEGATIVE:
        case SparqlParser.DOUBLE_NEGATIVE:
        case SparqlParser.STRING_LITERAL1:
        case SparqlParser.STRING_LITERAL2:
        case SparqlParser.NIL:
        case SparqlParser.ANON:
        	break;
        default:
        	throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumericLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_numericLiteral;
    return this;
}

NumericLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumericLiteralContext.prototype.constructor = NumericLiteralContext;

NumericLiteralContext.prototype.numericLiteralUnsigned = function() {
    return this.getTypedRuleContext(NumericLiteralUnsignedContext,0);
};

NumericLiteralContext.prototype.numericLiteralPositive = function() {
    return this.getTypedRuleContext(NumericLiteralPositiveContext,0);
};

NumericLiteralContext.prototype.numericLiteralNegative = function() {
    return this.getTypedRuleContext(NumericLiteralNegativeContext,0);
};

NumericLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterNumericLiteral(this);
	}
};

NumericLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitNumericLiteral(this);
	}
};




SparqlParser.NumericLiteralContext = NumericLiteralContext;

SparqlParser.prototype.numericLiteral = function() {

    var localctx = new NumericLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 122, SparqlParser.RULE_numericLiteral);
    try {
        this.state = 608;
        switch(this._input.LA(1)) {
        case SparqlParser.INTEGER:
        case SparqlParser.DECIMAL:
        case SparqlParser.DOUBLE:
            this.enterOuterAlt(localctx, 1);
            this.state = 605;
            this.numericLiteralUnsigned();
            break;
        case SparqlParser.INTEGER_POSITIVE:
        case SparqlParser.DECIMAL_POSITIVE:
        case SparqlParser.DOUBLE_POSITIVE:
            this.enterOuterAlt(localctx, 2);
            this.state = 606;
            this.numericLiteralPositive();
            break;
        case SparqlParser.INTEGER_NEGATIVE:
        case SparqlParser.DECIMAL_NEGATIVE:
        case SparqlParser.DOUBLE_NEGATIVE:
            this.enterOuterAlt(localctx, 3);
            this.state = 607;
            this.numericLiteralNegative();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumericLiteralUnsignedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_numericLiteralUnsigned;
    return this;
}

NumericLiteralUnsignedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumericLiteralUnsignedContext.prototype.constructor = NumericLiteralUnsignedContext;

NumericLiteralUnsignedContext.prototype.INTEGER = function() {
    return this.getToken(SparqlParser.INTEGER, 0);
};

NumericLiteralUnsignedContext.prototype.DECIMAL = function() {
    return this.getToken(SparqlParser.DECIMAL, 0);
};

NumericLiteralUnsignedContext.prototype.DOUBLE = function() {
    return this.getToken(SparqlParser.DOUBLE, 0);
};

NumericLiteralUnsignedContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterNumericLiteralUnsigned(this);
	}
};

NumericLiteralUnsignedContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitNumericLiteralUnsigned(this);
	}
};




SparqlParser.NumericLiteralUnsignedContext = NumericLiteralUnsignedContext;

SparqlParser.prototype.numericLiteralUnsigned = function() {

    var localctx = new NumericLiteralUnsignedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 124, SparqlParser.RULE_numericLiteralUnsigned);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 610;
        _la = this._input.LA(1);
        if(!(((((_la - 67)) & ~0x1f) == 0 && ((1 << (_la - 67)) & ((1 << (SparqlParser.INTEGER - 67)) | (1 << (SparqlParser.DECIMAL - 67)) | (1 << (SparqlParser.DOUBLE - 67)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumericLiteralPositiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_numericLiteralPositive;
    return this;
}

NumericLiteralPositiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumericLiteralPositiveContext.prototype.constructor = NumericLiteralPositiveContext;

NumericLiteralPositiveContext.prototype.INTEGER_POSITIVE = function() {
    return this.getToken(SparqlParser.INTEGER_POSITIVE, 0);
};

NumericLiteralPositiveContext.prototype.DECIMAL_POSITIVE = function() {
    return this.getToken(SparqlParser.DECIMAL_POSITIVE, 0);
};

NumericLiteralPositiveContext.prototype.DOUBLE_POSITIVE = function() {
    return this.getToken(SparqlParser.DOUBLE_POSITIVE, 0);
};

NumericLiteralPositiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterNumericLiteralPositive(this);
	}
};

NumericLiteralPositiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitNumericLiteralPositive(this);
	}
};




SparqlParser.NumericLiteralPositiveContext = NumericLiteralPositiveContext;

SparqlParser.prototype.numericLiteralPositive = function() {

    var localctx = new NumericLiteralPositiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 126, SparqlParser.RULE_numericLiteralPositive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 612;
        _la = this._input.LA(1);
        if(!(((((_la - 70)) & ~0x1f) == 0 && ((1 << (_la - 70)) & ((1 << (SparqlParser.INTEGER_POSITIVE - 70)) | (1 << (SparqlParser.DECIMAL_POSITIVE - 70)) | (1 << (SparqlParser.DOUBLE_POSITIVE - 70)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumericLiteralNegativeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_numericLiteralNegative;
    return this;
}

NumericLiteralNegativeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumericLiteralNegativeContext.prototype.constructor = NumericLiteralNegativeContext;

NumericLiteralNegativeContext.prototype.INTEGER_NEGATIVE = function() {
    return this.getToken(SparqlParser.INTEGER_NEGATIVE, 0);
};

NumericLiteralNegativeContext.prototype.DECIMAL_NEGATIVE = function() {
    return this.getToken(SparqlParser.DECIMAL_NEGATIVE, 0);
};

NumericLiteralNegativeContext.prototype.DOUBLE_NEGATIVE = function() {
    return this.getToken(SparqlParser.DOUBLE_NEGATIVE, 0);
};

NumericLiteralNegativeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterNumericLiteralNegative(this);
	}
};

NumericLiteralNegativeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitNumericLiteralNegative(this);
	}
};




SparqlParser.NumericLiteralNegativeContext = NumericLiteralNegativeContext;

SparqlParser.prototype.numericLiteralNegative = function() {

    var localctx = new NumericLiteralNegativeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 128, SparqlParser.RULE_numericLiteralNegative);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 614;
        _la = this._input.LA(1);
        if(!(((((_la - 73)) & ~0x1f) == 0 && ((1 << (_la - 73)) & ((1 << (SparqlParser.INTEGER_NEGATIVE - 73)) | (1 << (SparqlParser.DECIMAL_NEGATIVE - 73)) | (1 << (SparqlParser.DOUBLE_NEGATIVE - 73)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BooleanLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_booleanLiteral;
    return this;
}

BooleanLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BooleanLiteralContext.prototype.constructor = BooleanLiteralContext;


BooleanLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterBooleanLiteral(this);
	}
};

BooleanLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitBooleanLiteral(this);
	}
};




SparqlParser.BooleanLiteralContext = BooleanLiteralContext;

SparqlParser.prototype.booleanLiteral = function() {

    var localctx = new BooleanLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 130, SparqlParser.RULE_booleanLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 616;
        _la = this._input.LA(1);
        if(!(_la===SparqlParser.T__57 || _la===SparqlParser.T__58)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.STRING_LITERAL1 = function() {
    return this.getToken(SparqlParser.STRING_LITERAL1, 0);
};

StringContext.prototype.STRING_LITERAL2 = function() {
    return this.getToken(SparqlParser.STRING_LITERAL2, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitString(this);
	}
};




SparqlParser.StringContext = StringContext;

SparqlParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 132, SparqlParser.RULE_string);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 618;
        _la = this._input.LA(1);
        if(!(_la===SparqlParser.STRING_LITERAL1 || _la===SparqlParser.STRING_LITERAL2)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IriRefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_iriRef;
    return this;
}

IriRefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IriRefContext.prototype.constructor = IriRefContext;

IriRefContext.prototype.IRI_REF = function() {
    return this.getToken(SparqlParser.IRI_REF, 0);
};

IriRefContext.prototype.prefixedName = function() {
    return this.getTypedRuleContext(PrefixedNameContext,0);
};

IriRefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterIriRef(this);
	}
};

IriRefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitIriRef(this);
	}
};




SparqlParser.IriRefContext = IriRefContext;

SparqlParser.prototype.iriRef = function() {

    var localctx = new IriRefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 134, SparqlParser.RULE_iriRef);
    try {
        this.state = 622;
        switch(this._input.LA(1)) {
        case SparqlParser.IRI_REF:
            this.enterOuterAlt(localctx, 1);
            this.state = 620;
            this.match(SparqlParser.IRI_REF);
            break;
        case SparqlParser.PNAME_NS:
        case SparqlParser.PNAME_LN:
            this.enterOuterAlt(localctx, 2);
            this.state = 621;
            this.prefixedName();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrefixedNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_prefixedName;
    return this;
}

PrefixedNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrefixedNameContext.prototype.constructor = PrefixedNameContext;

PrefixedNameContext.prototype.PNAME_LN = function() {
    return this.getToken(SparqlParser.PNAME_LN, 0);
};

PrefixedNameContext.prototype.PNAME_NS = function() {
    return this.getToken(SparqlParser.PNAME_NS, 0);
};

PrefixedNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterPrefixedName(this);
	}
};

PrefixedNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitPrefixedName(this);
	}
};




SparqlParser.PrefixedNameContext = PrefixedNameContext;

SparqlParser.prototype.prefixedName = function() {

    var localctx = new PrefixedNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 136, SparqlParser.RULE_prefixedName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 624;
        _la = this._input.LA(1);
        if(!(_la===SparqlParser.PNAME_NS || _la===SparqlParser.PNAME_LN)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlankNodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SparqlParser.RULE_blankNode;
    return this;
}

BlankNodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlankNodeContext.prototype.constructor = BlankNodeContext;

BlankNodeContext.prototype.BLANK_NODE_LABEL = function() {
    return this.getToken(SparqlParser.BLANK_NODE_LABEL, 0);
};

BlankNodeContext.prototype.ANON = function() {
    return this.getToken(SparqlParser.ANON, 0);
};

BlankNodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.enterBlankNode(this);
	}
};

BlankNodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SparqlListener ) {
        listener.exitBlankNode(this);
	}
};




SparqlParser.BlankNodeContext = BlankNodeContext;

SparqlParser.prototype.blankNode = function() {

    var localctx = new BlankNodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 138, SparqlParser.RULE_blankNode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 626;
        _la = this._input.LA(1);
        if(!(_la===SparqlParser.BLANK_NODE_LABEL || _la===SparqlParser.ANON)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.SparqlParser = SparqlParser;
