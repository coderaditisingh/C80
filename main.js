var display_name = [],name_stud_array=[];
function submit(){
for (var j= 1; j <= 4; j++){
    var name_student=document.getElementById("name_of_the_student_"+j).value;
    name_stud_array.push(name_student);
    console.log(name_student+"with the value of j="+j);
}
console.log("after push array is"+name_stud_array);

var LS=name_stud_array.length;
console.log("the length of the array is"+LS);

for(var i=0;i<LS;i++){
    display_name.push("<h4>NAME -"+name_stud_array[i]+"</h4>");
    console.log(display_name);
  
}
document.getElementById("display_name_with_commas").innerHTML=display_name;
var remove_commas= display_name.join("");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;


}
function sorting(){
    name_stud_array.sort();
    var LS=name_stud_array.length;
console.log("the length of the array is"+LS);
var display_name=[];
for(var i=0;i<LS;i++){
    display_name.push("<h4>NAME -"+name_stud_array[i]+"</h4>");
    console.log(display_name);
  
}
document.getElementById("display_name_with_commas").innerHTML=display_name;
var remove_commas= display_name.join("");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;

}