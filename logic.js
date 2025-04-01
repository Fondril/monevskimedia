//// Adding Instagram view on examples section

const exampleSectionElement = document.getElementById("examples-section");
const exampleSectionObserver = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === true) {
      document
        .getElementById("example-section-header")
        .classList.add("exampleSectionHeaderShow");
      document
        .getElementById("example-section-footer")
        .classList.add("exampleSectionFooterShow");
    }
    if (ent.isIntersecting === false) {
      document
        .getElementById("example-section-header")
        .classList.remove("exampleSectionHeaderShow");
      document
        .getElementById("example-section-footer")
        .classList.remove("exampleSectionFooterShow");
    }
  },
  {
    root: null,
    threshold: 0.35,
  }
);
exampleSectionObserver.observe(exampleSectionElement);

//// EXPANDING AND COLLAPSING HOW IT WORKS SECTION STEPS

function expandParagraph(
  stepElementID,
  chevronElementID,
  paragraphContainerElementID
) {
  //// CHANGING FUNCTION FROM EXPAND TO COLLAPSE
  document.getElementById(stepElementID).onclick = function () {
    collapseParagraph(
      stepElementID,
      chevronElementID,
      paragraphContainerElementID
    );
  };

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
      paragraphContainerElement.scrollHeight + "px";
  } else {
    paragraphContainerElement.style.maxHeight = "0px";
  }
}

function collapseParagraph(
  stepElementID,
  chevronElementID,
  paragraphContainerElementID
) {
  //// CHANGING FUNCTION FROM COLLAPSE TO EXPAND
  document.getElementById(stepElementID).onclick = function () {
    expandParagraph(
      stepElementID,
      chevronElementID,
      paragraphContainerElementID
    );
  };

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
