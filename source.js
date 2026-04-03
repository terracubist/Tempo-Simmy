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
  if (tabName === "Simulation Settings") {
    document.getElementById(tabName).style.display = "flex";
  } else {
    document.getElementById(tabName).style.display = "block";
  }
  evt.currentTarget.className += " active";
}

async function startPyodideEnv() {

  const pyodide = await loadPyodide();
  window.pyodide = pyodide;

  // Set up a custom batched handler to capture print output
  const outputArray = [];
  pyodide.setStdout({
    batched: (message) => {
      outputArray.push(message);
    }
  });

  // load dependencies
  const status_indicator = document.getElementById("load-status");
  await pyodide.loadPackage(["pandas", "numpy", "scipy", "networkx"], (message) => {
        // 'message' often contains strings like "Loading..." or progress data
        console.log("Loading packages...");
    }
  ).then(() => {
      status_indicator.textContent = "Finished loading.";
  });

  pyodide.runPython(await (await fetch("./pyodide_test.py")).text())

}

document.getElementById("defaultOpen").click();
// startPyodideEnv(); //disabling while figuring out html/css
// console.log("Captured output:", outputArray.join('\n'));
