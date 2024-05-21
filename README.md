A [Quine](https://en.wikipedia.org/wiki/Quine_(computing)) in JavaScript for Node.js
====================================================================================

`quine.js` contains a Node.js program that emits its own source code to stdout.

Invoking

```bash
node quine.js | diff -s quine.js -
```
should confirm that
```
Files quine.js and - are identical
```

Notes:

* If you are in a Git Bash on Windows, call "`node.exe`" instead of "`node`"
  since the latter is typically aliased to "`winpty node`", which is good for
  interactive use but not for output redirection.

* The program emits LF line breaks.
  So the file `quine.js` itself should also use LF rather than CRLF.
  I hope I got the Git config right to ensure this also on Windows.
  Otherwise (or if your editor introduces CRLFs)
  either convert `quine.js` to LF endings (e.g. with `dos2unix quine.js`)
  or use the `diff` option `--strip-trailing-cr` to ignore these differences
  in the line break representation.

* Various JS quines found on the web are *expressions* or *functions*
  emitting or evaluating to their source code.
  A test invocation must explicitly call that expression or function.
  In contrast, our quine is a *program* emitting its own source code.

* Our requirement above (the program emits its own source code)
  is trivially fulfilled by the empty JS program, which emits nothing.
  Here I was looking for a non-trivial solution.

* Many JS quines on the web make use of the fact that JS allows to retrieve
  the source code of a function.  This may be considered cheating.
  Thus the solution here does not rely on `Function.prototype.toString`.

* I was happy to find a working solution that's even somewhat readable,
  but more simplifications might be possible.
  To just make the program shorter,
  one might remove semicolons and some whitespace
  and one could use a single-letter identifier instead of `bq`.
  But can you find a more substantial simplification?
