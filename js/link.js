function selectboxChange() {
    target = document.getElementById("output");

    selindex = document.form1.Select1.selectedIndex;
    switch (selindex) {
      case 1:
        target.innerHTML = "20000円<br/>";
        break;
      case 2:
        target.innerHTML = "40000円<br/>";
        break;
      case 3:
        target.innerHTML = "60000円<br/>";
        break;

    }
  }