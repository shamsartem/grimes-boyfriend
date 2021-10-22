var dictionary = [
  ['И́лон Рив Маск', 'не парень Граймс'],
  ['Илон Рив Маск', 'не парень Граймс'],
  ['Маск, Илон', 'не парень Граймс'],
  ['Элон Рив Маск', 'не парень Граймс'],
  ['Илона Маска', 'не парня Граймс'],
  ['Илону Маску', 'не парню Граймс'],
  ['Илоном Маском', 'не парнем Граймс'],
  ['Илоне Маске', 'не парне Граймс'],
  ['Илон Маск', 'не парень Граймс'],
  ['Элона Маска', 'не парня Граймс'],
  ['Элону Маску', 'не парню Граймс'],
  ['Элоном Маском', 'не парнем Граймс'],
  ['Элоне Маске', 'не парне Граймс'],
  ['Элон Маск', 'не парень Граймс'],
  ['Маска', 'не парня Граймс'],
  ['Маску', 'не парню Граймс'],
  ['Маском', 'не парнем Граймс'],
  ['Маске', 'не парне Граймс'],
  ['Маск', 'не парень Граймс'],
  ['Илона', 'не парня Граймс'],
  ['Илону', 'не парню Граймс'],
  ['Илоном', 'не парнем Граймс'],
  ['Илоне', 'не парне Граймс'],
  ['Илон', 'не парень Граймс'],
  ['Элона', 'не парня Граймс'],
  ['Элону', 'не парню Граймс'],
  ['Элоном', 'не парнем Граймс'],
  ['Элоне', 'не парне Граймс'],
  ['Элон', 'не парень Граймс'],
  ['Elon Reeve Musk', "not Grimes's boyfriend"],
  ['Musk, Elon', "not Grimes's boyfriend"],
  ['Elon Musk', "not Grimes's boyfriend"],
  ['Elon', "not Grimes's boyfriend"],
  ['Musk', "not Grimes's boyfriend"],
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
