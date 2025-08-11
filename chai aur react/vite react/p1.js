function customrender(reactelement,container){
    const dom=document.createElement(reactelement.type)
    // always write html in innerHTML in capital
    dom.innerHTML=reactelement.children
    // *****for basic or learning but not in proper way right better code
    /*dom.setAttribute('href',reactelement.props.href)
    dom.setAttribute('target',reactelement.props.target)*/
    for(const prop in reactelement.props){
        dom.setAttribute(prop,reactelement.props[prop])
    }
    container.appendChild(dom)
}

const reactelement={
    type:'a',
    props:{
        href:'https://www.youtube.com/',
        target:'_blank'
    },
    children:'click to open youtube'
}

const maincontainer=document.querySelector("#root")
customrender(reactelement,maincontainer)