function toggleClass(elem,className){
    if (elem.className.indexOf(className) !== -1){
      elem.className = elem.className.replace(className,'');
    }
    else{
      elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
    }
  
    return elem;
  }
  
  function toggleDisplay(elem){
    const curDisplayStyle = elem.style.display;			
  
    if (curDisplayStyle === 'none' || curDisplayStyle === ''){
      elem.style.display = 'block';
    }
    else{
      elem.style.display = 'none';
    }
  
  }
  
  function toggleMenuDisplay(e){
    const dropdown = e.currentTarget.parentNode;
    const menu = dropdown.querySelector('.menu');
    const icon = dropdown.querySelector('.fa-angle-right');
  
    toggleClass(menu,'hide');
    toggleClass(icon,'rotate-90');
  }
  
  function handleOptionSelected(e){
    toggleClass(e.target.parentNode, 'hide');			
  
    const id = e.target.id;
    const newValue = e.target.textContent + ' ';
    const titleElem = document.querySelector('.dropdown .title');
    const icon = document.querySelector('.dropdown .title .fa');
  
  
    titleElem.textContent = newValue;
    titleElem.appendChild(icon);
  
    //trigger custom event
    document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
      //setTimeout is used so transition is properly shown
    setTimeout(() => toggleClass(icon,'rotate-90',0));
  }
  
  function handleTitleChange(e){
    const result = document.getElementById('result');
    result.innerHTML = `${e.target.textContent}`;
    educacion.style.display="none";
    proyectos.style.display="none";
    experiencia.style.display="none";
    idioma.style.display="none";
    console.log(e.target.textContent)
    a=e.target.textContent

        console.log(e.target.textContent.trim()==="Proyectos")


    if (e.target.textContent.trim()==="Educación"){
        
        educacion.style.display="flex"
        console.log("entro educacion")
        
    }
    else if(e.target.textContent.trim()=="Proyectos"){
        proyectos.style.display="flex"

    }
    else if(e.target.textContent.trim()=="Experiencia laboral"){
        experiencia.style.display="flex"

    }
    else if(e.target.textContent.trim()=="Idiomas"){
        idioma.style.display="flex"

    }
  

  }
  

  // Inicializar variable global
    const educacion = document.getElementById('contenidoEducacion');
    const proyectos = document.getElementById('contenidoProyectos');
    const experiencia = document.getElementById('contenidoExperiencia');
    const idioma = document.getElementById('contenidoIdioma');
    // Inicializa en oculto
    educacion.style.display="none";
    proyectos.style.display="none";
    experiencia.style.display="none";
    idioma.style.display="none";
  //get elements
  const dropdownTitle = document.querySelector('.dropdown .title');
  const dropdownOptions = document.querySelectorAll('.dropdown .option');
  
  //bind listeners to these elements
  dropdownTitle.addEventListener('click', toggleMenuDisplay);
  
  dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));
  
  document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange);
