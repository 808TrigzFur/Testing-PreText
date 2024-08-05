var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-Set-Theory",
  "level": "1",
  "url": "sec-Set-Theory.html",
  "type": "Section",
  "number": "1.1",
  "title": "Set Theory",
  "body": " Set Theory    A set is like     The previous is the represent the pythagorean theorem.  "
},
{
  "id": "def-",
  "level": "2",
  "url": "sec-Set-Theory.html#def-",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A set is like    "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.2",
  "title": "Section Title",
  "body": " Section Title    "
},
{
  "id": "ch-Calculus",
  "level": "1",
  "url": "ch-Calculus.html",
  "type": "Chapter",
  "number": "2",
  "title": "Calculus",
  "body": " Calculus   Text before the first section.   "
},
{
  "id": "ch-Linear-Algebra",
  "level": "1",
  "url": "ch-Linear-Algebra.html",
  "type": "Chapter",
  "number": "3",
  "title": "Linear Algebra",
  "body": " Linear Algebra   Text before the first section.   "
},
{
  "id": "ch-Differential-Equations",
  "level": "1",
  "url": "ch-Differential-Equations.html",
  "type": "Chapter",
  "number": "4",
  "title": "Differential Equations",
  "body": " Differential Equations   Text before the first section.   "
},
{
  "id": "ch-Real-Analysis",
  "level": "1",
  "url": "ch-Real-Analysis.html",
  "type": "Chapter",
  "number": "5",
  "title": "Real Analysis",
  "body": " Real Analysis   Text before the first section.   "
},
{
  "id": "ch-Numerical-Analysis",
  "level": "1",
  "url": "ch-Numerical-Analysis.html",
  "type": "Chapter",
  "number": "6",
  "title": "Numerical Analysis",
  "body": " Numerical Analysis   Text before the first section.   "
},
{
  "id": "ch-Discrete-Math",
  "level": "1",
  "url": "ch-Discrete-Math.html",
  "type": "Chapter",
  "number": "7",
  "title": "Discrete Mathematics",
  "body": " Discrete Mathematics   Text before the first section.   "
},
{
  "id": "ch-Abstract-Algebra",
  "level": "1",
  "url": "ch-Abstract-Algebra.html",
  "type": "Chapter",
  "number": "8",
  "title": "Abstract Algebra",
  "body": " Abstract Algebra   Text before the first section.   "
},
{
  "id": "ch-Euclidian-Geometry",
  "level": "1",
  "url": "ch-Euclidian-Geometry.html",
  "type": "Chapter",
  "number": "9",
  "title": "Euclidian Geoemtry",
  "body": " Euclidian Geoemtry   Text before the first section.   "
},
{
  "id": "ch-Topology",
  "level": "1",
  "url": "ch-Topology.html",
  "type": "Chapter",
  "number": "10",
  "title": "Topology",
  "body": " Topology   Text before the first section.   "
},
{
  "id": "ch-Probability",
  "level": "1",
  "url": "ch-Probability.html",
  "type": "Chapter",
  "number": "11",
  "title": "Probability",
  "body": " Probability   Text before the first section.   "
},
{
  "id": "ch-Statistics",
  "level": "1",
  "url": "ch-Statistics.html",
  "type": "Chapter",
  "number": "12",
  "title": "Statistics",
  "body": " Statistics   Text before the first section.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
