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

<<<<<<< Updated upstream
async function startPyodide() {

  // load pyodide
=======
async function startPyodideEnv() {
>>>>>>> Stashed changes
  const pyodide = await loadPyodide();
  window.pyodide = pyodide;

  // Set up a custom batched handler to capture print output
  const outputArray = [];
  pyodide.setStdout({
    batched: (message) => {
      outputArray.push(message);
    }
  });

<<<<<<< Updated upstream
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
=======
  // load dependencies
  const status_indicator = document.getElementById("load-status");
  await pyodide.loadPackage(["pandas", "numpy", "scipy", "networkx"], (message) => {
        // 'message' often contains strings like "Loading..." or progress data
        console.log("Loading packages...");
    }
  ).then(() => {
      status_indicator.textContent = "Finished loading.";
  });
>>>>>>> Stashed changes

  pyodide.runPython(await (await fetch("./pyodide_test.py")).text())
  // The output is now in the JavaScript array
<<<<<<< Updated upstream
  console.log("Captured output:\n", outputArray.join('\n'));
}
startPyodide();
=======
  console.log("Captured output:", outputArray.join('\n'));
}
// startPyodideEnv(); //disabling while figuring out html/css
>>>>>>> Stashed changes
