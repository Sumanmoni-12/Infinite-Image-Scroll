const  container = document.querySelector(".container");

let starCount = 10;
let imagNum = 1;

const createImage = (index) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    container.appendChild(div);

    img.setAtrribute("src",`https://picsum.photos/300/200?random=${index}`);
    div.appendChild(img);

    gsap.set(div,{scale:0});
    gsap.set(img,{opacity: 1,filter: "contrast(5)"});
   
    gsap.to(div,{
        scrollTrigger:{
            trigger:div,
            start:"top bottom",
            end: "top 50%",
            scrub: true
        },
        scale:1,
        ease: Back.easeOut.config(2)
    });
    gsap.to(img,{
        scrollTrigger:{
            trigger:div,
            start:"top bottom",
            end:"top 50%",
            scrub:true
        },
        opacity: 1,
        filter: "contrast(1)"
    });
};
for(let i = 0; i <  startCount; i++) {
    createImage(imageNum++);
}
scrollTrigger.create({
    trigger:document.body,
    start:"top top",
    end:"bottom bottom",
    onUpdate:(self) =>{
        let progress = self.progress.tofixed(2);
        if(progress >= 0.9 && self.direction === 1){
            createImage(imageNum++);
            ScrollTrigger.refresh();
        }
    }
})