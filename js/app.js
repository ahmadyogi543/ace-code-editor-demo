const txtConsole = document.getElementById("txtConsole");
const consoleMessagesList = document.getElementById("consoleMessagesList");
const btnRun = document.getElementById("btnRun");
const btnReset = document.getElementById("btnReset");
const btnClear = document.getElementById("btnClear");
const txtCode = ace.edit("txtCode2");

txtCode.setTheme("ace/theme/gruvbox");
txtCode.getSession().setMode("ace/mode/javascript");
txtCode.setOptions({
  fontFamily: "Jetbrains Mono NL",
  fontSize: "14px",
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: false,
  useWorker: false,
  showPrintMargin: false,
  tabSize: 2,
});

console.init(txtConsole, consoleMessagesList);

const clearConsole = () => {
  while (consoleMessagesList.hasChildNodes()) {
    consoleMessagesList.removeChild(consoleMessagesList.firstChild);
  }
};

btnRun.addEventListener("click", () => {
  clearConsole();

  try {
    const code = txtCode.getValue();

    if (code !== "") new Function(code)();
  } catch (err) {
    console.error(err);
  }

  btnRun.blur();
});

btnReset.addEventListener("click", () => {
  txtCode.setValue("");

  clearConsole();
  btnReset.blur();
});

btnClear.addEventListener("click", () => {
  clearConsole();
});
