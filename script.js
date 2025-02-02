function detectCharacter() {
  const characterInput = document.getElementById("characterInput").value;
  const result = document.getElementById("result");


  if (isASCII(characterInput)) {
    return result.innerHTML = "The character is a ASCII character";
  } else {
    return result.innerHTML = "The character is a Unicode character"
  }
}

function isASCII(character) {
  return character.charCodeAt(0) <= 127;
}
