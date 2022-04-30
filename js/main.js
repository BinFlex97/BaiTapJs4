// Bài 1 :
var num01 = document.getElementById('so1')
var num02 = document.getElementById('so2')
var num03 = document.getElementById('so3')
var Kq01 = document.getElementById('kq1')

function sapXepTang() {
    var num1 = num01.value;
    var num2 = num02.value;
    var num3 = num03.value;
    if (num1 <= num2 && num1 <= num3) {
        if (num2 <= num3) {
            Kq01.innerHTML = num1 + " -> " + num2 + " -> " + num3
        } else {
            Kq01.innerHTML = num1 + " -> " + num3 + " -> " + num2
        }

    } else if (num2 <= num1 && num2 <= num3) {
        if (num1 <= num3) {
            Kq01.innerHTML = num2 + " -> " + num1 + " -> " + num3
        } else {
            Kq01.innerHTML = num2 + " -> " + num3 + " -> " + num1
        }
    } else if (num3 <= num2 && num3 <= num1) {
        if (num2 <= num1) {
            Kq01.innerHTML = num3 + " -> " + num2 + " -> " + num1
        } else {
            Kq01.innerHTML = num3 + " -> " + num1 + " -> " + num2
        }
    }
}

// Bài 2
var aiDung = document.getElementById('aiSuDung');
var Kq02 = document.getElementById('kq2')
function nhanBietAi() {
    if (aiDung.value == "B") {
        Kq02.innerHTML = "Chào Bố !"
    } else if (aiDung.value == "M") {
        Kq02.innerHTML = "Chào Mẹ !"
    } else if (aiDung.value == "A") {
        Kq02.innerHTML = "Chào anh trai !"
    } else if (aiDung.value == "E") {
        Kq02.innerHTML = "Chào em gái !"
    } else {
        Kq02.innerHTML = "Nhập sai"
    }

}
//Bài 3
var num001 = document.getElementById('so1_3')
var num002 = document.getElementById('so2_3')
var num003 = document.getElementById('so3_3')
var Kq03 = document.getElementById('kq3')
function demSo() {
    var C = 0;
    var L = 0;
    if (num001.value != 0) {
        if (num001.value % 2 == 0) {
            C++;
        } else {
            L++;
        }
    }
    if (num002.value != 0) {
        if (num002.value % 2 == 0) {
            C++;
        } else {
            L++;
        }
    }
    if (num003.value != 0) {
        if (num003.value % 2 == 0) {
            C++;
        } else {
            L++;
        }
    }
    Kq03.innerHTML = "Số Chẵn có : " + C + " số" +
        "<br> Số lẻ có : " + L + " số"
}
// Bài 4
var Canh1 = document.getElementById('canhA')
var Canh2 = document.getElementById('canhB')
var Canh3 = document.getElementById('canhC')
var Kq4 = document.getElementById('kq4')

function xacDinh() {
    var num1 = Canh1.value
    var num2 = Canh2.value
    var num3 = Canh3.value

    var a = num1;
    var b = num2;
    var c = num3;


    // Tìm Cạnh Huyền
    if (num1 <= num2 && num1 <= num3) {
        if (num2 <= num3) {
            a = num1
            b = num2
            c = num3

        } else {
            a = num1
            b = num3
            c = num2
        }

    } else if (num2 <= num1 && num2 <= num3) {
        if (num1 <= num3) {
            a = num2
            b = num1
            c = num3
        } else {
            a = num2
            b = num3
            c = num1
        }
    } else if (num3 <= num2 && num3 <= num1) {
        if (num2 <= num1) {
            a = num3
            b = num2
            c = num1
        } else {
            a = num3
            b = num1
            c = num2
        }
    }

    // Xác Định Tam Giác
    if(a==0 || b==0 || c==0){
        Kq4.innerHTML = "Đây không phải là tam giác"
    }else if (Math.sqrt(parseInt(a * a) + parseInt(b * b)) == c) {
        Kq4.innerHTML = "Đây là Tam Giác Vuông"
    } else if (a == b && a == c) {
        Kq4.innerHTML = "Đây là Tam Giác Đều"
    } else if (a == b || a == c || b == c) {
        Kq4.innerHTML = "Đây là Tam Giác Cân"
    } else {
        Kq4.innerHTML = "Đây là Tam Giác Thường"
    }
}