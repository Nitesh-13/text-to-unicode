const input = document.querySelector("#input");
const convertBtn = document.querySelector("#convert");
const copyBtn = document.querySelector("#copy");
const output = document.querySelector("#output");
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const darkstatus = document.querySelector('#dmodeButton')

// Function Top Copy Tet to Clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}


function switchTheme() {
    document.body.classList.toggle("dark-mode");
    if (darkstatus.innerHTML == "Dark Mode Off") darkstatus.innerHTML = "Dark Mode On";
    else darkstatus.innerHTML = "Dark Mode Off";
}

function afterCopy() {
    let encodedText = output.innerHTML;
    copyToClipboard(encodedText);
    copyBtn.innerHTML = " <i class=\"fa fa-check\"></i> Copied!";
}

function startConvert() {
    convertBtn.innerHTML = "<i class=\"fa-solid fa-cog fa-spin\"></i> Convert"
    let text = input.value;
    let unicode = "";
    for (let i = 0; i < text.length; i++) {
        unicode += "\\u" + text.charCodeAt(i).toString(16).padStart(4, "0");
    }
    output.innerHTML = unicode;
}

function convert(event)
{
    if(event.key == "Enter")
    {
        event.preventDefault();
        startConvert();
    }
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'c') {
      afterCopy();
    }
  });

//Btn Event Listeners
convertBtn.addEventListener("click", startConvert);
copyBtn.addEventListener("click", afterCopy);
toggleSwitch.addEventListener('change', switchTheme);
input.addEventListener('keypress', convert);