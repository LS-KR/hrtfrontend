window.addEventListener('DOMContentLoaded', showform('https://raw.githubusercontent.com/LS-KR/HRT-price-comparison/main/index.csv'));

function showform(uri) {
    var e = new XMLHttpRequest();
    e.open('get', uri),
        e.addEventListener('load', function () {
            var t = document.createElement('canvas').getContext('2d');
            t.font = '1rem Consolas';
            var n = [],
                o = document.querySelector('div#container');
            e.responseText.split('\n').forEach(function (e, t) {
                (n[t] = []),
                    e.split(',').forEach(function (e) {
                        n[t].push(e);
                    });
            }),
                n.pop();
            var a = [];
            n.forEach(function (e, n) {
                (t.font = 0 === n ? '1rem Consolas bold' : '1rem Consolas'),
                    e.forEach(function (e, n) {
                        a[n] || (a[n] = 0);
                        var o = t.measureText(e).width + 20;
                        o > a[n] && (a[n] = o);
                    });
            }),
                n.forEach(function (e) {
                    var t = document.createElement('div');
                    t.classList.add('row'),
                        e.forEach(function (e, n) {
                            var o = document.createElement('div');
                            o.classList.add('cell'), (o.innerText = e), (o.style.width = a[n] + 'px'), t.appendChild(o);
                        }),
                        o.appendChild(t);
                });
        }),
        e.send();
}

function showmain() {
    var i = document.querySelector('div#container').children.length;
    while(i > 0) {
        document.querySelector('div#container').removeChild(document.body.querySelector('div#container').childNodes[i - 1]);
        i = i - 1
    } 
    showform('https://raw.githubusercontent.com/LS-KR/HRT-price-comparison/main/%E9%AA%97%E5%AD%90%E8%8D%AF%E5%95%86%E8%82%83%E5%8F%8D%E5%90%8D%E5%8D%95.csv');
}

function search() {
    var i = document.querySelector('div#container').children.length;
    while(i > 0) {
        document.querySelector('div#container').removeChild(document.body.querySelector('div#container').childNodes[i - 1]);
        i = i - 1
    } 
    var e = new XMLHttpRequest();
    e.open('get', 'https://raw.githubusercontent.com/LS-KR/HRT-price-comparison/main/index.csv'),
        e.addEventListener('load', function(){
            var t = document.createElement('canvas').getContext('2d');
            t.font = '1rem Consolas';
            var n = [],
                o = document.querySelector('div#container');
            e.responseText.split('\n').forEach(function (e, t) {
                n[t] = [];
                var p = e.indexOf(document.querySelector('input#inp').value);
                if ((t == 0) || (p != -1)) {
                    e.split(',').forEach(function (e) {
                        n[t].push(e);
                    });
                };
            }),
                n.pop();
            var a = [];
            n.forEach(function (e, n) {
                (t.font = 0 === n ? '1rem Consolas bold' : '1rem Consolas'),
                    e.forEach(function (e, n) {
                        a[n] || (a[n] = 0);
                        var o = t.measureText(e).width + 20;
                        o > a[n] && (a[n] = o);
                    });
            }),
                n.forEach(function (e) {
                    if(e != '') {
                        var t = document.createElement('div');
                        t.classList.add('row'),
                            e.forEach(function (e, n) {
                                var o = document.createElement('div');
                                o.classList.add('cell'), (o.innerText = e), (o.style.width = a[n] + 'px'), t.appendChild(o);
                            }),
                            o.appendChild(t);
                    }
                });
        }),
        e.send();
}

document.querySelector('input#inp').addEventListener("keydown", function(e) {
    if (e.key == "Enter")
        search();
});
