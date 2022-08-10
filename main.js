class CalendarComponent {
  days = [
    27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7,
  ];

  monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  init(e) {
    this.container = event.target.parentElement;
    this.daysBox = this.container.querySelector(".calendar-box-days");
    this.monthAndYearBox = this.container.querySelector(
      ".calendar-box-month-n-year"
    );
    this.daysBody = this.container.querySelector(".days-body");
    this.input = this.container.querySelector("input");
    this.display = this.container.querySelector(".calendar-input-display");

    this.todayDate = new Date();
    this.currentDay = this.todayDate.getDay();
    this.currentMonth = this.todayDate.getMonth();
    this.currentYear = this.todayDate.getFullYear();

    this.container.focus();

    console.log(this.days);
    this.daysBody.innerHTML = "";
    this.days.forEach((item) => {
      this.daysBody.innerHTML += `<li onclick="window.calendarComponent.chooseDate(event)">${item}</li>`;
    });
  }

  setDate() {
    const currentMonth = this.currentMonth + 1;
    this.input.value = `${this.currentYear}-${
      currentMonth.length == 2
        ? currentMonth
        : "0" + currentMonth
    }-${this.currentDay.length == 2 ? this.currentDay : "0" + this.currentDay}`;

    this.display.innerHTML = `${this.currentDay} - ${this.monthNames[this.currentMonth]} - ${this.currentYear}`;
  }

  chooseDate(e) {
    this.daysBody.querySelectorAll("li").forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    this.currentDay = e.target.innerHTML;
    this.setDate();
  }
}

window.calendarComponent = new CalendarComponent();
