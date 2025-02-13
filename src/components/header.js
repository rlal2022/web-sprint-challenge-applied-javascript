const Header = (title, date, temp) => {
  const headerWrapper = document.createElement("div");
  const spanOne = document.createElement("span");
  const h1 = document.createElement("h1");
  const spanTwo = document.createElement("span");

  spanOne.textContent = date;
  h1.textContent = title;
  spanTwo.textContent = temp;

  headerWrapper.appendChild(spanOne);
  headerWrapper.appendChild(h1);
  headerWrapper.appendChild(spanTwo);

  headerWrapper.classList.add("header");
  spanOne.classList.add("date");
  spanTwo.classList.add("temp");

  return headerWrapper;

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
};

const headerAppender = (selector) => {
  const test = document.querySelector(selector);
  test.appendChild(Header("Test Heading", "September 2022", "80 Farenheit"));

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
};

export { Header, headerAppender };
