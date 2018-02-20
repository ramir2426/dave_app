PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\x0B\x0C\r ]+/,null,"\t\n\x0B\f\r "],[PR.PR_STRING,/^\"(?:[^\"\\\n\x0C\r]|\\[\s\S])*(?:\"|$)/,null,'"'],[PR.PR_LITERAL,/^[a-z][a-zA-Z0-9_]*/],[PR.PR_LITERAL,/^\'(?:[^\'\\\n\x0C\r]|\\[^&])+\'?/,null,"'"],[PR.PR_LITERAL,/^\?[^ \t\n({]+/,null,"?"],[PR.PR_LITERAL,/^(?:0o[0-7]+|0x[\da-f]+|\d+(?:\.\d+)?(?:e[+\-]?\d+)?)/i,null,"0123456789"]],[[PR.PR_COMMENT,/^%[^\n]*/],[PR.PR_KEYWORD,/^(?:module|attributes|do|let|in|letrec|apply|call|primop|case|of|end|when|fun|try|catch|receive|after|char|integer|float,atom,string,var)\b/],[PR.PR_KEYWORD,/^-[a-z_]+/],[PR.PR_TYPE,/^[A-Z_][a-zA-Z0-9_]*/],[PR.PR_PUNCTUATION,/^[.,;]/]]),["erlang","erl"]);