///object literal///
///Assume that window.name="angular"
window.name="angular";
const obj = {
    name: 'test',
    a:() =>{
        console.log(this.name);
    },
    b: function(){
        console.log(this.name);
    },
    c() {
        this.b.bind(window);
    },
    d :() => console.log(this.name),
    e(){
        this.d.apply(this)   ///arrow function'a call,apply ve bind ile this'i kazandıramıyorum.Class method olarak kullanmayın.
    },
    f(){
        this.b.apply(window,this)
    },
    g(){
        this.b.bind({'name':'test2' }) ()
    },

    h(){
        this.a.bind({'name':'test2' })()    //////hiç bir şekilde this veremiyorsun.
    },
    j : () => this.b()  ///objenin b'si,window'un DEGİL!Arrow function'dan kaynaklı!!!arrow'un this'i window(browser'da çalıştırırsam).Browser dışındaki derleyicilerde(angular'da,react'da window olmadığı için GLOBAL).
}

obj.a();   ////"angular"
obj.b();   ///"test"
obj.c();   ////"angular"
obj.d();   ////"angular"
obj.e();   ////"angular"
obj.f();   /////"test2"
obj.g();   ////  "test2"
obj.h();  /////"angular"
obj.j();  //// 'this b is not an an function'


///2.SORU:
const simple = a => a > 15 ? 15 : a
simple(16);   ///15

const test = () => {}
test(2);  ////undefined.Çünkü boş bir array,bir şey return etmiyor(?)

 const done = x => x
 done(2);  ////2    

 const add = (x,y) => {x+y}
 add(1,2,3);  /// undefined 

 const temp = (a,b) => a > b ? a : b
 temp(2,3) = 3   // maksimum olanı buluyor.

const once = (x,y) => ({y:x})
once(2,3);    //// {y:2}

////3.SORU
///Find out the last status of the  following array after a number of steps.


let test = [1,2,3,4,5];
test.unshift(6);   /// [6,1,2,3,4,5]
test.pop();    /////[6,1,2,3,4] ///son elemanı siler.
test.reverse();  /////[4,3,2,1,6]  ///ters çevirir.
test.push(7);    /////[4,3,2,1,6,7]   ///sonuna ekler.Buradan sonra arraye dokunmayacak çünkü slice ve concat fonksiyonları mutate etmez.(Yani immutable:değişmez.)
test.slice(2);    ///////   [4,3,2,1,6,7] //slice mutate etmez.
test.concat(8);   ///////  [4,3,2,1,6,7]  /////mutate etmez.

///test değişkeninin son hali şu şekilde olur: [4,3,2,1,6,7]