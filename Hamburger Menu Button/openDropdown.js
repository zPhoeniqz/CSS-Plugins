function openDropdown(dropdownId, dropdownClass){      //dropdownId is the id of the dropdown you want to open, dropdownClass is the class of the dropdown you want to open
      const menuBttn = document.querySelector(".menu-bttn");
      const dropdown = dropdownId=="" ? dropdownClass : dropdownId;

      menuButtn.addEventListener("click", () => {
          if(!menuOpen){
              menuBttn.classList.add("open");
              dropdown.classList.add("visible");
              menuOpen = true;
          } else {
              menuBttn.classList.remove("open");
              dropdown.classList.remove("visible");
              menuOpen = false;
          }
      });
}
