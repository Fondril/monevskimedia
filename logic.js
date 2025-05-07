//// NAVIGATION LOGIC

//// COLLAPSING NAV ON LINK CLICK
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("nav-toggle").checked = false;
  });
});

//// EXPANDING AND COLLAPSING HOW IT WORKS SECTION STEPS

function expandParagraph(
  stepElementID,
  chevronElementID,
  paragraphContainerElementID,
  stepHeaderElementID
) {
  //// CHANGING FUNCTION FROM EXPAND TO COLLAPSE
  document.getElementById(stepElementID).onclick = function () {
    collapseParagraph(
      stepElementID,
      chevronElementID,
      paragraphContainerElementID,
      stepHeaderElementID
    );
  };

  //// CHANGING STEP HEADER COLOR
  document.getElementById(stepHeaderElementID).style.color = "#5d0404";
  document.getElementById(chevronElementID).style.filter =
    `invert(9%) sepia(83%) saturate(3363%) hue-rotate(351deg)
            brightness(81%) contrast(105%)`;

  //// ROTATING CHEVRON
  document.getElementById(chevronElementID).style.transform = "rotateX(180deg)";

  //// EXPANDING PARAGRAPH
  let paragraphContainerElement = document.getElementById(
    paragraphContainerElementID
  );
  paragraphContainerElement.classList.toggle(
    "how-it-works-section-step-explanation-open"
  );
  if (
    paragraphContainerElement.classList.contains(
      "how-it-works-section-step-explanation-open"
    )
  ) {
    paragraphContainerElement.style.maxHeight =
      paragraphContainerElement.scrollHeight + 30 + "px";
  } else {
    paragraphContainerElement.style.maxHeight = "0px";
  }
}

function collapseParagraph(
  stepElementID,
  chevronElementID,
  paragraphContainerElementID,
  stepHeaderElementID
) {
  //// CHANGING FUNCTION FROM COLLAPSE TO EXPAND
  document.getElementById(stepElementID).onclick = function () {
    expandParagraph(
      stepElementID,
      chevronElementID,
      paragraphContainerElementID,
      stepHeaderElementID
    );
  };

  //// CHANGING STEP HEADER COLOR
  document.getElementById(stepHeaderElementID).style.color = "inherit";
  document.getElementById(chevronElementID).style.filter = "inherit";

  //// ROTATING CHEVRON
  document.getElementById(chevronElementID).style.transform = "rotateX(360deg)";

  //// COLLAPSING PARAGRAPH
  let paragraphContainerElement = document.getElementById(
    paragraphContainerElementID
  );
  paragraphContainerElement.classList.toggle(
    "how-it-works-section-step-explanation-open"
  );
  if (
    paragraphContainerElement.classList.contains(
      "how-it-works-section-step-explanation-open"
    )
  ) {
    paragraphContainerElement.style.maxHeight =
      paragraphContainerElement.scrollHeight + "px";
  } else {
    paragraphContainerElement.style.maxHeight = "0px";
  }
}

//// EXAMPLES SECTION

let currentExampleIndex = 0;
const examplesArrayList = document.querySelectorAll(".example");
const examplesArrayListLength = examplesArrayList.length - 1;
const examplesContainer = document.getElementById(
  "examples-section-examples-container"
);
function updateNewExamplesCarouselTracking() {
  let targetId = "example-circle" + currentExampleIndex;
  let target = document.getElementById(targetId);
  target.classList.add("example-section-slider-navigation-circles-active");
}
function updateOldExamplesCarouselTracking() {
  let targetId = "example-circle" + currentExampleIndex;
  let target = document.getElementById(targetId);
  target.classList.remove("example-section-slider-navigation-circles-active");
}
document
  .getElementById("example-section-slider-right")
  .addEventListener("click", function (e) {
    e.preventDefault(); // stop vertical scroll

    updateOldExamplesCarouselTracking();
    if (currentExampleIndex < examplesArrayListLength) {
      currentExampleIndex++;
    } else {
      currentExampleIndex = 0;
    }

    let targetId = "example" + currentExampleIndex;
    const target = document.getElementById(targetId);

    // Scroll horizontally to the target
    examplesContainer.scrollTo({
      left: target.offsetLeft,
      behavior: "smooth",
    });
    updateNewExamplesCarouselTracking();
  });
document
  .getElementById("example-section-slider-left")
  .addEventListener("click", function (e) {
    e.preventDefault(); // stop vertical scroll

    updateOldExamplesCarouselTracking();

    if (currentExampleIndex == 0) {
      currentExampleIndex = examplesArrayListLength;
    } else {
      currentExampleIndex--;
    }

    let targetId = "example" + currentExampleIndex;
    const target = document.getElementById(targetId);

    // Scroll horizontally to the target
    examplesContainer.scrollTo({
      left: target.offsetLeft,
      behavior: "smooth",
    });
    updateNewExamplesCarouselTracking();
  });

examplesContainer.addEventListener("scroll", () => {
  let closestIndex = 0;
  let closestDistance = Infinity;

  examplesArrayList.forEach((example, index) => {
    const distance = Math.abs(
      example.offsetLeft - examplesContainer.scrollLeft
    );

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  // Only update if index actually changed
  if (closestIndex !== currentExampleIndex) {
    updateOldExamplesCarouselTracking();
    currentExampleIndex = closestIndex;
    updateNewExamplesCarouselTracking();
  }
});

//// TESTIMONIALS CAROUSEL

let currentTestimonialsIndex = 0;
const testimonialsArrayList = document.querySelectorAll(".testimonial");
const testimonialsArrayListLength = testimonialsArrayList.length - 1;
const testimonialsContainer = document.getElementById(
  "testimonials-section-testimonial-container"
);
function updateNewCarouselTracking() {
  let targetId = "testimonial-circle" + currentTestimonialsIndex;
  let target = document.getElementById(targetId);
  target.classList.add("testimonials-section-slider-navigation-circles-active");
}
function updateOldCarouselTracking() {
  let targetId = "testimonial-circle" + currentTestimonialsIndex;
  let target = document.getElementById(targetId);
  target.classList.remove(
    "testimonials-section-slider-navigation-circles-active"
  );
}
document
  .getElementById("testimonials-section-slider-right")
  .addEventListener("click", function (e) {
    e.preventDefault(); // stop vertical scroll

    updateOldCarouselTracking();
    if (currentTestimonialsIndex < testimonialsArrayListLength) {
      currentTestimonialsIndex++;
    } else {
      currentTestimonialsIndex = 0;
    }

    let targetId = "testimonial" + currentTestimonialsIndex;
    const target = document.getElementById(targetId);

    // Scroll horizontally to the target
    testimonialsContainer.scrollTo({
      left: target.offsetLeft,
      behavior: "smooth",
    });
    updateNewCarouselTracking();
  });
document
  .getElementById("testimonials-section-slider-left")
  .addEventListener("click", function (e) {
    e.preventDefault(); // stop vertical scroll

    updateOldCarouselTracking();

    if (currentTestimonialsIndex == 0) {
      currentTestimonialsIndex = testimonialsArrayListLength;
    } else {
      currentTestimonialsIndex--;
    }

    let targetId = "testimonial" + currentTestimonialsIndex;
    const target = document.getElementById(targetId);

    // Scroll horizontally to the target
    testimonialsContainer.scrollTo({
      left: target.offsetLeft,
      behavior: "smooth",
    });
    updateNewCarouselTracking();
  });

testimonialsContainer.addEventListener("scroll", () => {
  let closestIndex = 0;
  let closestDistance = Infinity;

  testimonialsArrayList.forEach((testimonial, index) => {
    const distance = Math.abs(
      testimonial.offsetLeft - testimonialsContainer.scrollLeft
    );

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  // Only update if index actually changed
  if (closestIndex !== currentTestimonialsIndex) {
    updateOldCarouselTracking();
    currentTestimonialsIndex = closestIndex;
    updateNewCarouselTracking();
  }
});

//// UPDATING FOOTER YEAR TO CURRENT

const footerYearElement = document.getElementById("footer-year");
const currentYear = new Date().getFullYear();
footerYearElement.innerText = currentYear;

//// TESTING

// function test() {
//   let object = { a: 1 };
//   console.log(object);
// }
