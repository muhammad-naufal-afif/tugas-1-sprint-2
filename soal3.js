for(a = 1; a < 10; a++) {
    for(b = 1; b < 10; b++) {
        if(a<= b && a<=9-b+1 || a>= b && a>=9-b+1) {
            document.write("0")
        }else {
            document.write("_")
        }
    }
    document.write("</br>");
}