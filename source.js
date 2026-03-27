function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

(async () => {
  const pyodide = await loadPyodide();

  // Set up a custom batched handler to capture print output
  const outputArray = [];
  pyodide.setStdout({
    batched: (message) => {
      outputArray.push(message);
    }
  });

  // install dependencies
  await pyodide.loadPackage("pandas")
  await pyodide.loadPackage("numpy")

  pyodide.runPython(await (await fetch("./pyodide_test.py")).text())

  // The output is now in the JavaScript array
  console.log("Captured output:", outputArray.join('\\n'));
})();
