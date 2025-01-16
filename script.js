const body = document.getElementById('root');

const welcome = document.createElement('p');
welcome.innerHTML=`
<h1>atukwasa umar</h1>
<p class="paragraph">umar-techs innovative solutions</p>`;
document.addEventListener('DomContentLoaded',() => {

let currentIndex = 0;
function animate(){
    if(currentIndex < h1.length){
        welcome.h1 +=h1.charAt(currentIndex);
        currentIndex ++;
        setTimeout(animate,100);
    }
}
function scroll(){
    const rect = welcome.getBoundingClientRect();
    if(rect.top >= 0 && rect.bottom <= window.innerHeight){
        welcome.h1 = '';
        welcome.style.visibility = 'visible';
        animate();
        window.removeEventListener('scroll',scroll);
    }
}
window.addEventListener('scroll',scroll);
});

const field = document.createElement('fieldset');
const legend = document.createElement('legend');
legend.innerHTML = `
<div class="me">
<div class="p"><p class="about">about me</p>
I am a male Ugandan(by birth), aged 22 and have been a frontend developer
since late 2023 upto now. </div>
<img class="mine" src="um.png"/>
</div>`;
field.appendChild(legend)

const text = document.createElement('div');
text.className ='text';
text.innerHTML = `
<strong>why i am the best developer!</strong> with vast experience in various programming languages
,i am able to creatively make a competitive innovation that suits the clients' needs.by using various and new technologies like;
<em>html,css and javascript ,php ,python</em> and various frameworks to hit the target point`;

const heading = document.createElement('h3');
heading.textContent = 'my projects';
heading.className = 'heading';
field.appendChild(text)
field.appendChild(heading)

const item = document.createElement('div');
item.className = 'item';
const Pname4 = document.createElement('p');
Pname4.innerHTML = `
<p>MY-GUARD</p>
an online security emergency website.
where clients choose guards from<br><br>
<button class="link3" id="link">visit</button>`;
item.appendChild(Pname4)

const item2 = document.createElement('div');
item2.className = 'item';
const Pname3 = document.createElement('p');
Pname3.innerHTML = `
<p>GILTOUSFURNITURE</p>
An online furniture e-commerce<br>
website<br><br>
<button class="link4" id="link">visit</button>`;
item2.appendChild(Pname3)

const item3 = document.createElement('div');
item3.className = 'item';
const Pname2 = document.createElement('p');
Pname2.innerHTML = `
<p>ASMIN</P><br>
<strong>ASMIN</strong>,Arise and Shine Ministries International is a charitable organization offering support to 
vulnerable community individuals in Africa<br><br>
<button class="link2" id="link">visit</button>`;
item3.appendChild(Pname2)

const item4 = document.createElement('div');
item4.className = 'item';
const Pname = document.createElement('p')
Pname.innerHTML = `
<p>CITYSTORE</p><br>
<strong>CITYSTORE</strong>,an e-commerce website that is meant to offer web services in 
addition to its app(citystore),an online shopping and selling platform connecting trading communities 
all over Africa<br><br>
<button class="link" id="link">visit</button>`;
item4.appendChild(Pname)
const box = document.createElement('div');
box.appendChild(item)
box.appendChild(item2)
box.appendChild(item3)
box.appendChild(item4)
box.className = 'box';
field.appendChild(box)

const field1 = document.createElement('fieldset');
field1.className = 'field1';
field1.innerHTML =`
<fieldset class="filed5">
<legend class="legend5">uce</legend>
<h4>L.Mburo Secondary School</h4>
</fieldset>

<fieldset class="filed5">
<legend class="legend5">uace</legend>
<h4>Ntungamo High School
</fieldset>
`;

const legend1 = document.createElement('legend')
legend1.textContent='EDUCATION';
field1.appendChild(legend1)
body.appendChild(field)
document.body.appendChild(field)


const nav = document.createElement('div');
nav.className='nav';
nav . innerHTML = `
umar-techs&copy Allrights reserved.<br>umar-techs@2025<br>
<h4>hire me</h4>
<input type="text" class="msg" placeholder="message" required/> <a class="send">send</a><br>
<div class="call">make phone call</div>`;
body.appendChild(welcome)

document.body.appendChild(field1)
const box2 = document.createElement('div');

const languages = document.createElement('div');
languages.className = 'lang';
languages.innerHTML=`
<div class="lang-box">
<fieldset class="field1"><legend class="legend1">LANGUAGES I USE</legend></fieldset>
<div class="language">
<img src="/html.png"/><div class="measurement"><div class="measure">100%</div></div>
</div>
<div class="language">
<img src="/css.png"/><div class="measurement"><div class="measure">100%</div></div></div>
<div class="language">
<img src="/js.png"/><div class="measurement"><div class="measure">100%</div></div>
</div>
<div class="language">
<img src="/php.png"/><div class="measurement1"><div class="measure">80%</div></div>
</div>
plus various frameworks such as;
<li>react</li>
<li>angular</li>
<li>next js</li>
<li>vue js</li>
</div><br><br><br><br>`;


box2.appendChild(languages)

document.body.appendChild(box2)


document.querySelector('.link4').addEventListener('click',function(){
    const popup = document.createElement('div');
    popup.className = 'pop';
    popup.innerHTML = `
    <h3>warning!</h3>
    <p>you are about to visit giltousfurniture!<br><br><br>
    <button class="continue1">ok</button><button class="cancel1">cancel</button>`;
    
    document.body.appendChild(popup)
    document.querySelector('.cancel1').addEventListener('click',function(){
        popup.innerHTML = `
        <h3 class="h3">visit cancelled !`;
        setTimeout(() => {
            popOff()
        }, 2000);function popOff(){
            document.body.removeChild(popup)
        }
    });
    document.querySelector('.continue1').addEventListener('click',function(){
        const loaderBox = document.createElement('div')
        loaderBox.className = 'loader-box';

        const  loader = document.createElement('div')
        loader.className = 'loader'
        let border = [
            '40px 0 0 0',
            '0 40px 0 0',
            '0 0 40px 0',
            '0 0 0 40px'
        ]
        currentIndex = 0;
        function changeBorder(){
            loader.style.borderRadius = border[currentIndex];
            currentIndex = (currentIndex +1)% border.length;
        }
        setInterval(changeBorder,500);
        loaderBox.appendChild(loader)
        document.body.appendChild(loaderBox)
        setTimeout(() => {
            route()
        }, 4000);function route(){
            window.location.href="https://giltousfurnitureug.netlify.app/";
        }
    });
});

document.querySelector('.link3').addEventListener('click',function(){
    const popup = document.createElement('div');
    popup.className = 'pop';
    popup.innerHTML = `
    <h3>warning!</h3>
    <p>you are about to visit DEGUARD!<br><br><br>
    <button class="continue1">ok</button><button class="cancel1">cancel</button>`;
    
    document.body.appendChild(popup)
    document.querySelector('.cancel1').addEventListener('click',function(){
        popup.innerHTML = `
        <h3 class="h3">visit cancelled !`;
        setTimeout(() => {
            popOff()
        }, 2000);function popOff(){
            document.body.removeChild(popup)
        }
    });
    document.querySelector('.continue1').addEventListener('click',function(){
        const loaderBox = document.createElement('div')
        loaderBox.className = 'loader-box';

        const  loader = document.createElement('div')
        loader.className = 'loader'
        let border = [
            '40px 0 0 0',
            '0 40px 0 0',
            '0 0 40px 0',
            '0 0 0 40px'
        ]
        currentIndex = 0;
        function changeBorder(){
            loader.style.borderRadius = border[currentIndex];
            currentIndex = (currentIndex +1)% border.length;
        }
        setInterval(changeBorder,500);
        loaderBox.appendChild(loader)
        document.body.appendChild(loaderBox)
        setTimeout(() => {
            route()
        }, 4000);function route(){
            window.location.href="https://deguardug.netlify.app/";
        }
    });
});

document.querySelector('.link2').addEventListener('click',function(){
    const popup = document.createElement('div');
    popup.className = 'pop';
    popup.innerHTML = `
    <h3>warning!</h3>
    <p>you are about to visit ASMIN!<br><br><br>
    <button class="continue1">ok</button><button class="cancel1">cancel</button>`;
    
    document.body.appendChild(popup)
    document.querySelector('.cancel1').addEventListener('click',function(){
        popup.innerHTML = `
        <h3 class="h3">visit cancelled !</h3>`;
        setTimeout(() => {
            popOut()
        }, 2000);function popOut(){
            document.body.removeChild(popup)
        }
    });
    
    document.querySelector('.continue1').addEventListener('click',function(){
        const loaderBox = document.createElement('div')
        loaderBox.className = 'loader-box';

        const  loader = document.createElement('div')
        loader.className = 'loader'
        let border = [
            '40px 0 0 0',
            '0 40px 0 0',
            '0 0 40px 0',
            '0 0 0 40px'
        ]
        currentIndex = 0;
        function changeBorder(){
            loader.style.borderRadius = border[currentIndex];
            currentIndex = (currentIndex +1)% border.length;
        }
        setInterval(changeBorder,500);
        loaderBox.appendChild(loader)
        document.body.appendChild(loaderBox)
        setTimeout(() => {
            linkIn()
        }, 4000);function linkIn(){
            window.location.href="https://arise-and-shine.netlify.app/" ;
        }
    })
});

document.querySelector('.link').addEventListener('click',function(){
    const popup = document.createElement('div');
    popup.className = 'pop';
    popup.innerHTML = `
    <h3>warning!</h3>
    <p>you are about to visit citystore!<br><br><br>
    <button class="continue">ok</button><button class="cancel">cancel</button>`;
    
    document.body.appendChild(popup)

    document.querySelector('.continue').addEventListener('click',function(){
        const loaderBox = document.createElement('div')
        loaderBox.className = 'loader-box';

        const  loader = document.createElement('div')
        loader.className = 'loader'
        let border = [
            '40px 0 0 0',
            '0 40px 0 0',
            '0 0 40px 0',
            '0 0 0 40px'
        ]
        currentIndex = 0;
        function changeBorder(){
            loader.style.borderRadius = border[currentIndex];
            currentIndex = (currentIndex +1)% border.length;
        }
        setInterval(changeBorder,500);
        loaderBox.appendChild(loader)
        document.body.appendChild(loaderBox)
        setTimeout(() => {
            linkIn()
        }, 4000);function linkIn(){
            window.location.href="https://citystoreug.netlify.app/" ;
        }
    });

    document.querySelector('.cancel').addEventListener('click',function(){
        popup.innerHTML = `
        <h3 class="h3">visit cancelled !</h3>`;
        setTimeout(() => {
            popOut()
        }, 2000);function popOut(){
            document.body.removeChild(popup)
        }
    });
});

document.body.appendChild(nav)
const msg = document.querySelector('.msg').Value;
const send = document.querySelector('.send').addEventListener('click',function(){
    window.location.href=`https://wa.me/256765003100?text=${msg}`;
});
const call = document.querySelector('.call').addEventListener('click',function(){
    window.location.href="tel:256765003100";
});
const find = document.createElement('button');
find.className = 'find';
find.textContent = 'call me';
find.addEventListener('click',function(){
    window.location.href="tel:256765003100";
});
document.body.appendChild(find)