# AAAIE-ESLINTRC

Linter for common practice, syntax, spacing, etc

### Repository For Common Files

This is a place where we can reference/use common files to keep our codebase consistent.  For example 
I added the .eslintrc file here so that everyone can copy it into their project and use it.  With this
file though you also want to make sure you install the packages.

### Installation

```
$ npm i -g git://github.com/aaa-ncnu-ie/aaaie-eslintrc.git
```

### Atom

Look for the package `linter-eslint` and `tabs-to-spaces`.  The `tabs-to-spaces` is pretty legit.  When
you save a file it converts the tabs to spaces.  Simple setup.  

### Command Line Usage

$  init-aaaie-eslint --help

  Usage: index [options] <includeReac>

  Options:

    -h, --help         output usage information
    -r, --react        Include ReactJS rules
    -d, --dest [dest]  Destination of the created aaaie eslint file
