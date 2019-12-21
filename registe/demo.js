var reg1 = /^\w+@\w+\.(com)$|(cn)$/;
var reg2 = /([A-Z])[^\1]*([A-Z])[^\1\2]*[A-Z]/;
var reg3 = /([A-z2345678#&*?])[^\1]*\1/;
var reg4 = /^[A-z2345678#&*?]{9,15}$/;
var show1 = document.getElementById("name");
var show2 = document.getElementById("pw1");
var show3 = document.getElementById("pw2");
var mail = document.getElementsByClassName("check-box")[0];
var code = document.getElementsByClassName("check-box")[1];
var code2 = document.getElementsByClassName("check-box")[2];
function name() {
    var temp = mail.value;
    if (reg1.test(temp))
        show1.innerHTML = "<img src='pic/yes.jpg' style='height:70%;border-radius:50%;'>";
    else
        show1.innerHTML = "<span>*邮箱格式错误</span>";
}
function password() {
    var temp = code.value;
    if (!reg4.test(temp))
        show2.innerHTML = "<span>*密码长度为9~15位数字在2~8之间且必须包含#,&,*,?中的一个</span>";
    else if (reg3.test(temp))
        show2.innerHTML = "<span>*密码不可有重复字符</span>";
    else if (!reg2.test(temp))
        show2.innerHTML = "<span>*密码必须包含三个大写字母</span>";
    else
        show2.innerHTML = "<img src='pic/yes.jpg' style='height:70%;border-radius:50%;'>";

}
function password2() {
    var temp = code2.value;
    if (temp != code.value)
        show3.innerHTML = "<span>*两次密码输入不一致</span>";
    else
        show3.innerHTML = "<img src='pic/yes.jpg' style='height:70%;border-radius:50%;'>";
}
function see1() {
    var temp = document.getElementById("code");
    if (temp.type == "password")
        temp.type = "text";
    else
        temp.type = "password";
}
function see2() {
    var temp = document.getElementById("code2");
    if (temp.type == "password")
        temp.type = "text";
    else
        temp.type = "password";
}
mail.onblur = name;
code.onblur = password;
code2.onblur = password2;


