/* global browser */
async function onLoad() {
    try {
        const msg = document.getElementById('msg');
        const body = document.querySelector('body');
        let tmp = await browser.runtime.sendMessage({currentWindow: true, active: true});
        await navigator.clipboard.writeText(tmp);
        msg.innerText = " Copied URL ";
        body.style.backgroundColor = 'lightgreen';
        setTimeout(window.close, 600);
        return;
    }catch(e){
        console.error(e);
    }
    window.close();
}

document.addEventListener('DOMContentLoaded', onLoad);

