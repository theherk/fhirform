document.addEventListener('DOMContentLoaded',function() {
  const typeChoices = document.querySelectorAll('fieldset[class="typeChoiceSelection"] input');
  Array.from(typeChoices).forEach(choice => {
    choice.onchange=typeChoiceUpdate;
  });
}, false);

function typeChoiceUpdate(event) {
  const sharedParent = event.target.parentElement.parentElement.parentElement;
  console.log(sharedParent);
  const candidates = ['label', 'input', 'select'].map(x => 'fieldset.typeChoiceFields > ' + x); // candidates for hiding
  console.log(candidates);
  const selectees = sharedParent.querySelectorAll(candidates.join(','));
  console.log(selectees);
  Array.from(selectees).forEach(selectee => {
    if (selectee.id == event.target.value || selectee.htmlFor == event.target.value) {
      selectee.classList.remove("hidden");
    } else {
      selectee.classList.add("hidden");
    }
  });
}
