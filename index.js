module.exports.add = function (a, b) {
  return a + b
}

module.exports.getImageUrl = function(imageName, repositoryName, imageFolder = 'images', branchName = 'main', userName = 'rangequest'){
    return `https://raw.githubusercontent.com/${userName}/${repositoryName}/${branchName}/${imageFolder}/${imageName}`
}