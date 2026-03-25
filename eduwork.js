async function getData() {
  try {
    const response = await fetch("cv-data.json");

    if (!response.ok) {
      throw new Error("Datan kunde inte hämtas." + response.statusText);
    }
    const data = await response.json();
    console.log(data.educations);
    console.log(data.employements);
    showEducation(data.educations);
    showEmployments(data.employments);
  } catch (error) {
    console.error(error);
  }
}

getData();

// Show education

function showEducation(edu) {
  const eduListItem = document.querySelector("#cv-education");
  if (!eduListItem) {
    console.error("Elementet hittades tyvärr inte i HTML");
    return;
  }
  edu.forEach((education) => {
    const eduItem = document.createElement("div");
    eduItem.innerHTML = `<h3>${education.school}</h3>
                        <span class="date">${education.period}</span>
                        <p class="org">${education.education}</p>`;
    eduListItem.appendChild(eduItem);
  });
}

function showEmployments(employmenList) {
  const workList = document.querySelector("#cv-work");
  if (!workList) {
    console.error("Elementet hittades tyvärr inte i HTML");
    return;
  }
  employmenList.forEach((w) => {
    const workItem = document.createElement("div");
    workItem.innerHTML = `<h3>${w.description}</h3>
                        <span class="date">${w.period}</span>
                        <p class="org">${w.employer}</p>`;
    workList.appendChild(workItem);
  });
}
