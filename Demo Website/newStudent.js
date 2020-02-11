var ListOfCourse = [];
window.onload = function() {
  var addButton = document.getElementById("addButton");
  addButton.onclick = function() {
    var newCourse = document.getElementById("enterCourse"); // gets the element...
    ListOfCourse.push(newCourse.value);
    var listText = "";
    for (var i = 0; i < ListOfCourse.length; i++) {
      listText += ListOfCourse[i] + "\n";
    }
    document.getElementById("courslist").innerHTML = listText;
  };
};
