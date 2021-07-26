for(a = 1; a < 10; a++) {
    for(b = 1; b < 10; b++) {
        if(b <= a && b<=9-a+1 || b>= a && a>=9-b+1) {
            document.write("0")
        }else {
            document.write("_")
        }
    }
    document.write("<br>")
}