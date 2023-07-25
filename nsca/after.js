var keypad1 = document.createElement("div");
keypad1.innerHTML = "<form target='iframe' method='POST' action='https://script.google.com/macros/s/AKfycbzTC-TNFGtBcBU5PtylW5ybp1nDdyZdU-Ai8g-mmSjKT9-eEiWXey2zmzTtEt8NSM7XwA/exec'><input id = 'input-field' name = 'Email'></input><button id = 'submit-entry' type='submit'>Submit Document</button> </form><button id = 'script-button'>Run Script</button><script async src='https://www.googletagmanager.com/gtag/js?id=G-ZSN1YB1WZQ'></script><iframe name='iframe' style='position: absolute; visibility: hidden'></iframe>";
document.body.prepend(keypad1);

csvValue = ""

function executeScrape() {
  let x = 0
  let highlightedItems = ""
  setTimeout(function () {
    highlightedItems = document.querySelectorAll(".linkedin");
  }, 2000
  )

  setInterval(function () {
    document.getElementById("input-field").value = highlightedItems[x]
    if (document.getElementById("input-field").value != "undefined") {
      document.getElementById("submit-entry").click()
    }
    x = x + 1
    if (x == highlightedItems.length - 1) {
      nextButton = document.querySelectorAll(".mat-icon.notranslate.mat-icon-rtl-mirror.material-icons.mat-ligature-font.mat-icon-no-color")[2]
      nextButton.click()
      executeScrape()
    }
  }, 4000);

}

function setPageFunctions() {
  document.getElementById("script-button").addEventListener("click", executeScrape)
}

setTimeout(setPageFunctions, 1000)