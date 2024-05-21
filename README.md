A [Quine](https://en.wikipedia.org/wiki/Quine_(computing)) in JavaScript for Node.js
====================================================================================

`quine.js` contains a Node.js program that emits its own source code to stdout.

Invoking

```bash
node quine.js > out.js && diff -s quine.js out.js
```
should confirm that
```
Files quine.js and out.js are identical
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

* While our quine is a *program* emitting its own source code,
  various JS quines found on the web are *functions* emitting their source
  code.  A test invocation must explicitly call that function.

* Several JS quines on the web make use of the fact that JS allows to retrieve
  the source code of a function.  This can be considered cheating.
  Thus the solution here does not rely on that JS feature.

* It is probably possible to simplify this solution.
  I was happy to find a working solution that's even somewhat readable.