const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); //evita o refresh com o envio do form
  const age = getNumber("age");
  const weight = getNumber("weight");
  const height = getNumber("height");

  const gender = getSelectedCase("gender");
  const activityLevel = getSelectedCase("activity_level");

  const tmb = Math.round(
      gender === 'female'
      ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)) 
      : (66 + (13.7 * weight) + (5 * height) - (6.8 * age)) 
  )
  const maintenance = Math.round(tmb * Number(activityLevel))
  const gainWeight = maintenance + 450
  const loseWeight = maintenance - 450

  const layout = `
  <ul>
              <li>
                Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
              </li>
              <li>
                Para manter o seu peso você precisa consumir em média
                <strong>${maintenance} calorias</strong>.
              </li>
              <li>
                Para perder peso você precisa consumir em média
                <strong>${loseWeight} calorias</strong>.
              </li>
              <li>
                Para ganhar peso você precisa consumir em média
                <strong>${gainWeight} calorias</strong>.
              </li>
            </ul>
  `
 const result = document.getElementById('result')
 result.innerHTML = layout
});


function getNumber(id) {
  return Number(document.getElementById(id).value);
}

function getSelectedCase(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}
