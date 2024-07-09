/*=============== SHOW MENU ===============*/
let navMenu = document.getElementById('nav_menu');
    navClose = document.getElementById('nav_close');
    navToggle = document.getElementById('nav_toggle');
    navLink  = document.querySelectorAll('.nav_link');

navToggle.addEventListener('click',() =>{
    navMenu.classList.add('top');
});

navClose.addEventListener('click', () =>{
    navMenu.classList.remove('top');
})

/*=============== REMOVE MENU MOBILE ===============*/

const linkAction = () =>{
    navMenu.classList.remove('top')
}

navLink.forEach(n => {
    n.addEventListener('click', linkAction)
});


/*=============== ADD SHADOW HEADER ===============*/
let cardImg = document.querySelector('.card_img');
    firtImg = cardImg.querySelector('.card_1').offsetWidth;
    cardes = document.querySelectorAll('#cardes i');

    // let isDragStart = false, prevPageX, prevScrollLeft;


    cardes.forEach( icon => {
        icon.addEventListener('click', () =>{
            cardImg.scrollLeft += icon.id === 'left' ? - firtImg : firtImg;
        });
    });

    let cardBox = document.querySelector('.card_box');
        recipText = document.querySelectorAll('.recip_text i');
        cardText = cardBox.querySelector('.card_text').offsetWidth;

        recipText.forEach(n =>{
        n.addEventListener('click', () =>{
            cardBox.scrollLeft += n.id === 'left_2'  ? - cardText : cardText;
            
        })
    });

// const dragStart = (n) =>{

//     isDragStart = true;

//     prevPageX = n.pageX;

//     prevScrollLeft = cardImg.scrollLeft
// }

// const dragging = (n) =>{

//     if(!isDragStart) return;

//     n.preventDefault();

//     let positionDiff = n.pageX - prevPageX;

//     cardImg.scrollLeft = prevScrollLeft - positionDiff;
// }

// const dragStop = () =>{
//     isDragStart = false;
// }

// cardImg.addEventListener('mousedown', dragStart );
// cardImg.addEventListener('mousemove', dragging );
// cardImg.addEventListener('mouseup', dragStop );




/*=============== SHOW SCROLL UP ===============*/ 

let but = document.querySelector('.but');

window.onscroll = function(){
    if(this.scrollY>= 300){
        but.classList.add('but_r');
    }else{
        but.classList.remove('but_r')
    }
}

but.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
function showForm(jobTitle) {
    document.getElementById('jobTitle').textContent = jobTitle;
    document.getElementById('applicationFormContainer').classList.remove('hidden');
}

function closeForm() {
    document.getElementById('applicationFormContainer').classList.add('hidden');
}

document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // هنا يمكنك إضافة الكود لإرسال البيانات إلى الخادم
    
    document.getElementById('successMessage').classList.remove('hidden');
    document.getElementById('applicationFormContainer').classList.add('hidden');
    document.getElementById('applicationForm').reset();
    
    // إخفاء رسالة النجاح بعد 3 ثوانٍ
    setTimeout(function() {
        document.getElementById('successMessage').classList.add('hidden');
    }, 5000);
});


/*=============== page vadies ===============*/

function searchVideos() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let videoItems = document.getElementsByClassName('video-item');

    for (let i = 0; i < videoItems.length; i++) {
        let title = videoItems[i].getElementsByTagName('h3')[0];
        if (title.innerHTML.toLowerCase().includes(input)) {
            videoItems[i].style.display = "flex";
            videoItems[i].style.animation = "fadeIn 1s ease-in-out";
        } else {
            videoItems[i].style.display = "none";
        }
    }
}

function openModal(videoElement) {
    let modal = document.getElementById("myModal");
    let modalVideo = document.getElementById("modalVideo");
    let source = videoElement.getElementsByTagName('source')[0].src;
    modalVideo.getElementsByTagName('source')[0].src = source;
    modalVideo.load();
    modal.style.display = "block";
    modalVideo.play();
}

function closeModal() {
    let modal = document.getElementById("myModal");
    let modalVideo = document.getElementById("modalVideo");
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modal.style.display = "none";
}

