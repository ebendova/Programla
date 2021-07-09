//code editor
var doc = document.getElementById('code_result').contentWindow.document;
var html_value;
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    styleActiveLine: true,
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    mode: "htmlmixed",
});
function run() {
    html_value = editor.getValue();
    doc.open();
    doc.write(html_value);
    doc.close();
}


//resizable splitter
const splitter = document.getElementById('drag');
const leftSide = splitter.previousElementSibling;
const rightSide = splitter.nextElementSibling;

let x = 0;
let y = 0;
let leftWidth = 0;

const mouseDownHandler = function(m){
	x = m.clientX;
	y = m.clientY;
	leftWidth = leftSide.getBoundingClientRect().width;
	
	document.addEventListener('mousemove', mouseMoveHandler);
	document.addEventListener('mouseup', mouseUpHandler);
};

splitter.addEventListener('mousedown', mouseDownHandler);

const mouseMoveHandler = function(m){
	const dx = m.clientX - x;
	const dy = m.clientY - y;
	
	const newLeftWidth = (leftWidth + dx) * 100 / splitter.parentNode.getBoundingClientRect().width;
	leftSide.style.width = `${newLeftWidth}%`;
	
	document.body.style.cursor = 'col-resize';
	
	leftSide.style.userSelect = 'none';
	leftSide.style.pointerEvents = 'none';
	
	rightSide.style.userSelect = 'none';
	rightSide.style.pointerEvents = 'none';	
};

const mouseUpHandler = function() {
    splitter.style.removeProperty('cursor');
    document.body.style.removeProperty('cursor');

    leftSide.style.removeProperty('user-select');
    leftSide.style.removeProperty('pointer-events');

    rightSide.style.removeProperty('user-select');
    rightSide.style.removeProperty('pointer-events');

    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

