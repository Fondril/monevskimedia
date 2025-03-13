//// Adding Instagram view on examples section

const exampleSectionElement = document.getElementById("examplesSection");
const exampleSectionObserver = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === true) {
      document
        .getElementById("exampleSectionHeader")
        .classList.add("exampleSectionHeaderShow");
      document
        .getElementById("exampleSectionFooter")
        .classList.add("exampleSectionFooterShow");
    }
    if (ent.isIntersecting === false) {
      document
        .getElementById("exampleSectionHeader")
        .classList.remove("exampleSectionHeaderShow");
      document
        .getElementById("exampleSectionFooter")
        .classList.remove("exampleSectionFooterShow");
    }
  },
  {
    root: null,
    threshold: 0.35,
  }
);
exampleSectionObserver.observe(exampleSectionElement);

//// Expanding and colapsing howItWorksSectionSteps

function expandParagraph(
  ParagraphElement,
  expandButtonElement,
  collapseButtonElement,
  paragraphContainerElement
) {
  // ParagraphElement.classList.remove("howItWorksSectionStepExplanationHidden");
  paragraphContainerElement.classList.add(
    "howItWorksSectionStepExplanationContainerVisible"
  );
  ParagraphElement.classList.add("howItWorksSectionStepExplanationVisible");
  expandButtonElement.classList.add("hidden");
  collapseButtonElement.classList.remove("hidden");
}
function collapseParagraph(
  ParagraphElement,
  expandButtonElement,
  collapseButtonElement,
  paragraphContainerElement
) {
  // ParagraphElement.classList.add("howItWorksSectionStepExplanationHidden");
  paragraphContainerElement.classList.remove(
    "howItWorksSectionStepExplanationContainerVisible"
  );
  ParagraphElement.classList.remove("howItWorksSectionStepExplanationVisible");
  expandButtonElement.classList.remove("hidden");
  collapseButtonElement.classList.add("hidden");
}
