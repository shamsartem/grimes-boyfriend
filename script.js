var dictionary = [
  ['И́лон Рив Маск', 'парень Граймс'],
  ['Илон Рив Маск', 'парень Граймс'],
  ['Маск, Илон', 'парень Граймс'],
  ['Элон Рив Маск', 'парень Граймс'],
  ['Илона Маска', 'парня Граймс'],
  ['Илону Маску', 'парню Граймс'],
  ['Илоном Маском', 'парнем Граймс'],
  ['Илоне Маске', 'парне Граймс'],
  ['Илон Маск', 'парень Граймс'],
  ['Элона Маска', 'парня Граймс'],
  ['Элону Маску', 'парню Граймс'],
  ['Элоном Маском', 'парнем Граймс'],
  ['Элоне Маске', 'парне Граймс'],
  ['Элон Маск', 'парень Граймс'],
  ['Маска', 'парня Граймс'],
  ['Маску', 'парню Граймс'],
  ['Маском', 'парнем Граймс'],
  ['Маске', 'парне Граймс'],
  ['Маск', 'парень Граймс'],
  ['Илона', 'парня Граймс'],
  ['Илону', 'парню Граймс'],
  ['Илоном', 'парнем Граймс'],
  ['Илоне', 'парне Граймс'],
  ['Илон', 'парень Граймс'],
  ['Элона', 'парня Граймс'],
  ['Элону', 'парню Граймс'],
  ['Элоном', 'парнем Граймс'],
  ['Элоне', 'парне Граймс'],
  ['Элон', 'парень Граймс'],
  ['Elon Reeve Musk', "Grimes's boyfriend"],
  ['Musk, Elon', "Grimes's boyfriend"],
  ['Elon Musk', "Grimes's boyfriend"],
  ['Elon', "Grimes's boyfriend"],
  ['Musk', "Grimes's boyfriend"],
]

var latinAndCyrillicAlphabet = '[A-Za-zА-Яа-я]'
var regexpStart = '(^|(?<!' + latinAndCyrillicAlphabet + '))'
var regexpEnd = '($|(?!' + latinAndCyrillicAlphabet + '))'

function replace() {
  var allNodes = textNodesUnder(document.body)
  for (var i = 0; i < allNodes.length; i++) {
    if (
      allNodes[i].parentNode &&
      allNodes[i].parentNode.parentNode &&
      allNodes[i].parentNode.tagName == 'EM'
    ) {
      allNodes[i].parentNode.parentNode.innerHTML =
        allNodes[i].parentNode.parentNode.innerText
    }
  }

  allNodes = textNodesUnder(document.body)

  for (var i = 0; i < allNodes.length; i++) {
    for (let j = 0; j < dictionary.length; j++) {
      var ElonRegexp = new RegExp(
        regexpStart + dictionary[j][0] + regexpEnd,
        'gu',
      )
      if (allNodes[i].nodeValue.match(ElonRegexp)) {
        allNodes[i].nodeValue = allNodes[i].nodeValue.replace(
          ElonRegexp,
          '$1' + dictionary[j][1] + '$2',
        )
      }
    }
  }
}

replace()

setInterval(replace, 1000)

function textNodesUnder(el) {
  var n,
    a = [],
    walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false)
  while ((n = walk.nextNode())) a.push(n)
  return a
}
