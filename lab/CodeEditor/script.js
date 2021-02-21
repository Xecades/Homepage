function hotkey() {
    var keyCode = window.event.keyCode || window.event.which || window.event.charCode;
    var ctrlKey = window.event.ctrlKey || window.event.metaKey;

    if (keyCode == 83 && ctrlKey)
        window.event.preventDefault();
}

window.onload = () => {
    var editor = ace.edit("code");
    ace.config.set('basePath', '.');
    editor.setTheme("ace/theme/clouds");
    editor.session.setMode("ace/mode/c_cpp");
    editor.setFontSize(19);
    editor.setReadOnly(false);
    // editor.setOption("wrap", "free");
    ace.require("ace/ext/language_tools");
    editor.setShowPrintMargin(false);
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });
    editor.focus();
    editor.gotoLine(7, 4, true);
}

window.onbeforeunload = () => {
    return true;
}

document.onkeydown = hotkey;