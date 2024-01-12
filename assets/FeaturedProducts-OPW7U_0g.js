import{u as t,r as s,j as i,S as m,P as x,E as h,a as f,b as g,N as w}from"./index-oaQE-qEQ.js";const b=t.div`
    position: relative;
    margin: 0 5% !important;
    @media (max-width: 768px) {
        margin: 0 !important;
    
    }
`,k=t.h1`
    color: #353535 !important;
    text-align: center  !important;
    font-family: Titillium Web  !important;
    font-size: 32px  !important;
    font-style: normal  !important;
    font-weight: 700  !important;
    line-height: normal  !important;
    margin-bottom: 25px  !important;
    @media (max-width: 768px) {
        font-size: 24px  !important;
    
    }
`,A=t.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: flex-start !important;
    height: 460px !important;

    @media (max-width: 768px) {
        height: 560px !important;
    }
    @media (min-width: 1400px) {
        height: 600px !important;
    
    }
`,S=t.img`
    max-width: 100%;
`,C=t.div`
height: 200px;

h3{
    color:#000;
    font-family: Titillium Web;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
p{
    color: #000;
    font-family: Titillium Web;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
`,v=t.span`
    color: #353535 !important;
    font-family: Titillium Web !important;
    font-size: 20px !important;
    font-style: normal !important;
    font-weight: 700 !important;
    line-height: normal !important;
`,j=t.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin: 10px 0 !important;
`,E=t.div`
  width: 27px; 
  height: 27px;
  background-color: ${r=>r.color};
  border: 1px solid ${r=>r.color};
  border-radius: 4px;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    margin: 0;
    width: 27px; 
    height: 27px;
    border-radius: 4px;
    border: 1px solid #000;
  }
`,F=t.button`
    color: #FFF;
    height: 35px;
    text-align: center;
    font-family: Titillium Web;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 4px;
    background: #FAA500;
    border: 1px solid #FAA500;
    cursor: pointer;
    &:hover{
        background: #FFF;
        color: #FAA500;
    }
`,l=t.div`
  &.swiper-button-prev{
    background: none;
    cursor: pointer;
    position: absolute !important;
    left: -1%;
    top: 50%;
    height: 20px;
    width: 32px;
    z-index: 1!important;
  } 
  &.swiper-button-next {
    background: none;
    cursor: pointer;
    position: absolute !important;
    right: -1%;
    top: 50%;
    height: 20px;
    width: 32px;
    z-index: 1!important;
  }
  &.swiper-button-prev:after, &.swiper-button-next:after{
    display: none;
  }

  @media (max-width: 768px) {
    &.swiper-button-prev{
        display: none !important;
  } 
  &.swiper-button-next {
    display: none !important;
  }}
`,n="/assets/faux-suede-mini-skirt-iLeRo1p0.jpg",o="/assets/ruched-rose-print-mini-skirt-1ggjzqEl.jpg",R=[{image:n,alt:"Faux Suede Mini Skirt",price:"R$ 500,00",title:"Faux Suede Mini Skirt",description:"A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",colors:["#1C1A19","#CFC9B0","#D84E4B","#EAE9E5"]},{image:o,alt:"Ruched Rose Print Mini Skirt",price:"R$ 320,00",title:"Ruched Rose Print Mini Skirt",description:"A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",colors:["#DEAC71","#D37164","#6497D3","#3C3B79"]},{image:n,alt:"Faux Suede Mini Skirt Alt Color",price:"R$ 500,00",title:"Faux Suede Mini Skirt",description:"A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",colors:["#DEAC71","#D37164","#6497D3","#3C3B79"]},{image:o,alt:"Ruched Rose Print Mini Skirt Alt Color",price:"R$ 320,00",title:"Ruched Rose Print Mini Skirt",description:"A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",colors:["#1C1A19","#CFC9B0","#D84E4B","#EAE9E5"]},{image:n,alt:"Faux Suede Mini Skirt Alt Color",price:"R$ 500,00",title:"Faux Suede Mini Skirt",description:"A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",colors:["#DEAC71","#D37164","#6497D3","#3C3B79"]},{image:o,alt:"Ruched Rose Print Mini Skirt",price:"R$ 320,00",title:"Ruched Rose Print Mini Skirt",description:"A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",colors:["#DEAC71","#D37164","#6497D3","#3C3B79"]},{image:n,alt:"Faux Suede Mini Skirt Alt Color",price:"R$ 500,00",title:"Faux Suede Mini Skirt",description:"A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",colors:["#DEAC71","#D37164","#6497D3","#3C3B79"]}],y=()=>{const[r,p]=s.useState(window.innerWidth);s.useEffect(()=>{const e=()=>{p(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);const a=r<768;return i.jsxs(b,{children:[i.jsx(k,{children:"As Mais Pedidas"}),i.jsx(m,{modules:[x,h],slidesPerView:a?1.3:5,centeredSlides:!!a,spaceBetween:30,className:"featuredProducts",loop:!1,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},children:R.map((e,d)=>i.jsx(f,{children:i.jsxs(A,{children:[i.jsx(S,{src:e.image,alt:e.alt}),i.jsx(j,{children:e.colors.map((c,u)=>i.jsx(E,{color:c},u))}),i.jsxs(C,{children:[i.jsx(v,{children:e.price}),i.jsx("h3",{children:e.title}),i.jsx("p",{children:e.description})]}),i.jsx(F,{children:"Adicionar"})]})},d))}),i.jsx(l,{className:"swiper-button-prev",children:i.jsx("img",{src:g,alt:"ir para imagem anterior"})}),i.jsx(l,{className:"swiper-button-next",children:i.jsx("img",{src:w,alt:"ir para proxima imagem"})})]})};export{y as default};
