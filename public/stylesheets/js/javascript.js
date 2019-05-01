let faculty = document.getElementById('selectObj'),
department = document.getElementById('selectObj2'),
level = document.getElementById('selectObj3'),
check = document.getElementById('clickme'),
general = document.getElementById('general');

general.onchange = function(){
    if(general.value == "100"){
        window.location.replace('/gnslevel1');
    }else if(general.value == "200"){
        window.location.replace('/gnslevel2');
    }else if(general.value == "300"){
        window.location.replace('/gnslevel3');
    }
}

faculty.onchange = function(){
    if(faculty.value == "science"){
        department.disabled = false;
        department.options[1].innerHTML = 'Computer Science';
        department.options[2].innerHTML = 'Mathematics';
        department.options[3].innerHTML = 'Physics';
        department.options[4].innerHTML = 'Zoology';
        department.options[5].innerHTML = 'Biochemistry';
        department.options[6].innerHTML = 'Microbiology';
        department.options[7].innerHTML = 'Chemistry';
        department.options[8].innerHTML = 'Fishery';
        department.options[9].innerHTML = 'Botany';

        department.options[1].value = 'csc';
        department.options[2].value = 'mat';
        department.options[3].value = 'phy';
        department.options[4].value = 'zoo';
        department.options[5].value = 'bch';
        department.options[6].value = 'mcb';
        department.options[7].value = 'chm';
        department.options[8].value = 'fis';
        department.options[9].value = 'bot';

        department.options[1].style.display = 'block';
        department.options[2].style.display = 'block';
        department.options[3].style.display = 'block';
        department.options[4].style.display = 'block';
        department.options[5].style.display = 'block';
        department.options[6].style.display = 'block';
        department.options[7].style.display = 'block';
        department.options[8].style.display = 'block';
        department.options[9].style.display = 'block';


    } else  if(faculty.value == "art"){
        department.disabled = false;

        department.options[1].innerHTML = 'History and Relation';
        department.options[2].innerHTML = 'English';
        department.options[3].innerHTML = 'Religion';
        department.options[4].innerHTML = 'Philosophy';
        department.options[5].innerHTML = 'Foreign Language';
        department.options[6].innerHTML = 'African Language';
        department.options[7].innerHTML = 'Theater Arts';
        department.options[8].style.display = 'none';
        department.options[9].style.display = 'none';

                department.options[1].value = '';
                department.options[2].value = '';
                department.options[3].value = '';
                department.options[4].value = '';
                department.options[5].value = '';
                department.options[6].value = '';
                department.options[7].value = '';
                department.options[8].value = '';
                department.options[9].value = '';

                department.options[1].style.display = 'block';
                department.options[2].style.display = 'block';
                department.options[3].style.display = 'block';
                department.options[4].style.display = 'block';
                department.options[5].style.display = 'block';
                department.options[6].style.display = 'block';
                department.options[7].style.display = 'block';


                    //  var child = document.getElementById("seven"); child.parentNode.removeChild(child);
                    // var child2 = document.getElementById("eight"); child2.parentNode.removeChild(child2);
                    // var child3 = document.getElementById("nine"); child3.parentNode.removeChild(child3);

    }else if(faculty.value == "education"){
        department.disabled = false;
        department.options[1].innerHTML = 'Education Mgt';
        department.options[2].innerHTML = 'Science & Tech Edu';
        department.options[3].innerHTML = 'Language Art & S.S Edu';
        department.options[4].innerHTML = 'P.H.E';
        department.options[5].innerHTML = 'Edu F&S Psychology';
        department.options[6].style.display = 'none';
        department.options[7].style.display = 'none';
        department.options[8].style.display = 'none';
        department.options[9].style.display = 'none';

        department.options[1].value = '';
        department.options[2].value = '';
        department.options[3].value = '';
        department.options[4].value = '';
        department.options[5].value = '';
        department.options[6].value = '';
        department.options[7].value = '';
        department.options[8].value = '';
        department.options[9].value = '';

        department.options[1].style.display = 'block';
        department.options[2].style.display = 'block';
        department.options[3].style.display = 'block';
        department.options[4].style.display = 'block';
        department.options[5].style.display = 'block';
    }
    else if(faculty.value == "law"){
        department.disabled = false;
        department.options[1].innerHTML = 'Islamic Law';
        department.options[2].innerHTML = 'Private & Property Law';
        department.options[3].innerHTML = 'Business Law';
        department.options[4].innerHTML = 'Jurisprudence and Int. Law';
        department.options[5].innerHTML = 'Public Law';
        department.options[6].style.display = 'none';
        department.options[7].style.display = 'none';
        department.options[8].style.display = 'none';
        department.options[9].style.display = 'none';

        department.options[1].value = '';
        department.options[2].value = '';
        department.options[3].value = '';
        department.options[4].value = '';
        department.options[5].value = '';
        department.options[6].value = '';
        department.options[7].value = '';
        department.options[8].value = '';
        department.options[9].value = '';

        department.options[1].style.display = 'block';
        department.options[2].style.display = 'block';
        department.options[3].style.display = 'block';
        department.options[4].style.display = 'block';
        department.options[5].style.display = 'block';
    }
    else if(faculty.value == "fms"){
        department.disabled = false;
        department.options[1].innerHTML = 'Accounting & Finance';
        department.options[2].innerHTML = 'Business Admin & Mgt Tech';
        department.options[3].innerHTML = 'BUSINESS LAW';
        department.options[4].innerHTML = 'Industial R. & Pub. Admin';
        department.options[5].style.display = 'none';
        department.options[6].style.display = 'none';
        department.options[7].style.display = 'none';
        department.options[8].style.display = 'none';
        department.options[9].style.display = 'none';

        department.options[1].value = '';
        department.options[2].value = '';
        department.options[3].value = '';
        department.options[4].value = '';
        department.options[5].value = '';
        department.options[6].value = '';
        department.options[7].value = '';
        department.options[8].value = '';
        department.options[9].value = '';

        department.options[1].style.display = 'block';
        department.options[2].style.display = 'block';
        department.options[3].style.display = 'block';
        department.options[4].style.display = 'block';
    }
    else if(faculty.value == "fss"){
        department.disabled = false;
        department.options[1].innerHTML = 'Economics';
        department.options[2].innerHTML = 'Geography & Planning';
        department.options[3].innerHTML = 'Political Science';
        department.options[4].innerHTML = 'Sociology';
        department.options[5].innerHTML = 'Psychology';
        department.options[6].style.display = 'none';
        department.options[7].style.display = 'none';
        department.options[8].style.display = 'none';
        department.options[9].style.display = 'none';

        department.options[1].value = '';
        department.options[2].value = '';
        department.options[3].value = '';
        department.options[4].value = '';
        department.options[5].value = '';
        department.options[6].value = '';
        department.options[7].value = '';
        department.options[8].value = '';
        department.options[9].value = '';

        department.options[1].style.display = 'block';
        department.options[2].style.display = 'block';
        department.options[3].style.display = 'block';
        department.options[4].style.display = 'block';
        department.options[5].style.display = 'block';
    }

    else if(faculty.value == "masscom"){
        department.disabled = false;
        department.options[1].innerHTML = 'Public Relation & Advert';
        department.options[2].innerHTML = 'Journalism';
        department.options[3].innerHTML = 'Radio & Television Broadcast';
        department.options[4].innerHTML = 'Photo-Journalism & Cinematography';
        department.options[5].innerHTML = 'Communication Technology';
        department.options[6].style.display = 'none';
        department.options[7].style.display = 'none';
        department.options[8].style.display = 'none';
        department.options[9].style.display = 'none';

        department.options[1].value = '';
        department.options[2].value = '';
        department.options[3].value = '';
        department.options[4].value = '';
        department.options[5].value = '';
        department.options[6].value = '';
        department.options[7].value = '';
        department.options[8].value = '';
        department.options[9].value = '';

         department.options[1].style.display = 'block';
        department.options[2].style.display = 'block';
        department.options[3].style.display = 'block';
        department.options[4].style.display = 'block';
        department.options[5].style.display = 'block';
    }

    else if(faculty.value == "transport"){
        department.disabled = false;
        department.options[1].innerHTML = 'Transport Mgt & Operation';
        department.options[2].innerHTML = 'Transport Planning & Policy';
        department.options[3].innerHTML = 'Transport Tech & Infrastructure';
        department.options[4].style.display = 'none';
        department.options[5].style.display = 'none';
        department.options[6].style.display = 'none';
        department.options[7].style.display = 'none';
        department.options[8].style.display = 'none';
        department.options[9].style.display = 'none';

        department.options[1].value = '';
        department.options[2].value = '';
        department.options[3].value = '';
        department.options[4].value = '';
        department.options[5].value = '';
        department.options[6].value = '';
        department.options[7].value = '';
        department.options[8].value = '';
        department.options[9].value = '';

         department.options[1].style.display = 'block';
        department.options[2].style.display = 'block';
        department.options[3].style.display = 'block';
    }



    else{
        department.disabled = true;
        check.disabled = true;
    }
}
        department.onchange = function(){
            if(department.value != "dept"){
                    level.disabled = false;
            }else{
                  check.disabled = true;
                level.disabled = true;
            }
        }

        level.onchange = function(){
                if(level.value != "level"){
                    // ======================================= computer science =============================================
                        if(faculty.value == "science" && department.value == "csc" && level.value == "100"){
                            check.disabled = false;
                            check.onclick = function(){
                                window.location.replace('/csclevel1');
                            }
                        } else if(faculty.value == "science" && department.value == "csc" && level.value == "200"){
                            check.disabled = false;
                            check.onclick = function(){
                                window.location.replace('/csclevel2');
                            }
                        } else if(faculty.value == "science" && department.value == "csc" && level.value == "300"){
                            check.disabled = false;
                            check.onclick = function(){
                                window.location.replace('/csclevel3');
                            }
                        } else if(faculty.value == "science" && department.value == "csc" && level.value == "400"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/csclevel4');
                            }
                        } else if(faculty.value == "science" && department.value == "csc" && level.value == "500"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/csclevel5');
                            }
                        }
                         // ======================================= Maths science =============================================
                         if(faculty.value == "science" && department.value == "mat" && level.value == "100"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/matlevel1');
                            }
                        } else if(faculty.value == "science" && department.value == "mat" && level.value == "200"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/matlevel2');
                            }
                        } else if(faculty.value == "science" && department.value == "mat" && level.value == "300"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/matlevel3');
                            }
                        } else if(faculty.value == "science" && department.value == "mat" && level.value == "400"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/matlevel4');
                            }
                        } else if(faculty.value == "science" && department.value == "mat" && level.value == "500"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/matlevel5');
                            }
                        }
                        // ======================================= Zoology science =============================================
                        if(faculty.value == "science" && department.value == "zoo" && level.value == "100"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/zoolevel1');
                            }
                        } else if(faculty.value == "science" && department.value == "zoo" && level.value == "200"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/zoolevel2');
                            }
                        } else if(faculty.value == "science" && department.value == "zoo" && level.value == "300"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/zoolevel3');
                            }
                        } else if(faculty.value == "science" && department.value == "zoo" && level.value == "400"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/zoolevel4');
                            }
                        } else if(faculty.value == "science" && department.value == "zoo" && level.value == "500"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/zoolevel5');
                            }
                        }
                        // ======================================= Fishery science =============================================
                        if(faculty.value == "science" && department.value == "fis" && level.value == "100"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/fislevel1');
                            }
                        } else if(faculty.value == "science" && department.value == "fis" && level.value == "200"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/fislevel2');
                            }
                        } else if(faculty.value == "science" && department.value == "fis" && level.value == "300"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/fislevel3');
                            }
                        } else if(faculty.value == "science" && department.value == "fis" && level.value == "400"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/fislevel4');
                            }
                        } else if(faculty.value == "science" && department.value == "fis" && level.value == "500"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/fislevel5');
                            }
                        }
                        // ======================================= Biochemistry science =============================================
                        if(faculty.value == "science" && department.value == "bch" && level.value == "100"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/bchlevel1');
                            }
                        } else if(faculty.value == "science" && department.value == "bch" && level.value == "200"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/bchlevel2');
                            }
                        } else if(faculty.value == "science" && department.value == "bch" && level.value == "300"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/bchlevel3');
                            }
                        } else if(faculty.value == "science" && department.value == "bch" && level.value == "400"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/bchlevel4');
                            }
                        } else if(faculty.value == "science" && department.value == "bch" && level.value == "500"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/bchlevel5');
                            }
                        }
                        // ======================================= Microbiology science =============================================
                        if(faculty.value == "science" && department.value == "mcb" && level.value == "100"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/mcblevel1');
                            }
                        } else if(faculty.value == "science" && department.value == "mcb" && level.value == "200"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/mcblevel2');
                            }
                        } else if(faculty.value == "science" && department.value == "mcb" && level.value == "300"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/mcblevel3');
                            }
                        } else if(faculty.value == "science" && department.value == "mcb" && level.value == "400"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/mcblevel4');
                            }
                        } else if(faculty.value == "science" && department.value == "mcb" && level.value == "500"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/mcblevel5');
                            }
                        }
                        // ======================================= Chemistry science =============================================
                        if(faculty.value == "science" && department.value == "chm" && level.value == "100"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/chmlevel1');
                            }
                        } else if(faculty.value == "science" && department.value == "chm" && level.value == "200"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/chmlevel2');
                            }
                        } else if(faculty.value == "science" && department.value == "chm" && level.value == "300"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/chmlevel3');
                            }
                        } else if(faculty.value == "science" && department.value == "chm" && level.value == "400"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/chmlevel4');
                            }
                        } else if(faculty.value == "science" && department.value == "chm" && level.value == "500"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/chmlevel5');
                            }
                        }
                        // ======================================= Botany science =============================================
                        if(faculty.value == "science" && department.value == "bot" && level.value == "100"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/botlevel1');
                            }
                        } else if(faculty.value == "science" && department.value == "bot" && level.value == "200"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/botlevel2');
                            }
                        } else if(faculty.value == "science" && department.value == "bot" && level.value == "300"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/botlevel3');
                            }
                        } else if(faculty.value == "science" && department.value == "bot" && level.value == "400"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/botlevel4');
                            }
                        } else if(faculty.value == "science" && department.value == "bot" && level.value == "500"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/botlevel5');
                            }
                        }
                        // ======================================= Physics science =============================================
                        if(faculty.value == "science" && department.value == "phy" && level.value == "100"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/phylevel1');
                            }
                        } else if(faculty.value == "science" && department.value == "phy" && level.value == "200"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/phylevel2');
                            }
                        } else if(faculty.value == "science" && department.value == "phy" && level.value == "300"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/phylevel3');
                            }
                        } else if(faculty.value == "science" && department.value == "phy" && level.value == "400"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/phylevel4');
                            }
                        } else if(faculty.value == "science" && department.value == "phy" && level.value == "500"){
                            check.disabled = true;
                            check.onclick = function(){
                                window.location.replace('/phylevel5');
                            }
                        }



                    }
                else{
                    check.disabled = true;
                }
        }
