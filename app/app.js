class TemplateEngine {
  static compile(template) {
    return (data) => template.replace(/\{\{(\w+)\}\}/g, (match, key) => data[key] || '');
  }
}

class App {
  constructor(element) {
    this.element = element;
    this.interval = null;
    this.dob = null;

    this.load();
    this.element.addEventListener('submit', this.handleSubmit.bind(this));

    if (this.dob) {
      this.renderAgeLoop();
    } else {
      this.renderChoose();
    }
  }

  load() {
    const storedDob = localStorage.getItem('dob');
    if (storedDob) {
      this.dob = new Date(parseInt(storedDob));
    }
  }

  save() {
    if (this.dob) {
      localStorage.setItem('dob', this.dob.getTime().toString());
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const input = this.element.querySelector('input[type="date"]');
    if (!input.valueAsDate) return;

    this.dob = input.valueAsDate;
    this.save();
    this.renderAgeLoop();
  }

  renderChoose() {
    this.element.innerHTML = this.getTemplate('dob')();
  }

  renderAgeLoop() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => this.renderAge(), 100);
  }

  renderAge() {
    const now = new Date();
    const duration = now - this.dob;
    const years = duration / 31556900000;

    const [yearPart, decimalPart] = years.toFixed(9).split('.');

    requestAnimationFrame(() => {
      this.element.innerHTML = this.getTemplate('age')({
        year: yearPart,
        milliseconds: decimalPart
      });
    });
  }

  getTemplate(name) {
    const templateElement = document.getElementById(`${name}-template`);
    return TemplateEngine.compile(templateElement.innerHTML);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.getElementById('app');
  if (appElement) {
    new App(appElement);
  }
});
