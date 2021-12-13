const charactersList = document.getElementById('charactersList');
const loadCharacters = async () => {
    try {
        const res = await fetch(' https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <p>${character.name} "Vive en: " ${character.city}</p>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};
function abrir(){
    document.getElementById("charactersList");
}
loadCharacters();
