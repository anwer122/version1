// document.write('hello')
// function addition (a,b){
//     c=a+b
//     document.write(c,'<br>')
// }

// function add (){
//     var a=10
//     var b=20
//     var c=a+b
//     document.write(c)
//     return c
// }
// e=add()
// add()
// document.write(add())
// document.write(e)

// x=Number(prompt('first number'))
// y=Number(prompt('enter secnd number'))
// addition(x,y)
// a=[1,2,3,4,5]
// for(i in a){
//     document.write(i ,'<br>')
// }
// student={'name':'tp abhinav',
//               'age':2,'place':'mannilkavdu'}
//               console.log(student)
//               for(i in student){
//                 console.log(i)
//               }
a=Number(prompt('Enter the number'))
num1=0
num2=1
document.write(1,'<br>')
for(i=1;i<=a;i++){
    num3=num1+num2
    document.write(num3,'<br>')
    num1=num2
    num2=num3
}
