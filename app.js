const root = document.getElementById("root");

let name = "";

root.innerHTML = `
    <div style="max-width:700px; margin:auto; padding:20px;">
        <h2>Vanilla JavaScript</h2>

        <p>
            Name:
            <input id="nameInput" value="${name}">
        </p>

        <p>
            Preview:
            <span id="preview">${name}</span>
        </p>
    </div>
`;

const input = document.getElementById("nameInput");
const preview = document.getElementById("preview");

input.addEventListener("input", function () {
    name = input.value;
    preview.textContent = name;
});