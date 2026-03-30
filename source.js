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

async function startPyodide() {

  // load pyodide
  const pyodide = await loadPyodide();
  window.pyodide = pyodide;

  // Set up a custom batched handler to capture print output
  const outputArray = [];
  pyodide.setStdout({
    batched: (message) => {
      outputArray.push(message);
    }
  });

  // install dependencies  
  // Define the callback function to update the progress bar
  const statusMessage = document.getElementById('status-message');
  await pyodide.loadPackage(["pandas", "numpy", "scipy", "networkx"], {
    messageCallback: (message) => {
        console.log("Loading progress:", message);
    },
    errorCallback: (error) => {
        console.error("Loading error:", error);
    }})
  statusMessage.textContent = "Simulation environment loaded.";

  pyodide.runPython(await (await fetch("./pyodide_test.py")).text())
  // The output is now in the JavaScript array
  console.log("Captured output:\n", outputArray.join('\n'));
}
startPyodide();
