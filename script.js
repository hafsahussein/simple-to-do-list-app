function addTask() {
    var table =document.getElementsByTagName("table")[0];
    var task=document.getElementById("text").value;
    
    for(var i=1;i<table.rows.length;i++) {
        var existence=[]; existence[i]=table.rows[i].cells[0].innerHTML;  
          if(task==existence[i])
          var exists=true;
    }
    if(exists)
            alert("task already exists!");
        else if(task.trim()=="") 
            alert("fill the task please!");

    else {
    var row=table.insertRow();
    var cell1=row.insertCell();
    var cell2=row.insertCell();
    cell1.innerHTML=task;
    cell2.innerHTML="X";
    document.getElementById("text").value="";    
        }
    for(var i=1;i<table.rows.length;i++) {
        table.rows[i].cells[1].onclick=function() {
            var index=this.parentElement.rowIndex;
            table.deleteRow(index);
        }
    }
    }
        
    
