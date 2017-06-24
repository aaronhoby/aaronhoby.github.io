window.onload = function() {
  var ucData = [
      {
        "name": "UC Berkeley",
        "city": "Berkeley",
        "state": "CA",
        "avgGpa": 3.86,
        "avgSat": 1440,
        "avgAct": 32,
        "schoolType": "Public",
        "totalApp": 82581,
        "totalAdmit": 14436,
        "scoreDeadline": "31-Dec",
        "subtestDeadline": "31-Dec",
        "chance" : "reach"
      },
      {
        "name": "UC Davis",
        "city": "Davis",
        "state": "CA",
        "avgGpa": 3.99,
        "avgSat": 1290,
        "avgAct": 27,
        "schoolType": "Public",
        "totalApp": 67472,
        "totalAdmit": 28617,
        "scoredeadline": "31-Jan",
        "subjectTestdeadline": "31-Jan",
        "chance" : "reach"
      },
      {
        "name": "UC Irvine",
        "city": "Irvine",
        "state": "CA",
        "avgGpa": 3.97,
        "avgSat": 1250,
        "avgAct": 27,
        "schoolType": "Public",
        "totalApp": 77810,
        "totalAdmit": 31631,
        "scoreDeadline": "31-Dec",
        "subtestDeadline": "31-Dec",
		"chance" : "reach"
      },
      {
        "name": "UC Los Angeles",
        "city": "Los Angeles",
        "state": "CA",
        "avgGpa": 4.33,
        "avgSat": 1370,
        "avgAct": 29,
        "schoolType": "Public",
        "totalApp": 97121,
        "totalAdmit": 17474,
        "scoreDeadline": "15-Jan",
        "subtestDeadline": "15-Jan",
        "chance" : "safety"
      },
      {
        "name": "UC Merced",
        "city": "Merced",
        "state": "CA",
        "avgGpa": 3.56,
        "avgSat": 1090,
        "avgAct": 22,
        "schoolType": "Public",
        "totalApp": 18620,
        "totalAdmit": 11288,
        "scoreDeadline": "15-Jan",
        "subtestDeadline": "15-Jan",
		"chance" : "safety"
      },
      {
        "name": "UC Santa Barbara",
        "city": "Santa Barbara",
        "state": "CA",
        "avgGpa": 4.02,
        "avgSat": 1330,
        "avgAct": 27,
        "schoolType": "Public",
        "totalApp": 77098,
        "totalAdmit": 27580,
        "scoreDeadline": "30-Dec",
        "subtestDeadline": "30-Dec",
        "chance" : "reach"
      },
      {
        "name": "UC San Diego",
        "city": "La Jolla",
        "state": "CA",
        "avgGpa": 4,
        "avgSat": 1350,
        "avgAct": 29,
        "schoolType": "Public",
        "totalApp": 84209,
        "totalAdmit": 30273,
        "scoreDeadline": "15-Jan",
        "subtestDeadline": "15-Jan",
        "chance" : "reach"
      },
      {
        "name": "UC Santa Cruz",
        "city": "Santa Cruz",
        "state": "CA",
        "avgGpa": 3.76,
        "avgSat": 1260,
        "avgAct": 26,
        "schoolType": "Public",
        "totalApp": 47553,
        "totalAdmit": 27806,
        "scoreDeadline": "10-Jan",
        "subtestDeadline": "N/A",
        "chance" : "target"
      },
      {
        "name": "UC Riverside",
        "city": "Riverside",
        "state": "CA",
        "avgGpa": 3.69,
        "avgSat": 1190,
        "avgAct": 23,
        "schoolType": "Public",
        "totalApp": 42629,
        "totalAdmit": 28280,
        "scoreDeadline": "15-Jan",
        "subtestDeadline": "15-Jan",
        "chance" : "safety"
      },
    ];





  var i = 0;
  
  var leftarrow = document.getElementById("arrow-left");
  var rightarrow = document.getElementById("arrow-right");
    
    
  function loadData(i) {
      //PAGE TWO
      	//console log needs to change to inner HTML modification
        college.innerHTML = "College: " + ucData[i].name;
        state.innerHTML = "City/State: " + ucData[i].city + "," + ucData[i].state;
        GPA.innerHTML = "Avg Gpa" + ucData[i].avgGpa;
        SAT.innerHTML = "Avg SAT" + ucData[i].avgSat;
        ACT.innerHTML = "Avg ACT" + ucData[i].avgAct;
        type.innerHTML = "School Type" + ucData[i].schoolType;
        application.innerHTML = "Total Applicants: " + ucData[i].totalApp + "    Total Admitted: " + ucData[i].totalAdmit  + "     Acceptance Rate: " + (ucData[i].totalAdmit/ucData[i].totalApp)*100 + "%";
        deadline.innerHTML = "Score Deadline " + ucData[i].scoreDeadline;
        safeRate.innerHTML = "This college is your: " + ucData[i].chance;

  }
  
    rightarrow.onclick = function() {
      if(i !=  ucData.length){
      	i++;
        loadData(i);
      }
     
  }
  leftarrow.onclick = function() {
      if(i !== 0){
		i--;
        loadData(i);
      }
      
  }
}
  



