const correctAns = ['A', 'B', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const percent = document.querySelector('.score')

form.addEventListener('submit', e => {
  e.preventDefault();
  let score = 0;
  const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  userAns.forEach((ans, index) => {
    if (correctAns[index] === ans) {
      score += 25;
    }
  });

  scrollTo(0, 0);
  result.classList.remove('d-none');

  let output = 0;
  const timer = setInterval(() => {
    percent.innerText = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

});