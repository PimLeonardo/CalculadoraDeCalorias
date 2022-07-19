const form = document.querySelector('#form')

form.addEventListener('submit', formSubmit);

function formSubmit (event) {
    event.preventDefault();

    const activityLevel = getSelectedValue('activity_level');
    const gender = getSelectedValue('gender');
    const weight = getNumberValue('weight');
    const height = getNumberValue('height');
    const age = getNumberValue('age');

    const mb = Math.round(gender === 'male' ? (66 * (13.7 * weight) + (5 * height) - (6.8 * age)) : (655 * (9.6 * weight) + (1.8 * height) - (4.7 * age)));

    const current = Math.round(mb * Number(activityLevel));

    const loseWeight = current - 450;
    const gainWeight = current + 450;

    const layout = ` 
        <h2>RESULTADO</h2>

        <div class="result-content">
            <ul>
                <li>
                    Metabolismo basal é de
                    <strong>${mb} cal</strong>.
                </li>
                <li>
                    Precisa consumir em média de
                    <strong>${current} cal</strong>
                    para manter o seu peso.
                </li>
                <li>
                    Precisa consumir em média de
                    <strong>${loseWeight} cal</strong>
                    para perder peso.
                </li>
                <li>
                    Precisa consumir em média de
                    <strong>${gainWeight} cal</strong>
                    para ganhar peso.
                </li>
            </ul>
        </div>
    `

    const result = document.getElementById('result');

    result.innerHTML = layout;
}

function getSelectedValue(id) {
    const select = document.getElementById(id);
    return select.options[select.selectedIndex].value;
}
  
function getNumberValue(id) {
    return Number(document.getElementById(id).value);
}