/*

  ++ Custom Console Object ++

  Object custom console ini menimpa object bawaan window.console agar
  dapat menampilkan output ke dalam console editor di web browser.

  Penjelasan beberapa properti pada object :
  - isInvoveByEditor: Mengetahui apakah object console dipanggil oleh editor dalam web browser.
  - render: Menampilkan output pada console editor dalam web browser dengan elemen yang didapat dari init.
  - log: Mirip seperti console.log, menangani ketika fungsi console.log dipanggil.
  - error: Mirip seperti console.error, menangani ketika fungsi console.error dipanggil.

  Dibuat oleh @ahmadyogi543

*/

const console = ((wc) => {
  return {
    prompt: "&#62;",
    messageList: null,
    isInvokeByEditor: true,
    toggleisInvokeByEditor() {
      this.isInvokeByEditor = !this.isInvokeByEditor;
    },
    init(consoleContainer, messageList) {
      this.consoleContainer = consoleContainer;
      this.messageList = messageList;
    },
    render(text) {
      if (this.messageList != null || this.messageList.nodeName !== "UL") {
        const messageListItemContent = document.createElement("pre");
        messageListItemContent.innerHTML = text;

        const messageListItem = document.createElement("li");
        messageListItem.appendChild(messageListItemContent);

        this.messageList.appendChild(messageListItem);

        this.consoleContainer.scrollTop = this.consoleContainer.scrollHeight;
      } else {
        wc.error(new Error("messageList is not a <ul> element or null"));
      }
    },
    log(...args) {
      let text = "";
      args.forEach((arg) => {
        text += ` ${arg}`;
      });

      this.isInvokeByEditor ? this.render(text) : wc.log(text);
    },
    error(err) {
      const text = `${err.name}: ${err.message}`;
      this.isInvokeByEditor ? this.render(text) : wc.error(text);
    },
  };
})(window.console);
