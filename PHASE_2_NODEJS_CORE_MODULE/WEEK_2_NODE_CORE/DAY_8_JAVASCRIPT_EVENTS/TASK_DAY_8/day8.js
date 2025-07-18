
const textInput = document.getElementById("textInput");

const charCount = document.getElementById("charCount");

textInput.addEventListener("input", () => {
    const length = textInput.value.length;
    charCount.innerText = `characters: ${length}`;

    if (length > 50) {
        charCount.style.color = "red";
    } else {
        charCount.style.color = "green";
    }
});

