// JavaScript objects

const aCourse = {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 2,
    sections: [
        {
            sectionNum: 1, 
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Brother Thompson'
        },

        {
            sectionNum: 2, 
            roomNum: 'STC 347', 
            enrolled: 9, 
            days: 'MWF', 
            instructor: 'Brother Warner'
        }
    ],
    enrolled : function(sectionNumber) {
        console.log(this.name);
    }
}

console.log(aCourse.name);

aCourse.enrolled(1);

// event listener when button is pressed

document.querySelector("#enrollStudent").addEventListener("click", (e) => {

// when pressed, find the section num they entered

    let sectionNumber = document.querySelector("#sectionNumber").value.trim();

// increment enrollment of just that section by 1

    aCourse.sections.forEach(section => {
        // is this section the section they want to update?
        if(section.sectionNum == sectionNumber) {
            // increase the enrollment by 1 of just that section
            section.enrolled += 1;
        }
        
        console.log(section.sectionNum);
        console.log(section.enrolled);

    });

// re-render the table with updated date
    renderSections(aCourse.sections);

});

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);
