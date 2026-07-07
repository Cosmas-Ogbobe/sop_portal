// Paste Part 3 here

/*===========================================
DANA GROUP SOP PORTAL
Enterprise Dashboard JS
===========================================*/

//==============================
// Sidebar Active Menu
//==============================

const menuLinks = document.querySelectorAll(".sidebar nav a");

menuLinks.forEach(link=>{

    link.addEventListener("click",function(){

        menuLinks.forEach(item=>item.classList.remove("active"));

        this.classList.add("active");

    });

});

//==============================
// Animated Counter
//==============================

const counters=document.querySelectorAll(".card h3");

counters.forEach(counter=>{

    const update=()=>{

        const target=counter.innerText.replace("%","");

        if(isNaN(target)) return;

        let current=0;

        const increment=target/60;

        const timer=setInterval(()=>{

            current+=increment;

            if(current>=target){

                clearInterval(timer);

                if(counter.innerText.includes("%"))

                    counter.innerText=target+"%";

                else

                    counter.innerText=Math.floor(target);

            }

            else{

                if(counter.innerText.includes("%"))

                    counter.innerText=Math.floor(current)+"%";

                else

                    counter.innerText=Math.floor(current);

            }

        },15);

    }

    update();

});

//==============================
// Search Filter
//==============================

const search=document.querySelector(".search input");

search.addEventListener("keyup",function(){

    const keyword=this.value.toLowerCase();

    const rows=document.querySelectorAll("tbody tr");

    rows.forEach(row=>{

        row.style.display=row.innerText.toLowerCase().includes(keyword)

        ?"table-row":"none";

    });

});

//==============================
// Card Hover Animation
//==============================

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});

//==============================
// Panel Animation
//==============================

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade");

        }

    });

});

document.querySelectorAll(".panel").forEach(panel=>{

    observer.observe(panel);

});

//==============================
// Dark Mode
//==============================

const darkButton=document.createElement("button");

darkButton.innerHTML='<i class="fa-solid fa-moon"></i>';

darkButton.className="btn-secondary";

darkButton.style.marginLeft="15px";

document.querySelector(".header-right").appendChild(darkButton);

darkButton.onclick=()=>{

    document.documentElement.classList.toggle("dark");

    if(document.documentElement.classList.contains("dark")){

        darkButton.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    else{

        darkButton.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

};

//==============================
// Current Date
//==============================

const today=new Date();

const footer=document.createElement("div");

footer.className="footer";

footer.innerHTML=`
© ${today.getFullYear()} Dana Group SOP Management Portal
`;

document.querySelector(".content").appendChild(footer);

//==============================
// Notifications
//==============================

let notificationCount=3;

const notification=document.createElement("div");

notification.className="notification";

notification.innerHTML=`
<i class="fa-solid fa-bell"></i>
<span style="
position:absolute;
top:-8px;
right:-8px;
background:#EF4444;
color:white;
font-size:11px;
padding:3px 7px;
border-radius:30px;
">${notificationCount}</span>
`;

notification.style.position="relative";

notification.style.cursor="pointer";

notification.style.fontSize="20px";

notification.style.marginRight="15px";

document.querySelector(".header-right").prepend(notification);

//==============================
// Greeting
//==============================

const hour=new Date().getHours();

let greet="Welcome";

if(hour<12){

    greet="Good Morning";

}

else if(hour<17){

    greet="Good Afternoon";

}

else{

    greet="Good Evening";

}

document.querySelector("header p").innerHTML=

`${greet}, Administrator`;

//==============================
// Sidebar Collapse
//==============================

const logo=document.querySelector(".logo");

logo.style.cursor="pointer";

logo.onclick=()=>{

    document.querySelector(".sidebar").classList.toggle("collapsed");

    document.querySelector(".content").classList.toggle("expanded");

};

//==============================
// Add Collapse CSS
//==============================

const style=document.createElement("style");

style.innerHTML=`

.sidebar.collapsed{

width:90px;

}

.sidebar.collapsed .logo div{

display:none;

}

.sidebar.collapsed nav a{

justify-content:center;

}

.sidebar.collapsed nav a i{

margin-right:0;

}

.sidebar.collapsed nav a{

font-size:0;

}

.sidebar.collapsed nav a i{

font-size:18px;

}

.sidebar.collapsed .menu-title{

display:none;

}

.content.expanded{

margin-left:90px;

}

`;

document.head.appendChild(style);

//==============================
// Table Row Click
//==============================

document.querySelectorAll("tbody tr").forEach(row=>{

    row.style.cursor="pointer";

    row.onclick=()=>{

        alert("Opening SOP Details...");

    }

});

//==============================
// Loading Animation
//==============================

window.onload=()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition=".6s";

        document.body.style.opacity="1";

    },100);

};