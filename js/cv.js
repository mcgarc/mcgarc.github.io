function buildComment(data) {
  var comment = `
                <li>${data}</li>
  `
  return comment;
}

function buildSkills(data) {
  var skillsText = data.join('; ')
  var skills = `
                <li class="resume-skills">${skillsText}</li>
  `
  return skills;
}

function buildPosition(data) {
  var subtitleHTML = ''
  if (data["subtitle"]) {
    subtitleHTML = `
              <div class="subheading mb-1">${data["subtitle"]}</div>
    `
  }
  var positionTop = `
          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-2">
            <div>
              <h3 class="mb-0">${data["title"]}</h3>
              ${subtitleHTML}
              <ul class="list-unstyled mb-0 ml-2">
  `
  var position = [positionTop];
  var comments = data["comments"]
  var commentsLength = comments.length;

  for (var i=0; i<commentsLength; i++ ) {
    position.push( buildComment(comments[i]) )
  }

  if (data["skills"]) {
    position.push( buildSkills(data["skills"]) )
  }

  var dateHTML = `
              <span>${data["start"]}</span>
  `

  if (data["end"]) {
    dateHTML = `
              <span>${data["start"]} - ${data["end"]}</span>
  `
  }

  var positionBottom= `
              </ul>
            </div>
            <div class="resume-date text-md-right">
              ${dateHTML}
            </div>
          </div>
  `
  position.push(positionBottom);
  return position.join('');
}

function buildSection(data, number) {

  var colorFlag = number % 2;
  var colorStyle = ''
  if (colorFlag) {
    colorStyle = 'bg-primary text-white';
  }
  var atomStyle = 'atom_black'
  if (colorFlag) {
    atomStyle = 'atom_white'
  }

  var sectionTop = `
    <!-- Section start -->
    <div class="container-fluid p-0">
    <section class="resume-section ml-0 align-items-center p-lg-5 d-flex align-items-center ${colorStyle}" id="${data["id"]}">
      <div class="container">

        <!-- Section heading -->
        <h2 class="resume-section-heading text-left mb-4 p-3 ">
          <img height=60px src="img/${atomStyle}.svg">
&nbsp ${data["title"]}</h2>

	  			<div class="ml-3">
  `

  var sectionBottom = `
	  		</div>

      </div>
    </section>
    </div>
  `
  var section = [sectionTop]
  var positions = data["positions"]
  var positionsLength = positions.length
  for (var i=0; i < positionsLength; i++) {
    section.push( buildPosition(positions[i]) )
  }
  section.push( sectionBottom )
  return section.join('');
}



$().ready(function(){
  $.getJSON("files/cv.json", function (data) {
    var sections = data["sections"];
    var sectionsLength = sections.length;
    var sectionCount = 0
    var cv = []
    for (var i=0; i < sectionsLength; i++ ) {
      var section = sections[i]
      if (section["publish"]) {
        cv.push(buildSection(section, sectionCount));
        sectionCount++;
      }
    }
    $("#CV").html(cv.join(''));
  });
});
